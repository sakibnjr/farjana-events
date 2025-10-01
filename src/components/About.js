"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full bg-[#ececec]">
      {/* Top black bar with features */}
      <motion.div
        className="hidden md:flex w-full bg-black text-white flex flex-col sm:flex-row justify-center items-center text-center py-8 sm:py-10 md:py-12 gap-8 sm:gap-12 lg:gap-16 text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wide px-4 sm:px-6 md:px-8"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-full sm:flex-1 max-w-xs"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="leading-tight">
            CUSTOM
            <br />
            EXPERIENCES
          </div>
        </motion.div>
        <motion.div
          className="w-full sm:flex-1 max-w-xs"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="leading-tight">
            FULLY LICENSED
            <br />& INSURED
          </div>
        </motion.div>
        <motion.div
          className="w-full sm:flex-1 max-w-xs"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="leading-tight">
            PRIME
            <br />
            LOCATION
          </div>
        </motion.div>
      </motion.div>
      {/* Main content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-[#ececec]">
        {/* Left: Image */}
        <motion.div
          className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[700px] order-2 lg:order-1"
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
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
        {/* Right: About text */}
        <motion.div
          className="flex flex-col justify-center items-center bg-[#ececec] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20 order-1 lg:order-2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-2xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-6 sm:mb-8 tracking-tight"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ABOUT{" "}
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-pinyon">
                US
              </span>
            </motion.h2>
            <motion.div
              className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="whitespace-pre-line">
                Welcome to Faraja Events where we bring your celebration to
                life. Our mission is to make your special day unique, memorable
                and exceptional. We offer a variety of packages and have a full
                range of unique custom-made equipment for you to hire. We style
                the best themed parties and can style your event best suited to
                your needs. Please do not hesitate to contact us for more
                information
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="border-2 border-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold italic tracking-wide hover:bg-black hover:text-white transition-colors text-sm sm:text-base flex-1 sm:flex-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                READ MORE
              </motion.button>
              <motion.button
                className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base lg:text-lg shadow hover:bg-gray-900 transition-colors flex-1 sm:flex-none"
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
