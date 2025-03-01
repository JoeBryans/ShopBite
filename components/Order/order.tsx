"use client";
import Image from "next/image";
import { Product } from "@/typing";
type Props = {
  Items: Product;
};
const OrderItems = ({ Items }: Props) => {
  const num = Math.round(Items?.rating);
  // const rate = new Array(num).fill(0);
  const price = Items.price;
  const totalPrice = Items.qty * price;

  // const total=cartItems.reduce((acc,item)=>{
  //   return acc+Number(item.qty)*Number(item.price)
  // },0)
  return (
    <div className="flex w-full  gap-3 h-16 px-1 mb-3  items-center rounded-lg">
      <Image
        src={Items.images[0]}
        alt=""
        width={100}
        height={100}
        className="w-[20%] h-[40%] object-contain rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cusor-pointer"
      />
      <div className="flex flex-col gap-2   ">
        <span className="line-clamp-1">{Items.title}</span>
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-semi-bold">
            quantity: {Items.qty}
          </span>
          <span className="text-gray-700 font-semi-bold">${totalPrice}</span>
        </div>

        {/* <DeleteButton items={Items}/> */}
      </div>
    </div>
  );
};

export default OrderItems;
