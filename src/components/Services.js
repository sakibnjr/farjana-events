"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Utensils, Heart, Palette } from "lucide-react";
import { BsBalloon } from "react-icons/bs";

import Heading from "./Heading";

const services = [
  {
    title: "TABLE STYLING",
    desc: "Host your event with sophistication and a beautifully decorated table for your special day.",
    img: "/tablestyling.jpg",
    icon: Utensils,
    detailedInfo: {
      description:
        "Table styling is about all about choosing the right theme and colours to create the right atmosphere best suited for your occasion. We are passionate about making memories around the table and would love to create the perfect look to elevate your special occasion. Please enquire with us directly to discuss your needs and we will do our best to accommodate you.",
      included: [
        "Centrepiece arrangements for tables",
        "Tablecloths",
        "Plates",
        "Cutlery",
        "Champagne glasses",
        "Charger Plates with napkins",
      ],
      addOns: [
        "Drinks table arrangement with display stands- (Drinks are not included)",
        "Drinks Ladder",
        "Buffet table arrangement with display stands- (Food is not included)",
        "Custom Welcome Sign",
      ],
    },
  },
  {
    title: "DATE NIGHT",
    desc: "Spend an intimate evening with your loved one with a romantic set up designed for your special occasion. We have the perfect settings for creating a special evening.",
    img: "/DOMEE.jpg",
    icon: Heart,
    detailedInfo: {
      description:
        "Make your special day unforgettable and celebrate in style with one of our date night packages. Whether you are planning a romantic dinner or celebrating your anniversary, Our packages are perfect for creating a beautiful romantic evening. Create, laugh & make beautiful memories.",
      packages: [
        {
          name: "Romantic Table",
          price: "From £125",
          items: [
            "2 x Charger Plates",
            "2 x Napkins",
            "2 x Candle Holders & Candles",
            "2 x Champagne Flutes",
            "1 x Couple Card Game",
            "Rose petals",
            "Artificial flowers",
            "LED Candles",
          ],
        },
        {
          name: "Paint your Partner",
          price: "From £135",
          items: [
            "2 x Easel Stands",
            "2 x Paint Pallets",
            "2 x Canvases",
            "2 x Pencils",
            "Paints",
            "Paint Brushes",
            "Couples cards",
            "12 Date Nights a Year Activity Card – Keep the fun going all year long",
            "Petals",
            "LED Candles",
          ],
        },
        {
          name: "Romantic Room Decoration",
          price: "From £160",
          items: [
            "Balloons",
            "Rose petals",
            "LED Candles",
            "Couples Cards",
            "Artificial flowers",
            "Fairy lights",
          ],
        },
      ],
      included: [],
      addOns: [],
    },
  },
  {
    title: "LUXURY PICNICS & KIDS PARTIES",
    desc: "Experience bespoke indoor and outdoor picnics. From children's parties to romantic luxury picnics.",
    img: "/paintparty.jpg",
    icon: BsBalloon,
    detailedInfo: {
      description:
        "Celebrate your special occasion with a beautifully styled picnic. We provide everything that makes the perfect picnic experience.",
      perfectFor: [
        "Romantic Date Picnics",
        "Picnic Proposals",
        "Kids Picnic Parties",
        "Bridal Shower Picnics",
        "Baby Shower Picnics",
      ],
      packages: [
        {
          name: "Romantic Picnic",
          price: "From £150",
        },
        {
          name: "Group Picnic (4-8 guests)",
          price: "From £200",
        },
        {
          name: "Large Event Picnic (10+ guests)",
          price: "Custom Pricing",
        },
        {
          name: "Mini Picnic Party (For Up to 6 Children)",
          price: "From £200",
        },
        {
          name: "Deluxe Picnic Party (For 7-12 Kids)",
          price: "From £360",
        },
        {
          name: "Large Picnic Party (12+ Kids)",
          price: "Custom Pricing",
        },
      ],
      luxuryPicnicIncluded: [
        "Custom décor: personalised theme colours, flowers, candles",
        "A beautifully styled setup: low table, cushions and full table decor",
        "Charger plates, dinner plates, glassware, cutlery",
        "Drinks trolley, ice bucket and speaker",
      ],
      childrenPicnicIncluded: [
        "Custom décor: personalised theme colours",
        "A beautifully styled table setup: low table, cushions and full table décor",
        "Plastic plates, cups and cutlery",
        "Party bags",
      ],
      addOns: [
        "Balloons",
        "Bouncy castle",
        "Drinks/food arrangement with display stands (Food and drinks is not included)",
      ],
    },
  },
  {
    title: "SIP AND EXPRESS",
    desc: "Thinking of hosting an event? Why not throw a sip and paint party? Invite your guests to explore their inner creativity, create their own masterpiece and enjoy a night full of fun.",
    img: "/sip.jpg",
    icon: Palette,
    detailedInfo: {
      description:
        "Whether you're having a get-together with friends or celebrating for an occasion, we've got everything you need for your sip and paint party.",
      included: [
        "A blank canvas for you to create your masterpiece",
        "Paints in a variety of colours",
        "A set of paint brushes",
        "Palettes",
        "Aprons",
        "Easel",
        "Drinking glasses",
      ],
      addOns: [],
    },
  },
  {
    title: "PROP HIRE",
    desc: "We have a wide range of items available for hire to add the finishing touches to your special day. Please contact us for more information regarding your chosen theme.",
    img: "/DOMEE.jpg",
    icon: Heart,
    detailedInfo: {
      packages: [
        {
          name: "Luxury Dome Hire Only (Without Decorations)",
          price: "From £150",
        },
        {
          name: "Luxury Dome Hire Only (With Decorations)",
          price: "From £350",
        },
        {
          name: "Drinks Ladder (Including 27 champagne glasses)",
          price: "From £60",
        },
        {
          name: "9 Buffet Risers (Including champagne glasses)",
          price: "From £75",
        },
      ],
    },
  },
  {
    title: "Pamper Us Too",
    desc: "Thinking of throwing a party? Why not choose from one of our packages for the ultimate kid's pamper party?",
    img: "/DOMEE.jpg",
    icon: Heart,
    detailedInfo: {
      description:
        "Our pamper parties are suitable for ages 5 plus and bring so much fun. We encourage self-affirmation and offer the best experience where every child is treated like a VIP and feels like royalty.We offer a wide range of luxurious spa treatments designed specifically for children. From mini manicures, pedicures & facials. We create an environment that allows children to unwind and enjoy their experience to the fullest.We also offer a variety of interactive activities and games designed to keep children entertained throughout the party.If you have something extra special in mind for your occasion let us know so we can add the finishing touches.We would love to hear from you and help you create unforgettable memories.For a quicker response, send us a message on WhatsApp.",
      packages: [
        {
          name: "Luxury Spa Party-(minimum of 4 children)Suitable for 5 yrs+",
          price: "From £180",
          items: [
            "Gentle facial",
            "Mini manicure/pedicure",
            "Dressing gown",
            "Flip flops",
            "Headband",
            "Mini Mirror",
            "Activities",
            "Self-love affirmation cards",
            "Party bags",
            "Plastic champagne glasses",
          ],
        },
        {
          name: "VIP spa party-(Minium of 4 children) Sutitable for 6yr+",
          price: "From £200",
          items: [
            "Gentle facial",
            "Mini manicure/pedicure",
            "Dressing gown",
            "Flip flops",
            "Headband",
            "Mini Mirror",
            "Activities",
            "Self-love affirmation cards",
            "Party bags",
            "Foot Spa",
            "Plastic champagne glasses",
          ],
        },
        {
          name: "Pamper & Craft Suitable for 6yr+",
          price: "From £385",
          items: [
            "Foot Spa",
            "Gentle facial",
            "Mini manicure/pedicure",
            "Dressing gowns & flip flops and headbands for each guest",
            "Mini Mirror",
            "Activities",
            "Self-love affirmation cards",
            "Blank canvas",
            "Easel",
            "Palettes",
            "Aprons",
            "Paint brush",
            "Paint",
          ],
        },
        {
          name: "Pamper & Craft Suitable for 6yr+",
          price: "From £470",
          items: [
            "Bouncy Castle - 12x12ft- We deliver to various locations across London and Essex",
            "Foot Spa",
            "Gentle facial",
            "Mini manicure/pedicure",
            "Dressing gown",
            "Flip flops",
            "Headband",
            "Mini Mirror",
            "Activities",
            "Self-love affirmation cards",
            "Karaoke machine",
            "Party bags",
            "Plastic champagne glasses",
            "Palettes",
            "Aprons",
            "Paint brush",
            "Paint",
          ],
        },
      ],
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
            <Heading text="Services We Offer" border={false} />
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Discover a range of our premium services. <br />
              <span className="uppercase">We can also create in</span>
              <br /> your own package best suited to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          onClick={closeModal}
        >
          <motion.div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-gray-100"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
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
                        <div key={idx} className="">
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
                  </motion.div>
                )}

                {/* What's Included Section - Handle different service types */}
                {selectedService.title === "LUXURY PICNICS & KIDS PARTIES" ? (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    {/* Luxury Picnic Inclusions */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                        What&apos;s Included in the Luxury Picnic?
                      </h3>
                      <div className="space-y-3 max-w-2xl mx-auto">
                        {selectedService.detailedInfo.luxuryPicnicIncluded.map(
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
                    </div>

                    {/* Children's Picnic Inclusions */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                        What&apos;s Included in the Children&apos;s Picnic?
                      </h3>
                      <div className="space-y-3 max-w-2xl mx-auto">
                        {selectedService.detailedInfo.childrenPicnicIncluded.map(
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
                    </div>
                  </motion.div>
                ) : (
                  selectedService.detailedInfo.included &&
                  selectedService.detailedInfo.included.length > 0 && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                        What&apos;s Included?
                      </h3>
                      {selectedService.title === "TABLE STYLING" && (
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
                  )
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
