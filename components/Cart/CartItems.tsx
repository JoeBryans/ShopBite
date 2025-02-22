"use client"
import Image from "next/image";
import { it } from "node:test";
import { AddButton, DeleteButton, RemoveButton } from "../Cart/cartButton";
import { CartItem } from "@/hooks/store/cartSlice";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
type Props = {
  Items: CartItem;
};
const CartCard = ({ Items }: Props) => {
  const num = Math.round(Items?.rating?.rate);
  const rate = new Array(num).fill(0);
  const price = parseInt(Items.price, 10);
  const totalPrice = Items.qty * price;
  
  // const total=cartItems.reduce((acc,item)=>{
  //   return acc+Number(item.qty)*Number(item.price)
  // },0)
  return (
    <div className="flex w-full  gap-3 shadow-lg px-1 mt-5 border-b-2 h-44 py-1 items-center rounded-lg">
      <Image
        src={Items.image}
        alt=""
        width={100}
        height={100}
        className="w-[40%] h-[80%] object-contain rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cusor-pointer"
      />
      <div className="flex flex-col gap-1  ">
        <span className="line-clamp-1">{Items.title}</span>
        <span className="text-gray-700 font-semi-bold">
          quantity: {Items.qty}
        </span>
        <span className="text-gray-700 font-semi-bold">${totalPrice}</span>
        <div className="flex gap-3 items-center ">
          <span>({Items.rating.count} reviews)</span>
          <div className="flex gap-1 items-center">
            <span>{Items.rating.rate}</span>
            {rate.map(() => {
              return <Star key={Math.random()*5000} className="text-yellow-500" />;
            })}
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-2">
          <div className="flex gap-2 items-center">
            <AddButton items={Items} />
            <RemoveButton items={Items} />
          </div>{" "}
          <DeleteButton items={Items} />
        </div>

        {/* <DeleteButton items={Items}/> */}
      </div>
    </div>
  );
};

export default CartCard;
