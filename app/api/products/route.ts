import { NextApiRequest, NextApiResponse } from "next";

import { connectToDB } from "@/lib/mongoose";
import Product from "@/lib/models/Product.model";

export const GET = async (pageNum = 1, pageSize = 10) => {
  try {
    await connectToDB();

    const skipAmount = (pageNum - 1) * pageSize;

    const productsQuery = Product.find().sort({ createdAt: "desc" });

    // const totalProductsCount = await Product.countDocuments();

    const products = await productsQuery.exec();

    // const isNext = totalProductsCount > skipAmount + products.length;

    // return products;
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error: any) {
    throw new Error(`Could not fetch products: ${error.message}`);
  }
};

// export const GET = async (
//   request: NextApiRequest,
//   response: NextApiResponse
// ) => {
//   try {
//     const products = await FetchProducts();
//     return new Response(JSON.stringify(products), {
//       status: 200,
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//         "Access-Control-Allow-Headers": "Content-Type, Authorization",
//       },
//     });
//   } catch (error: any) {
//     return new Response(`Error fetching products ${error.message}`);
//   }
// };
