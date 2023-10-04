import Image from "next/image";

import banne from "@/assets/img/230606_ATP_Banner4.png";
import prediction from "@/assets/img/prediction.png";
import olshop from "@/assets/img/olshop.jpg";
import newsletter from "@/assets/img/newsletter.jpg";


export default function Banner() {
  return (
    <>
      <div className="h-max mx-auto w-full lg:w-1/2 flex flex-col space-y-4 px-4 md:px-6 lg:px-0 py-0 md:py-6 justify-center2 items-center2 bg-[#f5f7f9]">
        <Image src={banne} alt="" />
        <div className="flex flex-col md:flex-row space-y-3 md:space-x-4 w-full">
          <div className="w-full md:w-1/3">
          <Image src={prediction} alt="" className="w-full" />
          </div>
          <div className="w-full md:w-1/3">
          <Image src={olshop} alt="" className="w-full" />
          </div>
          <div className="w-full md:w-1/3">
          <Image src={newsletter} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
