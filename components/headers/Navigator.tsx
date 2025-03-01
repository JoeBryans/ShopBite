"use client";
import React from "react";
import NavBar from "./NavBar";
import { CartBar } from "./cartbar";
import { Heart } from "lucide-react";
import Searchs from "./Search";
import Logo from "./Logo";
import GetUser from "./GetUser";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

const Navigator = () => {
  const path = usePathname();
  const start = path.startsWith("/dashboard");

  const role = "seller";

  return (
    <div>
      {start ? (
        <div className="flex items-center max-w-[75rem] w-[90%]  mx-auto py-3">
          <div className="w-full flex justify-between items-center">
            <Logo />
            <ul className="flex items-center gap-8  ">
              <li className="flex items-center gap-2 ">
                <Searchs />
              </li>
              <li className="flex items-center gap-2 ">
                <Button className=" bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all ">
                  <Link href={"/dashboard/add-product"}>Add Products</Link>
                </Button>
              </li>

              <li>
                <GetUser role={role} />
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex items-center max-w-[65rem] w-[90%]  mx-auto py-3">
          <div className="w-full flex justify-between items-center">
            <Logo />
            <ul className="flex items-center gap-8  ">
              <li className="flex items-center gap-2 ">
                <Searchs />
              </li>
              <li className="flex items-center gap-2   ">
                <Heart color="red" size={30} className="cursor-pointer " />
              </li>
              <li className="flex items-center gap-2 relative">
                <CartBar />
              </li>

              <li>
                <GetUser role={role} />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigator;
