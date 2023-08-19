"use client";

import { useEffect, useState, Fragment } from "react";

import Hero from "@/components/banners/Hero";
import Product from "@/components/cards/Product";
import Wrapper from "@/components/shared/Wrapper";

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
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <main>
      <Hero />

      <Wrapper>
        {/* Intro Start */}
        <div className="text-center max-w-[800px] mx-auto my-[150px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold">
            Heading
          </div>

          <div className="text-md md:text-xl">
            Embrace modesty without compromising on style - discover the perfect
            abaya for the modern, empowered woman.
          </div>
        </div>
        {/* Intro End */}

        {/* Products Grid Start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
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
