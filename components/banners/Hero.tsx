"use client";

import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <div
      className={`relative text-white text-[20px] w-full max-w-[1360px] mx-auto`}
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
        <div>
          <img
            src="/assets/slide-1.png"
            alt="p1"
            className={`hero-banner_img`}
          />

          <div className={` hero-banner_text`}>Shop Now</div>
        </div>

        <div>
          <img
            src="/assets/slide-2.png"
            alt="p2"
            className={`hero-banner_img`}
          />

          <div className={` hero-banner_text`}>Shop Now</div>
        </div>

        <div>
          <img
            src="/assets/slide-3.png"
            alt="p3"
            className={`hero-banner_img`}
          />

          <div className={` hero-banner_text`}>Shop Now</div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
