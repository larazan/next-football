import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import ProductItem from "./ProductItem";

// import { isOpen, SidebarContext } from "@/context/SidebarContext";

const Sidebar = ({ isOpen, handleClose }) => {
  //   const [isOpen, handleClose] = useContext(SidebarContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } flex flex-col w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold text-slate-900">Shopping Bag (0)</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-slate-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
        
      </div>
      <div className="flex  flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
          <ProductItem />
        </div>
        <div className="flex flex-col gap-y-3 py-4 mt-4">
            <div className="flex w-full justify-between items-center">
                <div className="uppercase font-semibold text-slate-900">
                    <span className="mr-2">Total:</span> $ 200.00
                </div>
                <div className="cursor-pointer py-4 bg-red-500 text-white w-8 h-8 flex justify-center items-center text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

                </div>
            </div>
            <Link href={"/cart"} className="bg-gray-200 text-slate-900 rounded flex p-3 justify-center items-center w-full font-medium">
                View Cart
            </Link>
            <Link href={"/checkout"} className="bg-gray-800 rounded text-white flex p-3 justify-center items-center w-full font-medium">
                Checkout
            </Link>
        </div>
    </div>
  );
};

export default Sidebar;
