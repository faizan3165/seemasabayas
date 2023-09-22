import Link from "next/link";
import Image from "next/image";

import { IoMdHeartEmpty } from "react-icons/io";

import ProductDetailsLink from "../navigation/link/ProductDetailsLink";

const Product = ({ product }: any) => {
  return (
    <div className="group border-light-1 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-light-1 shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <Image
          className="peer absolute top-0 right-0 h-full w-full object-cover"
          src={product.image}
          alt="product image"
          width={500}
          height={500}
        />
        {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-dark-1 px-2 text-center text-sm font-medium text-light-1">
          39% OFF
        </span> */}

        {/* <div
          className={` top-[1px] right-[2px] w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer absolute`}
        >
          <div>
            <IoMdHeartEmpty className={`text-[24px]`} />
          </div>
        </div> */}
      </div>

      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-dark-1">{product.name}</h5>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-dark-1">
              Rs. {product.price.toLocaleString()}
            </span>

            {/* <span className="text-sm mx-4 text-dark-1 line-through">
              Rs.699
            </span> */}
          </p>
        </div>

        <div className="mx-auto my-5">
          <div className="text-md md:text-xl">
            {product.description.slice(0, 20)}...
          </div>
        </div>

        <ProductDetailsLink productId={product.name} />
      </div>
    </div>
  );
};

export default Product;
