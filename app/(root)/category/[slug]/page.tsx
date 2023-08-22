"use client";

import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import Wrapper from "@/components/shared/Wrapper";
import Product from "@/components/cards/Product";

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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
    const filterProducts = (slug: any) => {
      const formattedSlug = slug.replace(/-/g, " ");

      const catProducts = products.filter(
        (product: any) => product.categories === formattedSlug
      );
      setFilteredProducts(catProducts);
    };

    filterProducts(slug);
  }, [slug, products]);

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold capitalize">
            {slug}
          </div>
        </div>

        {/* Products Grid Start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 my-14 px-5 md:px-0">
          {filteredProducts?.map((product: any) => (
            <Fragment key={product._id}>
              <Product product={product} />
            </Fragment>
          ))}
        </div>
        {/* Products Grid Start */}
      </Wrapper>
    </div>
  );
};

export default CategoryPage;
