"use client"; // Ensure this is a client component
import {useEffect, useContext } from "react";
import { useParams } from 'next/navigation';
import { ApiDatacontext } from "../../../contexApi/StoreData";

const Page = ({params}) => {
  const { id } = useParams();
  const data = useContext(ApiDatacontext);

console.log(data);
  // useEffect(() => {
  //   if (id && data.length >0) {
  //     // Find the item by id
  //     const foundItem = data.find((item) => item.id === parseInt(id));
  //     setItem(foundItem);
  //   }
  // }, [id, data]);

  // if (!item) return <div>Loading...</div>;

  return (
    <div>
      fff
      <br/>
      dkdk
      <br/>
      jdjdjdhd
      <br/>
      dkjdjdj
      <br/>
      dkddjdj
      <br/>
      sjjdjdjd
      <br/>
      kdkdkdkdj
      <br/>
      params {id}
      <br/>
      context {data}
    </div>
  );
};

export default Page;
