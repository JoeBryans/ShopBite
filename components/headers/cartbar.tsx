"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import * as FaIcons from "react-icons/fa";
import CartItems from "./cartItems";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store/store";
import { ShoppingBasketIcon } from "lucide-react";
import { Product } from "@/typing";
// import { CartItem } from "@/hooks/store/cartSlice";
export function CartBar() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const total = cartItems.reduce((acc, item) => acc + item.qty, 0);
  // const total=cartItems.reduce((acc,item)=>{
  //   return acc+Number(item.qty)*Number(item.price)
  // },0)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center gap-2 relative cursor-pointer">
          <ShoppingBasketIcon size={30} />
          <span className="absolute -top-2 -right-4 text-md font-semibold  bg-white shadow-md rounded-full w-full h-full flex justify-center items-center  ">
            {cartItems.length}
          </span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            <div className="font-semibold text-xl">
              You have <span>{cartItems.length}</span> Items in Your Cart!
            </div>
          </SheetDescription>
        </SheetHeader>
        <div className="">
          {cartItems.slice(0, 3).map((item: Product, index: number) => {
            return <CartItems key={index} Items={item} />;
          })}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            {cartItems.length > 0 ? (
              <Link href={"/cart"} className=" text-blue-600">
                Veiw all cart Items
              </Link>
            ) : null}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
