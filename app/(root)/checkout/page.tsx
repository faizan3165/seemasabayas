"use client";

import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { emptyCart } from "@/store/cartSlice";

import { CreateOrder } from "@/lib/actions/order.actions";

const Checkout = () => {
  // State variables for input fields
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [zipcode, setZipcode] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state: any) => state.cart);

  const pakistaniStates = [
    "Punjab",
    "Sindh",
    "Khyber Pakhtunkhwa",
    "Balochistan",
    "Azad Jammu and Kashmir",
    "Gilgit-Baltistan",
  ];

  const subTotal = useMemo(() => {
    return cartItems.reduce(
      (total: any, value: any) => (total += value.itemPrice),
      0
    );
  }, [cartItems]);

  const handlePlaceOrder = async () => {
    // Gather order information from state variables
    const orderData = {
      email,
      name,
      shippingAddress: {
        street: streetAddress,
        state: selectedState,
        zipcode,
      },
      status: "pending",
    };

    // Call the order creation function with orderData and cartItems
    try {
      alert("Order placed successfully");
      router.push("/");
      dispatch(emptyCart());
      await CreateOrder(orderData, cartItems);
      // Handle success (e.g., show a confirmation message to the user)
    } catch (error: any) {
      // Handle error (e.g., show an error message to the user)
      console.error("Error placing order:", error.message);
    }
  };

  console.log(cartItems);

  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32"></div>

      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 my-5">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>

          <p className="text-gray-400">Check your items</p>

          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cartItems.map((item: any) => (
              <div
                className="flex flex-col rounded-lg bg-white sm:flex-row"
                key={item.product._id}
              >
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={item.product.image}
                  alt=""
                />

                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{item.product.name}</span>

                  <span className="float-right text-gray-400">
                    {item.selectSize} - {item.quantity}
                  </span>

                  <p className="text-lg font-bold">Rs. {item.itemPrice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Details</p>

          <p className="text-gray-400">
            Complete your order by providing your details.
          </p>

          <div className="">
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Email
            </label>

            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>

            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Name
            </label>

            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="eg. John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {/* Head */}
                  <circle cx="12" cy="5" r="3" />
                  {/* Body */}
                  <path d="M12 10v10" />
                  {/* Arms */}
                  <path d="M7 14h10" />
                </svg>
              </div>
            </div>

            <label
              htmlFor="shipping-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Shipping Address
            </label>

            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="shipping-address"
                  name="shipping-address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-20 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                />

                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <img
                    className="h-10 w-10 object-contain "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAn1BMVEX///8BRhDy8vLQ3dEANAAARQze5N8NSxgAPQD39/d8mH/x8fH8/PwAQQD19fUAOQAAOwAANgAAQwa8yb7P19Db5dwALQCEm4dFbkv09/Q2ZT5hgWYaUiOitaWQqZXs7+xVeVtpgmwARADFz8cpWzJsiXAMUhyuvrFVe10lViw0XjpIbUy4xbs9Z0SWqZlsjXMoXzKRopR1jHgATA2AlYNvhV6jAAAFRElEQVR4nO2ce1fiOBiHbYeGvNKkF7qDK5RWC3a1wDis3/+zbctFwNEmnq2Slt/jP3pOCH18c2+SqysAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQKdxP4R+fBd/uV9mR/bgQ2zm976Lnw+jH1/hJwd2HazvWN+Fw3s3UdOCVO/3vYYlIrhutrAqAvj9hpbl3fzdpKDK7wyGFr9tLoqkFjyDoeWPmxJ0lUX0PIZWkDdkqOF3HsNw0kxVVDajZzO0vLgRQ41m5lyGomhC0NUSPI+hI1gThlqF9DyGVjBswFCnqziboT/tuiG/hiEMYQhDGMKwnYah6Lah4y3/CbtsyK18yGtTfCrCxhk6/jxhoi6h+DU+/APUOZpmKJzclbPaIIlUpjtFwR+VWRpmyGcRuSOvNk34REnqV35eMUyVJdYsQ14wklG9oOVMmLTHvgiKhYzUVdIoQ14k0qZC9dQiklKmy6Ekd9wuQ7EclIILRQgty8ukbUtJtk4ITTIU/TKCNi2VTx2sdl9IGiE0yNARrApNVt8Vlg2N/5Rt1/ZkpEprlqGXV9nQvP6pQ2+Wy93iJY2CNhny+SYXNqktyfwxTg7fNhj77TEMqy7AVrUz97/YFdHr+rPUUTTF0Is3magK6eSpuM4ztneUg1RZFQ0xFMttkmRZP6lwQsF97ldVVjJyy59CpWiIob/Y5CGZ1rSBX1d94U/xPP6dZ7eKiZYZhmK5a/8zndbREmOy3RtRBdTzVDNJMwz9bS20aaXROJbN0iyhYU8npSmGjpVsU9BIpw8vg8joVncabIShGO/ez9Fa77mDSD16NcpwO5ypDO/0DHmsHr0aZejvCqm2oTPR9TPDMJztXyLrGn4GEwz5yz4D3XrYNsPXamjTi15b2jbDINuPM2naTcMe26egXLsTaJVh8Pp5GWmN2tpm6NwfPs8eGn89ZYLhv4fPS/UKb8sNaao19G6b4VEp1Vs+a5uhxY8/r1zxbqNhLzmk0Zwhts0wkupErTb0FkeGupPgVhn6q6MMJLtvNogmGIr0eAsuTZsduZlgeNxdVIqT5jZiGGK4fSH4SsODUyMM+eg0iNMmFY0wDGenOUidd0qtMrT4STG1ZbJsrssww1DMTw80SFa/paZ9hk7ITg+llIq6UXTC+qVFMwwtvn5zKkUmhV63KKy4PtyGGDoienOySNI60OgX/dtEMWk2xLDarPY2uZv3VSVV8GtaKF5CmWJ4tGj6CrE5r4tP6C0zN1FutDLF0OmzP6IoKUu9jxyFN4sH5I5b8pa7euLinTN+UmZj7v8pGfJekSdkU6wc/phjaHlv29NdHNmq8AJ+2FQruNd7HkV2+a2U1e61Nc3QClbvH2QkSha/04dge13C/c1LzuRmUw2xvrq5NcnQCuKPcpLkum7CGEvKX/Z7hohNWrVzr8L7UHEnevyHnqBhho4/knpniqs62NfcfGOSYRnFu0QvN4qF3lKAaYYWn2UaB6cpmQeaC1bGGVYjMVUYJeWP2hNI8wzLZ+rHVJOldKPU11+sMtGwHHBOygHZu01O2W1kafCZ6bGRhtXhLrHObHpjWfbzbPXc+9z031DDzTVIk3XMkgHtkAkbjm68T5RPww03kl7wUNytR9Pp6GWdznhQO5lqoeHGUgi+QWh2f60z/P/AEIYwhOHX08j9NN2/Y6j790R1/66vC7ivrft37l3AvYlaNbHVd19ewP2lF3AH7QXcI3wBd0Ffdf8+751lp+9kBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYwX/vPKWyAu9U+AAAAABJRU5ErkJggg=="
                    alt=""
                  />
                </div>
              </div>

              <select
                name="billing-state"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="">Select State</option>
                {pakistaniStates.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>

              <input
                type="text"
                name="shipping-zip"
                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>

                <p className="font-semibold text-gray-900">
                  Rs. {subTotal.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>

                <p className="font-semibold text-gray-900">Rs. 200</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>

              <p className="text-2xl font-semibold text-gray-900">
                Rs. {(subTotal + 200).toLocaleString()}
              </p>
            </div>
          </div>

          <button
            className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
