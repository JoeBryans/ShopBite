// import Categories from './Cartegories';

import Link from "next/link";

export default function Logo(){
  return(  <div className="flex justify-between items-center max-w-[250px] w-[200px] ">
 <Link href={"/"} className="flex items-center text-3xl font-bold  text-transparent bg-clip-text  bg-gradient-to-r from-red-500 via-green-500 to-blue-500">
         {/* <span>Shop</span>
          <span className=" ">bite</span> */}
          <img src={"/685c34935e544aefb2b41388eb2f8345-free.png"} alt="logo" className="w-12 h-12 rounded-full object-contain"/>
        </Link>          <span>
            {/* <Categories/> */}
            
          </span>
          </div>
)}