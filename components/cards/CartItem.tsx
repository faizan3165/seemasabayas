import React from "react";
import Image from "next/image";

import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* Image Start */}
      <Image
        src={"/banner/1-min.jpg"}
        alt="product image"
        width={50}
        height={50}
      />
      {/* Image End */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Title Start */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Product Name
          </div>
          {/* Title End */}

          {/* Subtitle Start */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Category Name
          </div>
          {/* Subtitle End */}

          {/* Price Start */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] mt-2">
            Rs. Product Price
          </div>
          {/* Price End */}
        </div>

        {/* Subtitle Start */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          Category Name
        </div>
        {/* Subtitle End */}

        {/* Size & Qty Start */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            {/* Size Start */}
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size: </div>
              {/* Size End */}

              {/* Qty Start */}
              <select className="hover:text-black">
                <option value="s">small</option>
                <option value="m">medium</option>
                <option value="l">large</option>
                <option value="xl">extra large</option>
              </select>
            </div>
            {/* Qty End */}

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity: </div>

              <select className="hover:text-black">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          {/* Delete Icon Start */}
          <RiDeleteBin6Line className="cursor-pointer text-red-700/[0.5] hover:text-red-900 text-[16px] md:text-[20px]" />
          {/* Delete Icon End */}
        </div>
        {/* Size & Qty End */}
      </div>
    </div>
  );
};

export default CartItem;
