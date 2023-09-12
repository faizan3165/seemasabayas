import { useDispatch } from "react-redux";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCart, removeFromCart } from "@/store/cartSlice";

const CartItem = ({ item }: any) => {
  const dispatch = useDispatch();

  const sizes = [
    {
      id: 1,
      label: "small",
      qty: item.product.sizes.small,
    },
    {
      id: 2,
      label: "medium",
      qty: item.product.sizes.medium,
    },
    {
      id: 3,
      label: "large",
      qty: item.product.sizes.large,
    },
    {
      id: 4,
      label: "extraLarge",
      qty: item.product.sizes.extraLarge,
    },
  ];

  const selectedSize: any = sizes.find(
    (size) => size.label === item.selectSize
  );

  const updateCartItem = (e: any, key: any) => {
    const payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: item.product._id,
    };

    dispatch(updateCart(payload));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* Image Start */}
      <Image
        src={item.product.image}
        alt="product image"
        width={120}
        height={120}
      />
      {/* Image End */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Title Start */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {item.product.name}
          </div>
          {/* Title End */}

          {/* Subtitle Start */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {item.product.categories}
          </div>
          {/* Subtitle End */}

          {/* Price Start */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] mt-2">
            Rs. {item.itemPrice.toLocaleString()}
          </div>
          {/* Price End */}
        </div>

        {/* Subtitle Start */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {item.product.categories}
        </div>
        {/* Subtitle End */}

        {/* Size & Qty Start */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            {/* Size Start */}
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size: </div>
              <select
                onChange={(e) => updateCartItem(e, "selectSize")}
                className="hover:text-black"
                value={item.selectSize}
              >
                {sizes.map((size) => (
                  <option
                    key={size.id}
                    value={size.label}
                    disabled={size.qty < 0 ? true : false}
                  >
                    {size.label}
                  </option>
                ))}
              </select>
            </div>
            {/* Size End */}

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity: </div>

              <select
                onChange={(e) => updateCartItem(e, "quantity")}
                className="hover:text-black"
                value={item.quantity}
              >
                {selectedSize ? (
                  Array.from(
                    { length: parseInt(selectedSize.qty) },
                    (_, i) => i + 1
                  ).map((qty, i) => (
                    <option value={qty} key={i}>
                      {qty}
                    </option>
                  ))
                ) : (
                  <option value="1">1</option>
                )}
              </select>
            </div>
          </div>

          {/* Delete Icon Start */}
          <RiDeleteBin6Line
            onClick={() => dispatch(removeFromCart({ id: item.product._id }))}
            className="cursor-pointer text-red-700/[0.5] hover:text-red-900 text-[16px] md:text-[20px]"
          />
          {/* Delete Icon End */}
        </div>
        {/* Size & Qty End */}
      </div>
    </div>
  );
};

export default CartItem;
