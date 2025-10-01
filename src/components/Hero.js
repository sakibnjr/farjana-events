"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", active: true },
  { name: "About Us" },
  { name: "Gallery" },
  { name: "Packages" },
  { name: "Contact Us" },
];

const heroImages = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg", "/slide4.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen sm:h-[calc(100vh-88px)] w-full flex items-center justify-center overflow-hidden">
      {/* Background image slideshow */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0">
            <Image
              src={heroImages[current]}
              alt="Event space placeholder"
              fill
              priority
              quality={100}
              onError={(e) => {
                console.error(`Error loading image: ${heroImages[current]}`);
                e.target.src = "/slide1.jpg";
              }}
              onLoad={() =>
                console.log(`Successfully loaded image: ${heroImages[current]}`)
              }
              className="object-cover object-center"
            />
          </div>
          <motion.div
            className="absolute inset-0 bg-black/60 sm:bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.h1
          className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-10xl xl:text-11xl mb-8 sm:mb-12 text-center max-w-6xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            lineHeight: "1.1",
            fontFamily: "Tangerine",
            letterSpacing: "0.02em",
          }}
        >
          Creating the perfect experience and making your special occasion
          unforgettable
        </motion.h1>

        {/* Centered pill navigation - Hidden on mobile */}
        <motion.nav
          className="hidden lg:block mt-8 xl:mt-12 w-auto bg-black/90 backdrop-blur-sm text-white rounded-full"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ul className="flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  className={`font-bold px-4 py-2 text-sm xl:text-base transition-all duration-200 hover:text-gray-300 ${
                    link.active ? "border-2 rounded-full border-white" : ""
                  }`}
                  onClick={() => {
                    if (link.name === "About Us") scrollToSection("about");
                    if (link.name === "Gallery") scrollToSection("gallery");
                    if (link.name === "Packages") scrollToSection("services");
                    if (link.name === "Contact Us") scrollToSection("contact");
                  }}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </section>
  );
}
