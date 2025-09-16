import Benefits from "@/Components/Benefits/Benefits";
import FeaturedWork from "@/Components/FeaturedWork/FeaturedWork";
import Hero from "@/Components/Hero/Hero";
import Invoice from "@/Components/Invoice/Invoice";
import Services from "@/Components/Services/Services";
import TestimonialSlider from "@/Components/Slider/Slider";
import WeDo from "@/Components/WeDo/WeDo";
import WhyNexgen from "@/Components/WhyNexgen/WhyNexgen";
import Navbar from "@/Layout/Navbar/Navbar";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        // This is the all page background color and pattern
        className="flex justify-center w-full absolute top-0 z-[-2] min-h-screen h-auto bg-[#000000] 
        bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] 
        bg-[size:20px_20px]"
      >
        <div className="max-w-full overflow-hidden ">
          <Navbar />
          <Hero />
          <WeDo />
          <WhyNexgen />
          <TestimonialSlider />
          <Benefits />
          <Invoice />
          <Services />
          <FeaturedWork />
          {/* <Inquiry />
          <Footer /> */}
        </div>
      </div>
    </>
  );
}
