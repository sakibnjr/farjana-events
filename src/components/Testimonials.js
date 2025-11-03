"use client";

import { motion } from "framer-motion";
import Heading from "./Heading";

const testimonials = [
  {
    text: `I can't thank you enough, the setting was absolutely stunning and had an elegant and luxurious African vibe- Totally transforming my garden! My guests complimented the decor and small attention to details all night.`,
    author: "KemZ",
    rating: 5,
  },
  {
    text: `My 60th was coming up and I knew that I wanted to celebrate by horong a Marquee for my back garden. My niece recommended Faraja Events as she has used them for decorating her parrieis and said that they were very good.`,
    author: "Carol",
  },
  {
    text: `Thank you so much, you was so accommodating with my needs and came up with loads of suggestions to mark the special occasion for me. The games provided was a nice surprise to add to the enjoyments on the day. `,
    author: "Elizabeth",
  },
  {
    text: `Thank you soo much for organising my baby shower for me it was so magical everything was so perfect can't wait for you to do my next event and i will be recommending you to everyone for sure`,
    author: "Zainab",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <Heading text="Here's What Our Clients Said" border={false} />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white text-black rounded-[32px] p-8 flex flex-col justify-between shadow-md overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <motion.p
                className="text-base leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
              >
                {testimonial.text}
              </motion.p>
              <motion.p
                className="font-[cursive] text-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
              >
                {testimonial.author}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
