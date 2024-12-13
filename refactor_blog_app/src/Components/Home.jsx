import React, { useContext } from 'react'
import { BlogContext } from '../Context/BlogData';

const Home = () => {

  const MockBlogData = useContext(BlogContext);

  if (MockBlogData == {} || !MockBlogData) return <h1 className="text-2xl font-bold text-red-500 mt-4">No Data Found</h1>

  return (
    <div className="container mx-auto p-4 space-y-6">
      {
        MockBlogData?.map((data) => (
          <div key={data.id} className="bg-white border border-gray-300 shadow-md rounded-lg p-6 mb-4">
            <span className="block text-gray-500 font-semibold mb-1">Title</span>
            <h2 className="text-2xl font-bold text-blue-700 mb-2">{data.title}</h2>
            <span className="block text-gray-500 font-semibold mb-1">Subtitle</span>
            <span className="block text-gray-600 italic mb-2">{data.subtitle}</span>
            <span className="block text-gray-500 font-semibold mb-1">Summary</span>
            <p className="text-gray-800">{data.summary}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Home
