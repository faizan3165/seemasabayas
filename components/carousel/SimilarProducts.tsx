"use client";

import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

import Product from "../cards/Product";

import { responsive } from "@/constants/breakpoints";

import "react-multi-carousel/lib/styles.css";

const SimilarProducts = ({ products, product }: any) => {
  const [similarProducts, setSimilarProducts] = useState([{ _id: 0 }]);

  useEffect(() => {
    const filterProducts = (products: any, product: any) => {
      const relatedProducts = products.filter(
        (allProduct: any) =>
          allProduct.categories === product.categories &&
          product._id != allProduct._id
      );

      setSimilarProducts(relatedProducts);
    };

    filterProducts(products, product);
  }, [product, products]);

  return (
    <div className="mt-[50px] mg:mt-[100px] md:mt-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>

      <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >
        {similarProducts?.map((relatedProduct) => (
          <Fragment key={relatedProduct._id}>
            <Product product={relatedProduct} />
          </Fragment>
        ))}
      </Carousel>
    </div>
  );
};

export default SimilarProducts;
