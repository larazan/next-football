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

export default function Standing() {
    const standingData = [
        {
            club: "Vfl Wolfsbug",
            logo: wolfsburg,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "Vfl Bochum 1848",
            logo: bochum,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "Vfb Stuttgart",
            logo: vfb,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "TSG 1899 Hoffenheim",
            logo: hoffenheim,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "SV Werder Bremen",
            logo: bremen,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "SV Darmstadt 98",
            logo: darmstadt,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "SC Freiburg",
            logo: scfreiburg,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "RB Leipzig",
            logo: rbleipzig,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "FC Bayern Munich",
            logo: bayern,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "FC Augsburg",
            logo: augsburg,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "Eintracht Frankfurt",
            logo: frankfrut,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "Borussia Monchengladbach",
            logo: gladbach,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "Borussia Dortmund",
            logo: dortmunt,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "Bayer 04 Leverkusen",
            logo: leverkusen,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "FSV Mainz 05",
            logo: mainz,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "FC Union Berlin",
            logo: union,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "FC Koln",
            logo: koln,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
        {
            club: "FC Heidenheim 1846",
            logo: heidenheim,
            gameplay: 0,
            win: 0,
            draw: 0,
            lose: 0,
            score: "0 : 0",
            sd: 0,
        },
    ]
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
          <div className="h-max flex flex-col mx-auto w-full lg:w-1/2">
            <div className="flex justify-between py-4 px-6 border-b items-start">
              <div className="flex space-x-2">
                <button className="flex rounded px-2 py-1 items-center bg-[#dc052d] hover:bg-blue-200">
                  <span className=" font-semibold text-white text-sm">
                    Matchplan
                  </span>
                </button>
                <button className="flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
                  <span className=" font-semibold text-[#002f6c] text-sm">
                    Matchdays
                  </span>
                </button>
                <button className="flex rounded px-2 py-1 items-center bg-blue-100 hover:bg-blue-200">
                  <span className=" font-semibold text-[#002f6c] text-sm">
                    Standings
                  </span>
                </button>
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
            <div className="flex px-6 py-5">
                <table className="w-full">
                    <thead className="py-6">
                        <tr className="border-y w-full h-10 ">
                            <td className="w-1/12 text-center"><span className="text-xs uppercase font-bold text-[#002f6c]">Rank</span></td>
                            <td className="w-5/12"><span className="text-xs uppercase font-bold justify-start text-[#002f6c]">Team</span></td>
                            <td className="w-1/12 text-center"><span className="text-xs uppercase font-bold text-[#002f6c]">GP</span></td>
                            <td className="w-1/12 text-center"><span className="text-xs uppercase font-bold text-[#002f6c]">W</span></td>
                            <td className="w-1/12 text-center"><span className="text-xs uppercase font-bold text-[#002f6c]">D</span></td>
                            <td className="w-1/12 text-center"><span className="text-xs uppercase font-bold text-[#002f6c]">L</span></td>
                            <td className="w-1/12 text-center"><span className="text-xs uppercase font-bold text-[#002f6c]">Score</span></td>
                            <td className="w-1/12 text-center"><span className="text-xs uppercase font-bold text-[#002f6c]">SD</span></td>
                        </tr>
                    </thead>
                    <tbody>
                    {standingData.map((data, index) => {
                        return (
                            <>
                            <tr className="py-4 h-11 border-b" key={index}>
                            <td className="w-1/12 text-center"><span className="text-xs uppercase font-bold text-[#002f6c]">{index+1}</span></td>
                            <td className="w-5/12">
                                <div className="flex space-x-2 items-center">
                                    <Image src={data.logo} alt="" className="w-7" />
                                <span className="text-xs uppercase font-bold justify-start text-[#002f6c]">{data.club}</span>
                                </div>
                            </td>
                            <td className="w-1/12 text-center"><span className="text-xs uppercase font-bold text-[#002f6c]">{data.gameplay}</span></td>
                            <td className="w-1/12 text-center"><span className="text-xs uppercase font-bold text-[#002f6c]">{data.win}</span></td>
                            <td className="w-1/12 text-center"><span className="text-xs uppercase font-bold text-[#002f6c]">{data.draw}</span></td>
                            <td className="w-1/12 text-center"><span className="text-xs uppercase font-bold text-[#002f6c]">{data.lose}</span></td>
                            <td className="w-1/12 text-center"><span className="text-xs uppercase font-bold text-[#002f6c]">{data.score}</span></td>
                            <td className="w-1/12 text-center"><span className="text-xs uppercase font-bold text-[#002f6c]">{data.sd}</span></td>
                        </tr>
                            </>
                        );
                    })}
                        
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
