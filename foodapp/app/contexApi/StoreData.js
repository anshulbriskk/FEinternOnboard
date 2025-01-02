"use client";

import { createContext, useEffect, useState } from "react";
import foodData from "@/public/foodData";

export const ApiDatacontext = createContext();

const StoreData = ({ children }) => {
  // console.log(foodData.menuItems);
  const [isChecked, setIsChecked] = useState(false);
  const [items, setItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedItems = localStorage.getItem('cartItems');
      return savedItems ? JSON.parse(savedItems) : [];
    }
    return [];
  });
  console.log(items);

  const data = foodData.menuItems || [];


  useEffect(()=>{
    if(items && Array.isArray(items)){
      localStorage.setItem("cartItems",JSON.stringify(items));
    }
  },[items]);

  return (
    <ApiDatacontext.Provider value={{data, isChecked, setIsChecked, items, setItems}}>{children}</ApiDatacontext.Provider>
  );
};

export default StoreData;


