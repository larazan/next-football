"use client";

import React, { useState, useRef, useEffect } from "react";

const options = [
  "recommended",
  "populer",
  "name: a to z",
  "name: z to a",
  "price: low to high",
  "price: high to low",
];

const SortOpt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  let autoRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!autoRef.current.contains(e.target)) {
        setIsOpen(false);
        console.log(autoRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div className={`flex ${isOpen ? 'z-30' : 'z-20'}`}>
        <div
          className={`relative flex items-center justify-between px-4 ${
            isOpen
              ? " text-slate-800"
              : " text-slate-800"
          }  rounded w-full h-8 cursor-pointer`}
          ref={autoRef}
          onClick={toggling}
        >
          <button className="text-md  font-semibold uppercase">
            {selectedOption || "Urutkan berdasarkan"}
          </button>
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className={`w-4 h-4 ${
                isOpen ? "rotate-180 text-slate-800" : "text-slate-800"
              } `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
          {isOpen && (
            <div className="w-full absolute top-6 md:top-7 py-2 right-0 z-30 mt-4 origin-top-right rounded bg-white shadow-sm border border-slate-300">
              {options.map((option, index) => (
                <div className="px-0" key={index}>
                  <button
                    // type="button"
                    onClick={onOptionClicked(option)}
                    className="flex py-1.5 px-3 w-full font-semibold text-md text-slate-800 no-underline hover:bg-blue-400 hover:text-white"
                  >
                    <span className="uppercase">{option}</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SortOpt;