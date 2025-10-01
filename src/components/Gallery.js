"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/party3.jpg",
    alt: "Event Setup 1",
  },
  {
    src: "/party4.jpg",
    alt: "Event Setup 2",
  },
  {
    src: "/party5.jpg",
    alt: "Event Setup 3",
  },
  {
    src: "/party6.jpg",
    alt: "Event Setup 4",
  },
  {
    src: "/party7.jpg",
    alt: "Event Setup 5",
  },
  {
    src: "/party8.jpg",
    alt: "Event Setup 6",
  },
  {
    src: "/party10.jpg",
    alt: "Event Setup 7",
  },
  {
    src: "/party11.jpg",
    alt: "Event Setup 8",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-4 tracking-tight">
            OUR{" "}
            <span className="text-5xl sm:text-6xl font-pinyon">Gallery</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Take a look at some of our beautiful event setups and celebrations
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
