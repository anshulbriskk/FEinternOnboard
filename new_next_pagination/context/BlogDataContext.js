"use client";

import { createContext, useEffect, useState } from "react"
import MockBlogData from "@/public/MockBlogData";

export const Datacontext = createContext();

const BlogDataContext = ({children}) => {

  const [lastPostIndex, setLastPostIndex] = useState(5);
  const [firstPostIndex, setFirstPostIndex] = useState(0);
  const [currentpage, setCurrentpage] = useState(1);
  const [currentPost,setCurrentPost] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  
  useEffect(()=>{
    const total = Math.ceil(MockBlogData.length / 5);
    setTotalPages(total);
  },[])

  useEffect(()=>{
    const handler = () =>{
      setLastPostIndex(currentpage*5 );
      setFirstPostIndex((currentpage-1)*5);
      setCurrentPost(MockBlogData.slice(firstPostIndex,lastPostIndex));
    }

    handler();
  }, [currentpage])


  return (
    <Datacontext.Provider value={{ currentPost, setCurrentpage, currentpage, totalPages }}>
    {children}
    </Datacontext.Provider>
  )
}

export default BlogDataContext