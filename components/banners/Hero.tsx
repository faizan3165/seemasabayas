"use client";

import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";

import { bannerImgs } from "@/constants/bannerImgs";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <div
      className={`relative text-white text-[20px] w-full max-w-[1360px] mx-auto `}
    >
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50-px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            onClick={clickHandler}
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50-px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            onClick={clickHandler}
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        {bannerImgs.map((img: any) => (
          <div key={img.id}>
            <Image
              src={img.url}
              alt={img.id}
              width={500}
              height={500}
              className={`rounded-lg object-contain`}
            />

            <div className={`hero-banner_text`}>Shop Now</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
