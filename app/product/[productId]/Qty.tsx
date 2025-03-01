"use client";
import { AddButton } from "@/components/Cart/cartButton";
import { Button } from "@/components/ui/button";
import { addToCart, removeFromCart } from "@/hooks/store/cartSlice";
import { RootState } from "@/hooks/store/store";
import { Product } from "@/typing";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Qty = ({ items }: { items: Product }) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  const match = cartItems.find((item) => item.id === items.id);

  const quantity: number | undefined = match?.qty;
  const Increment = (item: any) => {
    dispatch(addToCart(item));
  };
  const Decrement = (item: any) => {
    dispatch(removeFromCart(item));
  };
  return (
    <div>
      <div className="flex items-center gap-3">
        {quantity >= 1 ? (
          <>
            <span className="border-1 rounded w-mx py-2 text-muted-foreground">
              Qty:
            </span>
            <Button
              size={"sm"}
              variant={"outline"}
              className="text-xl font-semibold"
              onClick={() => Increment(items)}
            >
              +
            </Button>
            <Button
              size={"sm"}
              variant={"outline"}
              className="text-xl font-semibold"
            >
              {quantity}
            </Button>
            <Button
              size={"sm"}
              variant={"outline"}
              className="text-xl font-semibold"
              onClick={() => Decrement(items)}
            >
              -
            </Button>
          </>
        ) : (
          <AddButton items={items} />
        )}
      </div>
    </div>
  );
};

export default Qty;
