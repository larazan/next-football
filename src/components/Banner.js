import Image from "next/image";

import banne from "@/assets/img/230606_ATP_Banner4.png";
import prediction from "@/assets/img/prediction.png";
import olshop from "@/assets/img/olshop.jpg";
import newsletter from "@/assets/img/newsletter.jpg";


export default function Banner() {
  return (
    <>
      <div className="h-max w-full flex flex-col space-y-4 px-2 md:px-6 py-0 md:py-6 justify-center2 items-center2 bg-[#f5f7f9]">
        <Image src={banne} alt="" />
        <div className="flex space-x-4 w-full">
          <div className="w-1/3">
          <Image src={prediction} alt="" className="" />
          </div>
          <div className="w-1/3">
          <Image src={olshop} alt="" className="" />
          </div>
          <div className="w-1/3">
          <Image src={newsletter} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
}
