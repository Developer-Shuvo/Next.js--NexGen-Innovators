import Hero from "@/Components/Hero/Hero";
import WeDo from "@/Components/WeDo/WeDo";
import Navbar from "@/Layout/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        // This is the all page background color and pattern
        className="flex justify-center w-[100%] absolute top-0 z-[-2] min-h-[100vh] h-auto bg-[#000000] 
           bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] 
           bg-[size:20px_20px]"
      >
        <div className="w-[1500px] relative">
          <Navbar />
          <Hero/>
          <WeDo/>
        </div>
      </div>
    </>
  );
}
