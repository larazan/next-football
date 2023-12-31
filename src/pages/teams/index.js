import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoTop from "@/components/GoTop";

import alphonso_davies from "@/assets/img/teams/alphonso_davies.png";
import benjamin_pavard from "@/assets/img/teams/benjamin_pavard.png";
import bouna_sarr from "@/assets/img/teams/bouna_sarr.png";
import choupo_moting from "@/assets/img/teams/choupo_moting.png";
import dayot_upamecano from "@/assets/img/teams/dayot_upamecano.png";
import jamal_musiala from "@/assets/img/teams/jamal_musiala.png";
import joshua_kimmich from "@/assets/img/teams/joshua_kimmich.png";
import josip_stanisic from "@/assets/img/teams/josip_stanisic.png";
import kingsley_coman from "@/assets/img/teams/kingsley_coman.png";
import leon_goretzka from "@/assets/img/teams/leon_goretzka.png";
import leroy_sane from "@/assets/img/teams/leroy_sane.png";
import lucas_hernandez from "@/assets/img/teams/lucas_hernandez.png";
import manuel_neuer from "@/assets/img/teams/manuel_neuer.png";
import mathys_tel from "@/assets/img/teams/mathys-tel.png";
import matthijs_deligt from "@/assets/img/teams/matthijs-de-ligt.png";
import noussair_mazraoui from "@/assets/img/teams/noussair_mazraoui.png";
import paul_wanner from "@/assets/img/teams/paul_wanner.png";
import raphael_guerreiro from "@/assets/img/teams/raphael-guerreiro.png";
import ryan_gravenberch from "@/assets/img/teams/ryan_gravenberch.png";
import sadio_mane from "@/assets/img/teams/sadio_mane.png";
import serge_gnabry from "@/assets/img/teams/serge_gnabry.png";
import sven_ulreich from "@/assets/img/teams/sven_ulreich.png";
import thomas_mueller from "@/assets/img/teams/thomas_mueller.png";
import yann_Sommer from "@/assets/img/teams/Yann_Sommer.png";

import anthony_barry from "@/assets/img/teams/anthony-barry.png";
import arno_Michels from "@/assets/img/teams/Arno-Michels.png";
import michael_rechner from "@/assets/img/teams/michael-rechner.png";
import thomas_Tuchel from "@/assets/img/teams/Thomas-Tuchel.png";
import zsolt_Löw from "@/assets/img/teams/Zsolt-Löw.png";

import bg from "@/assets/img/vertical.png";
import team from "@/assets/img/Teamfoto.png";
import audi from "@/assets/img/audi.gif";

