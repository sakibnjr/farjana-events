import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import BookAppointment from "@/components/BookAppointment";
import WhatWeOffer from "@/components/WhatWeOffer";
import ScheduleTour from "@/components/ScheduleTour";
import FooterContact from "@/components/FooterContact";
import New from "@/components/New";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <New />
      <Gallery />
      <Testimonials />
      <Services />
      <BookAppointment />
      <WhatWeOffer />
      <ScheduleTour />
      <FAQ />
      <FooterContact />
    </div>
  );
}
