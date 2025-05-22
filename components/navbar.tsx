"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3">
      <div className="navbar-container max-w-3xl w-full rounded-full">
        <nav
          className={`flex items-center justify-center px-6 py-2 transition-all duration-300 rounded-full ${
            scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-gray-900/70 backdrop-blur-sm"
          } w-full`}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} className={`nav-link ${pathname === link.path ? "active" : ""}`}>
                {link.name}
              </Link>
            ))}
            {/* <div className="ml-4">
              <ThemeToggle />
            </div> */}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center justify-between w-full md:hidden">
            <div className="invisible">
              <ThemeToggle />
            </div>
            <div className="flex items-center space-x-1">
              {isOpen ? (
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white">
                  <X className="h-6 w-6" />
                </Button>
              ) : (
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              )}
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md absolute top-16 left-4 right-4 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="mobile-menu-container rounded-xl w-full h-full">
              <div className="flex flex-col p-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`nav-link ${pathname === link.path ? "active" : ""}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
