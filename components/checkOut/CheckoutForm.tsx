import { PaymentElement } from "@stripe/react-stripe-js";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { Button } from "../ui/button";
interface Props {
  clientSecret: string;
}
const CheckoutForm = ({ clientSecret }: Props) => {
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!stripe || !elements) {
        return;
      }
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/success",
        },
      });
      if (!error) {
        // If `result.error` is `null`, it's a success
        console.log(error);
        localStorage.removeItem("clientSecret");

        // Send the paymentIntent.id to your server to create the order
      } else {
        // Show error to your customer
        console.log("error occured");
      }
      localStorage.removeItem("cartItems");
      localStorage.removeItem("shippinInfo");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full ">
      {clientSecret ? (
        <form
          className="shadow-lg p-3 rounded-lg md:w-[500px] w-full h-max mt-10 mx-auto"
          onSubmit={handleSubmit}
        >
          {/* <AddressElement
            options={{
              mode: "shipping",
              // addressTypes: ["shipping"],
            }}
          /> */}
          <PaymentElement options={{ layout: "accordion" }} />
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all w-full"
          >
            Pay now
          </Button>
        </form>
      ) : null}
    </div>
  );
};
export default CheckoutForm;
