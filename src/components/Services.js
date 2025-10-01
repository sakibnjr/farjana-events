"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Utensils, Heart, TreePine, Palette } from "lucide-react";

const services = [
  {
    title: "TABLESTYLING",
    desc: "Host your event with sophistication and a beautifully decorated table for your special day.",
    img: "/party14.jpg",
    icon: Utensils,
    detailedInfo: {
      description:
        "Table styling is about all about choosing the right theme and colours to create the right atmosphere best suited for your occasion. We are passionate about making memories around the table and would love to create the perfect look to elevate your special occasion. Please enquire with us directly to discuss your needs and we will do our best to accommodate you.",
      included: [
        "Themed Centrepiece arrangements for tables",
        "Tablecloths",
        "Plates",
        "Cutlery",
        "Champagne glasses",
        "Charger Plates with napkins for a Touch of Elegance",
        "Chair covers",
      ],
      addOns: [
        "Drinks table arrangement- (Drinks are not included)",
        "Buffet table arrangement (Food is not included)",
        "Custom Welcome Sign",
        "Drinks Ladder",
      ],
    },
  },
  {
    title: "DATE NIGHT",
    desc: "Spend an intimate evening with your loved one with a romantic set up designed for your special occasions. If you're a date night kind of couple, these are the perfect settings for creating a special evening together.",
    img: "/party19.jpg",
    icon: Heart,
    detailedInfo: {
      description:
        "Make your special day unforgettable and celebrate in style with one of our date night packages. Whether you are planning a romantic dinner, celebrating your anniversary or want to have a date night. Our packages are perfect for creating a beautiful romantic evening. This is a must-have fun date night activity set. Capture that amazing moment your loved one gets to see the incredible painting that their beloved partner, friend or family has painted.",
      packages: [
        {
          name: "Romantic Table",
          price: "From £125",
          items: [
            "2 x Gold Charger Plates",
            "2 x Black Napkins",
            "2 x Romantic Red Candle Holders & Candles",
            "2 x Glass Taper Candlestick Holders",
            "2 x Cherry Red Taper Candles",
            "1 x Organza bag of Luxury Romantic Red Petals",
            "1 x Set of Art Decor Champagne Flutes",
            "1 x Love Style Guide, complete with Date Night Q&A and a romantic Spotify playlist",
            "1 x Luxury Keepsake Box",
          ],
        },
        {
          name: "Romantic Room Decoration",
          price: "From £150",
          items: [
            "2 x Gold Charger Plates",
            "LED candle decor",
            "30x ceiling balloons",
            "2 x Black Napkins",
            "2 x Romantic Red Candle Holders & Candles",
            "2 x Glass Taper Candlestick Holders",
            "2 x Cherry Red Taper Candles",
            "1 x Organza bag of Luxury Romantic Red Petals",
            "1 x Set of Art Decor Champagne Flutes",
            "1 x Love Style Guide, complete with Date Night Q&A and a romantic Spotify playlist",
            "1 x Luxury Keepsake Box",
          ],
        },
        {
          name: "Paint your Partner Date Night",
          price: "From £135",
          items: [
            "2 x Easle Stands",
            "2 x Paint Pallets",
            "2 x Canvases (9x12 inches)",
            "2 x Sketching Pencils",
            "Paints",
            "Paint Brushes",
            "Couples cards A Deck of Conversation Cards – Spark fun and meaningful discussions",
            "Create, Laugh & Make Memories",
            "12 Date Nights a Year Activity Card – Keep the fun going all year long",
          ],
        },
      ],
      included: [],
      addOns: [],
    },
  },
  {
    title: "LUXURY PICNICS & KIDS PARTIES",
    desc: "Experience bespoke indoor and outdoor picnics from romantic picnics to children's parties to unforgettable luxury picnics.",
    img: "/party22.jpg",
    icon: TreePine,
    detailedInfo: {
      description:
        "Celebrate your special occasion with a beautifully styled picnic. We provide everything that makes the perfect picnic experience, from beautifully decorated picnic tables, cushions, blankets and champagne glasses. Make your child's birthday unforgettable with a beautifully themed picnic party, fun activities, and a stress-free experience for parents.",
      perfectFor: [
        "Romantic Date Picnics",
        "Picnic Proposals",
        "Kids Picnic Parties",
        "Bridal Shower Picnics",
        "Baby Shower Picnics",
      ],
      packages: [
        {
          name: "Romantic Picnic (2 to 4 guests)",
          price: "From £150",
          perfectFor: "Date nights, intimate gender reveals",
        },
        {
          name: "Luxury Group Picnic (4-8 guests)",
          price: "From £200",
          perfectFor: "Bridal showers, reunions",
        },
        {
          name: "Large Event Picnic (10+ guests)",
          price: "Custom Pricing",
          perfectFor: "Celebrations, baby showers",
        },
        {
          name: "Mini Picnic Party (For Up to 6 Kids)",
          price: "From £200",
          perfectFor: "",
        },
        {
          name: "Deluxe Picnic Party (For 7-12 Kids)",
          price: "From £360",
          perfectFor: "",
        },
        {
          name: "Large Picnic Party (12+ Kids)",
          price: "Custom Pricing",
          perfectFor: "",
        },
      ],
      included: [
        "A beautifully styled setup: low table dining, cushions, full table decor",
        "Charger plates, dinner plates, glassware, cutlery",
        "Drinks trolley, ice bucket and speaker",
        "Custom Décor: Personalised colour themes, flowers, candles",
      ],
      addOns: [
        "Additional décor",
        "Balloons",
        "Bouncy castle",
        "Party bags",
        "Drinks/food arrangement",
      ],
    },
  },
  {
    title: "SIP AND EXPRESS",
    desc: "Thinking of hosting an event? Why not throw a sip and paint party? Invite your guests to explore their inner creativity, create their own masterpiece and enjoy a night full of fun.",
    img: "/party20.jpg",
    icon: Palette,
    detailedInfo: {
      description:
        "Whether you're having a get-together with friends or celebrating for an occasion, we've got everything you need for your sip and paint party.",
      included: [
        "Canvas: A blank canvas for you to create your masterpiece",
        "Paints: Acrylic paints in a variety of colours",
        "Brushes: A set of paintbrushes for applying the paint",
        "Palettes: A palette for mixing colours",
        "Aprons: Aprons to protect your clothes from paint splatters",
        "Easel: An easel to hold the canvas",
        "Drinking glasses",
      ],
      addOns: [],
    },
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    if (service.detailedInfo) {
      setSelectedService(service);
    }
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section id="services" className="w-full bg-[#ecebed] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-4 tracking-tight">
              SERVICES
              <span className="text-5xl sm:text-6xl md:text-7xl font-pinyon">
                We Offer
              </span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Discover our range of premium event styling services designed to
              make your special occasions unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="relative rounded-md overflow-hidden h-[300px] md:h-[400px] group cursor-pointer"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx < 3}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300">
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <motion.h3
                      className="text-white text-2xl md:text-3xl font-bold mb-3 leading-tight"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="text-white/90 text-sm md:text-base mb-6"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 + 0.3 }}
                    >
                      {service.desc}
                    </motion.p>
                    <motion.button
                      onClick={() => handleServiceClick(service)}
                      className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-colors"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 + 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Click Here
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-gray-100"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Modal Header */}
            <motion.div
              className="text-center px-8 py-8 border-b border-gray-50"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Service Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl mb-4"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <selectedService.icon className="w-8 h-8 text-gray-700" />
              </motion.div>

              <motion.h2
                className="text-2xl font-semibold text-gray-900 mb-2"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {selectedService.title}
              </motion.h2>

              <motion.button
                onClick={closeModal}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </motion.div>

            {/* Modal Content */}
            <motion.div
              className="px-8 pb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="space-y-6">
                {/* Description */}
                <motion.div
                  className="text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <p className="text-gray-600 leading-relaxed text-base max-w-2xl mx-auto">
                    {selectedService.detailedInfo.description}
                  </p>
                </motion.div>

                {/* Perfect For Section (for Luxury Picnics) */}
                {selectedService.detailedInfo.perfectFor && (
                  <motion.div
                    className="text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Perfect for:
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {selectedService.detailedInfo.perfectFor.map(
                        (item, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Packages and Pricing Section */}
                {selectedService.detailedInfo.packages && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                      {selectedService.title === "LUXURY PICNICS & KIDS PARTIES"
                        ? "Packages & Pricing"
                        : "Date Night Packages"}
                    </h3>
                    <div className="space-y-4">
                      {selectedService.detailedInfo.packages.map((pkg, idx) => (
                        <div
                          key={idx}
                          className="border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-colors duration-200"
                        >
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-semibold text-gray-900 text-lg">
                              {pkg.name}
                            </h4>
                            <span className="text-gray-900 font-bold text-lg">
                              {pkg.price}
                            </span>
                          </div>
                          {pkg.perfectFor && (
                            <p className="text-gray-600 text-sm mb-4">
                              Perfect for: {pkg.perfectFor}
                            </p>
                          )}
                          {pkg.items && (
                            <div className="space-y-2">
                              {pkg.items.map((item, itemIdx) => (
                                <div
                                  key={itemIdx}
                                  className="text-gray-600 text-sm flex items-start"
                                >
                                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {selectedService.title ===
                      "LUXURY PICNICS & KIDS PARTIES" && (
                      <p className="text-center text-gray-600 text-sm mt-6">
                        Get in touch for a tailored quote and availability
                      </p>
                    )}
                  </motion.div>
                )}

                {selectedService.detailedInfo.included &&
                  selectedService.detailedInfo.included.length > 0 && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                        What&apos;s Included
                      </h3>
                      {selectedService.title === "TABLESTYLING" && (
                        <p className="text-center text-gray-600 text-sm mb-4">
                          Decor, Setup and Breakdown
                        </p>
                      )}
                      <div className="space-y-3 max-w-2xl mx-auto">
                        {selectedService.detailedInfo.included.map(
                          (item, idx) => (
                            <div
                              key={idx}
                              className="text-gray-600 text-sm flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                              <span className="leading-relaxed">{item}</span>
                            </div>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}

                {selectedService.detailedInfo.addOns &&
                  selectedService.detailedInfo.addOns.length > 0 && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                        Optional Add-Ons
                      </h3>
                      <div className="space-y-3 max-w-2xl mx-auto">
                        {selectedService.detailedInfo.addOns.map(
                          (item, idx) => (
                            <div
                              key={idx}
                              className="text-gray-600 text-sm flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                              <span className="leading-relaxed">{item}</span>
                            </div>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
              </div>

              {/* Modal Footer */}
              <motion.div
                className="mt-8 pt-6 border-t border-gray-100 flex justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <motion.button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
