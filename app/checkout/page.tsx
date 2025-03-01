"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/checkOut/CheckoutForm";
import { useRouter } from "next/navigation";
import { RootState } from "@/hooks/store/store";
import { useSelector } from "react-redux";
import CartItems from "@/components/headers/cartItems";
import ItemsCheckOut from "./Product";
import { Product } from "@/typing";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const page = () => {
  const clientSecret = localStorage.getItem("clientSecret");
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  if (!clientSecret) {
    router.push("/cart");
  }
  return (
    <div className="flex w-screen min-h-[100vh]">
      {clientSecret ? (
        <div className="max-w-[75rem] w-[90%] flex flex-col mx-auto mt-5">
          <div className="flex flex-wrap  w-full gap-4  md:p-3 p-1">
            <div className="max-w-[900px] w-[100%]  px-2  mx-auto ">
              <div className="flex w-full flex-wrap gap-5 ">
                <div className="w-72  mt-10">
                  {cartItems.map((item: Product, index: number) => {
                    return (
                      <div>
                        <ItemsCheckOut Items={item} />
                      </div>
                    );
                  })}
                  <span className="text-gray-700 font-semi-bold">
                    Sum total: ${total}
                  </span>
                </div>
                <div>
                  <Elements
                    stripe={stripePromise}
                    options={{
                      clientSecret,
                      appearance: {
                        theme: "stripe",

                        labels: "above",
                      },
                    }}
                  >
                    <CheckoutForm clientSecret={clientSecret} />
                  </Elements>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // network error
        <div className="flex flex-col items-center justify-center w-full h-[100vh] bg-white">
          <h1 className="text-3xl font-bold text-center">Network Error</h1>
          <p className="text-center">Please check your internet connection</p>
        </div>
      )}
    </div>
  );
};
export default page;
