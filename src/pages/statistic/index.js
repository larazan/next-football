import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoTop from "@/components/GoTop";
import MatchResult from "@/components/MatchResult";
import NewsRelated from "@/components/NewsRelated";

import bayern from "@/assets/img/clubs/bayern.png";
import city from "@/assets/img/clubs/manchester-city.png";

export default function Statistic() {
  const statistics = [
    {
      title: "Shots",
      home: 18,
      away: 9,
    },
    {
      title: "Shots on target",
      home: 9,
      away: 4,
    },
    {
      title: "Possession",
      home: "67%",
      away: "33%",
    },
    {
      title: "Passes",
      home: 637,
      away: 316,
    },
    {
      title: "Pass accuracy",
      home: "86%",
      away: "72%",
    },
    {
      title: "Fouls",
      home: 13,
      away: 11,
    },
    {
      title: "Yellow cards",
      home: 4,
      away: 4,
    },
    {
      title: "Red cards",
      home: 0,
      away: 1,
    },
    {
      title: "Offsides",
      home: 3,
      away: 2,
    },
    {
      title: "Corners",
      home: 11,
      away: 3,
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

      <MatchResult />

      <div className="h-max flex flex-col py-0 bg-white">
        <div className="flex flex-col py-4 px-6 space-y-1 mx-auto w-full lg:w-1/2">
          <h1 className="text-2xl font-bold text-[#002f6c] uppercase">
            Team Comparison
          </h1>
          <div className="flex w-full justify-between items-center h-14 py-1.5 border-y">
            <div className="flex w-1/6">
              <div className="w-8">
                <Image src={bayern} alt />
              </div>
            </div>
            <div className=" w-4/6">
              <div className="flex w-full mx-auto justify-center space-x-6">
                <div>
                  <span className="text-sm font-bold text-[#002f6c]">
                    FC Bayern Munich
                  </span>
                </div>
                <div>
                  <span className="text-sm font-bold text-[#002f6c]">
                    Manchester City
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-1/6 justify-end">
              <div className="w-8">
                <Image src={city} alt />
              </div>
            </div>
          </div>
          {statistics.map((data, index) => {
            return (
              <div
                className="flex w-full justify-between items-center h-10 py-1.5"
                key={index}
              >
                <div className="flex w-1/12">
                  <div>
                    <span className="text-sm font-bold text-[#002f6c]">
                      {data.home}
                    </span>
                  </div>
                </div>
                <div className="w-10/12">
                  <div className="flex flex-row w-full mx-auto justify-center items-center">
                    <div className="w-5/12">
                      <div className="overflow-hidden transform rotate-180 h-3 text-xs flex rounded bg-gray-300">
                        <div
                          style={{ width: "30%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                        ></div>
                      </div>
                    </div>
                    <div className="w-2/12 text-center">
                      <span className=" text-sm  font-bold text-[#002f6c]">
                        {data.title}
                      </span>
                    </div>
                    <div className="w-5/12">
                      <div className="overflow-hidden h-3 text-xs flex rounded bg-gray-300">
                        <div
                          style={{ width: "30%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-1/12 justify-end">
                  <div>
                    <span className="text-sm font-bold text-[#002f6c]">
                      {data.away}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-gray-300">
          <div
            style={{ width: "30%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
          ></div>
        </div>
      </div>

      <Footer />
    </>
  );
}
