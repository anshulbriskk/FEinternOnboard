"use client";

import { useContext } from "react";
import { Datacontext } from "@/context/BlogDataContext";

const HomeComponent = () => {
  const { currentPost, setCurrentpage, currentpage, totalPages } =
    useContext(Datacontext);
  console.log(currentPost.length);

  if (!currentPost || currentPost.length === 0) {
    return (
      <h1 className="text-2xl font-bold text-red-500 mt-4">No Data Found</h1>
    );
  }

  return (
    <div className="flex w-[80%] m-auto items-center justify-center flex-col">
      <h1 className="text-4xl mt-4 font-extrabold text-center text-gray-900 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-4 rounded-lg shadow-lg">
        Blogs
      </h1>
      <div className="w-full min-h-screen p-4 text-white">
        {currentPost.map((data, index) => (
          <div
            key={index}
            className="border border-gray-700 p-4 mb-4 rounded-md shadow-md"
          >
            <h2 className="text-xl font-semibold">Title</h2>
            <div className="text-gray-300">{data.title}</div>
            <div className="font-medium mt-2">Description</div>
            <p className="text-gray-400">{data.description}</p>
            <span className="font-medium">Author:</span>
            <span className="ml-2 text-gray-200">{data.author}</span>
          </div>
        ))}
        <div className="flex justify-between mt-4">
          {currentpage !== 1 && (
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => setCurrentpage((prev) => prev - 1)}
            >
              Previous
            </button>
          )}
          <div className="flex-1 flex justify-center">
            {" "}
            <span className="flex items-center space-x-1 text-lg">
              {" "}
              <span>{currentpage}</span>
               <span>/</span>
              <span>{totalPages}</span>
              {" "}
            </span>
            {" "}
          </div>
          {currentpage !== totalPages && (
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => setCurrentpage((prev) => prev + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
