"use client";

import { useContext, useEffect, useState } from "react";
import { ApiDatacontext } from "@/app/contexApi/StoreData";

const Cart = () => {
  const { items, setItems } = useContext(ApiDatacontext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const increaseQuantity = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
  };

  const decreaseQuantity = (id) => {
    const updatedItems = items
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setItems(updatedItems);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  if (!isClient) {
    return <div className="text-center p-6 text-lg">Loading...</div>;
  }

  // If there are no items in the cart, show "No data found"
  if (items.length < 1) {
    return (
      <div className="pt-24 flex items-center justify-center">
        <div className="flex pt-24 max-w-6xl text-gray-300 mx-auto p-6 shadow-lg rounded-lg text-center text-lg">
        No item found
      </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-SecondaryCol shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Your Cart
        </h1>
        <ul className="space-y-6">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-gray-50 dark:bg-slate-700 rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-center space-x-6 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg shadow-md"
                />
                <div className="flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-white">Price: ₹{item.price}</p>
                </div>
              </div>

              <div className="flex ">
                <div className="flex items-center space-x-4">
                  <button
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="text-xl font-medium text-gray-800">
                    {item.quantity}
                  </span>
                  <button
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="ml-4 px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Cart Summary Section */}
        <div className="mt-8 flex justify-between items-center border-t pt-4">
          <span className="text-lg font-semibold text-gray-800 dark:text-white">
            Total: ₹
            {items.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </span>
          <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
