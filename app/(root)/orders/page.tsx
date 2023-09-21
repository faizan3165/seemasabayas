"use client";

import React, { useState, useEffect } from "react";

import Order from "@/lib/models/Order.model";

const OrdersTest = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch("/api/orders"); // Replace with your actual API endpoint
      const data = await response.json();
      setOrders(data);

      console.log('====================================');
      console.log(orders);
      console.log('====================================');
    } catch (error: any) {
      console.error("Error fetching orders:", error.message);
    }
  };

  useEffect(() => {
    fetchOrders(); // Fetch orders when the component mounts
  }, []);

  return <div>OrdersTest</div>;
};

export default OrdersTest;
