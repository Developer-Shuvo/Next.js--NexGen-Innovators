"use client";
import { motion } from "framer-motion";
import Image from "next/image"; 
import star from "@/assets/WhyNexgen-image/star.png";
import image from "@/assets/WhyNexgen-image/shuvo.png";
import arrow from "@/assets/WhyNexgen-image/next.png";
import coding from "@/assets/WhyNexgen-image/programming-background-concept.jpg";
import wallpaper from "@/assets/WhyNexgen-image/delicate-floral-bloom-soft-light.jpg";

const WhyNexgen = () => {
  return (
    <div id="whyUs" className="mx-auto w-full max-w-[1500px] px-4 md:px-10">
      <section className="grid md:gap-20 md:grid-cols-2">
        {/* --------- Text Part -------- */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-[70px] md:mt-[120px] "
        >
          <h3 className="md:text-xl text-lg text-center md:text-left  font-bold text-[#4e8bb9]">
            Why Nexgen
          </h3>
          <h1 className="mt-4 text-2xl text-center md:text-left font-bold text-white md:text-5xl">
            Unlock Your Potential with <br /> Comprehensive Digital Marketing{" "}
            <br /> Solutions Tailored for You
          </h1>
          <p className="mt-5 text-xs text-center md:text-left font-semibold text-white md:text-base">
            Lorem ipsum dolor sit amet consectetur. Mi euismod tempor
            suspendisse neque <br />
            egestas quisque. Diam tortor turpis quis aliquam.
          </p>

          {/* Btn */}
          <div className="flex justify-center md:justify-start">
            <button
              className="flex gap-2 px-3 py-2 mt-6 text-white
             bg-blue-600 rounded-l-full rounded-r-full md:px-5 md:py-3 md:mt-8"
            >
              Learn more
              <Image className="h-6 w-6" src={arrow} alt="" />
            </button>
          </div>

          {/* Line */}
          <div className="h-[1px] md:w-[640px] w-[300px] bg-stone-400 mx-auto md:mx-0 md:mt-20 mt-12 md:mb-20 mb-12"></div>

          {/* Customer Testimonial */}
          <div className="flex flex-col items-center md:items-start md:flex-row gap-2 md:gap-6">
            <Image
              className="w-12 h-12 rounded-full  bg-yellow-400 p-[2px]"
              src={image}
              alt=""
            />
            <div className="text-center md:text-left">
              <h2 className="md:text-xl text-lg font-bold text-[#F6F6F6]">
                Albert Flores
              </h2>
              <h4 className="md:text-base text-md md:font-semibold text-[#F6F6F6]">
                Role at @Company name
              </h4>
            </div>
          </div>
          <p className="text-stone-200 text-center md:text-left md:mt-8 mt-4 md:text-md text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore <br />
            magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
            exercitation ullamco laboris nisi ut aliquip ex ea commodo <br />
            consequat. Duis aute irure dolor in reprehenderit in <br />
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </motion.div>

        {/* ------- Card Part -------- */}
        <div className="relative hidden md:block md:mt-[135px] mt-[80px]">
          {/* ============ main card ========== */}
          <div
            className="relative md:w-[530px] w-[300px] md:h-[735px] 
          h-[450px] rounded-2xl overflow-hidden"
          >
            <Image
              src={wallpaper}
              alt="Main Card"
              className="w-full h-full object-cover rounded-2xl"
              priority
            />

            {/* Content on top of the image */}
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col">
              {/* Top user image */}
              <div className="flex items-center gap-4 md:gap-6">
                <Image
                  src={image}
                  alt="User"
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-yellow-400 p-[2px]"
                />
              </div>

              {/* Inside image */}
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="mt-10"
              >
                <Image
                  src={coding}
                  alt="Coding"
                  className="w-full md:h-[305px] h-[250px] rounded-xl border-4 border-gray-500"
                />
              </motion.div>
            </div>
          </div>

          {/* mini card 1 */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="md:top-20 top-15 md:left-70 left-30 absolute md:h-[98px]
             h-[70px] md:w-[350px] w-[200px] bg-gray-900 rounded-lg border-1 border-stone-500"
          >
            <div className="flex items-center justify-end gap-2 text-center pt-[12px]">
              <Image
                className="w-10 h-10 pl-2 md:w-12 md:h-12 rounded-full"
                src={image}
                alt=""
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="265"
                height="66"
                viewBox="0 0 265 66"
                fill="none"
              >
                <path
                  d="M59.1627 15.3715C25.1169 8.62798 0 45.3845 0 45.3845V65.304H264.947V0.791504C264.947 0.791504 210.801 36.4627 181.826 28.3942C169.303 24.9072 165.516 13.3603 152.613 10.6451C132.639 6.44238 128.996 33.4883 108.428 31.0837C90.4096 28.9771 76.7436 18.8538 59.1627 15.3715Z"
                  fill="url(#paint0_linear_355_878)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_355_878"
                    x1="132.473"
                    y1="0.791504"
                    x2="132.473"
                    y2="65.304"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#04ACEB" stopOpacity="0.67" />
                    <stop offset="1" stopColor="#2D2F40" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* mini card 2 */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="md:top-120 top-70 md:-left-20 -left-1
             absolute md:h-[98px] h-[70px] md:w-[350px] w-[200px] bg-gray-900
              rounded-lg border-1 border-stone-500 "
          >
            <div className="items-center md:py-[12px] py-2 md:px-4 px-2">
              <h4 className="text-xs text-white md:text-base md:font-semibold">
                feedback
              </h4>
              <div className="flex items-center gap-2 mt-1 md:gap-5">
                <h2 className="text-3xl font-bold text-white md:text-5xl">
                  4.5
                </h2>
                {/* star */}
                <div className="flex gap-1">
                  <Image
                    className="w-5 h-5 md:w-8 md:h-8"
                    src={star}
                    alt="star"
                  />
                  <Image
                    className="w-5 h-5 md:w-8 md:h-8"
                    src={star}
                    alt="star"
                  />
                  <Image
                    className="w-5 h-5 md:w-8 md:h-8"
                    src={star}
                    alt="star"
                  />
                  <Image
                    className="w-5 h-5 md:w-8 md:h-8"
                    src={star}
                    alt="star"
                  />
                  <Image
                    className="w-5 h-5 md:w-8 md:h-8"
                    src={star}
                    alt="star"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyNexgen;
