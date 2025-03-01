"use client";
import Image from "next/image";
import { it } from "node:test";
import { AddButton, DeleteButton, RemoveButton } from "../Cart/cartButton";
// import { CartItem } from "@/hooks/store/cartSlice";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
import { Product } from "@/typing";
import Qty from "@/app/product/[productId]/Qty";
type Props = {
  Items: Product;
};
const CartCard = ({ Items }: Props) => {
  const num = Math.round(Items?.rating);
  const rate = new Array(num).fill(1);
  const price = Items?.price;
  const totalPrice = Items?.qty * price;

  // const total=cartItems.reduce((acc,item)=>{
  //   return acc+Number(item.qty)*Number(item.price)
  // },0)
  return (
    <div className="flex md:w-[500px] w-full gap-3 shadow-lg px-3 mt-5 border-b-2 h-44 py-1 items-center rounded-lg ">
      <div className=" w-36 h-28 flex items-center justify-center rounded-lg">
        <Image
          src={Items?.images[0]}
          alt=""
          width={100}
          height={100}
          className="w-[100%] h-[80%] object-contain rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cusor-pointer"
        />
      </div>
      <div className="flex flex-col gap-1 w-72  ">
        <span className="line-clamp-1">{Items?.title}</span>

        <span className="text-gray-700 font-semi-bold">${totalPrice}</span>

        <div className="flex flex-col w-full mt-1">
          <Qty items={Items} />
          <div className="w-full flex justify-end">
            <DeleteButton items={Items} />
          </div>
        </div>

        {/* <DeleteButton items={Items}/> */}
      </div>
    </div>
  );
};

export default CartCard;
