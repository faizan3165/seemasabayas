"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import Wrapper from "@/components/shared/Wrapper";
import ProductImages from "@/components/banners/ProductImages";
import AddToCart from "@/components/navigation/link/AddToCart";
import AddToWishlist from "@/components/navigation/link/AddToWishlist";
import SimilarProducts from "@/components/carousel/SimilarProducts";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    categories: "",
    sizes: { small: 0, medium: 0, large: 0, extraLarge: 0 },
  });

  const { slug } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "https://seemas-admin.vercel.app/api/products",
          {
            cache: "no-store",
            method: "GET",
            headers: { Origin: "https://seemas-admin.vercel.app" },
          }
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getProduct = (slug: any) => {
      const formattedSlug = slug.replace("%20", " ");

      const individualProduct = products.find(
        (product: any) => product.name === formattedSlug
      );

      if (individualProduct) {
        setProduct(individualProduct);
      } else {
        setProduct({
          name: "",
          description: "",
          price: 0,
          categories: "",
          sizes: { small: 0, medium: 0, large: 0, extraLarge: 0 },
        });
      }
    };

    getProduct(slug);
  }, [slug, products]);

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left Column Start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductImages />
          </div>
          {/* Left Column End */}

          {/* Right Column Start */}
          <div className="flex-[1] py-3">
            {/* Title Start */}
            <div className="text-[34px] font-semibold mb-2">
              {product?.name}
            </div>
            {/* Title End */}

            {/* Subtitle Start */}
            <div className="text-lg font-semibold mb-5 capitalize">
              {product?.categories}
            </div>
            {/* Subtitle End */}

            {/* Price Start */}
            <div className="text-lg font-semibold">Rs. {product?.price}</div>

            <div className="text-md font-semibold text-black/[0.5]">
              .incl of taxes
            </div>

            <div className="text-md font-medium mb-20 text-black/[0.5]">
              {`(Also includes all applicable duties)`}
            </div>
            {/* Price End */}

            {/* Sizes Start */}
            <div className="mb-10">
              {/* Heading Start */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>

                <div className="text-md font-semibold text-black/[0.5] cursor-pointer">
                  Size Guide
                </div>
              </div>
              {/* Heading End */}

              {/* Select Size Start */}
              <div className="grid grid-cols-2 gap-2">
                <div
                  className={`border rounded-md text-center py-3 font-medium  ${
                    product?.sizes?.small > 0
                      ? "cursor-pointer hover:border-black"
                      : "cursor-not-allowed bg-black/[0.1] opacity-50"
                  }`}
                >
                  S
                </div>

                <div
                  className={`border rounded-md text-center py-3 font-medium  ${
                    product?.sizes?.medium > 0
                      ? "cursor-pointer hover:border-black"
                      : "cursor-not-allowed bg-black/[0.1] opacity-50"
                  }`}
                >
                  M
                </div>

                <div
                  className={`border rounded-md text-center py-3 font-medium  ${
                    product?.sizes?.large > 0
                      ? "cursor-pointer hover:border-black"
                      : "cursor-not-allowed bg-black/[0.1] opacity-50"
                  }`}
                >
                  L
                </div>

                <div
                  className={`border rounded-md text-center py-3 font-medium  ${
                    product?.sizes?.extraLarge > 0
                      ? "cursor-pointer hover:border-black"
                      : "cursor-not-allowed bg-black/[0.1] opacity-50"
                  }`}
                >
                  XL
                </div>
              </div>
              {/* Select Size End */}

              {/* Error Start */}
              <div className="text-red-600 mt-1">
                Please Select Size Before Continuing
              </div>
              {/* Error End */}
            </div>
            {/* Sizes End */}

            {/* Add To Cart Start */}
            <AddToCart />
            {/* Add To Cart End */}

            {/* Add To Cart Start */}
            <AddToWishlist />
            {/* Add To Cart End */}

            {/* Details Start */}
            <div>
              <div className="text-heading1-semibold font-bold mb-5">
                Product Details
              </div>

              <div className="text-md mb-5">
                {product?.description}
              </div>
            </div>
            {/* Details End */}
          </div>
          {/* Right Column End */}
        </div>

        {/* Similar Products Start */}
        <SimilarProducts products={products} product={product} />
        {/* Similar Products End */}
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
