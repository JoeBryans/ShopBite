"use client";
import React, { useEffect, useState } from "react";
import { Allproduct } from "./../../Request/request";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import { AddButton } from "../Cart/cartButton";
import { Product } from "@/typing";
import axios from "axios";

const Home = ({ category }: any) => {
  const [product, setProduct] = useState<Product[] | null>(null);
  console.log("category:", category);

  useEffect(() => {
    const FetchData = async () => {
      const res = await axios.get(
        `${
          !category
            ? "https://dummyjson.com/products"
            : `https://dummyjson.com/products/category/${category}`
        }`
      );
      console.log(res.data.products);
      setProduct(res?.data?.products);
    };
    FetchData();
  }, [category]);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await Allproduct();

  //       setProduct(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getData();
  // }, []);

  return (
    <div className="w-full relative">
      <div className="grid grid-col-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 ">
        {product?.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full  flex flex-col items-center h-full relative p-3 overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <div className=" w-full h-36 flex items-center justify-center rounded-lg overflow-hidden">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={150}
                  height={100}
                  className="w-[80%] h-[80%]  object-contain rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cusor-pointer"
                />
              </div>
              <div className="mt-3 flex flex-col items-start gap-2 w-full">
                <p className="text-black opacity-80 text-lg  opacity-60">
                  {item.category}
                </p>
                <Link
                  href={`/product/${item.id}`}
                  className="text-gray-700 text-xl font-semibold line-clamp-1 hover:underline cusor-pointer"
                >
                  {item.title}
                </Link>
              </div>
              <div className="flex gap-2 justify-start w-full  mt-2 ">
                <p className="text-black opacity-60 line-through text-sm font-semibold">{`$${item.price}`}</p>
                <p className="text-black text-sm font-semibold">{item.price}</p>
              </div>
              <AddButton items={item} />
              {/* <p className="text-black text-sm font-semibold">
                {item.description}
              </p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
