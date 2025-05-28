'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Packages', href: '/#packages' },
  { name: 'Contact Us', href: '/#contact' },
  { name: 'EVENTS', href: '/events' },
  { name: 'Blog', href: '/blog' },
]

const FooterContact = () => {
  return (
    <footer className="w-full bg-black text-white">
      {/* Google Map Embed */}
      <motion.div 
        className="w-full h-[400px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <iframe
          title="Farjana Events Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.123456789012!2d-84.12345678901234!3d33.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDA3JzI0LjUiTiA4NMKwMDcnMjQuNSJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Left: Contact Info */}
          <motion.div 
            className="md:col-span-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="font-pinyon text-6xl mb-12"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Contact Us
            </motion.h2>
            <motion.div 
              className="space-y-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-6 h-6 mt-1" />
                <div className="text-lg">
                  1685 Old Norcross Rd Ste 600A<br />
                  Lawrenceville GA 30046
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-6 h-6" />
                <div className="text-lg">Booking@farjanaevents.com</div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-6 h-6" />
                <div className="text-lg">470-549-4746</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Center: Nav Links */}
          <motion.div 
            className="md:col-span-3"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4 pt-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`block text-lg hover:text-gray-300 transition-colors ${
                    link.name === 'Home' || link.name === 'Packages' 
                      ? 'bg-white text-black px-8 py-2 rounded-full hover:bg-gray-100 hover:text-black'
                      : ''
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Subscribe Form */}
          <motion.div 
            className="md:col-span-5"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="bg-black border border-white/20 rounded-3xl p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.h3 
                className="text-2xl font-medium mb-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                SUBSCRIBE TO OUR MAILING LIST
              </motion.h3>
              
              <motion.form 
                className="space-y-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input 
                      type="text"
                      required
                      placeholder="First name *"
                      className="w-full bg-transparent border border-white/20 rounded-full px-6 py-3 focus:outline-none focus:border-white transition-colors placeholder-transparent peer"
                    />
                    <label className="absolute left-6 -top-2.5 bg-black px-2 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm">
                      First name *
                    </label>
                  </motion.div>
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input 
                      type="text"
                      required
                      placeholder="Last name *"
                      className="w-full bg-transparent border border-white/20 rounded-full px-6 py-3 focus:outline-none focus:border-white transition-colors placeholder-transparent peer"
                    />
                    <label className="absolute left-6 -top-2.5 bg-black px-2 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm">
                      Last name *
                    </label>
                  </motion.div>
                </div>

                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input 
                    type="email"
                    required
                    placeholder="Email *"
                    className="w-full bg-transparent border border-white/20 rounded-full px-6 py-3 focus:outline-none focus:border-white transition-colors placeholder-transparent peer"
                  />
                  <label className="absolute left-6 -top-2.5 bg-black px-2 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm">
                    Email *
                  </label>
                </motion.div>

                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input 
                    type="tel"
                    required
                    placeholder="Phone *"
                    className="w-full bg-transparent border border-white/20 rounded-full px-6 py-3 focus:outline-none focus:border-white transition-colors placeholder-transparent peer"
                  />
                  <label className="absolute left-6 -top-2.5 bg-black px-2 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm">
                    Phone *
                  </label>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input 
                    type="checkbox" 
                    id="newsletter"
                    className="w-4 h-4 rounded-sm accent-white"
                  />
                  <label htmlFor="newsletter" className="text-sm">
                    Yes, subscribe me to your newsletter.
                  </label>
                </motion.div>

                <motion.button 
                  type="submit"
                  className="w-full bg-gray-200 text-black rounded-full py-3 font-medium hover:bg-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div 
        className="border-t border-white/10"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          © {new Date().getFullYear()} by Farjana Events. All rights reserved.
        </div>
      </motion.div>
    </footer>
  )
}

export default FooterContact; 