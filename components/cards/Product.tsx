import Link from "next/link";
import Image from "next/image";

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

        {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-light-1 px-2 text-center text-sm font-medium text-dark-2">
            39% OFF
          </span> */}
      </div>

      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-dark-1">{product.name}</h5>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-dark-1">
              Rs. {product.price}
            </span>

            {/* <span className="text-sm text-dark-1 line-through">$699</span> */}
          </p>
        </div>

        <div className="mx-auto my-5">
          <div className="text-md md:text-xl">
            {product.description.slice(0, 50)}
          </div>
        </div>

        <Link
          href={`/products/${product._id}`}
          className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue px-5 py-2.5 text-center text-sm font-medium text-dark-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
