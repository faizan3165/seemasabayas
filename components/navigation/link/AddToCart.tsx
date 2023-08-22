import { BiCartAdd } from "react-icons/bi";

const AddToCart = () => {
  return (
    <button className="w-full py-4 rounded-full bg-black text-white text-base-regular font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex justify-center items-center gap-2">
      <span>
        <BiCartAdd size={23} />
      </span>
      Add To Cart
    </button>
  );
};

export default AddToCart;
