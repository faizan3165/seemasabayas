"use client";

import Link from "next/link";
import { useState } from "react";

import { PiEyeClosed, PiEye } from "react-icons/pi";

const ProductDetailsLink = ({ productId }: any) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={`/product/${productId}`}
      className="transform duration-200 hover:scale-105 flex items-center justify-center rounded-md border border-transparent bg-pink-200 px-5 py-2.5 text-center text-sm font-medium text-dark-1 focus:outline-none focus:ring-4 focus:ring-pink-300"
    >
      <span className="mx-2">
        {hover ? <PiEye size={23} /> : <PiEyeClosed size={23} />}
      </span>
      Details
    </Link>
  );
};

export default ProductDetailsLink;
