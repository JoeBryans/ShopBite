import { Product } from "@/typing";
import Image from "next/image";
import React from "react";

const ItemsCheckOut = ({ Items }: { Items: Product }) => {
  const price = Items.price;
  const totalPrice = Items?.qty * price;
  return (
    <div className="flex w-full  gap-3 h-16 px-1 mb-1  items-center rounded-lg">
      <div className="max-w-10">
        <Image
          src={Items.images[0]}
          alt=""
          width={100}
          height={100}
          className="w-[70%] h-24 object-contain rounded-lg "
        />
      </div>
      <div className="flex flex-col gap-1  ">
        <span className="text-gray-700 font-semi-bold">
          quantity: {Items.qty}
        </span>
        <span className="text-gray-700 font-semi-bold">${totalPrice}</span>
      </div>
    </div>
  );
};

export default ItemsCheckOut;
