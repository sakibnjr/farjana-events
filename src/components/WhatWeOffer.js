'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const offers = [
  {
    title: 'LUXURY MOBILE BAR',
    image: '/cup.jpg',
  },
  {
    title: 'EVENT SPACE RENTAL',
    image: '/party5.jpg',
  },
]

const WhatWeOffer = () => {
  return (
    <section className="w-full bg-black py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 gap-8">
        {/* Vertical Heading */}
        <motion.div 
          className="flex flex-col items-center md:items-end md:justify-center w-full md:w-auto mb-8 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-white text-4xl md:text-5xl font-light tracking-tight" 
            style={{writingMode:'vertical-lr',textOrientation:'mixed'}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            WHAT <span className="font-pinyon">WE</span> OFFER
          </motion.h2>
        </motion.div>
        {/* Offer Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {offers.map((offer, i) => (
            <motion.div 
              key={offer.title} 
              className="relative aspect-square border-4 border-white flex items-center justify-center overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 0}
              />
              <motion.div 
                className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
              />
              <motion.span 
                className="absolute z-10 text-white text-2xl md:text-4xl lg:text-5xl font-light uppercase text-center px-4 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.2 }}
              >
                {offer.title}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer; 