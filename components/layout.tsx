"use client"

import type React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 animate-in fade-in duration-700">
        <div className="flex items-center">
          <Link href="/">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 hover:shadow-lg">
              <span className="text-white font-bold text-base sm:text-lg">DC</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative font-medium transition-all duration-300 hover:text-gray-600 animate-in slide-in-from-top-4 ${
                pathname === item.href ? "text-black" : "text-gray-700"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
              {pathname === item.href && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-black animate-in slide-in-from-left duration-300" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black hover:scale-110 transition-transform duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <Menu
              size={24}
              className={`absolute transition-all duration-300 ${
                mobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              size={24}
              className={`absolute transition-all duration-300 ${
                mobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 ease-out overflow-hidden ${
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-4 px-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:text-gray-600 hover:translate-x-2 animate-in slide-in-from-left ${
                  pathname === item.href ? "text-black" : "text-gray-700"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">{children}</div>
    </div>
  )
}
