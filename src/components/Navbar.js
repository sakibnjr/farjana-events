"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "Home", active: true },
  { name: "About Us" },
  { name: "Gallery" },
  { name: "Packages" },
  { name: "Contact Us" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (linkName) => {
    setIsMenuOpen(false); // Close mobile menu

    // Small delay to allow mobile menu to close before scrolling
    setTimeout(() => {
      if (linkName === "Home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (linkName === "About Us") {
        scrollToSection("about");
      } else if (linkName === "Gallery") {
        scrollToSection("gallery");
      } else if (linkName === "Packages") {
        scrollToSection("services");
      } else if (linkName === "Contact Us") {
        scrollToSection("contact");
      }
    }, 100);
  };

  return (
    <header className="w-full bg-black text-white">
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.name)}
                  className={`font-bold px-4 py-2 text-sm xl:text-base transition-all duration-200 hover:text-gray-300 ${
                    link.active ? "border-2 rounded-full border-white" : ""
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="uppercase rounded-full italic border border-white px-4 py-2 text-sm xl:text-base hover:bg-white hover:text-black transition-all duration-200"
            >
              Get a free quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1 relative"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 absolute ${
                isMenuOpen ? "rotate-45" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 absolute ${
                isMenuOpen ? "-rotate-45" : "translate-y-1"
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation Menu - Full Screen Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 w-full h-full bg-black z-50 flex flex-col">
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={80}
                className="w-16 h-16"
              />
              <button
                onClick={toggleMenu}
                className="flex flex-col items-center justify-center w-10 h-10 relative"
                aria-label="Close menu"
              >
                <span className="w-6 h-0.5 bg-white rotate-45 absolute"></span>
                <span className="w-6 h-0.5 bg-white opacity-0"></span>
                <span className="w-6 h-0.5 bg-white -rotate-45 absolute"></span>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-8">
              <ul className="space-y-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      className={`block w-full text-left font-bold text-2xl py-4 transition-all duration-200 hover:text-gray-300 ${
                        link.active
                          ? "text-white border-l-4 border-white pl-4"
                          : "text-white"
                      }`}
                      onClick={() => handleNavClick(link.name)}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Mobile CTA Button */}
              <div className="mt-12">
                <button
                  className="w-full uppercase rounded-full italic border-2 border-white px-6 py-4 text-lg font-bold hover:bg-white hover:text-black transition-all duration-200"
                  onClick={() => handleNavClick("Contact Us")}
                >
                  Get a free quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
