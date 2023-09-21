"use server";

import Order from "@/lib/models/Order.model";
import { connectToDB } from "../mongoose";

export async function CreateOrder(orderData: any, cartItems: any) {
  try {
    await connectToDB();

    // Calculate the total price based on cart items
    const total = cartItems.reduce(
      (acc: number, item: any) => acc + item.itemPrice,
      0
    );

    // Create a new order document
    const order = new Order({
      ...orderData,
      orderItems: cartItems.map((item: any) => ({
        product: item.product,
        name: item.product.name,
        category: item.product.categories,
        quantity: item.quantity,
        itemPrice: item.itemPrice,
        size: item.selectSize, // Add selectSize here
      })),

      total: total + 200, // Calculate the total price based on cart items and add 200
    });

    // Save the order to the database
    const savedOrder = await order.save();

    return savedOrder;
  } catch (error: any) {
    console.error("Error creating order:", error.message);
    throw error;
  }
}
