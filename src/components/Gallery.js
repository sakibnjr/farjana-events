"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "./Heading";

const galleryImages = [
  { src: "/gallery/one.jpg", alt: "Event Setup 1" },
  { src: "/gallery/two.jpg", alt: "Event Setup 2" },
  { src: "/gallery/three.jpg", alt: "Event Setup 3" },
  { src: "/gallery/four.jpg", alt: "Event Setup 4" },
  { src: "/gallery/five.jpg", alt: "Event Setup 5" },
  { src: "/gallery/six.jpg", alt: "Event Setup 6" },
  { src: "/gallery/seven.jpg", alt: "Event Setup 7" },
  { src: "/gallery/eight.jpg", alt: "Event Setup 8" },
  { src: "/gallery/nine.jpg", alt: "Event Setup 9" },
  { src: "/gallery/ten.jpg", alt: "Event Setup 10" },
  { src: "/gallery/eleven.jpg", alt: "Event Setup 11" },
  { src: "/gallery/twelve.jpg", alt: "Event Setup 12" },
  { src: "/gallery/thirteen.jpg", alt: "Event Setup 13" },
  { src: "/gallery/fourteen.jpg", alt: "Event Setup 14" },
  { src: "/gallery/fifteen.jpg", alt: "Event Setup 15" },
  { src: "/gallery/sixteen.jpg", alt: "Event Setup 16" },
  { src: "/gallery/seventeen.jpg", alt: "Event Setup 17" },
  { src: "/gallery/eighteen.jpg", alt: "Event Setup 18" },
  { src: "/gallery/nineteen.jpg", alt: "Event Setup 19" },
  { src: "/gallery/twenty.jpg", alt: "Event Setup 20" },
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
          <Heading text="Our Gallery" border={false} />
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Take a look at some of our beautiful event setups and celebrations
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
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
