import Link from "next/link";
import Image from "next/image";

import adobe from "@/assets/img/partners/Adobe_Corporate_25px.svg";
import allianz from "@/assets/img/partners/Allianz.svg";
import audi from "@/assets/img/partners/Audi.svg";
import konami from "@/assets/img/partners/Konami.svg";
import libertex from "@/assets/img/partners/Libertex.svg";
import adidas from "@/assets/img/partners/neu-Adidas.svg";
import sap from "@/assets/img/partners/Sap.svg";
import telekom from "@/assets/img/partners/Telekom.svg";
import tipico from "@/assets/img/partners/Tipico.svg";
import viesmann from "@/assets/img/partners/Viesmann-02.svg";

import logo from "@/assets/img/fcb-logo.svg";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col space-y-4 bg-[#dc052d] max-h-screen">
        <div className="flex flex-col space-y-6 mx-auto py-6 w-11/12 md:w-7/12 justify-center items-center">
            <div>
                <span className="uppercase text-lg text-white font-bold">partner</span>
            </div>
            <div className="flex flex-wrap  items-center">
                <Link href={"/"} className="flex w-[100px] h-[80px]  justify-center py-2 px-2" >
                    <Image src={telekom} className="" alt="" />
                </Link>
                <Link href={"/"} className="flex w-[100px] h-[80px]  justify-center py-2 px-2">
                    <Image src={adidas} className="" alt="" />
                </Link>
                <Link href={"/"} className="flex w-[100px] h-[80px]  justify-center py-2 px-2">
                    <Image src={audi} className="" alt="" />
                </Link>
                <Link href={"/"} className="flex w-[100px] h-[80px]  justify-center py-2 px-2">
                    <Image src={allianz} className="" alt="" />
                </Link>
                <Link href={"/"} className="flex w-[100px] h-[80px]  justify-center py-2 px-2">
                    <Image src={adobe} className="" alt="" />
                </Link>
                <Link href={"/"} className="flex w-[100px] h-[80px]  justify-center py-2 px-2">
                    <Image src={konami} className="" alt="" />
                </Link>
                <Link href={"/"} className="flex w-[100px] h-[80px]  justify-center py-2 px-2">
                    <Image src={libertex} className="" alt="" />
                </Link>
                <Link href={"/"} className="flex w-[100px] h-[80px]  justify-center py-2 px-2">
                    <Image src={sap} className="" alt="" />
                </Link>
                <Link href={"/"} className="flex w-[100px] h-[80px]  justify-center py-2 px-2">
                    <Image src={tipico} className="" alt="" />
                </Link>
                <Link href={"/"} className="flex w-[100px] h-[80px]  justify-center py-2 px-2">
                    <Image src={viesmann} className="" alt="" />
                </Link>
            </div>
        </div>
      </footer>
    </>
  );
}