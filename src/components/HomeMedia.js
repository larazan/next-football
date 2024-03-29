import Link from "next/link";
import Image from "next/image";

import media1 from "@/assets/img/230710-choupo_leistungsdiagnostik-1.png";
import media2 from "@/assets/img/230623-interview-guerreiro-16-9.png";
import media3 from "@/assets/img/230709-hernandez-get.png";
import media4 from "@/assets/img/230708-bayerischer-sportpreis-ehrung-musiala-StMI.png";

export default function HomeMedia() {
    return (
      <>
<div className="h-max flex mx-auto w-full lg:w-1/2 px-0 md:px-6 py-0 md:py-4 justify-center2 items-center2 bg-[#000e29]">
    <div className="flex flex-col space-y-3  py-6 mx-auto w-full md:w-12/12 ">
      <div className="flex justify-between items-center">
        <span className="text-white text-base px-3 md:text-2xl uppercase font-semibold">FC Bayern TV</span>
          <Link href={"/"} className="flex items-center space-x-2 text-blue-500" >
            <span className="text-sm ">Show more</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

          </Link>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 mx-auto w-full md:w-12/12 ">
          <div className="px-3 py-3 w-full">
            <div className=" bg-[#121f38] group flex flex-col overflow-hidden hover:scale-105 ">
              <Link
                href="https://statamic.com/blog/statamic-4-unleashed"
                className="relative"
              >
                <Image src={media1} alt="" className="w-full" />{" "}
                <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
              </Link>{" "}
              <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
                <div className="font-semibold text-xs uppercase text-white">
                  Video
                </div>
                <h3 className="font-semibold text-[16px] text-white">
                  <Link href="https://statamic.com/blog/statamic-4-unleashed">
                  Here we go again! Choupo-Moting & Co begin pre-season
                  </Link>
                </h3>{" "}
              </div>
            </div>
          </div>
          <div className="px-3 py-3 w-full">
          <div className=" bg-[#121f38] group flex flex-col overflow-hidden hover:scale-105 ">
            <Link
              href="https://statamic.com/blog/statamic-4-unleashed"
              className="relative"
            >
              <Image src={media2} alt="" className="w-full" />{" "}
              <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
            </Link>{" "}
            <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
              <div className="font-semibold text-xs uppercase text-white">
                Video
              </div>
              <h3 className="font-semibold text-[16px] text-white">
                <Link href="https://statamic.com/blog/statamic-4-unleashed">
                Here we go again! Choupo-Moting & Co begin pre-season
                </Link>
              </h3>{" "}
            </div>
          </div>
          </div>
          <div className="px-3 py-3 w-full">
          <div className=" bg-[#121f38] group flex flex-col overflow-hidden hover:scale-105 ">
            <Link
              href="https://statamic.com/blog/statamic-4-unleashed"
              className="relative"
            >
              <Image src={media3} alt="" className="w-full" />{" "}
              <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
            </Link>{" "}
            <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
              <div className="font-semibold text-xs uppercase text-white">
                Video
              </div>
              <h3 className="font-semibold text-[16px] text-white">
                <Link href="https://statamic.com/blog/statamic-4-unleashed">
                Here we go again! Choupo-Moting & Co begin pre-season
                </Link>
              </h3>{" "}
            </div>
          </div>
          </div>
          <div className="px-3 py-3 w-full">
          <div className=" bg-[#121f38] group flex flex-col overflow-hidden hover:scale-105 ">
            <Link
              href="https://statamic.com/blog/statamic-4-unleashed"
              className="relative"
            >
              <Image src={media4} alt="" className="w-full" />{" "}
              <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
            </Link>{" "}
            <div className="px-3 py-2 pb-4 flex flex-col space-y-1 leading-tight">
              <div className="font-semibold text-xs uppercase text-white">
                Video
              </div>
              <h3 className="font-semibold text-[16px] text-white">
                <Link href="https://statamic.com/blog/statamic-4-unleashed">
                Here we go again! Choupo-Moting & Co begin pre-season
                </Link>
              </h3>{" "}
            </div>
          </div>
          </div>
        </div>
    </div>
</div>
      </>
    )
}