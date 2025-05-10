"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1500

    const posArray = new Float32Array(particlesCount * 3)
    const colorArray = new Float32Array(particlesCount * 3)

    // Position and color for each particle
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Positions - spread in a 3D space
      posArray[i] = (Math.random() - 0.5) * 80
      posArray[i + 1] = (Math.random() - 0.5) * 80
      posArray[i + 2] = (Math.random() - 0.5) * 80

      // Colors - purple theme
      const purpleHue = Math.random() * 0.2 + 0.7 // 0.7-0.9 range for purple
      colorArray[i] = purpleHue
      colorArray[i + 1] = 0.1 // Low green for purple
      colorArray[i + 2] = purpleHue // High blue for purple
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3))

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    })

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += 0.0005

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true" />
}
