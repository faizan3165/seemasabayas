import mongoose, { Schema, model } from "mongoose";

// Define the order schema
const orderSchema = new Schema(
  {
    // Array of items in the order
    orderItems: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product", // Reference to the product in your system
          required: true,
        },

        name: {
          type: String,
          required: true,
        },

        quantity: {
          type: Number,
          required: true,
        },

        itemPrice: {
          type: Number,
          required: true,
        },

        category: {
          type: String,
          required: true,
        },

        size: {
          type: String, // Add selectSize field here
          required: true,
        },
      },
    ],

    // Customer's email
    email: {
      type: String,
      required: true,
    },

    // Customer's name
    name: {
      type: String,
      required: true,
    },

    // Shipping address
    shippingAddress: {
      street: {
        type: String,
        required: true,
      },

      state: {
        type: String,
        required: true,
      },

      zipcode: {
        type: String,
        required: true,
      },
    },

    // Total order price
    total: {
      type: Number,
      required: true,
    },

    // Order status (e.g., pending, processing, shipped, completed, canceled)
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the Order model
const Order = mongoose.models.Order || model("Order", orderSchema);

export default Order;
