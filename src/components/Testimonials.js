"use client";

import { motion } from "framer-motion";
import Heading from "./Heading";

const testimonials = [
  {
    text: `I can't thank you enough, the setting was absolutely stunning and had an elegant and luxurious African vibe- Totally transforming my garden! My guests complimented the decor and small attention to details all night. It Was THE perfect set up for my event, will be recommending you & booking you for the next one!`,
    author: "KemZ",
    rating: 5,
  },
  {
    text: `My 60th birthday was coming up, and I knew that I wanted to celebrate by hiring a Marquee for my back garden. My niece recommended Faraja Events as she had used them for decorating her parties and said that they were very good`,
    author: "Carol",
  },
  {
    text: `Thank you so much, you was so accommodating with my needs and came up with loads of suggestions to mark the special occasion for me. The games provided was a nice surprise to add to the enjoyments on the day. My day felt super special as we danced and got merry into the night. Thank you for making my day special and meeting my last minute demands haha. I know how i can be a perfectionist but you were accommodating and sweet throughout.`,
    author: "Elizabeth",
  },
  {
    text: `Thank you soo much for organising my baby shower for me it was so magical everything was so perfect can't wait for you to do my next event`,
    author: "Zainab",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <Heading text="Here's What Our Clients Said" border={false} />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white text-black rounded-3xl p-6 flex flex-col justify-between"
              style={{ minHeight: "400px" }}
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
                className="text-sm leading-relaxed mb-8"
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
