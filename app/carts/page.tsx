"use client"
import { RootState } from '@/hooks/store/store';
import React from 'react'
import { useSelector } from 'react-redux';
import { CartItem } from '@/hooks/store/cartSlice';
import CartCard from '@/components/Cart/CartItems';
import { Button } from '@/components/ui/button';
import { ClearButton, CheckOutButton } from '@/components/Cart/cartButton';
import { ShoppingBasket } from 'lucide-react';
import * as FaIcons from 'react-icons/fa';
import Link from 'next/link';
import Container from '@/components/Container';
const Cart = () => {
    const cartItems:CartItem[] = useSelector((state: RootState) => state.cart.cartItems);
    const total = cartItems.reduce((acc, item) => acc + item.qty * parseInt(item.price, 10), 0);
    
    console.log(cartItems)
    // const price = parseInt(cartItems.price, 10);
//   const totalPrice = cartItems.qty * price;
  return (
    <Container>
        <div className='w-full bg-red-500'>
     {/* {
        cartItems?.length>0?(
            <>
             <div className="max-w-[800px] w-[90%]   flex flex-col gap-4 mx-auto ">
      { 
           cartItems.map((item:CartItem,index:number)=>{
            return(<CartCard key={index} Items={item} />
          )})}
       <ClearButton items={cartItems[0]}/>

      </div>
      <div className="shadow-lg p-3 rounded-lg w-[90%] lg:w-[300px] h-max mt-10 mx-auto">
       <div className="flex flex-col justify-start gap-2 w-[95%] px-3">
        <h2 className="border-b-2">CART SUMMARY</h2>
        <div className='flex items-center justify-between '>
            <span>Item(s) total:</span>
            <span>$ {total}</span>
        </div>
        <div className='flex items-center justify-between border-b-2'>
            <span>Item(s) discount:
:</span>
            <span>$ {total}</span>
        </div>
        <div className='flex items-center justify-between  border-b-2 py-1'>
            <span>Subtotal:</span>
            <span>$ {total}</span>
        </div>
        <CheckOutButton items={cartItems[0]}/>
       </div>
      
      </div>

            </>
        ):(
            <div className="text-center text-center gap-3 flex flex-col items-center w-full shadow-lg p-3 rounded-lg h-56 mt-10">
                <FaIcons.FaShoppingBasket size={40}/>
                <h2>Your Cart is Empty!</h2>
                <Link href="/" className="mt-5 p-3 text-white rounded-xl bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all w-max">Start Shopping</Link>
            </div>
        )
     } */}
     { 
           cartItems&&cartItems.map((item:CartItem,index:number)=>{
            return(<CartCard key={Math.random()*1000} Items={item} />
          )})}
        </div>
        {/* second Part */}
        </Container>  )
}

export default Cart