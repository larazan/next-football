import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoTop from "@/components/GoTop";

import lineup from "@/assets/img/lineup.png";
import bayern from "@/assets/img/clubs/bayern.png";
import city from "@/assets/img/clubs/manchester-city.png";
import MatchResult from "@/components/MatchResult";
import Subtitution from "@/components/Subtitution";

import arteta from "@/assets/img/player/arteta.png";
import guardiola from "@/assets/img/player/guardiola.png";

export default function Lineup() {
  const bayernFirstData = [
    {
      name: "Yann Sommer",
      number: "27",
      goal: false,
      subs: true,
    },
    {
      name: "Benjamin Pavard",
      number: "5",
      goal: false,
      subs: true,
    },
    {
      name: "Alphonso Davies",
      number: "19",
      goal: false,
      subs: true,
    },
    {
      name: "Noussair Mazraoui",
      number: "40",
      goal: false,
      subs: true,
    },
    {
      name: "Dayot Upamecano",
      number: "2",
      goal: false,
      subs: true,
    },
    {
      name: "Jamal Musiala",
      number: "42",
      goal: false,
      subs: true,
    },
    {
      name: "konrad laimer",
      number: "24",
      goal: false,
      subs: true,
    },
    {
      name: "kingsley coman",
      number: "11",
      goal: false,
      subs: true,
    },
    {
      name: "joshua kimmich",
      number: "6",
      goal: false,
      subs: true,
    },
    {
      name: "leroy sane",
      number: "10",
      goal: false,
      subs: true,
    },
    {
      name: "serge gnarby",
      number: "7",
      goal: false,
      subs: true,
    },
  ];

  const bayernReserveData = [
    {
      name: "josip stanisic",
      number: "44",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "pavard",
    },
    {
      name: "ryan gravenberch",
      number: "38",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "konrad laimer",
    },
    {
      name: "sven ulreich",
      number: "26",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "pavard",
    },
    {
      name: "arijon ibrahimovic",
      number: "46",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "pavard",
    },
    {
      name: "bouna sarr",
      number: "20",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "pavard",
    },
    {
      name: "gabriel vidovic",
      number: "32",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "pavard",
    },
    {
      name: "sadio mane",
      number: "17",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "pavard",
    },
    {
      name: "mathys tel",
      number: "39",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "pavard",
    },
    {
      name: "leon goretzka",
      number: "8",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "pavard",
    },
    {
      name: "aleksandar pavlovic",
      number: "45",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "pavard",
    },
    {
      name: "paul wanner",
      number: "14",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "pavard",
    },
  ];

  const cityFirstData = [
    {
      name: "ederson",
      number: "31",
      goal: false,
      subs: true,
    },
    {
      name: "ruben dias",
      number: "3",
      goal: false,
      subs: true,
    },
    {
      name: "kyle walker",
      number: "2",
      goal: false,
      subs: true,
    },
    {
      name: "john stones",
      number: "5",
      goal: false,
      subs: true,
    },
    {
      name: "nathan ake",
      number: "6",
      goal: false,
      subs: true,
    },
    {
      name: "bernardo silva",
      number: "20",
      goal: false,
      subs: true,
    },
    {
      name: "james mcAtee",
      number: "87",
      goal: false,
      subs: true,
    },
    {
      name: "mateo kovacic",
      number: "8",
      goal: false,
      subs: true,
    },
    {
      name: "jack grealish",
      number: "10",
      goal: false,
      subs: true,
    },
    {
      name: "rico lewis",
      number: "82",
      goal: false,
      subs: true,
    },
    {
      name: "julian alvarez",
      number: "19",
      goal: false,
      subs: true,
    },
  ];

  const cityReserveData = [
    {
      name: "kalvin phillips",
      number: "4",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "mateo kovacic",
    },
    {
      name: "phil foden",
      number: "47",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "mateo kovacic",
    },
    {
      name: "manuel akanji",
      number: "25",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "mateo kovacic",
    },
    {
      name: "rodri",
      number: "16",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "mateo kovacic",
    },
    {
      name: "eling haaland",
      number: "9",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "mateo kovacic",
    },
    {
      name: "sergio gomez",
      number: "21",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "mateo kovacic",
    },
    {
      name: "joao cancelo",
      number: "7",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "mateo kovacic",
    },
    {
      name: "oscar bobb",
      number: "52",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "mateo kovacic",
    },
    {
      name: "maximo perrone",
      number: "32",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "mateo kovacic",
    },
    {
      name: "aymeric laporte",
      number: "14",
      goal: false,
      subs: false,
      subs_mnt: 46,
      subs_for: "mateo kovacic",
    },
  ];

  const officialData = [
    {
      name: "jumpei lida",
      pos: "referee",
    },
    {
      name: "kota watanabe",
      pos: "lineman",
    },
    {
      name: "takeshi asada",
      pos: "lineman",
    },
    {
      name: "yuichi nishimura",
      pos: "fourth official",
    },
    {
      name: "akihiko ikeuchi",
      pos: "VAR official",
    },
    {
      name: "hayato shimizu",
      pos: "VAR assistant",
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

      <div className="h-max flex flex-col py-0 md:py-6 px-2 md:px-6 bg-[#f5f7f9]">
        <div className="mx-auto w-full lg:w-1/2">
          <div className="flex flex-row justify-between mx-auto w-full ">
            <span className="text-lg md:text-2xl font-bold text-[#002f6c] uppercase">
              Lineup
            </span>
          </div>
          <div className="w-full py-5 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-2 md:space-x-5">
            <div className=" w-full md:w-1/2 ">
              <div className="flex w-full justify-between items-center h-14 py-1.5 border-y">
                <div className="flex w-2/6 justify-center">
                  <div className="w-8">
                    <Image src={bayern} alt="" />
                  </div>
                </div>
                <div className=" w-4/6">
                  <div className="flex w-full mx-auto justify-center space-x-6">
                    <div className="flex ">
                      <span className="text-sm font-bold leading-tight text-[#002f6c]">
                        FC Bayern Munich
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full  ">
                {bayernFirstData.map((data, index) => {
                  return (
                    <div
                      className="flex justify-between items-center border-b border-gray-300 py-2 px-3"
                      key={index}
                    >
                      <div className="flex space-x-2 items-center">
                        <div className="flex">
                          <div className="flex w-8 h-8 bg-[#002f6c] text-gray-300 justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="20"
                              viewBox="0 0 24 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.00398 0H5.74805C5.48283 0 5.22848 0.105357 5.04094 0.292893L1.04094 4.29289C0.650416 4.68342 0.650415 5.31658 1.04094 5.70711L2.96006 7.62623C3.35058 8.01675 3.98375 8.01675 4.37427 7.62623L5.33383 6.66667V19C5.33383 19.5523 5.78155 20 6.33383 20H17.6672C18.2195 20 18.6672 19.5523 18.6672 19V6.66667L19.6267 7.62623C20.0173 8.01675 20.6504 8.01675 21.0409 7.62623L22.9601 5.70711C23.3506 5.31658 23.3506 4.68342 22.9601 4.29289L18.9601 0.292893C18.7725 0.105357 18.5182 0 18.253 0H15.3303C14.7686 1.18247 13.5634 1.99999 12.1672 1.99999C10.771 1.99999 9.56572 1.18247 9.00398 0Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex w-8 h-8 bg-gray-300 justify-center items-center">
                            <span className="text-sm text-[#002f6c] font-bold">
                              {data.number}
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-[#002f6c] font-bold capitalize">
                            {data.name}
                          </span>
                        </div>
                      </div>
                      <div className="text-[#002f6c] font-mabry">
                        <svg
                          height="22"
                          width="22"
                          viewBox="0 0 24 24"
                          preserveAspectRatio="xMidYMid meet"
                          role="img"
                          aria-hidden="true"
                          focusable="false"
                          xmlns="http://www.w3.org/2000/svg"
                          className="base-icon__StyledIconSvg-sc-fzrbhv-0 eCHnXp"
                        >
                          <title>icon</title>
                          <path d="M6.53034 3.53033L5.46968 2.46967L1.93935 6L5.46968 9.53033L6.53034 8.46967L4.81067 6.75H17C18.7949 6.75 20.25 8.20507 20.25 10V12H21.75V10C21.75 7.37665 19.6234 5.25 17 5.25H4.81066L6.53034 3.53033ZM2.25 14V12H3.75V14C3.75 15.7949 5.20507 17.25 7 17.25H19.1893L17.4697 15.5303L18.5303 14.4697L22.0607 18L18.5303 21.5303L17.4697 20.4697L19.1893 18.75H7C4.37665 18.75 2.25 16.6234 2.25 14Z"></path>
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full md:w-1/2 ">
              <div className="flex w-full justify-between items-center h-14 py-1.5 border-y">
                <div className=" w-4/6">
                  <div className="flex w-full mx-auto justify-center space-x-6">
                    <div className="flex text-end">
                      <span className="text-sm font-bold leading-tight text-[#002f6c]">
                        Manchester City
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-2/6  md:justify-center">
                  <div className="w-8">
                    <Image src={city} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full  ">
                {cityFirstData.map((data, index) => {
                  return (
                    <div
                      className="flex justify-between items-center border-b border-gray-300 py-2 px-3"
                      key={index}
                    >
                      <div className="flex space-x-2 items-center">
                        <div className="flex">
                          <div className="flex w-8 h-8 bg-[#002f6c] text-gray-300 justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="20"
                              viewBox="0 0 24 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.00398 0H5.74805C5.48283 0 5.22848 0.105357 5.04094 0.292893L1.04094 4.29289C0.650416 4.68342 0.650415 5.31658 1.04094 5.70711L2.96006 7.62623C3.35058 8.01675 3.98375 8.01675 4.37427 7.62623L5.33383 6.66667V19C5.33383 19.5523 5.78155 20 6.33383 20H17.6672C18.2195 20 18.6672 19.5523 18.6672 19V6.66667L19.6267 7.62623C20.0173 8.01675 20.6504 8.01675 21.0409 7.62623L22.9601 5.70711C23.3506 5.31658 23.3506 4.68342 22.9601 4.29289L18.9601 0.292893C18.7725 0.105357 18.5182 0 18.253 0H15.3303C14.7686 1.18247 13.5634 1.99999 12.1672 1.99999C10.771 1.99999 9.56572 1.18247 9.00398 0Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex w-8 h-8 bg-gray-300 justify-center items-center">
                            <span className="text-sm text-[#002f6c] font-bold">
                              {data.number}
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-[#002f6c] font-bold capitalize">
                            {data.name}
                          </span>
                        </div>
                      </div>
                      <div className="text-[#002f6c] font-mabry">
                        <svg
                          height="22"
                          width="22"
                          viewBox="0 0 24 24"
                          preserveAspectRatio="xMidYMid meet"
                          role="img"
                          aria-hidden="true"
                          focusable="false"
                          xmlns="http://www.w3.org/2000/svg"
                          className="base-icon__StyledIconSvg-sc-fzrbhv-0 eCHnXp"
                        >
                          <title>icon</title>
                          <path d="M6.53034 3.53033L5.46968 2.46967L1.93935 6L5.46968 9.53033L6.53034 8.46967L4.81067 6.75H17C18.7949 6.75 20.25 8.20507 20.25 10V12H21.75V10C21.75 7.37665 19.6234 5.25 17 5.25H4.81066L6.53034 3.53033ZM2.25 14V12H3.75V14C3.75 15.7949 5.20507 17.25 7 17.25H19.1893L17.4697 15.5303L18.5303 14.4697L22.0607 18L18.5303 21.5303L17.4697 20.4697L19.1893 18.75H7C4.37665 18.75 2.25 16.6234 2.25 14Z"></path>
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mx-auto w-full lg:w-1/2">
          <div className="flex flex-row justify-between mx-auto w-full ">
            <span className="text-2xl font-bold text-[#002f6c] uppercase">
              Substitutes
            </span>
          </div>
          <div className="w-full py-5 flex space-x-5">
            <div className="w-1/2">
              <div className="flex flex-col w-full  ">
                {bayernReserveData.map((data, index) => {
                  return (
                    <div
                      className="flex justify-between items-center border-b border-gray-300 py-2 px-3"
                      key={index}
                    >
                      <div className="flex space-x-2 items-center">
                        <div className="flex">
                          <div className="flex w-8 h-8 bg-[#002f6c] text-gray-300 justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="20"
                              viewBox="0 0 24 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.00398 0H5.74805C5.48283 0 5.22848 0.105357 5.04094 0.292893L1.04094 4.29289C0.650416 4.68342 0.650415 5.31658 1.04094 5.70711L2.96006 7.62623C3.35058 8.01675 3.98375 8.01675 4.37427 7.62623L5.33383 6.66667V19C5.33383 19.5523 5.78155 20 6.33383 20H17.6672C18.2195 20 18.6672 19.5523 18.6672 19V6.66667L19.6267 7.62623C20.0173 8.01675 20.6504 8.01675 21.0409 7.62623L22.9601 5.70711C23.3506 5.31658 23.3506 4.68342 22.9601 4.29289L18.9601 0.292893C18.7725 0.105357 18.5182 0 18.253 0H15.3303C14.7686 1.18247 13.5634 1.99999 12.1672 1.99999C10.771 1.99999 9.56572 1.18247 9.00398 0Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex w-8 h-8 bg-gray-300 justify-center items-center">
                            <span className="text-sm text-[#002f6c] font-bold">
                              {data.number}
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-[#002f6c] font-bold capitalize">
                            {data.name}
                          </span>
                        </div>
                      </div>
                      <div className="text-[#002f6c] font-mabry">
                        <svg
                          height="22"
                          width="22"
                          viewBox="0 0 24 24"
                          preserveAspectRatio="xMidYMid meet"
                          role="img"
                          aria-hidden="true"
                          focusable="false"
                          xmlns="http://www.w3.org/2000/svg"
                          className="base-icon__StyledIconSvg-sc-fzrbhv-0 eCHnXp"
                        >
                          <title>icon</title>
                          <path d="M6.53034 3.53033L5.46968 2.46967L1.93935 6L5.46968 9.53033L6.53034 8.46967L4.81067 6.75H17C18.7949 6.75 20.25 8.20507 20.25 10V12H21.75V10C21.75 7.37665 19.6234 5.25 17 5.25H4.81066L6.53034 3.53033ZM2.25 14V12H3.75V14C3.75 15.7949 5.20507 17.25 7 17.25H19.1893L17.4697 15.5303L18.5303 14.4697L22.0607 18L18.5303 21.5303L17.4697 20.4697L19.1893 18.75H7C4.37665 18.75 2.25 16.6234 2.25 14Z"></path>
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col w-full  ">
                {cityReserveData.map((data, index) => {
                  return (
                    <div
                      className="flex justify-between items-center border-b border-gray-300 py-2 px-3"
                      key={index}
                    >
                      <div className="flex space-x-2 items-center">
                        <div className="flex">
                          <div className="flex w-8 h-8 bg-[#002f6c] text-gray-300 justify-center items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="20"
                              viewBox="0 0 24 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.00398 0H5.74805C5.48283 0 5.22848 0.105357 5.04094 0.292893L1.04094 4.29289C0.650416 4.68342 0.650415 5.31658 1.04094 5.70711L2.96006 7.62623C3.35058 8.01675 3.98375 8.01675 4.37427 7.62623L5.33383 6.66667V19C5.33383 19.5523 5.78155 20 6.33383 20H17.6672C18.2195 20 18.6672 19.5523 18.6672 19V6.66667L19.6267 7.62623C20.0173 8.01675 20.6504 8.01675 21.0409 7.62623L22.9601 5.70711C23.3506 5.31658 23.3506 4.68342 22.9601 4.29289L18.9601 0.292893C18.7725 0.105357 18.5182 0 18.253 0H15.3303C14.7686 1.18247 13.5634 1.99999 12.1672 1.99999C10.771 1.99999 9.56572 1.18247 9.00398 0Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex w-8 h-8 bg-gray-300 justify-center items-center">
                            <span className="text-sm text-[#002f6c] font-bold">
                              {data.number}
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-[#002f6c] font-bold capitalize">
                            {data.name}
                          </span>
                        </div>
                      </div>
                      <div className="text-[#002f6c] font-mabry">
                        <svg
                          height="22"
                          width="22"
                          viewBox="0 0 24 24"
                          preserveAspectRatio="xMidYMid meet"
                          role="img"
                          aria-hidden="true"
                          focusable="false"
                          xmlns="http://www.w3.org/2000/svg"
                          className="base-icon__StyledIconSvg-sc-fzrbhv-0 eCHnXp"
                        >
                          <title>icon</title>
                          <path d="M6.53034 3.53033L5.46968 2.46967L1.93935 6L5.46968 9.53033L6.53034 8.46967L4.81067 6.75H17C18.7949 6.75 20.25 8.20507 20.25 10V12H21.75V10C21.75 7.37665 19.6234 5.25 17 5.25H4.81066L6.53034 3.53033ZM2.25 14V12H3.75V14C3.75 15.7949 5.20507 17.25 7 17.25H19.1893L17.4697 15.5303L18.5303 14.4697L22.0607 18L18.5303 21.5303L17.4697 20.4697L19.1893 18.75H7C4.37665 18.75 2.25 16.6234 2.25 14Z"></path>
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div> */}

{/* COACH */}
        <section className="flex justify-between w-full px-10 py-3 min-h-14 bg-white2 md:h-14 border-b  items-center">
          <div className="flex flex-row items-center">
            <div className="mr-3 flex flex-col justify-center items-center">
              <div className="coachIcon">
                <Image
                  src={guardiola}
                  className="Image PlayerImage rounded-full bg-white "
                  alt=""
                />
              </div>
              <div className="block md:hidden">
                <span className="font-semibold text-xs text-[#002f6c]">
                  Pep Guardiola
                </span>
              </div>
            </div>
            <span className="hidden md:block text-sm text-[#002f6c] font-bold capitalize">
              Pep Guardiola
            </span>
          </div>
          <h2 className="text-sm text-[#002f6c] font-bold capitalize">Pelatih</h2>
          <div className="flex flex-row-reverse items-center ">
            <div className="ml-3 flex flex-col justify-center items-center">
              <div className="coachIcon">
                <Image
                  src={arteta}
                  className="Image PlayerImage rounded-full bg-white "
                  alt=""
                />
              </div>

              <div className="block md:hidden">
                <span className="font-semibold text-xs text-slate-900">
                  Mikel Arteta
                </span>
              </div>
            </div>
            <span className="hidden md:block text-sm text-[#002f6c] font-bold capitalize">
              Mikel Arteta
            </span>
          </div>
        </section>

        <Subtitution />

        <div className="mx-auto w-full lg:w-1/2">
          <div className="flex flex-row justify-between mx-auto w-full ">
            <span className="text-lg md:text-2xl font-bold text-[#002f6c] uppercase">
              Reserves / Coaches
            </span>
          </div>
          <div className="w-full py-5 flex space-x-5">
            <div className="w-1/2 flex flex-col space-y-3 px-4 py-2 bg-gray-200">
              <div className="flex flex-col space-y-1">
                <span className="text-xs font-semibold">Reserves</span>
                <div className="flex flex-wrap ">
                  {bayernReserveData.map((data, index) => {
                    return (
                      <div
                        className="flex space-x-1 mr-1 mt-.5 text-xs"
                        key={index}
                      >
                        <span>{data.number}</span>
                        <div>
                          <span className="capitalize">{data.name},</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col ">
                <span className="text-xs font-semibold">Coach</span>
                <div>
                  <span className="text-xs capitalize">Thomas tuchel</span>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex flex-col space-y-3 px-4 py-2 bg-gray-200">
              <div className="flex flex-col space-y-1">
                <span className="text-xs font-semibold">Reserves</span>
                <div className="flex flex-wrap ">
                  {cityReserveData.map((data, index) => {
                    return (
                      <div
                        className="flex space-x-1 mr-1 mt-.5 text-xs"
                        key={index}
                      >
                        <span>{data.number}</span>
                        <div>
                          <span className="capitalize">{data.name},</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col ">
                <span className="text-xs font-semibold">Coach</span>
                <div>
                  <span className="text-xs capitalize">pep guardiola</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full lg:w-1/2">
          <div className="flex flex-row justify-between mx-auto w-full ">
            <span className="text-lg md:text-2xl font-bold text-[#002f6c] uppercase">
              Match official
            </span>
          </div>
          <div className="w-full py-5 grid grid-cols-3 gap-4">
            {officialData.map((data, index) => {
              return (
                <div
                  className="flex flex-col py-2 px-4 bg-gray-200"
                  key={index}
                >
                  <span className="text-xs font-semibold capitalize">
                    {data.pos}
                  </span>
                  <div className="leading-tight">
                    <span className="text-xs  capitalize">{data.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
