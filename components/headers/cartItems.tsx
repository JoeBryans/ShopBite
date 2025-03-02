import Image from "next/image";
import { Star } from "lucide-react";

import { Product } from "@/typing";
import Qty from "@/app/product/[productId]/Qty";
type Props = {
  Items: Product;
};
const CartItems = ({ Items }: Props) => {
  console.log(Items);
  const num = Math.round(Items?.rating);
  const rate = new Array(num).fill(0);
  const price = Items.price;
  const totalPrice = Items?.qty * price;
  // const total=cartItems.reduce((acc,item)=>{
  //   return acc+Number(item.qty)*Number(item.price)
  // },0)
  return (
    <div className="flex gap-3 h-28 rounded px-1 mt-5 border-b-2 h-max py-1">
      <Image
        src={Items.images[0]}
        alt=""
        width={100}
        height={100}
        className="w-[30%] h-24 object-contain rounded-lg "
      />
      <div className="flex flex-col gap-1  ">
        <span className="line-clamp-1">{Items.title}</span>
        {/* <span className="text-gray-700 font-semi-bold">
          quantity: {Items.qty}
        </span> */}

        <span className="text-gray-700 font-semi-bold">${totalPrice}</span>
        <div className="flex gap-3 items-center ">
          {/* <span>({Items.rating.count} reviews)</span> */}
          <div className="flex gap-1 items-center">
            <span>{Items.rating}</span>
            {rate.map((i) => {
              return <Star key={i} className="text-yellow-500" />;
            })}
          </div>
        </div>
        <Qty items={Items} />

        {/* <DeleteButton items={Items}/> */}
      </div>
    </div>
  );
};

export default CartItems;
