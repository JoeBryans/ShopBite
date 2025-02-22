"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/checkOut/CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const page = () => {
  const clientSecret = localStorage.getItem("clientSecret");
  console.log(clientSecret);

  return (
    <div className="flex w-screen">
      <div className="max-w-[75rem] w-[90%] flex flex-col mx-auto mt-5">
        <div className="flex flex-wrap  w-full gap-4 shadow-lg p-3">
          <div className="max-w-[500px] w-[90%]  px-2 ">
            {clientSecret ? (
              <div className="flex flex-col gap-3">
                <span className="border-b-2 ">
                  <a href="#overview">Overview</a>{" "}
                </span>
                <div className="flex justify-between w-full gap-2">
                  <div className="flex  gap-3">
                    <span>
                      <a href="#description">Descriptions</a>{" "}
                    </span>
                    <Elements
                      stripe={stripePromise}
                      options={{
                        clientSecret,
                        appearance: {
                          theme: "flat",

                          labels: "floating",
                        },
                      }}
                    >
                      <CheckoutForm clientSecret={clientSecret} />
                    </Elements>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
