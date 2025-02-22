// "use client";
import Link from "next/link";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import Logo from "./Logo";
import { CartBar } from "./cartbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import Searchs from "./Search";
// import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { GetUser } from "@/current_user";
// import Categories from './Cartegories';
const NavBar = async () => {
  // const path = usePathname();
  // const start = path.startsWith("/dashboard");
  // console.log(path);

  const session = await getServerSession(authOptions);
  console.log(session);
  const user = session?.user;
  // const user = true;
  return (
    <div className="w-screen bg-white shadow-md z-40">
      {/* {start ? (
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

              
              <li>{/* <GetUser /> </li>
            </ul>
          </div>
        </div>
      ) :(*/}
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
              {/* <Link href="/">
                {" "}
                <FaIcons.FaShoppingBasket size={30} />
                <span className="absolute -top-2 -right-4 text-md font-semibold  bg-white shadow-md rounded-full w-full h-full flex justify-center items-center  ">6</span>

              </Link> */}
              <CartBar />
            </li>

            <li>
              <GetUser />
            </li>
          </ul>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default NavBar;