export default function Teams() {
  const goalkeeperData = [
    {
      name: "Manuel Neuer",
      number: 1,
      img: manuel_neuer,
    },
    {
      name: "Sven Ulreich",
      number: 26,
      img: sven_ulreich,
    },
    {
      name: "Yann Sommer",
      number: 27,
      img: yann_Sommer,
    },
  ];

  const defenderData = [
    {
      name: "Dayot Upamecano",
      number: 2,
      img: dayot_upamecano,
    },
    {
      name: "Matthijs de Ligt",
      number: 4,
      img: matthijs_deligt,
    },
    {
      name: "Benjamin Pavard",
      number: 5,
      img: benjamin_pavard,
    },
    {
      name: "Alphonso Davies",
      number: 19,
      img: alphonso_davies,
    },
    {
      name: "Bouna Sarr",
      number: 20,
      img: bouna_sarr,
    },
    {
      name: "Raphael Guerreiro",
      number: 22,
      img: raphael_guerreiro,
    },
    {
      name: "Noussair Mazraoui",
      number: 40,
      img: noussair_mazraoui,
    },
    {
      name: "Josip Stanisic",
      number: 44,
      img: josip_stanisic,
    },
  ];

  const midfielderData = [
    {
      name: "Joshua Kimmich",
      number: 6,
      img: joshua_kimmich,
    },
    {
      name: "Leon Goretzka",
      number: 8,
      img: leon_goretzka,
    },
    {
      name: "Paul Wanner",
      number: 14,
      img: paul_wanner,
    },
    {
      name: "Ryan Gravenberch",
      number: 38,
      img: ryan_gravenberch,
    },
    {
      name: "Jamal Musiala",
      number: 42,
      img: jamal_musiala,
    },
  ];

  const forwardData = [
    {
      name: "Serge Gnarby",
      number: 7,
      img: serge_gnabry,
    },
    {
      name: "Leroy Sane",
      number: 10,
      img: leroy_sane,
    },
    {
      name: "Kingsley Coman",
      number: 11,
      img: kingsley_coman,
    },
    {
      name: "Eric Maxim Choupo Mating",
      number: 13,
      img: choupo_moting,
    },
    {
      name: "Sadio Mane",
      number: 17,
      img: sadio_mane,
    },
    {
      name: "Thomas Muller",
      number: 25,
      img: thomas_mueller,
    },
    {
      name: "Mathys Tel",
      number: 39,
      img: mathys_tel,
    },
  ];

  const staffData = [
    {
      name: "Thomas Tuchel",
      img: thomas_Tuchel,
    },
    {
      name: "Anthony barry",
      img: anthony_barry,
    },
    {
      name: "Arno Michels",
      img: arno_Michels,
    },
    {
      name: "Zsolt Low",
      img: zsolt_Löw,
    },
    {
      name: "Michael Rechner",
      img: michael_rechner,
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

      <div className="h-max w-full flex flex-col space-y-4 px-2 md:px-6 py-2 md:py-6 justify-center2 items-center2 bg-[#f5f7f9]">
        <div className="mx-auto w-full lg:w-1/2">
        <Image src={audi} alt="" />
        </div>
      </div>
      <div className="h-max w-full flex flex-col space-y-4 px-2 md:px-6 py-0  justify-center2 items-center2 bg-[#f5f7f9]">
      <div className="mx-auto w-full lg:w-1/2">
        <Image src={team} alt="" />
        </div>
      </div>

      <div className="h-max w-full flex flex-col space-y-4 px-2 md:px-6 py-0 md:py-6 justify-center2 items-center2 bg-[#f5f7f9]">
        <div className="mx-auto w-full lg:w-1/2">

        
        <section className="flex flex-col py-2">
          <div className="flex flex-row justify-between mx-auto w-full md:w-12/12 space-x-6 items-center">
            <span className="text-lg md:text-2xl font-bold text-[#002f6c]">
              GoalKeepers
            </span>
          </div>
          <div className="flex flex-row flex-wrap  mx-auto w-full md:w-12/12 ">
            {goalkeeperData.map((data, index) => {
              return (
                <>
                  <div className="px-3 py-3 md:w-1/3 lg:w-1/3" key={index}>
                    <div className=" relative group flex flex-col overflow-hidden hover:scale-105 shadow ">
                      <Link href={`/teams/${data.name}`} className="relative">
                        <Image src={bg} alt="" className=" h-72" />{" "}
                        <div className="absolute flex justify-center bottom-0 z-20 w-full">
                          <Image src={data.img} alt="" className="w-72" />
                        </div>
                        <div className="absolute top-1 left-2">
                          <span className="text-white text-lg font-bold">
                            {data.number}
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-2 z-30 w-10 leading-tight">
                          <span className="text-white text-md font-semibold">
                            {data.name}
                          </span>
                        </div>
                      </Link>{" "}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
        <section className="flex flex-col py-2">
          <div className="flex flex-row justify-between mx-auto w-full md:w-12/12 space-x-6 items-center">
            <span className="text-lg md:text-2xl font-bold text-[#002f6c]">Defenders</span>
          </div>
          <div className="flex flex-row flex-wrap  mx-auto w-full md:w-12/12 ">
            {defenderData.map((data, index) => {
              return (
                <>
                  <div className="px-3 py-3 md:w-1/3 lg:w-1/3" key={index}>
                    <div className=" relative group flex flex-col overflow-hidden hover:scale-105 shadow ">
                      <Link href={`/teams/${data.name}`} className="relative">
                        <Image src={bg} alt="" className=" h-72" />{" "}
                        <div className="absolute flex justify-center bottom-0 z-20 w-full">
                          <Image src={data.img} alt="" className="w-72" />
                        </div>
                        <div className="absolute top-1 left-2">
                          <span className="text-white text-lg font-bold">
                            {data.number}
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-2 z-30 w-10 leading-tight">
                          <span className="text-white text-md font-semibold">
                            {data.name}
                          </span>
                        </div>
                      </Link>{" "}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
        <section className="flex flex-col py-2">
          <div className="flex flex-row justify-between mx-auto w-full md:w-12/12 space-x-6 items-center">
            <span className="text-lg md:text-2xl font-bold text-[#002f6c]">MidFielder</span>
          </div>
          <div className="flex flex-row flex-wrap  mx-auto w-full md:w-12/12 ">
            {midfielderData.map((data, index) => {
              return (
                <>
                  <div className="px-3 py-3 md:w-1/3 lg:w-1/3" key={index}>
                    <div className=" relative group flex flex-col overflow-hidden hover:scale-105 shadow ">
                      <Link href={`/teams/${data.name}`} className="relative">
                        <Image src={bg} alt="" className=" h-72" />{" "}
                        <div className="absolute flex justify-center bottom-0 z-20 w-full">
                          <Image src={data.img} alt="" className="w-72" />
                        </div>
                        <div className="absolute top-1 left-2">
                          <span className="text-white text-lg font-bold">
                            {data.number}
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-2 z-30 w-10 leading-tight">
                          <span className="text-white text-md font-semibold">
                            {data.name}
                          </span>
                        </div>
                      </Link>{" "}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>

        <section className="flex flex-col py-2">
          <div className="flex flex-row justify-between mx-auto w-full md:w-12/12 space-x-6 items-center">
            <span className="text-lg md:text-2xl font-bold text-[#002f6c]">Forwards</span>
          </div>
          <div className="flex flex-row flex-wrap  mx-auto w-full md:w-12/12 ">
            {forwardData.map((data, index) => {
              return (
                <>
                  <div className="px-3 py-3 md:w-1/3 lg:w-1/3" key={index}>
                    <div className=" relative group flex flex-col overflow-hidden hover:scale-105 shadow ">
                      <Link href={`/teams/${data.name}`} className="relative">
                        <Image src={bg} alt="" className=" h-72" />{" "}
                        <div className="absolute flex justify-center bottom-0 z-20 w-full">
                          <Image src={data.img} alt="" className="w-72" />
                        </div>
                        <div className="absolute top-1 left-2">
                          <span className="text-white text-lg font-bold">
                            {data.number}
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-2 z-30 w-10 leading-tight">
                          <span className="text-white text-md font-semibold">
                            {data.name}
                          </span>
                        </div>
                      </Link>{" "}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>


        <section className="flex flex-col py-2">
          <div className="flex flex-row justify-between mx-auto w-full md:w-12/12 space-x-6 items-center">
            <span className="text-lg md:text-2xl font-bold text-[#002f6c]">Coaches</span>
          </div>
          <div className="flex flex-row flex-wrap  mx-auto w-full md:w-12/12 ">
            {staffData.map((data, index) => {
              return (
                <>
                  <div className="px-3 py-3 md:w-1/3 lg:w-1/3" key={index}>
                    <div className=" relative group flex flex-col overflow-hidden hover:scale-105 shadow ">
                      <Link href={`/teams/${data.name}`} className="relative">
                        <Image src={bg} alt="" className=" h-72" />{" "}
                        <div className="absolute flex justify-center bottom-0 z-20 w-full">
                          <Image src={data.img} alt="" className="w-72" />
                        </div>
                        {/* <div className="absolute top-1 left-2">
                    <span className="text-white text-lg font-bold">{data.number}</span>
                  </div> */}
                        <div className="absolute bottom-2 left-2 z-30 w-10 leading-tight">
                          <span className="text-white text-md font-semibold">
                            {data.name}
                          </span>
                        </div>
                      </Link>{" "}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
