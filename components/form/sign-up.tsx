"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
const schema = yup.object({
  name: yup.string().min(3).required({ message: "Name is required" }),
  email: yup.string().min(3).required({ message: "Email is required" }),
  phone: yup.string().min(10).required({ message: "Phone is required" }),
  role: yup.string(),
  password: yup
    .string()
    .min(10)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required({ message: "Password is required" }),
});

type Inputs = {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
};
const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const onSubmit = async (data: Inputs) => {
    try {
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        router.push("/sign-in");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="max-w-[600px] w-[90%] flex flex-col items-start p-3 mx-auto ">
      <form
        className="max-w-[500px] w-[95%]  block mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col px-3 gap-3 items-center mb-3 ">
          <Button
            type="button"
            className=" bg-rose-500 hover:bg-white hover:text-rose-500 hover:border-rose-500 hover:border-2 font-semibold transition:all w-full"
          >
            sign-in with google
          </Button>
          <Button
            type="button"
            className=" bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all w-full"
          >
            sign-in with facebook
          </Button>
        </div>
        <Label htmlFor="name" className="flex flex-col gap-3 px-3 py-1 w-full ">
          <span>FullName</span>
          <Input
            id="name"
            type="text"
            {...register("name")}
            className="focuse:outline-0 fucous:border-0 border-2 rounded-lg py-2"
          />
          {errors.name && (
            <span className="text-rose-500 text-xs">{errors.name.message}</span>
          )}
        </Label>
        <Label
          htmlFor="email"
          className="flex flex-col gap-3 px-3 py-1 w-full "
        >
          <span>Email</span>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className="focuse:outline-0 fucous:border-0 border-2 rounded-lg py-2"
          />
          {errors.email && (
            <span className="text-rose-500 text-xs">
              {errors.email.message}
            </span>
          )}
        </Label>
        <Label
          htmlFor="phone"
          className="flex flex-col gap-3 px-3 py-1 w-full "
        >
          <span>Phone</span>
          <Input
            id="phone"
            {...register("phone")}
            type="text"
            className="focuse:outline-0 fucous:border-0 border-2 rounded-lg py-2"
          />
          {errors.phone && (
            <span className="text-rose-500 text-xs">
              {errors.phone.message}
            </span>
          )}
        </Label>
        {/* <Label htmlFor="role"className="flex flex-col gap-3 px-3 py-1 w-full ">
            <span>Role</span>
            <select>
                <option value="">Select Role</option>
                <option value="">user</option>
                <option value=""></option>
            </select>
          </Label> */}
        <Label
          htmlFor="password"
          className="flex flex-col gap-3 px-3 py-1 w-full "
        >
          <span>Password</span>
          <Input
            id="password"
            {...register("password")}
            type="password"
            className="focuse:outline-0 fucous:border-0 border-2 rounded-lg py-2"
          />
          {errors.password && (
            <span className="text-rose-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </Label>
        <div className="flex flex-col gap-3 px-3 py-1 w-full mt-2 mb-2">
          <button className="p-2 rounded-lg bg-blue-500 hover:bg-white text-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all w-full">
            sign up
          </button>
          <span>
            Alread have an account with Shopbite ?{" "}
            <Link
              href={"/sign-in"}
              className="font-semibold hover:underline text-blue-500"
            >
              sign in
            </Link>
          </span>

          {/* <div className="flex items-center justify-between">
        
             <Link href={""}className="font-semibold hover:underline text-blue-500">forgotte password </Link>
         </div> */}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
