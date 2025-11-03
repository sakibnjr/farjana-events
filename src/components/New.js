"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";
import { motion } from "framer-motion";

const New = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.nav
        className="flex items-center justify-between relative py-4 md:py-0 my-0"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left: Logo - Smaller on mobile, normal on desktop */}
        <motion.div
          className="flex-shrink-0 z-20 flex items-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/logo.png"
            alt="Faraja Events"
            width={60}
            height={60}
            priority
            unoptimized
            className="w-[60px] h-[60px] md:w-[110px] md:h-[110px] object-contain"
          />
        </motion.div>

        {/* Brand Name - Center on mobile and desktop */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 z-20"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/"
            className="font-bold text-sm md:text-2xl lg:text-4xl tracking-wider font-tnr uppercase"
          >
            faraja events
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden z-20 relative w-8 h-8 flex flex-col justify-center items-center"
          aria-label="Toggle menu"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileTap={{ scale: 0.9 }}
        >
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 absolute ${
              isMenuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 absolute ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 absolute ${
              isMenuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </motion.button>

        {/* Desktop Navigation Links */}
        <motion.ul
          className="hidden md:flex space-x-2 lg:space-x-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { href: "#", label: "Home" },
            { href: "#about", label: "About Us" },
            { href: "#gallery", label: "Gallery" },
            { href: "#packages", label: "Packages" },
            { href: "#contact", label: "Contact Us" },
          ].map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              <motion.a
                href={item.href}
                className="hover:text-gray-600 transition-colors text-sm lg:text-base"
                whileHover={{ scale: 1.1, color: "#4B5563" }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`md:hidden fixed inset-0 bg-white z-10`}
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-end justify-center h-full space-y-8 px-8">
            {[
              { href: "#", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#gallery", label: "Gallery" },
              { href: "#packages", label: "Packages" },
              { href: "#contact", label: "Contact Us" },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-2xl hover:text-gray-600 transition-colors text-right"
                onClick={toggleMenu}
                initial={{ x: 50, opacity: 0 }}
                animate={{
                  x: isMenuOpen ? 0 : 50,
                  opacity: isMenuOpen ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: isMenuOpen ? 0.1 + index * 0.1 : 0,
                }}
                whileHover={{ scale: 1.05, x: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      <motion.section
        className="flex flex-col items-center justify-center text-center gap-4 sm:gap-6 py-10 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Heading text="Giving You A Luxury Experience" border={false} />
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Heading text="&" border={false} />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <Heading
            text="Making Your Special Occasion Unforgettable"
            border={false}
          />
        </motion.div>

        <motion.button
          className="bg-black text-white py-3 px-6 sm:px-8 rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Style Your Next Event
        </motion.button>

        {/* hero section - table setup image */}
        <div className="relative flex w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] mt-8">
          {/* Left Section — Event Setup Image */}
          <div className="w-[40%] lg:w-[60%] h-full bg-white relative">
            <Image
              src="/heroLeft.jpg"
              alt="Event Setup"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 40vw, 60vw"
            />
          </div>

          {/* Right Section — Image with Overlay Form */}
          <div className="relative w-[60%] lg:w-[40%] h-full">
            {/* Background Image */}
            <Image
              src="/heroRight.png"
              alt="Right image"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 60vw, 40vw"
            />

            {/* Form Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 lg:p-8 text-white">
              <div className="w-full max-w-sm">
                <h1 className="text-base sm:text-xl lg:text-3xl font-bold mb-1 sm:mb-2 lg:mb-3 text-white">
                  Get a Free Quote Today
                </h1>
                <p className="text-[10px] sm:text-xs lg:text-sm mb-2 sm:mb-4 lg:mb-6 text-white opacity-90">
                  Please fill in the form for a personalised quote tailored to
                  your event
                </p>

                <form className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-start text-[10px] sm:text-xs lg:text-sm font-medium mb-0.5 sm:mb-1 text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full px-1.5 sm:px-2 lg:px-3 py-1 sm:py-1.5 lg:py-2 rounded-md text-black bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-start text-[10px] sm:text-xs lg:text-sm font-medium mb-0.5 sm:mb-1 text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-1.5 sm:px-2 lg:px-3 py-1 sm:py-1.5 lg:py-2 rounded-md text-black bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-start text-[10px] sm:text-xs lg:text-sm font-medium mb-0.5 sm:mb-1 text-white"
                    >
                      Telephone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-1.5 sm:px-2 lg:px-3 py-1 sm:py-1.5 lg:py-2 rounded-md text-black bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="eventDetails"
                      className="block text-start text-[10px] sm:text-xs lg:text-sm font-medium mb-0.5 sm:mb-1 text-white"
                    >
                      Tell us more about your event
                    </label>
                    <textarea
                      id="eventDetails"
                      rows="2"
                      className="w-full px-1.5 sm:px-2 lg:px-3 py-1 sm:py-1.5 lg:py-2 rounded-md text-black bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none text-xs sm:text-sm"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-1 sm:gap-2 mt-2 sm:mt-3 lg:mt-4">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 accent-white"
                    />
                    <label
                      htmlFor="terms"
                      className="text-[9px] sm:text-xs lg:text-sm text-white"
                    >
                      I agree to the Terms and Conditions
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black font-medium py-1.5 sm:py-2 lg:py-3 px-3 sm:px-4 lg:px-6 rounded-md mt-2 sm:mt-4 lg:mt-6 hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* welcome text */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heading
              text="Welcome"
              border={false}
              className="text-2xl sm:text-3xl lg:text-4xl"
            />
          </motion.div>
          <motion.p
            className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed mt-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Welcome to Faraja Events, where we provide high-quality decorations
            for your special day. <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            We can plan and style your next event to meet your needs and
            expectations.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            We ensure that your special occasion is unique, memorable, and
            exceptional. <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <br />
            Please do not hesitate to contact us for more information.
          </motion.p>
          <motion.button
            className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base mt-6 sm:mt-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </motion.div>
      </motion.section>

      {/* About us */}
      <motion.section
        id="about"
        className="w-full bg-[#ececec]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Main content */}
        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-2 bg-[#ececec] gap-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left: About text */}
          <motion.div
            className="flex flex-col justify-center items-start bg-[#ececec] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20 order-2 lg:order-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-2xl mx-auto lg:mx-0">
              <Heading
                text="About Us"
                border={false}
                className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left"
              />
              <motion.div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                {[
                  "Our mission is to deliver high-quality decorations for your special event, creating extraordinary moments. We offer a variety of packages and a full range of unique, custom-made equipment for hire.",
                  "We style the best themed parties, including children's parties. Whether you're planning an elegant baby shower, bridal shower, or date night, we are here to help.",
                  "We are passionate about what we do and will work through the smallest of details to bring your vision to life.",
                  "Book your next event today by using our online enquiry form or by sending us an email.",
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    className="text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 justify-center lg:justify-start"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.button
                  className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base lg:text-lg shadow hover:bg-gray-900 transition-colors flex-1 sm:flex-none"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us: +044 07487 414961
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
          {/* Right: Image */}
          <motion.div
            className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full order-1 lg:order-2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/aboutus.jpg"
              alt="About Farjana Events"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default New;
