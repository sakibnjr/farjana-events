"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "./Heading";

const ScheduleTour = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center">
      {/* Background image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/gallery/one.jpg"
          alt="Schedule Tour Background"
          fill
          className="object-cover"
          priority
        />
        <motion.div
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left side - Description and Buttons */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex flex-col gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                className="w-full md:w-auto bg-white text-black rounded-full px-8 py-3 font-medium text-base md:text-lg hover:bg-white/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SCHEDULE TOUR
              </motion.button>
              <motion.button
                className="w-full md:w-auto bg-transparent text-white rounded-full px-8 py-3 font-medium text-base md:text-lg border-2 border-white hover:bg-white hover:text-black transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us: +44 07487 414961
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Title */}
          <motion.div
            className="flex-1 flex flex-col items-end"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading
              text={"Schedule a"}
              border={false}
              className="text-white"
            />

            <h2 className="text-white text-[80px] md:text-[100px] lg:text-[120px] font-cfont">
              Tour
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleTour;
