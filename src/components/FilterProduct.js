import React, { useState } from "react";

import Filter from "./Filter";
import SortOpt from "./SortOpt";

const FilterProduct = () => {
    const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex relative pt-3 items-center  bg-white">
        <div className="flex flex-col md:flex-row md:justify-between items-center mx-auto w-full px-0 md:px-0 md:w-11/12 border-y border-black divide-y md:divide-y-0 md:divide-x-2 divide-black">
          <div className="flex w-full md:w-1/2 py-2">
            <button
              className="filter2 place-content-center flex w-full justify-between px-4 items-center py-1 text-black focus:outline-none "
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="font-semibold text-md uppercase text-slate-800">
                Filter berdasarkan
              </span>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </div>
              
            </button>
          </div>
          <div className="w-full md:w-1/2 py-2">
          <SortOpt />
          </div>

          
        </div>
      </div>  

      <Filter
        isOpen={isOpen}
        handleClose={handleClose}
        setIsOpen={setIsOpen}
      />
    </>
  )
}

export default FilterProduct