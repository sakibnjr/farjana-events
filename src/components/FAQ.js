"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "How do I make a booking?",
    answer:
      "Please contact us via email with your desired date and chosen package. To secure your date a non-refundable 50% deposit is to be paid to secure your booking or items you wish to hire. Please note this payment is non-refundable. A refundable security deposit of £150 is also required together with your balance no later than 5 days before your booking date. Your security deposit will be returned within 3 days of collection providing there are no damages. Please note if there are any parking restrictions in the area there is also a charge for this.",
  },
  {
    question: "What are the measurements of the dome?",
    answer:
      "Our igloos are 3.6m in diameter and 2.2m in height. They are 100% waterproof and require a flat service area on grass, decking or patio.",
  },
  {
    question: "How many people does the Dome hold?",
    answer: "The igloo can hold up to 6 people seated.",
  },
  {
    question: "How long does it take to set up the dome?",
    answer: "It can take up to 3 hours to install and decorate each dome.",
  },
  {
    question: "How long is the hire period?",
    answer:
      "Each booking is for 24 hours however; additional days can also be arranged at a discounted rate.",
  },
  {
    question: "Do you provide food and drink?",
    answer: "Unfortunately, our packages do not include food or drink.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "If you need to cancel your booking, we ask that you send us an email 48 hours prior to your event. Unfortunately, the deposit will not be returned however, any additional fees will be reimbursed.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl text-black mb-4 tracking-tigh font-pinyon">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-gray-100">
                      <motion.p
                        className="text-gray-700 leading-relaxed pt-4"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
