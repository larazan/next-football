import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";


import highlight1 from "@/assets/img/media/highlight1.png"
import highlight2 from "@/assets/img/media/highlight2.png"
import highlight3 from "@/assets/img/media/highlight3.png"
import highlight4 from "@/assets/img/media/highlight4.png"
import highlight5 from "@/assets/img/media/highlight5.png"

export default function Highlight() {
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

  const highlightData = [
    {
      title: "Bayern vs Lazio",
      desc: "Bundesliga Matchday 22",
      img: highlight1
    },
    {
      title: "Freiburg vs Bayern",
      desc: "Bundesliga Matchday 22",
      img: highlight2
    },
    {
      title: "Bayern vs Mainz",
      desc: "Bundesliga Matchday 22",
      img: highlight3
    },
    {
      title: "Damstadt vs Bayern",
      desc: "Bundesliga Matchday 22",
      img: highlight4
    },
    {
      title: "Lazio vs Bayern",
      desc: "Bundesliga Matchday 22",
      img: highlight5
    },
  ]

  return (
    <>
      <div className="h-max mx-auto w-full lg:w-1/2 flex flex-col space-y-3 px-3 md:px-6 lg:px-0 py-0 md:py-4 justify-center2 items-center2 bg-transparent">
        <div className="flex flex-row justify-between mx-auto w-full md:w-12/12 space-x-6 items-center">
          <Link
            href={"/"}
            className="flex space-x-1 items-center hover:opacity-80"
          >
            <span className="text-lg md:text-2xl font-bold text-white">
              Highlight
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

        <div className="relative flex flex-row mx-auto w-full md:w-12/12 justify-between items-center">
          {scrollX !== 0 && (
            <div className="top-[40%] left-0">
              <button
                onClick={() => slide(-shiftN)}
                className="none absolute top-[35%] -left-0 md:-left-5 z-10 cursor-pointer rounded-full px-2 py-2 bg-[#002f6c] border-2 border-gray-800 shadow text-white"
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
                className="none absolute top-[35%] -right-0 md:-right-5 z-10 cursor-pointer rounded-full px-2 py-2 bg-[#002f6c] border-2 border-gray-800 shadow text-white"
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
            className="mb-[1em] flex flex-row overflow-x-hidden"
            ref={scrl}
            onScroll={scrollCheck}
          >
            {highlightData.map((data, index) => {
              return (
                <div
                  className="transition-all duration-150 flex mr-[.9em] "
                  key={index}
                >
                  <div className="flex w-[280px] md:w-[350px] justify-center bg-white border border-gray-700 rounded shadow hover:shadow-lg">
                    <div className=" bg-white flex ">
                    <Link href="/news/one" className="relative">
                    <div className="absolute z-10 bottom-0 h-40 w-full bg-gradient-to-b from-transparent to-[#0a1016]"></div>
                    <Image src={data.img} alt="" className="w-full" />{" "}
                    <div className="absolute bottom-0  group-hover:opacity-75 z-20 ">
                      <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                        <div className="w-10 h-10 font-semibold text-xs md:text-xs uppercase text-red-500">
                          <svg
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            class="base-icon__StyledIconSvg-sc-fzrbhv-0 eCHnXp"
                          >
                            <title>icon</title>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6 4.5H18C19.933 4.5 21.5 6.067 21.5 8V16C21.5 17.933 19.933 19.5 18 19.5H6C4.067 19.5 2.5 17.933 2.5 16V8C2.5 6.067 4.067 4.5 6 4.5ZM1 8C1 5.23858 3.23858 3 6 3H18C20.7614 3 23 5.23858 23 8V16C23 18.7614 20.7614 21 18 21H6C3.23858 21 1 18.7614 1 16V8ZM15 12L10 9V15L15 12Z"
                            ></path>
                          </svg>
                        </div>

                        <Link href="/news/one">
                          <span className="font-bold text-base md:text-md text-white leading-tight">
                            {data.title}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </Link>{" "}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
      </div>
    </>
  );
}
