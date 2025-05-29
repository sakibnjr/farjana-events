"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full bg-[#ececec]">
      {/* Top black bar with features */}
      <motion.div
        className="w-full bg-black text-white flex flex-col sm:flex-row justify-center items-center text-center py-6 sm:py-8 gap-6 sm:gap-12 text-sm sm:text-base md:text-lg font-bold tracking-wide px-6"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-full sm:flex-1"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          CUSTOM
          <br />
          EXPERIENCES
        </motion.div>
        <motion.div
          className="w-full sm:flex-1"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          FULLY LICENSED
          <br />& INSURED
        </motion.div>
        <motion.div
          className="w-full sm:flex-1"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          PRIME
          <br />
          LOCATION
        </motion.div>
      </motion.div>
      {/* Main content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-[#ececec]">
        {/* Left: Image */}
        <motion.div
          className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/team.jpg"
            alt="About Farjana Events"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        {/* Right: About text */}
        <motion.div
          className="flex flex-col justify-center items-center bg-[#ececec] px-6 sm:px-8 md:px-12 py-12 md:py-16"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-xl mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-8 tracking-tight"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ABOUT <span className="text-5xl sm:text-6xl font-pinyon">Us</span>
            </motion.h2>
            <motion.div
              className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed mb-10"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="whitespace-pre-line">
                Faraja Events is a London and Essex based events company that
                endeavours to style your events to cater to your needs. <br />
                <br />
                We offer a variety of services for your celebration, we have a
                full range of our unique custom made equipment for your to hire,
                we style the best themed parties including luxury children
                parties, We believe that every events should be memorable and
                unforgettable experience.
                <br /> <br />
                We ensure to make your special occasion unique, memorable and
                exceptional.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="border-2 border-black px-8 py-2.5 rounded-full font-semibold italic tracking-wide hover:bg-black hover:text-white transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                READ MORE
              </motion.button>
              <motion.button
                className="bg-black text-white px-8 py-2.5 rounded-full font-medium text-base sm:text-lg shadow hover:bg-gray-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us: +44 7487 414961
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
