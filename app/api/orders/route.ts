import Order from "@/lib/models/Order.model";

import { connectToDB } from "@/lib/mongoose";

export const revalidate = 30;
export const fetchCache = "force-no-store";

export async function FetchOrders() {
  try {
    const orders = await Order.find(); // Fetch all orders from the database
    return orders;
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
}

export async function GET(request: Request) {
  try {
    const orders = await FetchOrders();

    return new Response(JSON.stringify(orders), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Cache-Control": "no-store",
      },
    });
  } catch (error: any) {
    return new Response(`Error fetching orders ${error.message}`);
  }
}
