import Image from "next/image";

import banne from "@/assets/img/230606_ATP_Banner4.png";

export default function Banner() {
  return (
    <>
      <div className="h-max flex px-2 md:px-6 py-0 md:py-6 justify-center2 items-center2 bg-[#f5f7f9]">
        <Image src={banne} alt="" />
      </div>
    </>
  );
}
