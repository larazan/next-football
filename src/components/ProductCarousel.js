import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import product1 from "@/assets/img/product/p1.png";
import product2 from "@/assets/img/product/p2.png";
import product3 from "@/assets/img/product/p3.png";
import product4 from "@/assets/img/product/p4.png";
import product5 from "@/assets/img/product/p5.png";
import product6 from "@/assets/img/product/p6.png";
import product7 from "@/assets/img/product/p7.png";

const ProductCarousel = () => {
    const productData = [
        {
          title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
          price: "91,00",
          img: product1,
        },
        {
            title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
            price: "91,00",
            img: product2,
          },
          {
            title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
            price: "91,00",
            img: product3,
          },
          {
            title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
            price: "91,00",
            img: product4,
          },
          {
            title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
            price: "91,00",
            img: product5,
          },
          {
            title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
            price: "91,00",
            img: product6,
          },
          {
            title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
            price: "91,00",
            img: product7,
          },
       
      ];

  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                {/* {productData?.map((data, index) => (
                    <img
                        key={index}
                        src={data.img}
                        alt={data.title}
                    />
                ))} */}

                <img src="/p1.png" />
                <img src="/p2.png" />
                <img src="/p3.png" />
                <img src="/p4.png" />
                <img src="/p5.png" />
                <img src="/p6.png" />
                
                
            </Carousel>
        </div>
  )
}

export default ProductCarousel