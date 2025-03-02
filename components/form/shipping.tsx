"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addShippinAddress, ShippingAddress } from "@/hooks/store/cartSlice";

const schema = yup.object({
  country: yup.string().min(3).required({ message: "Country is required" }),
  city: yup.string().min(3).required({ message: "City is required" }),
  state: yup.string().min(3).required({ message: "State is required" }),
  zipcode: yup.string().min(3).required({ message: "Zipcode is required" }),
  address: yup.string().min(3),
  // password:yup.string().min(10).required({message:"Password is required"})
});

const Shipping = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingAddress>({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();

  const onSubmit = async (data: ShippingAddress) => {
    dispatch(addShippinAddress(data));
    router.push("/order");
    console.log(data);

    // try {

    // } catch (error) {

    // }
  };

  return (
    <div className="max-w-[600px] w-[90%] flex flex-col items-start p-3 mx-auto ">
      <form
        action=""
        className="max-w-[500px] w-[95%]  block mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full px-5 gap-3 items-center mb-3 ">
          <h3 className="font-semibold text-xl">
            Please provice your home address for your delivery
          </h3>
        </div>
        <Label
          htmlFor="country"
          className="flex flex-col gap-3 px-3 py-1 w-full "
        >
          <span>Country</span>
          <Input
            id="country"
            {...register("country")}
            className="focuse:outline-0 fucous:border-0 border-2 rounded-lg py-2"
          />
          {errors.country && (
            <span className="text-rose-500 text-xs">
              {errors.country.message}
            </span>
          )}
        </Label>
        <Label
          htmlFor="state"
          className="flex flex-col gap-3 px-3 py-1 w-full "
        >
          <span>State</span>
          <Input
            id="state"
            {...register("state")}
            className="focuse:outline-0 fucous:border-0 border-2 rounded-lg py-2"
          />
          {errors.state && (
            <span className="text-rose-500 text-xs">
              {errors.state.message}
            </span>
          )}
        </Label>
        <Label htmlFor="city" className="flex flex-col gap-3 px-3 py-1 w-full ">
          <span>City</span>
          <Input
            id="city"
            {...register("city")}
            className="focuse:outline-0 fucous:border-0 border-2 rounded-lg py-2"
          />
          {errors.city && (
            <span className="text-rose-500 text-xs">{errors.city.message}</span>
          )}
        </Label>

        <Label
          htmlFor="zipcode"
          className="flex flex-col gap-3 px-3 py-1 w-full "
        >
          <span>Zipcode</span>
          <Input
            id="zipcode"
            {...register("zipcode")}
            type="text"
            className="focuse:outline-0 fucous:border-0 border-2 rounded-lg py-2"
          />
          {errors.zipcode && (
            <span className="text-rose-500 text-xs">
              {errors.zipcode.message}
            </span>
          )}
        </Label>

        <Label
          htmlFor="address"
          className="flex flex-col gap-3 px-3 py-1 w-full "
        >
          <span>Location description</span>
          <Input
            id="address"
            {...register("address")}
            type="text"
            className="focuse:outline-0 fucous:border-0 border-2 rounded-lg py-2"
          />
          {errors.address && (
            <span className="text-rose-500 text-xs">
              {errors.address.message}
            </span>
          )}
        </Label>
        <div className="flex flex-col gap-3 px-3 py-1 w-full mt-2 mb-2">
          <button className="p-2 rounded-lg text-white bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all w-full">
            create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Shipping;
