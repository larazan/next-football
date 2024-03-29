"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "@/assets/img/media/slide1.png"
import slide2 from "@/assets/img/media/slide2.png"
import slide3 from "@/assets/img/media/slide3.png"
import slide4 from "@/assets/img/media/slide4.jpg"

const SlideMedia = () => {
  const settings = {
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: 'progressive',
    arrow: false,
  };

  const slideData = [
    {
      title: "Harry kane complete individual training",
      img: slide1
    },
    {
      title: "Team talks, rituals, favourite food: Dressing room insights from Bayern players",
      img: slide2
    },
    {
      title: "FC Bayern at the City of Munich Sports Honours",
      img: slide3
    },
    {
      title: "Highlight Bundesliga Matchday 20 Bayern vs Mainz",
      img: slide4
    },
  ]

  return (
    <>
    
      <div className="max-w-[1400px] bg-transparent overflow-hidden no-scrollbar2 overflow-x-hidden h-full w-full2 mx-auto  relative2 group2">
        <div className="w-full2 h-full2  bg-center2 bg-cover2 object-cover2 duration-500">
          <Slider {...settings}>
            {slideData.map((data, index) => {
              return (
                <div className="w-full2" key={index}>
                  <Image src={data.img} alt="" className="object-cover md:h-full w-full2"  />
                </div>
              );
            })}
          </Slider>
        </div>
     
      </div>
      
    </>
  );
};

export default SlideMedia;
