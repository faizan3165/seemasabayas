import Link from "next/link";

const Checkout = () => {
  return (
    <Link href={"/checkout"} className="w-full py-4 rounded-full bg-black text-white text-base-regular font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex justify-center items-center gap-2">
      Checkout
    </Link>
  );
};

export default Checkout;
