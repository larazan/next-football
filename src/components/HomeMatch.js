import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import augsburg from "@/assets/img/clubs/augsburg.png";
import bayern from "@/assets/img/clubs/bayern.png";
import bochum from "@/assets/img/clubs/bochum.png";
import darmstadt from "@/assets/img/clubs/darmstadt.png";
import dortmunt from "@/assets/img/clubs/dortmunt.png";
import frankfrut from "@/assets/img/clubs/frankfrut.png";
import gladbach from "@/assets/img/clubs/gladbach.png";
import heidenheim from "@/assets/img/clubs/heidenheim.png";
import hoffenheim from "@/assets/img/clubs/hoffenheim.png";
import koln from "@/assets/img/clubs/koln.png";
import leverkusen from "@/assets/img/clubs/leverkusen.png";
import liverpool from "@/assets/img/clubs/liverpool.png";
import mainz from "@/assets/img/clubs/mainz.png";
import city from "@/assets/img/clubs/manchester-city.png";
import rbleipzig from "@/assets/img/clubs/rbleipzig.png";
import scfreiburg from "@/assets/img/clubs/scfreiburg.png";
import union from "@/assets/img/clubs/union_berlin.png";
import vfb from "@/assets/img/clubs/vfb.png";
import bremen from "@/assets/img/clubs/werderbremen.png";
import wolfsburg from "@/assets/img/clubs/wolfsburg.png";

export default function HomeMatch() {
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

  const matchData = [
    {
      competition: "Audi Football Summit, Friendly",
      home_team: "FC Bayern Munich",
      away_team: "Manchester City",
      home_logo: bayern,
      away_logo: city,
      fthg: 1,
      ftag: 1,
      ftr: "D",
      stadium: "New Japan National Stadium",
      time: "Wed, 26/07/23, 17:30 GMT+7",
    },
    {
      competition: "Bundesliga, Matchday 1",
      home_team: "SV Werder Bremen",
      away_team: "FC Bayern Munich",
      home_logo: bremen,
      away_logo: bayern,
      fthg: null,
      ftag: null,
      ftr: null,
      stadium: "",
      time: "Wed, 26/07/23, 17:30 GMT+7",
    },
    {
      competition: "Bundesliga, Matchday 2",
      home_team: "FC Bayern Munich",
      away_team: "FC Augsburg",
      home_logo: bayern,
      away_logo: augsburg,
      fthg: null,
      ftag: null,
      ftr: null,
      stadium: "Stadium Alianz Arena, Munich",
      time: "Wed, 26/07/23, 17:30 GMT+7",
    },
    {
      competition: "Bundesliga, Matchday 3",
      home_team: "Borussia Monchengladbach",
      away_team: "FC Bayern Munich",
      home_logo: gladbach,
      away_logo: bayern,
      fthg: null,
      ftag: null,
      ftr: null,
      stadium: "",
      time: "Wed, 26/07/23, 17:30 GMT+7",
    },
    {
      competition: "Bundesliga, Matchday 4",
      home_team: "FC Bayern Munich",
      away_team: "Bayer 04 Leverkusen",
      home_logo: bayern,
      away_logo: leverkusen,
      fthg: null,
      ftag: null,
      ftr: null,
      stadium: "Stadium Alianz Arena, Munich",
      time: "Wed, 26/07/23, 17:30 GMT+7",
    },
    {
      competition: "Bundesliga, Matchday 5",
      home_team: "RB Leipzig",
      away_team: "FC Bayern Munich",
      home_logo: rbleipzig,
      away_logo: bayern,
      fthg: null,
      ftag: null,
      ftr: null,
      stadium: "",
      time: "Wed, 26/07/23, 17:30 GMT+7",
    },
    {
      competition: "Bundesliga, Matchday 6",
      home_team: "FC Bayern Munich",
      away_team: "SC Freiburg",
      home_logo: bayern,
      away_logo: scfreiburg,
      fthg: null,
      ftag: null,
      ftr: null,
      stadium: "Stadium Alianz Arena, Munich",
      time: "Wed, 26/07/23, 17:30 GMT+7",
    },
    {
      competition: "Bundesliga, Matchday 7",
      home_team: "FSV Mainz 05",
      away_team: "FC Bayern Munich",
      home_logo: mainz,
      away_logo: bayern,
      fthg: null,
      ftag: null,
      ftr: null,
      stadium: "",
      time: "Wed, 26/07/23, 17:30 GMT+7",
    },
    {
      competition: "Bundesliga, Matchday 8",
      home_team: "FC Bayern Munich",
      away_team: "SV Darmstadt",
      home_logo: bayern,
      away_logo: darmstadt,
      fthg: null,
      ftag: null,
      ftr: null,
      stadium: "Stadium Alianz Arena, Munich",
      time: "Wed, 26/07/23, 17:30 GMT+7",
    },
  ];

  return (
    <>
      <div className="h-max flex px-2 py-0 md:py-2 w-full justify-center2 items-center2 bg-white">
        {/* <div className="flex flex-row justify-between mx-auto w-11/12 md:w-12/12 space-x-6 items-center">
          <div className="flex space-x-1">
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
          </div>
        </div> */}

        <div className="relative flex flex-row mx-auto w-11/12 lg:w-1/2 justify-between items-center">
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
            {matchData.map((data, index) => {
              return (
                
                  <div
                    className="transition-all duration-150 flex mr-[.5em] "
                    key={index}
                  >
                    <div className="flex w-[180px] h-[150px] justify-center bg-white">
                      <div className=" bg-white  flex ">
                        <Link
                          href="/"
                          className="flex flex-col space-y-3 justify-center items-center"
                        >
                          <div className="flex space-x-3">
                            <Image
                              src={data.home_logo}
                              alt=""
                              className="w-13 h-13"
                            />
                            <Image
                              src={data.away_logo}
                              alt=""
                              className="w-13 h-13"
                            />
                          </div>
                          <div className="flex flex-col justify-center items-center">
                            {data.ftr == null ? (
                              <>
                                <div className="">
                                  <span className="font-bold text-2xl text-[#002f6c]">
                                    Sat, 29/08
                                  </span>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex space-x-1 text-[#002f6c]">
                                  <div className="font-bold text-2xl">
                                    {data.fthg}
                                  </div>
                                  <div className="font-bold text-2xl">:</div>
                                  <div className="font-bold text-2xl">
                                    {data.ftag}
                                  </div>
                                </div>
                              </>
                            )}

                            <div>
                              <span className="text-sm text-gray-500">
                                17:00 GMT+7
                              </span>
                            </div>
                          </div>
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                
              );
            })}

            {/*  */}
            <div className="transition-all duration-150 flex mr-[.5em] ">
              <div className="flex w-[180px] h-[150px] justify-center bg-white">
                <div className=" bg-white  flex ">
                  <Link
                    href="/"
                    className="flex flex-col space-y-3 justify-center items-center"
                  >
                    <div className="flex space-x-3">
                      <Image src={bayern} alt="" className="w-13 h-13" />
                      <Image src={bayern} alt="" className="w-13 h-13" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="flex space-x-1">
                        <div className="font-bold text-2xl">1</div>
                        <div className="font-bold text-2xl">:</div>
                        <div className="font-bold text-2xl">3</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">
                          17:00 GMT+7
                        </span>
                      </div>
                    </div>
                  </Link>{" "}
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
