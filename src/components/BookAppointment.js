"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BookAppointment = () => {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/gallery/two.jpg"
          alt="Book Appointment Background"
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
          {/* Left side - Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left order-1 lg:order-1"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] xl:text-[120px] font-cfont leading-none">
              Book Your <span className="block sm:inline">Appointment</span>
            </h1>
          </motion.div>

          {/* Right side - Buttons */}
          <motion.div
            className="flex-1 flex flex-col items-center lg:items-end gap-4 sm:gap-5 order-2 lg:order-2 w-full lg:w-auto"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.button
              className="w-full sm:w-auto lg:w-auto bg-white text-black rounded-full px-6 sm:px-8 py-2.5 sm:py-3 font-medium text-sm sm:text-base lg:text-lg hover:bg-white/90 transition-colors min-w-[200px] sm:min-w-[250px]"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              BOOK DISCOVERY CALL
            </motion.button>
            <motion.button
              className="w-full sm:w-auto lg:w-auto bg-transparent text-white rounded-full px-6 sm:px-8 py-2.5 sm:py-3 font-medium text-sm sm:text-base lg:text-lg border-2 border-white hover:bg-white hover:text-black transition-colors min-w-[200px] sm:min-w-[250px]"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="hidden sm:inline">
                Call Us: +44 07487 414961
              </span>
              <span className="sm:hidden">Call: +44 07487 414961</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
