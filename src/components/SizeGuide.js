import React, { useState } from "react";

export default function SizeGuide() {
  const [showModal, setShowModal] = useState(false);

  const measurements = [
    {
      title: "Chest",
      small: 48,
      medium: 51,
      large: 55,
      extraLarge: 61,
      doubleXL: 65,
      tripleXL: 70.5,
    },
    {
      title: "Shoulders",
      small: 40,
      medium: 42,
      large: 43.5,
      extraLarge: 48,
      doubleXL: 48,
      tripleXL: 51,
    },
    {
      title: "Hips",
      small: 47.5,
      medium: 49.5,
      large: 55.5,
      extraLarge: 60,
      doubleXL: 64,
      tripleXL: 69,
    },
    {
      title: "Back length",
      small: 71,
      medium: 71,
      large: 73.5,
      extraLarge: 74,
      doubleXL: 77,
      tripleXL: 79,
    },
    {
      title: "Sleeve length",
      small: 22,
      medium: 22.5,
      large: 24,
      extraLarge: 25.5,
      doubleXL: 28,
      tripleXL: 29,
    },
  ];

  const conversions = [
    {
        uk: 'S',
        de: '44-46',
        fr: '44-46',
        it: '46',
        es: '46',
        us: 'S',
    },
    {
        uk: 'M',
        de: '48-50',
        fr: '48-50',
        it: '50',
        es: '50',
        us: 'M',
    },
    {
        uk: 'L',
        de: '52-54',
        fr: '52-54',
        it: '54',
        es: '54',
        us: 'L',
    },
    {
        uk: 'XL',
        de: '56-58',
        fr: '56-58',
        it: '58',
        es: '58',
        us: 'XL',
    },
    {
        uk: 'XXL',
        de: '60-62',
        fr: '60-62',
        it: '62',
        es: '62',
        us: 'XXL',
    },
    {
        uk: '3XL',
        de: '64-66',
        fr: '64-66',
        it: '66',
        es: '66',
        us: '3XL',
    },
  ]

  return (
    <>
      <button
        className="text-xs hover:text-slate-700 hover:underline font-medium text-black/[0.5] cursor-pointer"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Size Guide
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between px-5 py-4">
                <h2 className=" text-2xl text-slate-900 uppercase tracking-tighter font-semibold">
                      Men's Jersey Sizing Chart
                    </h2>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                {/* body */}
                <div className="relative px-6 flex-auto">
                  <div className="container  mx-auto sm:p-4 dark:text-gray-100">
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm">
                        <thead className="bg-[#dde6ed] dark:bg-gray-700">
                          <tr className="text-left">
                            <th className="p-3 text-center" colSpan={8}>
                              Product Measurements Cm
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b font-bold border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td className="p-2">
                              <p>Sizes</p>
                            </td>
                            <td className="p-2">
                              <p>S</p>
                            </td>
                            <td className="p-2">
                              <p>M</p>
                            </td>
                            <td className="p-2">
                              <p>L</p>
                            </td>
                            <td className="p-2">
                              <p>XL</p>
                            </td>
                            <td className="p-2">
                              <p>XXL</p>
                            </td>
                            <td className="p-2">
                              <p>3XL</p>
                            </td>
                          </tr>
                          {measurements.map((data, index) => {
                            return (
                              <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                <td className="p-2 capitalize font-bold">
                                  <p>{data.title}</p>
                                </td>
                                <td className="p-2">
                                  <p>{data.small}</p>
                                </td>
                                <td className="p-2">
                                  <p>{data.medium}</p>
                                </td>
                                <td className="p-2">
                                  <p>{data.large}</p>
                                </td>
                                <td className="p-2">
                                  <p>{data.extraLarge}</p>
                                </td>
                                <td className="p-2">
                                  <p>{data.doubleXL}</p>
                                </td>
                                <td className="p-2">
                                  <p>{data.tripleXL}</p>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="py-3">
                      <span className="text-slate-900 font-semibold">
                        Explanation how to measure from image below
                      </span>
                    </div>
                    <div className="px-4 text-sm">
                      <ul className="list-disc">
                        <li>
                          <strong>A: Chest -</strong> Measure the shirt from
                          just under the left armhole to the right armhole.
                        </li>
                        <li>
                          <strong>B: (Across) Shoulders -</strong> Measure the
                          shirt from the seam on the left shoulder to the seam
                          on the right shoulder.
                        </li>
                        <li>
                          <strong>C: Hips -</strong> Measure the bottom of the
                          shirt from left to right.{" "}
                        </li>
                        <li>
                          <strong>D: Back Length -</strong> Measure the shirt
                          from the collar to the bottom of the shirt.
                        </li>
                        <li>
                          <strong>E: Sleeve Length -</strong> Measure the shirt
                          from the seam on top of the shoulder to the bottom of
                          the sleeve.{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="overflow-x-auto py-4 ">
                      <table className="min-w-full text-sm">
                        <thead className="bg-[#dde6ed] dark:bg-gray-700">
                          <tr className="text-left">
                            <th className="p-2 text-center" colSpan={8}>
                                International Size Conversion table
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b font-bold border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td className="p-2">
                              <p>UK</p>
                            </td>
                            <td className="p-2">
                              <p>DE</p>
                            </td>
                            <td className="p-2">
                              <p>FR</p>
                            </td>
                            <td className="p-2">
                              <p>IT</p>
                            </td>
                            <td className="p-2">
                              <p>ES</p>
                            </td>
                            <td className="p-2">
                              <p>US</p>
                            </td>
                            
                          </tr>
                          {conversions.map((data, index) => {
                            return (
                              <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                <td className="p-2 capitalize font-bold">
                                  <p>{data.uk}</p>
                                </td>
                                <td className="p-2">
                                  <p>{data.de}</p>
                                </td>
                                <td className="p-2">
                                  <p>{data.fr}</p>
                                </td>
                                <td className="p-2">
                                  <p>{data.it}</p>
                                </td>
                                <td className="p-2">
                                  <p>{data.es}</p>
                                </td>
                                <td className="p-2">
                                  <p>{data.us}</p>
                                </td>
                                
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
