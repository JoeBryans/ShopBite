"use client";
import React from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  CartItem,
  ShippingAddress,
  addShippinAddress,
  addToCart,
  clearCart,
  deleteFromCart,
  removeFromCart,
} from "../../hooks/store/cartSlice";
// import * as FaIcons  from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";
import { RootState } from "@/hooks/store/store";
import { log } from "console";
import { DeleteIcon } from "lucide-react";
import { Product } from "@/typing";
type props = {
  items: Product;
};
type prop = {
  items: any;
  shipping: ShippingAddress;
  total: number;
  totalquantity: number;
};
export const AddButton = ({ items }: props) => {
  const dispatch = useDispatch();

  const AddToCart = (item: any) => {
    dispatch(addToCart(item));
  };
  return (
    <Button
      size={"sm"}
      className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all w-full"
      onClick={() => AddToCart(items)}
    >
      Add to cart
    </Button>
  );
};
export const DeleteButton = (items: any) => {
  const dispatch = useDispatch();

  const DeleteFromCart = (id: any) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <DeleteIcon
      size={30}
      color="red"
      className="cursor-pointer"
      onClick={() => DeleteFromCart(items.id)}
    />
  );
};
export const RemoveButton = ({ items }: props) => {
  const dispatch = useDispatch();

  const RemoveFromCart = (item: any) => {
    dispatch(removeFromCart(item));
  };
  return (
    <Button
      size={"sm"}
      className="bg-yellow-500 hover:bg-white hover:text-yellow-500 hover:border-yellow-500 hover:border-2 font-semibold transition:all w-full"
      onClick={() => RemoveFromCart(items)}
    >
      Remove
    </Button>
  );
};

export const ClearButton = ({ items }: props) => {
  const dispatch = useDispatch();

  const ClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <Button
      size={"sm"}
      className="bg-yellow-500 hover:bg-white hover:text-yellow-500 hover:border-yellow-500 hover:border-2 font-semibold transition:all w-max"
      onClick={ClearCart}
    >
      Clear Cart
    </Button>
  );
};

export const CheckOutButton = ({
  items,
  shipping,
  total,
  totalquantity,
}: prop) => {
  // const cartItems:CartItem[] = useSelector((state: RootState) => state.cart.cartItems);

  const router = useRouter();
  const handleCheckOut = async (items: any) => {
    const res = await axios.post(
      "/api/order",
      {
        items: items,
        total: total,
        totalquantity: totalquantity,
        shippingAddress: shipping,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(res?.data?.clientSecret)

    router.push("/checkout");
    localStorage.setItem("clientSecret", res?.data.clientSecret);
  };
  // const handleCheckOut = async (items: any) => {
  //   const res = await axios.post("/api/payment", {
  //     body: "",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   router.push("/checkout");
  //   localStorage.setItem("clientSecret", res?.data.clientSecret);
  //   // window.location.href=res.data.url
  // };

  return (
    <Button
      className="mt-5 bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all w-full"
      onClick={() => handleCheckOut(items)}
    >
      Pay now
    </Button>
  );
};

// export const AddAddress = ({ items }: props) => {

//   return (
//     <Button
//       size={"sm"}
//       className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all w-full"
//       onClick={() => AddShippinAddress(items)}
//     >
//       create
//     </Button>
//   );
// };
