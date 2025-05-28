'use client'

import { Phone, Mail, MapPin, Instagram, Facebook, Music2, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { name: 'Home', active: true },
  { name: 'About' },
  { name: 'Pricing' },
  { name: 'Packages' },
  { name: 'Contact Us' },
  { name: 'EVENTS' },
  { name: 'Blog' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top Navbar */}
      <nav className="w-full bg-black text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
           <img src="/logo.png" alt="" className='w-20' />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-2 mx-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  className={`px-3 py-1.5 rounded-full font-bold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40 ${
                    link.active
                      ? 'border border-white text-white bg-black'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="border border-white text-white px-4 py-1.5 rounded-full font-semibold hover:bg-white hover:text-black transition-colors text-sm">
              SCHEDULE A TOUR
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMobileMenuOpen ? 'block' : 'hidden'
          } bg-black border-t border-white/10`}
        >
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  link.active
                    ? 'bg-white/10 text-white'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button className="w-full border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors text-sm mt-4">
              SCHEDULE A TOUR
            </button>
          </div>
        </div>
      </nav>

      {/* Social/Contact Icons Row */}
      <div className="w-full bg-black text-white border-t border-white/10 pt-8 pb-2 ">
        <div className="max-w-7xl mx-auto flex items-center justify-end space-x-6 py-2 px-4">
          <a href="#" className="hover:text-purple-300" title="Call">
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a href="#" className="hover:text-purple-300" title="Email">
            <Mail className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a href="#" className="hover:text-purple-300" title="Location">
            <MapPin className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a href="#" className="hover:text-purple-300" title="Instagram">
            <Instagram className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a href="#" className="hover:text-purple-300" title="Facebook">
            <Facebook className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a href="#" className="hover:text-purple-300" title="TikTok">
            <Music2 className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </header>
  )
} 