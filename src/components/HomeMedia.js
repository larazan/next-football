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
        <span className="text-white text-base px-3 md:text-2xl uppercase font-semibold">FC Bayern TV</span>

        <div className="flex flex-row flex-wrap  mx-auto w-full md:w-12/12 ">
          <div className="px-3 py-3 w-1/2 md:w-1/4 lg:w-1/4">
            <div className=" bg-[#121f38] group flex flex-col overflow-hidden hover:scale-105 ">
              <Link
                href="https://statamic.com/blog/statamic-4-unleashed"
                className="relative"
              >
                <Image src={media1} alt="" className="w-80" />{" "}
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
          <div className="px-3 py-3 w-1/2 md:w-1/4 lg:w-1/4">
          <div className=" bg-[#121f38] group flex flex-col overflow-hidden hover:scale-105 ">
            <Link
              href="https://statamic.com/blog/statamic-4-unleashed"
              className="relative"
            >
              <Image src={media2} alt="" className="w-80" />{" "}
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
          <div className="px-3 py-3 w-1/2 md:w-1/4 lg:w-1/4">
          <div className=" bg-[#121f38] group flex flex-col overflow-hidden hover:scale-105 ">
            <Link
              href="https://statamic.com/blog/statamic-4-unleashed"
              className="relative"
            >
              <Image src={media3} alt="" className="w-80" />{" "}
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
          <div className="px-3 py-3 w-1/2 md:w-1/4 lg:w-1/4">
          <div className=" bg-[#121f38] group flex flex-col overflow-hidden hover:scale-105 ">
            <Link
              href="https://statamic.com/blog/statamic-4-unleashed"
              className="relative"
            >
              <Image src={media4} alt="" className="w-80" />{" "}
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