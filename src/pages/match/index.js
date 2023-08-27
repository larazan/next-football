import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoTop from "@/components/GoTop";

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

export default function News() {
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
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <GoTop />

      <div className="relative  block min-h-80 lg:col-span-2 lg:h-full">
        <div className="py-0 flex flex-col space-y-2">
          <div className="h-max flex flex-col ">
            <div className="flex justify-between py-4 px-6 border-b items-start">
              <div className="flex space-x-2">
                <button className="flex rounded px-2 py-1 items-center bg-[#dc052d] ">
                  <span className=" font-semibold text-white text-sm">
                    Matchplan
                  </span>
                </button>
                <button className="flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
                  <span className=" font-semibold text-[#002f6c] text-sm">
                    Matchdays
                  </span>
                </button>
                <Link href={'/standing'}>
                <button className="flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
                  <span className=" font-semibold text-[#002f6c] text-sm">
                    Standings
                  </span>
                </button>
                </Link>
                <button className="flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
                  <span className=" font-semibold text-[#002f6c] text-sm">
                    Stats
                  </span>
                </button>
              </div>
              <div className="flex flex-col space-y-2 justify-end">
                <div className="flex flex-wrap md:flex-nowrap justify-end space-x-2">
                  <select
                    name="version"
                    className="input-select flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200 font-semibold text-[#002f6c] text-sm"
                  >
                    <option value="all">Season 2023/2024</option>
                    <option value="all">Season 2023/2024</option>
                    <option value="blog">Season 2023/2024</option>
                    <option value="boilerplate">Season 2023/2024</option>
                  </select>
                </div>
                <div className="flex space-x-2">
                  <div className="flex flex-wrap md:flex-nowrap items-center space-x-2">
                    <select
                      name="version"
                      className="input-select flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200 font-semibold text-[#002f6c] text-sm"
                    >
                      <option value="all">All competitions</option>
                      <option value="all">DFB Cup</option>
                      <option value="blog">Champion League</option>
                      <option value="boilerplate">
                        International Champion Cup
                      </option>
                    </select>
                    <button className="flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
                      <span className=" font-semibold text-[#002f6c] text-sm">
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
                            d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute2 bottom-0 pb-[1px] px-2 py-1.5 md:px-3 overflow-x-auto overflow-hidden">
              <ul class="flex items-center md:justify-center space-x-2 md:space-x-4  md:tracking-widest font-semibold text-xs  ">
                <li class=" border-b-2 border-[#0066b2] md:-mt-px  ">
                  <a
                    class=" inline-block py-2 font-bold text-[14px] text-[#0066b2]"
                    href="/movie"
                  >
                    <span class="hidden2 md:inline">Jul</span>
                  </a>
                </li>
                <li class=" border-b-2 border-white hover:border-[#0066b2] md:-mt-px  ">
                  <a
                    class=" inline-block py-2 font-bold text-[14px] text-[#0066b2]"
                    href="/movie"
                  >
                    <span class="hidden2 md:inline">Aug</span>
                  </a>
                </li>
                <li class=" border-b-2 border-white hover:border-[#0066b2] md:-mt-px  ">
                  <a
                    class=" inline-block py-2 font-bold text-[14px] text-[#0066b2]"
                    href="/movie"
                  >
                    <span class="hidden2 md:inline">Sep</span>
                  </a>
                </li>
                <li class=" border-b-2 border-white hover:border-[#0066b2] md:-mt-px  ">
                  <a
                    class=" inline-block py-2 font-bold text-[14px] text-[#0066b2]"
                    href="/movie"
                  >
                    <span class="hidden2 md:inline">Oct</span>
                  </a>
                </li>
                <li class=" border-b-2 border-white hover:border-[#0066b2] md:-mt-px  ">
                  <a
                    class=" inline-block py-2 font-bold text-[14px] text-[#0066b2]"
                    href="/movie"
                  >
                    <span class="hidden2 md:inline">Nov</span>
                  </a>
                </li>
                <li class=" border-b-2 border-white hover:border-[#0066b2] md:-mt-px  ">
                  <a
                    class=" inline-block py-2 font-bold text-[14px] text-[#0066b2]"
                    href="/movie"
                  >
                    <span class="hidden2 md:inline">Dec</span>
                  </a>
                </li>
                <li class=" border-b-2 border-white hover:border-[#0066b2] md:-mt-px  ">
                  <a
                    class=" inline-block py-2 font-bold text-[14px] text-[#0066b2]"
                    href="/movie"
                  >
                    <span class="hidden2 md:inline">Jan</span>
                  </a>
                </li>
                <li class=" border-b-2 border-white hover:border-[#0066b2] md:-mt-px  ">
                  <a
                    class=" inline-block py-2 font-bold text-[14px] text-[#0066b2]"
                    href="/movie"
                  >
                    <span class="hidden2 md:inline">Feb</span>
                  </a>
                </li>
                <li class=" border-b-2 border-white hover:border-[#0066b2] md:-mt-px  ">
                  <a
                    class=" inline-block py-2 font-bold text-[14px] text-[#0066b2]"
                    href="/movie"
                  >
                    <span class="hidden2 md:inline">Mar</span>
                  </a>
                </li>
                <li class=" border-b-2 border-white hover:border-[#0066b2] md:-mt-px  ">
                  <a
                    class=" inline-block py-2 font-bold text-[14px] text-[#0066b2]"
                    href="/movie"
                  >
                    <span class="hidden2 md:inline">Apr</span>
                  </a>
                </li>
                <li class=" border-b-2 border-white hover:border-[#0066b2] md:-mt-px  ">
                  <a
                    class=" inline-block py-2 font-bold text-[14px] text-[#0066b2]"
                    href="/movie"
                  >
                    <span class="hidden2 md:inline">May</span>
                  </a>
                </li>
                <li class=" border-b-2 border-white hover:border-[#0066b2] md:-mt-px  ">
                  <a
                    class=" inline-block py-2 font-bold text-[14px] text-[#0066b2]"
                    href="/movie"
                  >
                    <span class="hidden2 md:inline">Jun</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex px-6 py-10  w-full md:w-12/12 ">
              <span className="text-2xl font-bold text-[#002f6c] uppercase">
                Matchplan season 2023/2024
              </span>
            </div>
            <div className="flex flex-col space-y-6 py-4">
              <div className="flex flex-col">
                <div className="flex px-6  w-full md:w-12/12 ">
                  <span className="text-lg font-bold text-[#002f6c] uppercase">
                    Agustus
                  </span>
                </div>
                <div className="flex flex-col w-full px-6">
                  <div className="flex flex-col w-full h-24 py-1.5 border-y">
                    <div className="flex justify-between">
                      <div className="flex flex-col ">
                        <div>
                          <span className="text-xs text-gray-400">
                            Wed, 26/07/23, 17:30 GMT+7
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end">
                        <div>
                          <span className="text-xs text-gray-400">
                            Singapore Trophy, Friendly
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full justify-between items-center">
                      <div className="flex w-1/3 ">
                        <div>
                          <span className="text-sm font-bold text-[#002f6c]">
                            FC Liverpool
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col mx-auto2 w-1/3  items-center">
                        <div className="flex items-center space-x-5">
                          <div className="w-8">
                            <Image src={liverpool} alt />
                          </div>
                          <div className="w-16 flex items-center justify-center">
                            <span className="text-2xl font-bold">-</span>
                          </div>
                          <div className="w-8">
                            <Image src={bayern} alt />
                          </div>
                        </div>
                      </div>
                      <div className="flex w-1/3 justify-end items-end2">
                        <div>
                          <span className="text-sm font-bold text-[#002f6c]">
                            FC Bayern Munich
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mx-auto w-1/3 justify-end items-center">
                      <div>
                        <span className="text-xs text-gray-400">
                          Stadium: Allianz Arena, Munich
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex px-6  w-full md:w-12/12 ">
                  <span className="text-lg font-bold text-[#002f6c] uppercase">
                    September
                  </span>
                </div>
                {matchData.map((data, index) => {
                  return (
                    <>
                    <Link href={'/match/2'}>
                      <div className="flex flex-col w-full px-6 hover:bg-gray-100" key={index}>
                        <div className="flex flex-col w-full h-24 py-1.5 border-y">
                          <div className="flex justify-between">
                            <div className="flex flex-col ">
                              <div>
                                <span className="text-xs text-gray-400">
                                  {data.time}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-col items-end">
                              <div>
                                <span className="text-xs text-gray-400">
                                  {data.competition}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-full justify-between items-center">
                            <div className="flex w-1/3 ">
                              <div>
                                <span className="text-sm font-bold text-[#002f6c]">
                                  {data.home_team}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col mx-auto2 w-1/3  items-center">
                              <div className="flex items-center space-x-5">
                                <div className="w-8">
                                  <Image src={data.home_logo} alt />
                                </div>
                                <div className="w-16 flex items-center justify-center">
                                  <span className="text-2xl font-bold">-</span>
                                </div>
                                <div className="w-8">
                                  <Image src={data.away_logo} alt />
                                </div>
                              </div>
                            </div>
                            <div className="flex w-1/3 justify-end items-end2">
                              <div>
                                <span className="text-sm font-bold text-[#002f6c]">
                                  {data.away_team}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col mx-auto w-1/3 justify-end items-center">
                            <div>
                              <span className="text-xs text-gray-400">
                                {data.stadium}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
