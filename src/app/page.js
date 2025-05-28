import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Services from '@/components/Services'
import BookAppointment from '@/components/BookAppointment'
import WhatWeOffer from '@/components/WhatWeOffer'
import ScheduleTour from '@/components/ScheduleTour'
import FooterContact from '@/components/FooterContact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Services />
      <BookAppointment />
      <WhatWeOffer />
      <ScheduleTour />
      <FooterContact />
    </div>
  );
}
