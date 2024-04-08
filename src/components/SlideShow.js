import React from "react";
import Link from "next/link";
import Image from "next/image";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid'

import slide1 from "@/assets/img/slides/slide1.jpg";
import slide2 from "@/assets/img/slides/slide2.jpg";
import slide3 from "@/assets/img/slides/slide3.jpg";
import slide4 from "@/assets/img/slides/slide4.jpg";
import slide5 from "@/assets/img/slides/slide5.jpg";
import slide6 from "@/assets/img/slides/slide6.jpg";

const Slideshow = () => {
	//Array of Images
	const images = [
		
        {
            image:slide2
        },
        {
            image:slide3
        },
        {
            image:slide4
        },
        {
            image:slide5
        },
        {
            image:slide6
        }
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 5000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="hidden backdrop-blur group-hover:block  ml-3 top-[30%] md:top-[40%] px-2 py-5 border rounded ">
				<ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
			</div>
		),
		nextArrow: (
				<div className="hidden backdrop-blur group-hover:block mr-3 top-[30%] md:top-[40%] px-2 py-5 border rounded">
				   <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
			    </div>
		),
	};
	return (
		<div className="mx-auto w-full group">
			<Zoom {...zoomInProperties}>
				{images.map((data, index) => (
					<div key={index} className="flex justify-center md:items-center items-start w-screen relative">
						<Image
							className="w-screen"
							src={data.image}
							alt=""
						/>
                        {/* <h1 className="absolute md:top-60 top-24 inset-x-1/4 text-center z-10 md:text-6xl text-4xl bold text-white">Hello, Nik</h1>
                        <p className="absolute md:top-80 top-40 inset-x-1/4 text-center z-10 md:text-2xl text-xl bold text-white">"Everything you can imagine is real."</p> */}
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default Slideshow;