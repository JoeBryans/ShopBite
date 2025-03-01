"use client";
import Container from "@/components/Container";
import { RootState } from "@/hooks/store/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { CartItem } from "@/hooks/store/cartSlice";
import CartCard from "@/components/Cart/CartItems";
import { ClearButton, CheckOutButton } from "@/components/Cart/cartButton";
import Link from "next/link";
import OrderItems from "@/components/Order/order";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Product } from "@/typing";

const page = () => {
  const cartItems: Product[] = useSelector(
    (state: RootState) => state.cart.cartItems
  );
  let orderItems = [];
  for (let index = 0; index < cartItems.length; index++) {
    const { title, price, category, image, qty, id } = cartItems[index];
    orderItems.push({ title, price, category, image, qty, id });
  }
  const shippingAddress = useSelector(
    (state: RootState) => state.cart.shippinInfo
  );
  const total = cartItems.reduce(
    (acc, item) => acc + item.qty * Math.floor(item.price),
    0
  );

  // const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
  const totalquantity = cartItems.reduce((acc, item) => acc + item.qty, 0);
  console.log(shippingAddress);

  const router = useRouter();
  console.log(total);
  useEffect(() => {
    if (!shippingAddress) {
      router.push("/shipping");
    }
    if (!cartItems) {
      router.push("/cart");
    }
    // handlePayment();
  }, []);
  const handlePayment = async () => {
    try {
      const res = axios.post(
        "/api/order",
        {
          items: orderItems,
          total: total,
          totalquantity: totalquantity,
          shippingAddress: shippingAddress,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <h3 className="text-center">Complete your Order</h3>
      <div className="flex justify-between w-full flex-wrap h-full">
        <div className="flex flex-col h-max gap-5 max-w-[600px] w-[90%]  mx-auto p-4">
          <div className="w-full flex flex-col shadow-lg">
            <h3>Cart Item(s)</h3>
            {cartItems.map((item: Product, index: number) => {
              return <OrderItems key={index} Items={item} />;
            })}
          </div>
          {/* shippingIfo*/}
          <div className="flex flex-col w-full  gap-3 shadow-lg px-4">
            <h3>Shipping Address</h3>

            <div className="flex items-center gap-2">
              {" "}
              <span>country:</span> <span>{shippingAddress.country}</span>
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <span>state:</span> <span>{shippingAddress.state}</span>
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <span>city:</span> <span>{shippingAddress.city}</span>
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <span>Zipcode:</span> <span>{shippingAddress?.zipcode}</span>
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <span>Location:</span> <span>{shippingAddress?.address}</span>
            </div>
          </div>
        </div>

        {/* order summary */}
        <div className="shadow-lg p-3 rounded-lg w-[90%] lg:w-[300px] h-max  mx-auto">
          <div className="flex flex-col justify-start gap-2 w-[95%] px-3">
            <h2 className="border-b-2">ORDER SUMMARY</h2>
            <div className="flex items-center justify-between ">
              <span>Item(s) total:</span>
              <span>$ {total}</span>
            </div>
            <div className="flex items-center justify-between border-b-2">
              <span>Item(s) discount: :</span>
              <span>$ {total}</span>
            </div>
            <div className="flex items-center justify-between  border-b-2 py-1">
              <span>Subtotal:</span>
              <span>$ {total}</span>
            </div>
            <CheckOutButton
              items={orderItems}
              shipping={shippingAddress}
              totalquantity={totalquantity}
              total={total}
            />
          </div>
        </div>

        {/* </div>  */}
      </div>
    </Container>
  );
};
export default page;
