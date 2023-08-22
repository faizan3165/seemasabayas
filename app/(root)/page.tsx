"use client";

import Image from "next/image";
import { useEffect, useState, Fragment } from "react";

import Hero from "@/components/banners/Hero";
import Product from "@/components/cards/Product";
import Wrapper from "@/components/shared/Wrapper";

import bg from "../../public/logos/cover.jpg";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "https://seemas-admin.vercel.app/api/products",
          { cache: "no-store" }
        );

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, [products]);

  return (
    <main>
      <Wrapper>
        {/* Intro Start */}
        <div className="bg-pink-200/[0.7] text-center flex justify-between items-center  mx-auto my-[150px] md:my-[80px] md:flex md:flex-row md:gap-10 rounded-lg">
          <div className="mx-10">
            <div className="text-[40px] md:text-[50px] mb-5 font-semibold">
              Seemas
            </div>

            <div className="text-xl md:text-xl">
              Embrace modesty without compromising on style - discover the
              perfect abaya for the modern, empowered woman.
            </div>
          </div>

          <div className="">
            <Image
              src={"/logos/logo.jpg"}
              alt="logo"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
        {/* Intro End */}

        {/* Products Grid Start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 my-14 px-5 md:px-0">
          {products?.map((product: any) => (
            <Fragment key={product._id}>
              <Product product={product} />
            </Fragment>
          ))}
        </div>
        {/* Products Grid Start */}
      </Wrapper>
    </main>
  );
};

export default Home;
