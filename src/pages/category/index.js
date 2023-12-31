import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Navbar";
import Footer from "@/components/FooterShop";
import ScrollTop from "@/components/ScrollTop";
import ProductCard from "@/components/ProductCard";

import bg from "@/assets/img/PLP_Banner_Mobile_1445x800_mothersday.jpg";

function Category() {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ScrollTop />

      <div className="">
        <Image src={bg} alt="" className="h-32 md:h-60" />
      </div>
      <div className="w-full py-1 md:py-20 relative bg-white">
        <div className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto`}>
          <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
            <div className="text-[28px] md:text-[34px] md:mb-5 font-semibold tracking-tight uppercase leading-tight text-slate-900">
              category
            </div>
          </div>

          <ProductCard />

          <div className="flex gap-3 items-center justify-center my-10 md:my-0">
            <button
              className={`rounded py-2 px-4 bg-black text-white uppercase tracking-tight font-semibold disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === 1}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              Previous
            </button>

            <span className="font-bold text-slate-900">{`${pageIndex} of ${
              pageIndex + 2
            }`}</span>

            <button
              className={`rounded py-2 px-4 bg-[#001838] text-white uppercase tracking-tight font-semibold disabled:bg-gray-200 disabled:text-gray-500`}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Next
            </button>
          </div>

          {/* PAGINATION BUTTONS END */}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Category;
