"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const schema = yup.object({
  email: yup.string().min(3).required({ message: "Email is required" }),
  password: yup.string().min(10).required({ message: "Password is required" }),
});

type Inputs = {
  email: string;
  password: string;
};
const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: Inputs) => {
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res?.ok) {
        router.push("/");
      }
    } catch (error) {}
  };

  return (
    <div className="max-w-[600px] w-[90%] flex flex-col items-start p-3 mx-auto ">
      <form
        action=""
        className="max-w-[500px] w-[95%]  block mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-full px-3 gap-3 items-center mb-3 ">
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
          <button className="p-2 text-white bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all w-full">
            sign in
          </button>
          <div className="flex items-center justify-between">
            <span>
              New to Shopbite{" "}
              <Link
                href={"/sign-up"}
                className="font-semibold hover:underline text-blue-500"
              >
                create account
              </Link>
            </span>
            <Link
              href={""}
              className="font-semibold hover:underline text-blue-500"
            >
              forgotte password{" "}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
