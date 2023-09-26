import React from "react";
import Link from "next/link";
import Image from "next/image";

import club1 from "@/assets/img/fans/fans1.png";
import club2 from "@/assets/img/fans/fans2.png";
import club3 from "@/assets/img/fans/digital1.png";

export default function HomeNews() {
  return (
    <>
      <div className="h-max mx-auto w-full lg:w-1/2 flex flex-col space-y-4 px-4 py-0 md:py-4 lg:px-0 justify-center2 items-center2 bg-[#f5f7f9]">
        <div className="flex space-x-2 px-2 lg:px-0">
          <button className="flex rounded px-2 py-1 items-center bg-[#dc052d]">
            <span className=" font-semibold text-white text-sm">All</span>
          </button>
          <button className="flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
            <span className=" font-semibold text-[#002f6c] text-sm">News</span>
          </button>
          <button className="flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
            <span className=" font-semibold text-[#002f6c] text-sm">Club</span>
          </button>
          <button className="flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
            <span className=" font-semibold text-[#002f6c] text-sm">
              Bundesliga
            </span>
          </button>
          <button className="flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
            <span className=" font-semibold text-[#002f6c] text-sm">
              Champion League
            </span>
          </button>
        </div>
        <div className="flex flex-row flex-wrap  mx-auto w-full md:w-12/12 ">
          <div className="px-3 py-3 md:w-1/3 lg:w-1/3">
          <div className=" bg-white group flex flex-col overflow-hidden hover:scale-105 shadow ">
            <Link
              href="https://statamic.com/blog/statamic-4-unleashed"
              className="relative"
            >
              <Image src={club1} alt="" className="w-80" />{" "}
              <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
            </Link>{" "}
            <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
              <div className="font-semibold text-sm uppercase text-red-500">
                Membership
              </div>
              <h3 className="font-semibold text-lg text-[#002f6c]">
                <Link href="https://statamic.com/blog/statamic-4-unleashed">
                  Become part of the FC Bayern family!
                </Link>
              </h3>{" "}
            </div>
          </div>
          </div>

          <div className="px-3 py-3 md:w-1/3 lg:w-1/3">
          <div className=" bg-white group flex flex-col overflow-hidden hover:scale-105 shadow ">
            <Link
              href="https://statamic.com/blog/statamic-4-unleashed"
              className="relative"
            >
              <Image src={club2} alt="" className="w-80" />{" "}
              <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
            </Link>{" "}
            <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
              <div className="font-semibold text-sm uppercase text-red-500">
                Membership
              </div>
              <h3 className="font-semibold text-lg text-[#002f6c]">
                <Link href="https://statamic.com/blog/statamic-4-unleashed">
                  Become part of the FC Bayern family!
                </Link>
              </h3>{" "}
            </div>
          </div>
          </div>
          
          <div className="px-3 py-3 md:w-1/3 lg:w-1/3">
          <div className=" bg-white group flex flex-col overflow-hidden hover:scale-105 shadow ">
            <Link
              href="https://statamic.com/blog/statamic-4-unleashed"
              className="relative"
            >
              <Image src={club3} alt="" className="w-80" />{" "}
              <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
            </Link>{" "}
            <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
              <div className="font-semibold text-sm uppercase text-red-500">
                Membership
              </div>
              <h3 className="font-semibold text-lg text-[#002f6c]">
                <Link href="https://statamic.com/blog/statamic-4-unleashed">
                  Become part of the FC Bayern family!
                </Link>
              </h3>{" "}
            </div>
          </div>
          </div>

          <div className="px-3 py-3 md:w-1/3 lg:w-1/3">
          <div className=" bg-white group flex flex-col overflow-hidden hover:scale-105 shadow ">
            <Link
              href="https://statamic.com/blog/statamic-4-unleashed"
              className="relative"
            >
              <Image src={club1} alt="" className="w-80" />{" "}
              <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
            </Link>{" "}
            <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
              <div className="font-semibold text-sm uppercase text-red-500">
                Membership
              </div>
              <h3 className="font-semibold text-lg text-[#002f6c]">
                <Link href="https://statamic.com/blog/statamic-4-unleashed">
                  Become part of the FC Bayern family!
                </Link>
              </h3>{" "}
            </div>
          </div>
          </div>

          <div className="px-3 py-3 md:w-1/3 lg:w-1/3">
          <div className=" bg-white group flex flex-col overflow-hidden hover:scale-105 shadow ">
            <Link
              href="https://statamic.com/blog/statamic-4-unleashed"
              className="relative"
            >
              <Image src={club2} alt="" className="w-80" />{" "}
              <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
            </Link>{" "}
            <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
              <div className="font-semibold text-sm uppercase text-red-500">
                Membership
              </div>
              <h3 className="font-semibold text-lg text-[#002f6c]">
                <Link href="https://statamic.com/blog/statamic-4-unleashed">
                  Become part of the FC Bayern family!
                </Link>
              </h3>{" "}
            </div>
          </div>
          </div>

          <div className="px-3 py-3 md:w-1/3 lg:w-1/3">
          <div className=" bg-white group flex flex-col overflow-hidden hover:scale-105 shadow ">
            <Link
              href="https://statamic.com/blog/statamic-4-unleashed"
              className="relative"
            >
              <Image src={club3} alt="" className="w-80" />{" "}
              <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
            </Link>{" "}
            <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
              <div className="font-semibold text-sm uppercase text-red-500">
                Membership
              </div>
              <h3 className="font-semibold text-lg text-[#002f6c]">
                <Link href="https://statamic.com/blog/statamic-4-unleashed">
                  Become part of the FC Bayern family!
                </Link>
              </h3>{" "}
            </div>
          </div>
          </div>

        </div>
        <div className="flex flex-row justify-between px-2 mx-auto w-full md:w-12/12 space-x-6 items-center">
            <Link href={"/"} className="flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
            <span className=" font-semibold text-[#002f6c]">All News</span>
          </Link>
        </div>
      </div>
    </>
  );
}
