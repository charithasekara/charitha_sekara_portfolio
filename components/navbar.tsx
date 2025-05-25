"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Briefcase, Code, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", path: "/", icon: <Home className="h-5 w-5" /> },
  { name: "About", path: "/about", icon: <User className="h-5 w-5" /> },
  { name: "Projects", path: "/projects", icon: <Briefcase className="h-5 w-5" /> },
  { name: "Skills", path: "/skills", icon: <Code className="h-5 w-5" /> },
  { name: "Contact", path: "/contact", icon: <Mail className="h-5 w-5" /> },
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
    setIsOpen(false)
  }, [pathname])

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
                  className={`nav-link px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === link.path
                      ? "text-white bg-gray-800"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <header className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 py-2">
        <nav
          className={`navbar-mobile-container flex items-center justify-around w-full max-w-md mx-auto rounded-full transition-all duration-300 py-1 border border-purple-500/20 ${
            scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-gray-900/80 backdrop-blur-sm"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`flex flex-col items-center justify-center py-2 px-3 text-xs font-medium ${
                pathname === link.path
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              <span className="mt-1">{link.name}</span>
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile Menu Toggle Button (Optional, for fallback) */}
      {/* <div className="md:hidden fixed top-4 right-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div> */}

      {/* Mobile Dropdown Menu (Optional, for fallback) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md absolute top-16 left-4 right-4 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`nav-link flex items-center space-x-2 py-2 px-3 rounded-md ${
                    pathname === link.path
                      ? "text-white bg-gray-800"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}