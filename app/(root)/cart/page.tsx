import Link from "next/link";
import Image from "next/image";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Wrapper from "@/components/shared/Wrapper";
import CartItem from "@/components/cards/CartItem";
import Checkout from "@/components/navigation/link/Checkout";

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* Heading Start */}
        <div className="text-center max-w-[800px] mx-auto md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Your Cart
          </div>
        </div>
        {/* Heading End */}

        {/* Content Start */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* Items Start */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>

            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* Items End */}

          {/* Summary Start */}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>

            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">
                  Subtotal
                </div>

                <div>Rs. 15,6973</div>
              </div>

              <div className="text-sm md:text-md py-5 border-t mt-5">
                The Subtotal Reflects The Total Price Of Your Order, Including
                Duties & Taxes, Before Any Applicable Discounts. It Does Not
                Include Delivery Costs & International Transaction Fees.
              </div>
            </div>

            {/* Checkout Start */}
            <Checkout />
            {/* Checkout End */}
          </div>
          {/* Summary End */}
        </div>
        {/* Content End */}

        <div className="flex-[2] flex flex-col items-center pb-[58px] md:-mt-14">
          <Image
            src={"/assets/empty-cart.jpg"}
            alt="empty cart"
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
          />

          <span className="text-xl font-bold">Your Cart Is Empty</span>

          <span className="text-center mt-4">
            Go Ahead & Explore Our Products
          </span>

          <Link
            href={"/"}
            className="py-4 px-8 rounded-full bg-black text-white text-base-regular font-medium transition-transform active:scale-95 mb-3 mt-8 hover:opacity-75"
          >
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;
