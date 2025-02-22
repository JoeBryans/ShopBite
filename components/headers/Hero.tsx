import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex  justify-around w-full text-lg font-semibold h-[20rem] items-center  mt-10 gap-3  ">
      <div className="flex flex-col max-w-[400px] w-[320px] text-gray-700">
        <span className="flex gap-2 items-center">
          welcome to<b>JB</b>
          <b>SALE</b>!
        </span>
        <span>
          <b className="text-blue-600">SPECIAL </b>{" "}
          <b>
            OFFER UP TO <span className="text-green-600">30%</span> OFF
          </b>{" "}
        </span>
        <span>
          with your first <b className="text-yellow-500">PUCRCHASE</b>
        </span>
        <span>Get exclusive access to our new arrivals and sales</span>
        <div className="flex items-center gap-3">
          <Button className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all ">
            Shop Now
          </Button>
          <Button className="bg-yellow-500 hover:bg-white hover:text-yellow-500 hover:border-yellow-500 hover:border-2 font-semibold transition:all">
            Explor More
          </Button>
        </div>
      </div>
      {/* Image */}
      <Image src={ "/shopCart.jpg"} alt="" width={300} height={300} className="mt-"/>
    </div>
  );
};

export default Hero;
