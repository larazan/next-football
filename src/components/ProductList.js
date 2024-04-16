import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import product1 from "@/assets/img/product/product1.png";
import product2 from "@/assets/img/product/product2.png";
import product3 from "@/assets/img/product/product3.png";
import product4 from "@/assets/img/product/product4.png";
import product5 from "@/assets/img/product/product5.png";
import product6 from "@/assets/img/product/product6.png";
import product7 from "@/assets/img/product/product7.png";
import product8 from "@/assets/img/product/product8.png";
import product9 from "@/assets/img/product/product9.png";
import product10 from "@/assets/img/product/product10.png";
import product11 from "@/assets/img/product/product11.png";
import product12 from "@/assets/img/product/product12.png";

const ProductList = () => {
    const [open, setOpen] = useState('');
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = () => {
        setIsHovered(!isHovered);
    }

    const unhover = () => {
        setOpen('')
      }

      const productData = [
        {
          title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
          slug: "product-1",
          price: "91,00",
          img: product1,
        },
        {
          title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
          slug: "product-1",
          price: "91,00",
          img: product2,
        },
        {
          title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
          slug: "product-1",
          price: "91,00",
          img: product3,
        },
        {
          title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
          slug: "product-1",
          price: "91,00",
          img: product4,
        },
        {
          title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
          slug: "product-1",
          price: "91,00",
          img: product5,
        },
        {
          title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
          slug: "product-1",
          price: "91,00",
          img: product6,
        },
        {
          title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
          slug: "product-1",
          price: "91,00",
          img: product7,
        },
        {
          title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
          slug: "product-1",
          price: "91,00",
          img: product8,
        },
        {
          title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
          slug: "product-1",
          price: "91,00",
          img: product9,
        },{
          title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
          slug: "product-1",
          price: "91,00",
          img: product10,
        },{
          title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
          slug: "product-1",
          price: "91,00",
          img: product11,
        },{
          title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
          slug: "product-1",
          price: "91,00",
          img: product12,
        },
      ];

  return (
    <>
        <div className={`w-full max-w-[1280px] px-5 py-1 md:px-10 mx-auto bg-white`}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 py-5 md:my-1 px-0 md:px-0">
          {productData.map((data, index) => {
            return (
              <Link
                href={`/shop/product-one`}
                className="transform overflow-hidden bg-transparent duration-200 hover:scale-105 cursor-pointer"
                key={index}
              >
                <div className="bg-[#f4f4f4] p-2 rounded-md" >
                <Image
                  width={500}
                  height={500}
                  src={data.img}
                  alt={data.title}
                />
                </div>
                <div className="p-2 flex flex-col justify-center items-center space-y-1 text-black/[0.9]">
                  <h2 className="text-base text-center font-medium leading-tight">{data.title}</h2>
                  <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg text-gray-950 font-semibold">
                      ${data.price}
                    </p>

                    {data.price && (
                      <>
                        <p className="text-base  font-medium line-through">
                          ${data.price}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default ProductList