import { IoMdHeartEmpty } from "react-icons/io";

const AddToWishlist = () => {
  return (
    <button className="w-full py-4 rounded-full bg-white text-black border border-black text-base-regular font-medium transition-transform active:scale-95 mb-10 hover:opacity-75 flex justify-center items-center gap-2">
      <span>
        <IoMdHeartEmpty size={23} />
      </span>
      Add To Wishlist
    </button>
  );
};

export default AddToWishlist;
