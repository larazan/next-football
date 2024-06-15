import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoTop from "@/components/GoTop";

import news1 from "@/assets/img/news/news1.png";
import news2 from "@/assets/img/news/news2.png";
import news3 from "@/assets/img/news/news3.png";
import news4 from "@/assets/img/news/news4.png";
import news5 from "@/assets/img/news/news5.png";
import news6 from "@/assets/img/news/news6.png";
import news7 from "@/assets/img/news/news7.png";
import Pagination from "@/components/Pagination";

export default function News() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <GoTop />

      <div className="h-max  flex flex-row space-x-6 px-2 md:px-6 py-4 md:py-4 justify-center2 items-center2 bg-[#f5f7f9]">
        <div className="flex flex-col space-y-4 mx-auto w-full lg:w-1/2 pb-10">
          <div className="flex flex-row justify-between mx-auto w-full md:w-12/12 space-x-6 items-center">
            <span className="text-lg md:text-2xl font-bold text-[#002f6c] uppercase">
              News
            </span>
          </div>
          <div className="flex flex-col md:flex-row w-full space-y-3 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-2/3 flex flex-wrap space-x-2">
              <button className="flex rounded px-2 py-1 items-center bg-[#dc052d] ">
                <span className=" font-semibold text-white text-sm">All</span>
              </button>
              <button className="flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
                <span className=" font-semibold text-[#002f6c] text-sm">
                  Club
                </span>
              </button>
              <button className="flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
                <span className=" font-semibold text-[#002f6c] text-sm">
                  Bundesliga
                </span>
              </button>
              <button className="flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
                <span className=" font-semibold text-[#002f6c] text-sm">
                  Champions League
                </span>
              </button>
            </div>
            <div className="w-full md:w-1/3 flex md:justify-end">
              <form className="w-full md:w-2/3">
                <div className="relative">
                  <label className="sr-only">Search</label>
                  <input
                    className="w-full h-9 border-0 focus:ring-transparent placeholder-[#002f6c] placeholder-semibold appearance-none py-2 pl-7 pr-4 rounded outline-none bg-blue-100 text-sm text-[#002f6c]"
                    type="search"
                    placeholder="Search Anything…"
                  />
                  <button
                    className="absolute inset-0 right-auto group"
                    type="submit"
                    aria-label="Search"
                  >
                    <svg
                      className="w-3 h-3 shrink-0 fill-current text-[#002f6c] group-hover:text-slate-500 ml-2 mr-2"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                      <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full">
              <Image src={news1} alt="" className="w-full object-contain" />
            </div>
          </div>
          <div className="flex mx-auto  w-12/12 md:w-12/12 py-2 justify-center2 items-center pb-5">
            <div className="grid grid-cols-2 mx-auto gap-x-7 gap-y-8 sm:grid-cols-1 md:grid-cols-2">
              <div className=" bg-white group flex flex-col overflow-hidden hover:scale-105 shadow ">
                <Link href={"/news/1"} className="relative">
                  <Image src={news2} alt="" className="w-full object-cover" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <div className="font-semibold text-xs md:text-sm uppercase text-red-500">
                    Membership
                  </div>
                  <h3 className="font-semibold text-base md:text-lg leading-tight text-[#002f6c]">
                    <Link href={"/news/1"}>
                      Become part of the FC Bayern family!
                    </Link>
                  </h3>{" "}
                </div>
              </div>

              <div className=" bg-white group flex flex-col overflow-hidden hover:scale-105 shadow ">
                <Link href={"/news/1"} className="relative">
                  <Image src={news3} alt="" className="w-full" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <div className="font-semibold text-xs md:text-sm uppercase text-red-500">
                    Membership
                  </div>
                  <h3 className="font-semibold text-base md:text-lg leading-tight text-[#002f6c]">
                    <Link href={"/news/1"}>
                      Become part of the FC Bayern family!
                    </Link>
                  </h3>{" "}
                </div>
              </div>

              <div className=" bg-white group flex flex-col overflow-hidden hover:scale-105 shadow ">
                <Link href={"/news/1"} className="relative">
                  <Image src={news4} alt="" className="w-full" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <div className="font-semibold text-xs md:text-sm uppercase text-red-500">
                    Membership
                  </div>
                  <h3 className="font-semibold text-base md:text-lg leading-tight text-[#002f6c]">
                    <Link href={"/news/1"}>
                      Become part of the FC Bayern family!
                    </Link>
                  </h3>{" "}
                </div>
              </div>

              <div className=" bg-white group flex flex-col overflow-hidden hover:scale-105 shadow ">
                <Link href={"/news/1"} className="relative">
                  <Image src={news5} alt="" className="w-full" />{" "}
                  <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                </Link>{" "}
                <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                  <div className="font-semibold text-xs md:text-sm uppercase text-red-500">
                    Membership
                  </div>
                  <h3 className="font-semibold text-base md:text-lg leading-tight text-[#002f6c]">
                    <Link href={"/news/1"}>
                      Become part of the FC Bayern family!
                    </Link>
                  </h3>{" "}
                </div>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </div>

      <Footer />
    </>
  );
}
