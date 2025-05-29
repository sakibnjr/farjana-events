"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", active: true },
  { name: "About" },
  { name: "Pricing" },
  { name: "Packages" },
  { name: "Contact Us" },
  { name: "EVENTS" },
  { name: "Blog" },
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
    <section className="relative h-[calc(100vh-88px)] w-full flex items-center justify-center overflow-hidden">
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
              className="object-cover"
            />
          </div>
          <motion.div
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 md:px-8">
        <motion.h1
          className="font-pinyon text-white text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight text-center text-pinyon"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ lineHeight: "1.1" }}
        >
          Creating The perfect and making Your special Occasion Unforgettable
        </motion.h1>
        <motion.p
          className="text-white/90 text-md mb-12 max-w-2xl text-center leading-relaxed"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Welcome to Faraja Events, where we bring your celebration to life. We
          can plan and style your next event that strives to meet your
          expections and needs. We ensure to make your special occasion unique,
          memorable and execptional.
        </motion.p>

        {/* Centered pill navigation */}
        <motion.nav
          className="mt-8 md:mt-12 w-full max-w-4xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ul className="flex flex-wrap justify-center gap-3 bg-black/80 backdrop-blur-sm rounded-full px-4 py-3 md:px-8 md:py-4 shadow-xl border border-white/20">
            {navLinks.map((link, idx) => (
              <motion.li
                key={link.name}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + idx * 0.1 }}
              >
                <button
                  className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/40 ${
                    link.active
                      ? "bg-white text-black border-2 border-white shadow-lg font-bold hover:bg-gray-100"
                      : "text-white hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </section>
  );
}
