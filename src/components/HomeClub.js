import Link from "next/link";
import Image from "next/image";

import club1 from "@/assets/img/fans/fans1.png";
import club2 from "@/assets/img/fans/fans2.png";
import club3 from "@/assets/img/fans/digital1.png";

export default function HomeClub() {
  return (
    <>
      <div className="h-max mx-auto w-full lg:w-1/2 flex flex-col space-y-3 px-3 md:px-6 lg:px-0 py-5 md:py-4 justify-center2 items-center2 bg-[#f5f7f9]">
        <div className="flex flex-row justify-between mx-auto w-full md:w-12/12 space-x-6 items-center">
          <Link
            href={"/"}
            className="flex space-x-1 items-center hover:opacity-80"
          >
            <span className="text-lg md:text-2xl font-bold text-[#002f6c]">
              Club
            </span>
          </Link>
          {/* <div className="flex space-x-1">
            <div
              onClick={() => slide(-shiftN)}
              className={`p-1 rounded-full  shadow-md text-black  ${scrollX !== 0 ? 'bg-[#fd9c0c] cursor-pointer' : 'bg-orange-300 opacity-50 cursor-default'} border-2 border-gray-800 shadow-menu`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <div
              onClick={() => slide(+shiftN)}
              className={`p-1 rounded-full  shadow-md text-black  ${!scrolEnd ? 'bg-[#fd9c0c] cursor-pointer' : 'bg-orange-300 opacity-50 cursor-default'} border-2 border-gray-800 shadow-menu`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </div>
          </div> */}
        </div>
        <div className="flex space-x-3  mx-auto w-full md:w-12/12 ">
          <div className=" bg-white group flex flex-col overflow-hidden hover:scale-105 shadow">
            <Link href="/news/one" className="relative">
              <Image src={club1} alt="" className="w-80" />{" "}
              <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
            </Link>{" "}
            <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
              <div className="font-semibold text-xs md:text-xs uppercase text-red-500">
                Membership
              </div>
              <Link href="/news/one">
                <span className="font-semibold text-base md:text-md text-[#002f6c] leading-tight">
                  Become part of the FC Bayern family!
                </span>
              </Link>
            </div>
          </div>

          <div className=" bg-white group flex flex-col overflow-hidden hover:scale-105 shadow">
            <Link href="/news/one" className="relative">
              <Image src={club2} alt="" className="w-80" />{" "}
              <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
            </Link>{" "}
            <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
              <div className="font-semibold text-xs md:text-xs uppercase text-red-500">
                Membership
              </div>
              <Link href="/news/one">
                <span className="font-semibold text-base md:text-md text-[#002f6c] leading-tight">
                  Become part of the FC Bayern family!
                </span>
              </Link>
            </div>
          </div>

          <div className=" bg-white group flex flex-col overflow-hidden hover:scale-105 shadow">
            <Link href="/news/one" className="relative">
              <Image src={club3} alt="" className="w-80" />{" "}
              <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
            </Link>{" "}
            <div className="px-3 py-2 pb-4 flex flex-col space-y-1">
              <div className="font-semibold text-xs md:text-xs uppercase text-red-500">
                Membership
              </div>
              <Link href="/news/one">
                <span className="font-semibold text-base md:text-md text-[#002f6c] leading-tight">
                  Become part of the FC Bayern family!
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
