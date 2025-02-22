import { CartItem } from "@/hooks/store/cartSlice"
import Image from "next/image"
import { Star } from "lucide-react"

import { AddButton, RemoveButton } from "../Cart/cartButton"
type Props={
    Items:CartItem
}
const CartItems=({Items}:Props)=>{
    const num=Math.round(Items?.rating?.rate)
 const rate=new Array(num).fill(0)
 const price=parseInt(Items.price, 10)
 const totalPrice = Items.qty*price
 // const total=cartItems.reduce((acc,item)=>{
 //   return acc+Number(item.qty)*Number(item.price)
 // },0)
    return(
        <div className="flex gap-3 h-28 rounded px-1 mt-5 border-b-2 h-max py-1">
            <Image src={Items.image} alt="" width={100} height={100} className="w-[30%] object-contain rounded-lg "/>
           <div className="flex flex-col gap-1  ">
           <span className="line-clamp-1">{Items.title}</span>
            <span className="text-gray-700 font-semi-bold">quantity: {Items.qty}</span>
            <span className="text-gray-700 font-semi-bold">${totalPrice}</span>
            <div className="flex gap-3 items-center "> 
            <span>({Items.rating.count} reviews)</span>
            <div className="flex gap-1 items-center">
                <span>{Items.rating.rate}</span>
              {
                rate.map((i)=>{
            return  <Star key={i} className="text-yellow-500"/>

                })
              }
               
            </div>
            
            </div>
            <div className="flex gap-2 items-center">
            <AddButton items={Items}/>
            <RemoveButton items={Items}/>
            </div>
            
            {/* <DeleteButton items={Items}/> */}
           </div>
       
        </div>
    )
}

export default CartItems