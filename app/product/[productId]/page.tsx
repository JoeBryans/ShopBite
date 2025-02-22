import { Singleproduct } from "@/Request/request";
import { Button } from "@/components/ui/button";
import { Product } from "@/typing.d";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { StarIcon } from "lucide-react";
import axios from "axios";
const page = async ({ params }: { params: { productId: string } }) => {
  const id = await params.productId;
  console.log(id);

  const data: Product = await Singleproduct(id);
  console.log(data);
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
          <div className="max-w-[500px] w-[90%]  px-2 ">
            <div className="flex justify-between w-full gap-2">
              <div className="flex flex-col gap-3">
                {[0, 0, 0, 0].map(() => (
                  <Image
                    src={"/Ipad.jpg"}
                    alt=""
                    width={80}
                    height={80}
                    className="object-contain w-[80%]"
                  />
                ))}
              </div>

              <Image
                src={data.image[0]?.url}
                alt=""
                width={400}
                height={300}
                className="object-contain w-[80%]"
              />
            </div>

            <div className="flex gap-3 items-center mt-3 ">
              {/* <div className="flex gap-1 items-center ">
                <span>{`(${data.rating.count} reviews)`}</span>
              </div> */}
              {/* <div className="flex items-center gap-1 text-yellow-700 hover:text-yellow-500">
              <span>{data.rating.rate}</span>
                {
                  newArray.map((i)=>{
                    return <StarIcon key={Math.random()*1000} className="cursor-pointer" />

                  })
                }
                
              </div> */}
            </div>
          </div>
          {/* second Part */}
          <div className="max-w-[500px] w-[90%]   px-2 flex flex-col gap-3 ">
            <span>{data.title}</span>
            <div className="flex items-center gap-2">
              <span className="opacity-80">Brand:</span>
              <span className=" font-semibold">JoeBryan</span>
            </div>
            {/* Review ANd ratings */}
            <div className="flex gap-3 items-center justify-between">
              <div className="flex gap-3 items-center ">
                <span>Sold quantity</span>
                <Button
                  size={"sm"}
                  className="bg-yellow-500 hover:bg-white hover:text-yellow-500 hover:border-yellow-500 hover:border-2 font-semibold transition:all"
                >
                  instock
                </Button>
              </div>
              {/* <div className="flex items-center gap-1 text-yellow-700 hover:text-yellow-500">
                <span>{data.rating.rate}</span>
                {
                  newArray.map((i)=>{
                    return <StarIcon key={Math.random()*1000} className="cursor-pointer" />

                  })
                }
              </div>  */}
            </div>
            <div className="flex items-center gap-4 w-full ">
              <span className="text-xl font-semibold">${"400"}</span>
              <span className="text-black opacity-80 line-through">
                ${data.price}
              </span>
              <Button
                size={"sm"}
                className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all"
              >
                -66%
              </Button>
            </div>
            <span>{data.category}</span>
            <span> Color: Gray</span>
            <span>size</span>
            {/* // qty */}
            <div className="flex items-center gap-3">
              <span className="border-1 rounded w-mx p-2">Qty:</span>
              <Button
                size={"sm"}
                variant={"outline"}
                className="text-xl font-semibold"
              >
                +
              </Button>
              <Button
                size={"sm"}
                variant={"outline"}
                className="text-xl font-semibold"
              >
                3
              </Button>
              <Button
                size={"sm"}
                variant={"outline"}
                className="text-xl font-semibold"
              >
                -
              </Button>
            </div>
            <Button
              size={"sm"}
              className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all w-full"
            >
              Add to cart
            </Button>
            {/* //<span></span> */}
            {/* //<span></span> */}
          </div>
        </div>
        {/* // overview And descriptions */}
        <div className="flex flex-col w-full mt-10 shadow-lg p-3">
          <div className="flex items-center gap-5 ">
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
          </div>
          <div id="overview" className={` mt-5 `}>
            <h3 className="font-semibold text-xl mb-1">Overview:</h3>

            {overView.map((items, i) => {
              return (
                <span key={i} className="block">
                  {items}
                </span>
              );
            })}
          </div>
          {/* // description */}
          <div id="description" className={` mt-5 `}>
            <h3 className="font-semibold text-xl mb-1">Description:</h3>

            <div className="block">{data.description}</div>
          </div>
          {/* // Waranty */}
          <div id="warranty" className={` mt-5 `}>
            <h3 className="font-semibold text-xl mb-1">Warranty:</h3>

            {overView.map((items, i) => {
              return (
                <span key={i} className="block">
                  {items}
                </span>
              );
            })}
          </div>
          {/* // delivery */}
          <div id="delivery" className={` mt-5 `}>
            <h3 className="font-semibold text-xl mb-1">Delivery:</h3>

            {overView.map((items, i) => {
              return (
                <span key={i} className="block">
                  {items}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
