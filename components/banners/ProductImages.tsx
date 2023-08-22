"use client";

import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductImages = () => {
  return (
    <div
      className={`text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]`}
    >
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={true}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/banner/1-min.jpg" alt="" />
        <img src="/banner/2-min.jpg" alt="" />
        <img src="/banner/3-min.jpg" alt="" />
        <img src="/banner/4-min.jpg" alt="" />
      </Carousel>
    </div>
  );
};

export default ProductImages;
