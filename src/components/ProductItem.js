import Image from "next/image";
import Link from "next/link";
import React from "react";

import product1 from "@/assets/img/product/product1.png";
import product2 from "@/assets/img/product/product2.png";
import product3 from "@/assets/img/product/product3.png";
import product4 from "@/assets/img/product/product4.png";
import product5 from "@/assets/img/product/product5.png";
import product6 from "@/assets/img/product/product6.png";
import product7 from "@/assets/img/product/product7.png";

const ProductItem = () => {
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link href={"/shop/product-4"} className="border rounded-sm bg-gray-100 p-1">
          <Image src={product1} alt="" className="max-w-[80px]" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              href={"/shop/product-4"}
              className="text-xs uppercase font-medium max-w-[240px] hover:underline"
            >
              Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing
            </Link>
            <div className="text-xl cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 hover:text-red-500 transition"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="custom-number-input h-0 w-[70px]">
              <div className="flex  flex-row h-8 w-full rounded-lg relative bg-transparent mt-1">
                <button
                  data-action="decrement"
                  className="flex items-center bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer outline-none"
                >
                  <span className="m-auto text-2xl font-thin">
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
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                </button>
                <input
                  type="number"
                  className="outline-none  text-center w-full bg-gray-100 font-semibold text-sm hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                  name="custom-input-number"
                  value="0"
                />
                <button
                  data-action="increment"
                  className="flex items-center bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-r cursor-pointer"
                >
                  <span className="m-auto text-2xl font-thin">
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
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-around items-center">
              $ 99,00
            </div>
            <div className="flex-1 flex justify-end items-center font-medium">
              $ 99,00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
