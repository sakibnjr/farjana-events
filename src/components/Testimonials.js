"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: `My husband and I decided on Farjana Events as a venue to host our baby shower. The venue is immaculate and ideal for those who want a one stop shop without the hassle of using multiple vendors. The bartender was the best part about the night. She was so sweet and provided excellent service. The owners were great and accommodating. They developed a plan that fit our needs but also exceeded our expectations.`,
    author: "Sarah M.",
    rating: 5,
  },
  {
    text: `I recently hosted my sister-in-law&rsquo;s graduation party at this event center, and it was an amazing experience. The space was beautiful and fully utilized for our needs. They provided chairs and tables, which was a great convenience. Francis was incredibly accommodating, allowing us early access and being very easy to work with. I would definitely consider hosting another event here in the future. Thanks again`,
    author: "Kayla Kudratt",
  },
  {
    text: `The owners were very responsive and accommodating! Great space for intimate gatherings! My baby shower was hosted here with about 70 guests. Perfect size! We also used the bartending services which was very convenient. Very much recommend renting this clean space.`,
    author: "Latoya White",
  },
  {
    text: `Amazing experience! The owner was very professional &amp; prompt. He answered any &amp; all questions I had. I had to switch venues within a week of my event, due to a very poor experience with another venue. Crazy enough Farjana Events had availability &amp; I realized I should&rsquo;ve been with them the entire time. Literally met all of my expectations in a week&rsquo;s time frame! I&rsquo;m big on communication and they communicated! They were so professional &amp; accommodating!`,
    author: "John D.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-4xl md:text-5xl font-light tracking-wide">{`HERE'S WHAT OUR `}</span>
          <span className="font-pinyon text-4xl md:text-5xl">Clients</span>
          <span className="text-4xl md:text-5xl font-light tracking-wide">
            {" "}
            SAID
          </span>
        </motion.h2>

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
