export const customerEmailTemplate = `
<html>
<body className="font-sans text-gray-900">
  <div className="w-full max-w-screen-lg mx-auto p-4">
    <div className="text-center mb-8">
      <h1 className="text-2xl font-bold">Order Confirmation</h1>
    </div>
    
    <div className="text-center mt-8">
      <p className="text-lg font-semibold">Hello,</p>
      <p className="mt-4">Your order has been placed successfully.</p>
      <p className="mt-4">Here are the order details:</p>
    </div>

    <div className="border-t border-b border-gray-300 py-4 mb-4">
      <h2 className="text-xl font-semibold">Order Details</h2>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="py-2">Product</th>
            <th className="py-2">Category</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Item Price</th>
            <th className="py-2">Size</th>
          </tr>
        </thead>
        <tbody>
          ${cartItems
            .map(
              (item) => `
                <tr>
                  <td className="py-2">${item.product.name}</td>
                  <td className="py-2">${item.product.categories}</td>
                  <td className="py-2">${item.quantity}</td>
                  <td className="py-2">Rs. ${item.itemPrice}</td>
                  <td className="py-2">${item.selectSize}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
    <div className="text-center mt-8">
      <p className="text-lg font-semibold">Thank you for your order!</p>
      <p className="mt-4">If you have any questions or need assistance, please feel free to contact us.</p>
    </div>
  </div>
</body>
</html>
`;

export const storeEmailTemplate = `
<html>
<body className="font-sans text-gray-900">
  <div className="w-full max-w-screen-lg mx-auto p-4">
    <div className="text-center mb-8">
      <h1 className="text-2xl font-bold">New Order Received</h1>
    </div>
    <div className="text-center mt-8">
      <p className="text-lg font-semibold">Hello Seemasabayas Team,</p>
      <p className="mt-4">A new order has been placed by a customer. Here are the order details:</p>
    </div>
    <div className="border-t border-b border-gray-300 py-4 mb-4">
      <h2 className="text-xl font-semibold">Order Details</h2>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="py-2">Product</th>
            <th className="py-2">Category</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Item Price</th>
            <th className="py-2">Size</th>
          </tr>
        </thead>

        <tbody>
          ${cartItems
            .map(
              (item) => `
                <tr>
                  <td className="py-2">${item.product.name}</td>
                  <td className="py-2">${item.product.categories}</td>
                  <td className="py-2">${item.quantity}</td>
                  <td className="py-2">Rs. ${item.itemPrice}</td>
                  <td className="py-2">${item.selectSize}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
    <div className="text-center mt-8">
      <p className="text-lg font-semibold">Customer Information:</p>
      <p className="mt-4">Name: ${name}</p>
      <p>Email: ${email}</p>
    </div>
    <div className="text-center mt-8">
      <p className="text-lg font-semibold">Total Amount:</p>
      <p className="mt-4">Rs. ${(total + 200).toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
`;
