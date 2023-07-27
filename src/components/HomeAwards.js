import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import cl_pokale from "@/assets/img/honors/cl_pokale.png";
import dfb_pokale from "@/assets/img/honors/dfb_pokale.png";
import dfl_pokale from "@/assets/img/honors/dfl_pokale.png";
import ec_pokalsieger from "@/assets/img/honors/ec_pokalsieger.png";
import eu_supercup from "@/assets/img/honors/eu_supercup.png";
import klubweltmeisterschaft_ from "@/assets/img/honors/klubweltmeisterschaft_.png";
import supercup from "@/assets/img/honors/supercup.png";
import uefa_cup from "@/assets/img/honors/uefa_cup.png";

export default function HomeAwards() {
  let scrl = useRef(null);
  const shiftN = 230;
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const awardData = [
    {
      title: "Champion League",
      amount: 6,
      img: cl_pokale,
    },
    {
      title: "UEFA Cup",
      amount: 1,
      img: uefa_cup,
    },
    {
      title: "UEFA Cup Winners Cup",
      amount: 1,
      img: ec_pokalsieger,
    },
    {
      title: "FIFA Club World Cup",
      amount: 2,
      img: klubweltmeisterschaft_,
    },
    {
      title: "UEFA Supercup",
      amount: 2,
      img: eu_supercup,
    },
    {
      title: "DFB Pokale",
      amount: 20,
      img: dfb_pokale,
    },
    {
      title: "DFL Pokale",
      amount: 18,
      img: dfl_pokale,
    },
    {
      title: "Champion League",
      amount: 6,
      img: cl_pokale,
    },    
  ]

  return (
    
    <>
      <div className="h-max flex flex-col space-y-3 px-6 py-0 md:py-4 justify-center2 items-center2 bg-[#f5f7f9]">
        <div className="flex flex-row justify-between mx-auto w-full md:w-12/12 space-x-6 items-center">
            <Link href={"/"} className="flex space-x-1 items-center hover:opacity-80">
            <span className="text-2xl font-bold text-[#002f6c]">Honours</span>
            
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

        <div className="relative flex flex-row mx-auto w-full md:w-12/12 justify-between items-center">
          {scrollX !== 0 && (
            <div className="top-[40%] left-0">
              <button
                onClick={() => slide(-shiftN)}
                className="none absolute top-[35%] -left-5 z-10 cursor-pointer rounded-full px-2 py-2 bg-[#002f6c] border-2 border-gray-800 shadow text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          )}
          {!scrolEnd && (
            <div className="top-[40%] right-0">
              <button
                onClick={() => slide(+shiftN)}
                className="none absolute top-[35%] -right-5 z-10 cursor-pointer rounded-full px-2 py-2 bg-[#002f6c] border-2 border-gray-800 shadow text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          )}
          {/*  */}
          <div
            className="mb-[1em] flex flex-row overflow-x-auto scroll-smooth"
            ref={scrl}
            onScroll={scrollCheck}
          >
            {awardData.map((data, index) => {
              return (
                <>
                <div className="transition-all duration-150 flex mr-[.5em] ">
              <div className="flex w-[180px] p-5 justify-center bg-white shadow hover:shadow-lg">
                <div className=" bg-white  flex ">
                  <Link
                    href="/"
                    className="flex flex-col space-y-3 justify-center items-center"
                  >
                    <div className="flex space-x-3">
                      <Image src={data.img} alt="" className="w-26 " />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="flex text-center">
                        <span className="font-bold text-sm text-[#002f6c]">{data.title}</span>
                      </div>
                      <div>
                        <span className="font-bold text- text-[#002f6c]">{data.amount}</span>
                      </div>
                    </div>
                  </Link>{" "}
                </div>
              </div>
            </div>
                </>
              )
            })}
            
          </div>
        </div>

        <div className="flex flex-row justify-between mx-auto w-full md:w-12/12 space-x-6 items-center">
            <Link href={"/"} className="flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
            <span className=" font-semibold text-[#002f6c]">All achievements</span>
            
          </Link>
        
        </div>
      </div>
    </>
  );
}
