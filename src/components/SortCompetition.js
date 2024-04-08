"use client";

import React, { useState, useRef, useEffect } from "react";

const options = [
  "Bundesliga",
  "Champions League",
];

const SortCompetition = () => {
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
          className={`relative flex items-center justify-between px-0 border border-indigo-300 ${
            isOpen
              ? "bg-blue-200 text-[#002f6c]"
              : "bg-blue-100 text-[#002f6c] hover:bg-blue-200"
          }  rounded min-w-64 h-8 cursor-pointer`}
          ref={autoRef}
          onClick={toggling}
        >
          <button className="text-[13px]  font-semibold pl-2 px-2 tracking-wide">
            {selectedOption || "All Competition"}
          </button>
          <span className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className={`w-4 h-4 ${
                isOpen ? "rotate-180 text-[#002f6c]" : "text-[#002f6c]"
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
            <div className="min-w-64 absolute top-4 py-2 right-0 z-30 mt-4 origin-top-right rounded  bg-blue-200">
              {options.map((option, index) => (
                <div className="px-0" key={index}>
                  <button
                    // type="button"
                    onClick={onOptionClicked(option)}
                    className="flex py-1 px-3 w-full font-semibold text-[13px] text-[#002f6c] no-underline hover:bg-blue-400 hover:text-white"
                  >
                    <span className="">{option}</span>
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

export default SortCompetition;