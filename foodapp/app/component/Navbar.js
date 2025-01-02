"use client";

import { useContext, useEffect } from "react";
import { ApiDatacontext } from "../contexApi/StoreData";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { isChecked, setIsChecked } = useContext(ApiDatacontext);
  const router = useRouter();

  const handleToggle = () => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
      setIsChecked(false);
      console.log("Handle toggle");
    } else {
      htmlClasses.add("dark");
      localStorage.setItem("theme", "dark");
      setIsChecked(true);
    }
  };

  useEffect(() => {
    let htmlClasses = document.querySelector("html").classList;
    console.log("refrerrerereshhh");
    if (localStorage.theme === "dark") {
      htmlClasses.add("dark");
      setIsChecked(true);
    }
  }, [setIsChecked]);

  return (
    <nav className="flex justify-between items-center p-5 bg-gradient-to-r from-red-500 to-orange-500 z-10 fixed w-full">
      <div className="text-4xl text-white select-none">Zwigyto</div>
      <div className="flex gap-8 text-2xl text-white">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          Breakfast
        </a>
        <a href="#" className="hover:underline">
          Lunch
        </a>
        <a href="#" className="hover:underline">
          Dinner
        </a>
        <button className="hover:underline" onClick={handleToggle}>
          {isChecked ? "Light Mode" : "Dark Mode"}
        </button>
        <div onClick={() => router.replace('/pages/cart')} className="hover:underline flex justify-between items-center gap-1">
          <a href="#">Cart</a>
          <FaShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
