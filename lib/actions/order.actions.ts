"use server";

import nodemailer from "nodemailer";

import Order from "@/lib/models/Order.model";

import { connectToDB } from "../mongoose";

import {
  customerEmailTemplate,
  storeEmailTemplate,
} from "@/constants/emailTemplates";

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

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.MAILER_CRED,
        pass: process.env.MAILER_PASS,
      },
      secure: true,
    });

    // Extract name and email from orderData
    const { name, email } = orderData;

    const customerMailData = {
      from: "Seemasabayas",
      to: `${email}`,
      subject: `Order Placed`,
      text: " Your order has been placed!",
      html: customerEmailTemplate,
    };

    const storeMailData = {
      from: "Seemasabayas",
      to: `seemasabayas@gmail.com`,
      subject: `New Order`,
      text: " Your have a new order!",
      html: storeEmailTemplate,
    };

    await transporter.sendMail(customerMailData);
    await transporter.sendMail(storeMailData);

    return savedOrder;
  } catch (error: any) {
    console.error("Error creating order:", error.message);
    throw error;
  }
}
