import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import logo from "@/assets/img/fcbayern.svg";
import tlogo from "@/assets/img/partners/telekom_logo_header_neu.svg";

export default function Header() {
  const [adsModalOpen, setAdsModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdsModalOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header className=" z-20 flex flex-col  w-full">
        <div className="flex w-full top-0 md:m-0 px-4 md:px-5 py-6 md:py-3  items-center justify-between bg-[#dc052d]">
          <div className="flex items-center justify-between mx-auto w-full lg:w-1/2">
            <div className="flex w-full md:w-3/5 justify-between space-x-4">
              <div className="flex space-x-4 w-full items-center">
                <div className="flex justify-center items-center">
                  <Link href={"/"}>
                    <Image src={logo} className="h-12 w-12" alt="" />
                  </Link>
                </div>
                <Link href={"/"}>
                  <span className="text-2xl text-white font-bold">
                    FC Bayern Munchen
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-4 items-center justify-end">
                <Link href={"/contact"}>
                  <div className="text-white font-semibold text-sm">
                    Contact
                  </div>
                </Link>
                <Link href={"/"}>
                  <div className="text-white font-semibold text-sm">
                    Alianz Arena
                  </div>
                </Link>
                <div>
                <select
                    name="version"
                    className="input-select flex rounded px-2 py-1 items-center bg-[#dc052d]  font-semibold text-white text-sm"
                  >
                    <option value="all">English</option>
                    <option value="all">Chinese</option>
                    <option value="blog">Portugese</option>
                    <option value="boilerplate">Spainish</option>
                  </select>
                </div>
                <Link href={"/"}>
                  <div className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="flex space-x-2 items-center justify-end">
                <div className="text-xs text-white">presented by</div>
                <button className="flex justify-center items-center rounded bg-white">
                  <Image src={tlogo} className="" alt="" />
                </button>
                <button className="flex justify-center py-1 px-1 space-x-1 items-center rounded bg-white">
                  <span className="text-[#dc052d]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </span>
                  <div className="text-[#dc052d] font-semibold text-sm">
                    Online store
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-0.5 px-5 bg-[#c60428]">
          <div className="flex space-x-4 items-center mx-auto w-full lg:w-1/2">
            <Link
              href={"/news"}
              className="py-1.5 border-b border-[#c60428] hover:border-white "
            >
              <span className="font-semibold text-white">News</span>
            </Link>
            <Link
              href={"/media"}
              className="py-1.5 border-b border-[#c60428] hover:border-white "
            >
              <span className="font-semibold text-white">FC Bayern TV</span>
            </Link>
            <Link
              href={"/match"}
              className="py-1.5 border-b border-[#c60428] hover:border-white "
            >
              <span className="font-semibold text-white">Matches</span>
            </Link>
            <Link
              href={"/teams"}
              className="py-1.5 border-b border-[#c60428] hover:border-white "
            >
              <span className="font-semibold text-white">Teams</span>
            </Link>
            <Link
              href={"/club"}
              className="py-1.5 border-b border-[#c60428] hover:border-white "
            >
              <span className="font-semibold text-white">Club</span>
            </Link>
            <Link
              href={"/fans"}
              className="py-1.5 border-b border-[#c60428] hover:border-white "
            >
              <span className="font-semibold text-white">Fans</span>
            </Link>
            <Link
              href={"/"}
              className="py-1.5 border-b border-[#c60428] hover:border-white "
            >
              <span className="font-semibold text-white">Tickets</span>
            </Link>
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
