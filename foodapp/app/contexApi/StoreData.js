"use client";

import { createContext } from "react";
import foodData from "@/public/foodData"

export const ApiDatacontext = createContext();

const StoreData = ({ children }) => {
  // console.log(foodData.menuItems);

  const data = foodData.menuItems || [];

  return (
    <ApiDatacontext.Provider value={data}>{children}</ApiDatacontext.Provider>
  );
};

export default StoreData;


