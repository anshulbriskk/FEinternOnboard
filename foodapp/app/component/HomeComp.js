"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ApiDatacontext } from "../contexApi/StoreData";

const HomeComp = () => {
  const {data} = useContext(ApiDatacontext);
  const router = useRouter();

  // console.log(data);
  return (
    <div className="bg-cyan-100 dark:bg-SecondaryCol min-h-screen overflow-x-hidden p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-20">
        {data.map((item, id) => (
          <div key={id}
            onClick={() => router.push(`pages/item/${id}`)}
            className="rounded-lg shadow-md p-4 bg-orange-600 dark:bg-SecondaryCol dark:border ">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-bold mt-2">{item.title}</h2>
            <p className="text-xl font-semibold">Price: ₹{item.price}</p>
            <div>
              {item.rating && item.rating[0] && (
                <p className="text-lg">
                  Rating: {item.rating[0].AvgRating} ⭐ (
                  {item.rating[0].TotalRating} reviews)
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeComp;
