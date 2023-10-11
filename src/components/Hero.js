import React from "react";
import Link from "next/link";
import Image from "next/image";

import bg from "@/assets/img/hero_homekit_foden_mobile.jpg";
import truck from "@/assets/img/icons/truck-fast.svg";
import shield from "@/assets/img/icons/shield-tick.svg";
import support from "@/assets/img/icons/support.svg";

const Hero = () => {
  return (
    <>
      <section>
        <Image src={bg} alt="" />
      </section>
      <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
              A lightweight Nike ZoomX midsole is combined with
              increased stack heights to help provide cushioning
              during extended stretches of running.
          </div>
      </div>
      {/* <section class="padding-x py-10 bg-gray-100">
        <section class="mx-auto w-10/12 flex justify-center flex-wrap gap-9">
          <div class="bg-white flex-1 sm:w-[350px] sm:min-w-[350px] w-full border rounded-[20px] shadow-3xl px-10 py-16">
            <div class="w-11 h-11 flex justify-center items-center bg-orange-500 rounded-full">
              <Image
                src={truck}
                alt="Free shipping"
                width="24"
                height="24"
              />
            </div>
            <h3 class="mt-5 font-palanquin text-3xl leading-normal font-bold">
              Free shipping
            </h3>
            <p class="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
              Enjoy seamless shopping with our complimentary shipping service.
            </p>
          </div>
          <div class="bg-white flex-1 sm:w-[350px] sm:min-w-[350px] w-full border rounded-[20px] shadow-3xl px-10 py-16">
            <div class="w-11 h-11 flex justify-center items-center bg-orange-500 rounded-full">
              <Image
                src={shield}
                alt="Secure Payment"
                width="24"
                height="24"
              />
            </div>
            <h3 class="mt-5 font-palanquin text-3xl leading-normal font-bold">
              Secure Payment
            </h3>
            <p class="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
              Experience worry-free transactions with our secure payment
              options.
            </p>
          </div>
          <div class="bg-white flex-1 sm:w-[350px] sm:min-w-[350px] w-full border rounded-[20px] shadow-3xl px-10 py-16">
            <div class="w-11 h-11 flex justify-center items-center bg-orange-500 rounded-full">
              <Image
                src={support}
                alt="Love to help you"
                width="24"
                height="24"
              />
            </div>
            <h3 class="mt-5 font-palanquin text-3xl leading-normal font-bold">
              Love to help you
            </h3>
            <p class="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
              Our dedicated team is here to assist you every step of the way.
            </p>
          </div>
        </section>
      </section> */}
    </>
  );
};

export default Hero;
