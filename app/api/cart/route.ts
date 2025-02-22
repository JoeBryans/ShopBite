import db from "@/lib/db"
import {  cartItems } from "@/typing.d"
import { log } from "console"
import { NextResponse } from "next/server"




export async function POST(req:Request){
   const user=""
//    const user=
 const body:any=await req.json()
 const {userId,productId,total_qty,totla_price}=body
try{
    //  const {productId, total_qty,totla_price }=body
const cart=await db.cart.findMany({
    where:{
        userId:userId
    },
    include:{
        cartItem:<any>true
    }
})

    // return NextResponse.json("user is in cart model") 

if (cart){
    // const existItems = cart.cartItem.find((item:cartItems) => item.productId === productId);
//    if(existItems){
//     return NextResponse.json("item is in cart model") 
    
//    }else{
        return NextResponse.json(cart) 

//    }

}
 else{

    const carts=await db.cart.create({
    data:<any>{
        userId:userId,
        cartItem:{
            create:[
            {
                productId:productId,
                totalQty:total_qty,
                totalPrice:totla_price
            }
        ]}
    }
    })
    return NextResponse.json(carts) 

}

}catch(err){
    return NextResponse.json({error:err})
}
}