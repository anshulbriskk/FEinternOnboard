import React, { createContext } from 'react'
import MockBlogData from "../assets/MockBlogData"

export const BlogContext = createContext();

const BlogDataProvider = ({children}) => {
    
  return (
    <BlogContext.Provider value={MockBlogData}>
        {children}
    </BlogContext.Provider>
  )
}

export default BlogDataProvider