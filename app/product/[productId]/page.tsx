// "use client";
import { Categoryproduct, Singleproduct } from "@/Request/request";
import { Button } from "@/components/ui/button";
import { Product } from "@/typing.d";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { Heart, StarIcon } from "lucide-react";
import axios from "axios";
import RelatedProducts from "@/components/products/RelatedProducts";
import { AddButton } from "@/components/Cart/cartButton";
import Qty from "./Qty";
const page = async ({ params }: { params: { productId: string } }) => {
  const id = await params.productId;
  console.log(id);

  const data: Product = await Singleproduct(id);
  const category = data?.category;
  const related = await Categoryproduct(category);
  const product = related?.products;
  console.log(data);
  console.log("related:", product);
  // const numRate = Math.round(data?.rating?.rate);
  // const newArray = new Array(numRate).fill(0);
  // console.log(numRate);

  const overView = [
    "Operating system: Android 11",
    "Internal Storage: 128GB",
    "External Storage:",
    "Processor: MT6762",
    "RAM Size: 4GB",
    "Battery: 6000mAH",
    "Screen: 10.1'' FHD IPS 1200*1920 ",
    "Color black",
  ];

  return (
    <div className="flex w-screen">
      <div className="max-w-[65rem] w-[90%] flex flex-col mx-auto mt-5">
        <div className="flex flex-wrap  w-full gap-4 shadow-lg p-3">
          <div className="max-w-[500px] w-[90%]   px-2 flex flex-col gap-3 items-center">
            <div className="max-w-[70%] ">
              <Image
                src={data?.images[0]}
                alt=""
                width={300}
                height={300}
                className="oblique object-contain w-[90%]"
              />
            </div>
            <div className="flex items-center gap-1 w-full">
              {data?.images?.map((item: any, index: number) => {
                return (
                  <div className="max-w-10">
                    <Image
                      src={item}
                      alt=""
                      width={100}
                      height={100}
                      className=" object-contain w-[100%] "
                      key={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* second Part */}
          <div className="max-w-[500px] w-[90%]   px-2 flex flex-col gap-3 ">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <span>{data?.title}</span>
              </div>
              <Heart color="red" size={30} className="cursor-pointer " />
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-80">Brand:</span>
              <span className=" font-semibold">{data?.brand}</span>
            </div>
            {/* Review ANd ratings */}
            <div className="flex gap-3 items-center justify-between">
              <div className="flex gap-3 items-center ">
                <span>availabilityStatus:</span>
                <span>{data?.availabilityStatus}</span>
              </div>
              <div className="flex gap-3 items-center ">
                <span>stock:</span>
                <span>{data?.stock}</span>
              </div>
              {/* <div className="flex items-center gap-1 text-yellow-700 hover:text-yellow-500">
                <span>{data?.rating.rate}</span>
                {
                  newArray.map((i)=>{
                    return <StarIcon key={Math.random()*1000} className="cursor-pointer" />

                  })
                }
              </div>  */}
            </div>
            <div className="flex items-center gap-4 w-full ">
              <span className="text-black opacity-80 line-through">
                ${data?.price}
              </span>
              {/* <span className="text-xl font-semibold">${"400"}</span> */}

              <Button
                size={"sm"}
                className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all"
              >
                {`${data?.discountPercentage}%`}
              </Button>
            </div>
            <span>{data?.category}</span>
            <span> Color: Gray</span>
            <span>size</span>
            {/* // qty */}

            <Qty items={data} />
            {/* <AddButton items={data} /> */}
            {/* //<span></span> */}
            {/* //<span></span> */}
          </div>
        </div>
        {/* // overview And descriptions */}
        <div className="flex flex-col w-full mt-10 shadow-lg p-3">
          {/* <div className="flex items-center gap-5 ">
            <span className="border-b-2 ">
              <a href="#overview">Overview</a>{" "}
            </span>
            <span>
              <a href="#description">Descriptions</a>{" "}
            </span>
            <span>
              <a href="#warranty">Warranty</a>{" "}
            </span>
            <span>
              <a href="#delivery">Delivery</a>{" "}
            </span>
            <span>Reviews</span>
          </div> */}

          {/* // description */}
          <div id="description" className={` mt-5 `}>
            <h3 className="font-semibold text-xl mb-1">Description:</h3>

            <div className="block">{data?.description}</div>
          </div>
          {/* // Waranty */}
          <div id="warranty" className={` mt-5 `}>
            <h3 className="font-semibold text-xl mb-1">Warranty:</h3>

            {data?.warrantyInformation}
            <div className="block">{data?.returnPolicy}</div>
          </div>
          {/* // delivery */}
          <div id="delivery" className={` mt-5 `}>
            <h3 className="font-semibold text-xl mb-1">ShippingInfo:</h3>

            {data?.shippingInformation}
          </div>

          <div id="overview" className={` mt-5 max-w-96 w-[90%] `}>
            <h3 className="font-semibold text-xl mb-1">Reviews:</h3>

            {data?.reviews?.map((items: any, i: number) => {
              return (
                <div key={i} className="block border-b-2 mb-2">
                  <p>reviewer: {items?.reviewerName}</p>

                  <p>rate: {items?.rating}</p>
                  <div>
                    <span>comment:</span>
                    <span>{items?.comment}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* related products */}
        <div className="flex flex-col w-full mt-10 ">
          <h3 className="font-semibold text-xl mb-1">Related Products:</h3>
          <div className="grid grid-col-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 ">
            {product?.slice(0, 6).map((items: any, i: number) => {
              return (
                <div
                  key={i}
                  className="w-full  flex flex-col items-center h-full relative p-3 overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  <RelatedProducts product={items} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
