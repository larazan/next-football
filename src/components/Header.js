import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import logo from "@/assets/img/fcbayern.svg";
import tlogo from "@/assets/img/partners/telekom_logo_header_neu.svg";

export default function Header() {
  const [adsModalOpen, setAdsModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdsModalOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const clickMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className=" z-20 flex flex-col  w-full">
        <div className="flex w-full top-0 md:m-0 px-4 md:px-5 py-4 md:py-3  items-center justify-between bg-[#dc052d]">
          <div className="flex items-center justify-between mx-auto w-full lg:w-1/2">
            <div className="flex w-full md:w-3/5 justify-between space-x-4">
              <div className="flex space-x-2 md:space-x-4 w-full items-center">
                <div className="flex justify-center items-center">
                  <Link href={"/"}>
                    <Image
                      src={logo}
                      className="h-9 w-9 md:h-12 md:w-12"
                      alt=""
                    />
                  </Link>
                </div>
                <Link href={"/"}>
                  <span className="text-base md:text-2xl text-white font-bold">
                    FC Bayern Munchen
                  </span>
                </Link>
              </div>
            </div>
            <div className="md:hidden mr-2">
              <Link href={"/"} className="flex flex-row space-x-1 items-center">
                <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

                </div>
                <span className="text-base text-white font-semibold">Login</span>
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="hidden md:flex space-x-4 items-center justify-end ">
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
                <Link href={"/login"}>
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
              <div className="hidden md:flex space-x-2 items-center justify-end">
                <div className="text-xs text-white">presented by</div>
                <button className="flex justify-center items-center rounded bg-white">
                  <Image src={tlogo} className="" alt="" />
                </button>
                <Link href={"/shop"} className="flex justify-center py-1 px-1 space-x-1 items-center rounded bg-white">
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
                </Link>
              </div>
            </div>
            <section className="MOBILE-MENU flex md:hidden justify-start items-between z-50">
              <div
                className="HAMBURGER-ICON space-y-2 w-fit md:justify-start cursor-pointer text-white"
                onClick={clickMenu}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.25011 7C3.25011 6.58579 3.5859 6.25 4.00011 6.25H20.0001C20.4143 6.25 20.7501 6.58579 20.7501 7C20.7501 7.41421 20.4143 7.75 20.0001 7.75H4.00011C3.5859 7.75 3.25011 7.41421 3.25011 7ZM3.25011 12C3.25011 11.5858 3.5859 11.25 4.00011 11.25L20.0001 11.25C20.4143 11.25 20.7501 11.5858 20.7501 12C20.7501 12.4142 20.4143 12.75 20.0001 12.75L4.00011 12.75C3.5859 12.75 3.25011 12.4142 3.25011 12ZM4.00011 16.25C3.5859 16.25 3.25011 16.5858 3.25011 17C3.25011 17.4142 3.5859 17.75 4.00011 17.75H20.0001C20.4143 17.75 20.7501 17.4142 20.7501 17C20.7501 16.5858 20.4143 16.25 20.0001 16.25H4.00011Z"
                  ></path>
                </svg>
              </div>
              <div
                className={` ${
                  openMenu === false ? "hidden" : "flex flex-col"
                } bg-[#dc052d] w-full h-[100vh] z-10 fixed top-0 left-0 text-white text-4xl font-bold  flex-1 flex-col justify-between`}
              >
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center px-4 py-4">
                    <div className="flex flex-row space-x-4 w-full items-center">
                      <div className="flex justify-center items-center">
                        <Link href={"/"}>
                          <Image
                            src={logo}
                            className="h-10 w-10 md:h-12 md:w-12"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="">
                      <Link href={"/"}>
                        <div className="text-lg md:text-2xl text-white font-bold">
                          FC Bayern Munchen
                        </div>
                      </Link>
                      </div>
                    </div>
                    <div
                      className="cursor-pointer rounded-full px-.5 py-1 bg-white"
                      onClick={clickMenu}
                    >
                      <svg
                        className="h-6 w-8 text-red-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full py-5">
                    <ul className="flex flex-col min-h-[250px]">
                      <li className="flex w-full text-lg border-b">
                        <Link className="px-6 py-3 w-full" href="/news">
                          News
                        </Link>
                      </li>
                      <li className="flex w-full text-lg border-b">
                        <Link className="px-6 py-3 w-full" href="/media">
                          Bayern TV
                        </Link>
                      </li>
                      <li className="flex w-full text-lg border-b">
                        <Link className="px-6 py-3 w-full" href="/match">
                          Matches
                        </Link>
                      </li>
                      <li className="flex w-full text-lg border-b">
                        <Link className="px-6 py-3 w-full" href="/teams">
                          Teams
                        </Link>
                      </li>
                      <li className="flex w-full text-lg border-b">
                        <Link className="px-6 py-3 w-full" href="/club">
                          Club
                        </Link>
                      </li>
                      <li className="flex w-full text-lg border-b">
                        <Link className="px-6 py-3 w-full" href="/blog">
                          Fans
                        </Link>
                      </li>
                      <li className="flex w-full text-lg border-b">
                        <Link
                          className="px-6 py-3 w-full"
                          href="/shop"
                          target="_blank"
                        >
                          Shop
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="hidden md:block py-0.5 px-5 bg-[#c60428]">
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
