// app/pages/item/[id]/page.js
"use client";

import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ApiDatacontext } from "@/app/contexApi/StoreData";

const ItemPage = () => {
  const { id } = useParams();
  const { data, items, setItems } = useContext(ApiDatacontext);
  const [item, setItem] = useState(null);
  // console.log(id);
  // For check alllready add in cart or not (-10 because return value from findindex -1 so less then -1 not create conflict )
  const [allReadyAdded, setAllReadyAdded] = useState(false);

  useEffect(() => {
    if (id && !isNaN(id) && data.length > 0) {
      const numericId = parseInt(id, 10);
      // console.log("Parsed ID:", numericId);
      const foundItem = data.find((item) => item.id === numericId);
      // console.log("Found Item:", foundItem);
      setItem(foundItem);
    }
  }, [id, data]);

  useEffect(() => {
    if (Array.isArray(items) && items.length > 0 && item) {
      const itemIndex = items.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex > -1) {
        setAllReadyAdded(true);
      } else {
        setAllReadyAdded(false);
      }
    }
  }, [id, data, items, item]);
  

  const Manageitem = () => {
    if (Array.isArray(items)) {

      const itemIndex = items.findIndex((cartItem) => cartItem.id === item.id);

      if (itemIndex > -1) {
        // If the item is already in the cart, update the quantity
        const updatedItems = [...items];
        updatedItems[itemIndex].quantity += 1;
        setItems(updatedItems);
      } else {
        // If the item is not in the cart, add it with quantity 1
        setItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
        setAllReadyAdded(true);
      }
    }

    else{
      console.log("item is not array");
    }
  };

  const ManageRemoveItem = () => {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex > -1) {
      // If the item is already in the cart, update the quantity
      const updatedItems = [...items];
      if (updatedItems[itemIndex].quantity > 1) {
        updatedItems[itemIndex].quantity -= 1;
        setItems(updatedItems);
      } else {
        // Remove item from cart if quantity is zero
        updatedItems.splice(itemIndex, 1);
        setItems(updatedItems);
        setAllReadyAdded(false);
      }
    }
  };

  if (!id) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (!item) return <div className="text-center p-4">Loading...</div>;

  return (
    <div className="bg-violet-400 dark:bg-SecondaryCol min-h-screen overflow-x-hidden p-6 outline-dotted">
      <div className="flex flex-wrap  md:flex-nowrap lg:flex-nowrap max-w-4xl mx-auto p-4 mt-16 gap-10 ">
        <div className="shadow-lg p-4">
          <h1 className="text-3xl font-bold mb-4 ">{item.title}</h1>
          <img
            src={item.image}
            alt={item.title}
            className=" w-full h-72 object-cover mb-4 rounded-lg shadow-lg"
          />
        </div>
        <div className="shadow-lg p-4 ">
          <p className="text-lg mb-4">{item.description}</p>
          <p className="text-xl font-semibold mb-4">Price: ₹{item.price}</p>
          <div className="p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Restaurant Details</h2>
            <p className="text-lg">
              <strong>Name:</strong> {item.restaurant.name}
            </p>
            <p className="text-lg">
              <strong>Location:</strong> {item.restaurant.location}
            </p>
            <p className="text-lg">
              <strong>Contact:</strong> {item.restaurant.contact}
            </p>
            <p className="text-lg">
              <strong>Cuisine:</strong> {item.restaurant.cuisine}
            </p>
          </div>
          <div className=" flex gap-2">
            <button
              className=" bg-black dark:bg-PrimaryCol text-white dark:text-SecondaryCol font-bold py-2 px-4 rounded hover:bg-blue-700"
              onClick={Manageitem}
            >
              Add to Cart
            </button>

            {allReadyAdded ? (
              <button
                className=" bg-black dark:bg-PrimaryCol text-white dark:text-SecondaryCol font-bold py-2 px-4 rounded hover:bg-blue-700"
                onClick={ManageRemoveItem}
              >
                Remove item
              </button>
            ) : (
              " "
            )}
          </div>

          {item.rating && item.rating[0] && (
            <p className="mt-4 text-lg">
              <strong>Rating:</strong> {item.rating[0].AvgRating} ⭐ (
              {item.rating[0].TotalRating} reviews)
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
