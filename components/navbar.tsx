"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Briefcase, Code, Mail } from "lucide-react"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Home", path: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", path: "/about", icon: <User className="h-4 w-4" /> },
  { name: "Projects", path: "/projects", icon: <Briefcase className="h-4 w-4" /> },
  { name: "Skills", path: "/skills", icon: <Code className="h-4 w-4" /> },
  { name: "Contact", path: "/contact", icon: <Mail className="h-4 w-4" /> },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center px-4 py-3">
        <div className="navbar-container max-w-3xl w-full rounded-full">
          <nav
            className={`flex items-center justify-center px-6 py-2 transition-all duration-300 rounded-full ${
              scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-gray-900/70 backdrop-blur-sm"
            } w-full`}
          >
            <div className="flex items-center justify-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`nav-link px-3 py-2 rounded-md text-sm font-medium relative ${
                    pathname === link.path
                      ? "text-white"
                      : "text-gray-300 hover:text-purple-300 hover:bg-gray-800/50"
                  }`}
                >
                  {link.name}
                  {pathname === link.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                      layoutId="desktop-underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <header className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 py-2">
        <nav
          className={`navbar-mobile-container flex items-center justify-around w-full max-w-md mx-auto rounded-full transition-all duration-300 py-2 border border-purple-500/20 ${
            scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-gray-900/80 backdrop-blur-sm"
          }`}
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <Link
                href={link.path}
                className={`flex flex-col items-center justify-center py-2 px-3 text-xs font-medium relative ${
                  pathname === link.path
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-300"
                }`}
              >
                {link.icon}
                <span className="mt-1">{link.name}</span>
                {/* {pathname === link.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
                    layoutId="mobile-underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )} */}
              </Link>
            </motion.div>
          ))}
        </nav>
      </header>
    </>
  )
}