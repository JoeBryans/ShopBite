// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };





// import { Singleproduct } from "@/Request/request";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import * as FaIcons from "react-icons/fa";

// const page = ({ params }: { params: { productId: string } }) => {
//   const id = params.productId
//   console.log(id);
//   Singleproduct(id).then(res=>{
//     console.log(res)
//   })

//   const overView=[
//     "Operating system: Android 11",
//     "Internal Storage: 128GB",
//     "External Storage:",
//     "Processor: MT6762",
//     "RAM Size: 4GB",
//     "Battery: 6000mAH",
//     "Screen: 10.1'' FHD IPS 1200*1920 ",
//     "Color black"
//   ]

//   return (
//     <div className="flex w-screen">
//       <div className="max-w-[65rem] w-[90%] flex flex-col mx-auto mt-5">
//         <div className="flex flex-wrap  w-full gap-4 shadow-lg p-3">
//           <div className="max-w-[500px] w-[90%]  px-2 ">
//             <div className="flex justify-between w-full gap-2">
//              <div className="flex flex-col gap-3">
//              {
//               [0,0,0,0].map(()=>(
//                 <Image
//                 src={"/Ipad.jpg"}
//                 alt=""
//                 width={80}
//                 height={80}
//                 className="object-contain w-[80%]"
//               />
//               ))
//              }
//              </div>

//               <Image
//                 src={"/Ipad.jpg"}
//                 alt=""
//                 width={400}
//                 height={300}
//                 className="object-contain w-[80%]"
//               />
//             </div>

//             <div className="flex gap-3 items-center mt-3 ">
//               <div className="flex gap-1 items-center ">
//                 <span>145</span>
//                 <span>reviwes</span>
//               </div>
//               <div className="flex items-center text-yellow-700 hover:text-yellow-500">
//                 <span>4.5</span>
//                 <FaIcons.FaStar className="" />
//                 <FaIcons.FaStar className="" />
//                 <FaIcons.FaStar className="" />
//                 <FaIcons.FaStar className="" />
//               </div>
//             </div>
//           </div>
//           {/* second Part */}
//           <div className="max-w-[500px] w-[90%]   px-2 flex flex-col gap-3 ">
//             <span>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
//               mollitia, vel alias sit aut libero. Eveniet consequatur nesciunt
//               ullam neque.
//             </span>
//             <div className="flex items-center gap-2">
//               <span className="opacity-80">Brand:</span>
//               <span className=" font-semibold">JoeBryan</span>
//             </div>
//             {/* Review ANd ratings */}
//             <div className="flex gap-3 items-center justify-between">
//               <div className="flex gap-3 items-center ">
//                 <span>Sold quantity</span>
//                 <Button
//                   size={"sm"}
//                   className="bg-yellow-500 hover:bg-white hover:text-yellow-500 hover:border-yellow-500 hover:border-2 font-semibold transition:all"
//                 >
//                   instock
//                 </Button>
//               </div>
//               <div className="flex items-center text-yellow-700 hover:text-yellow-500">
//                 <span>4.5</span>
//                 <FaIcons.FaStar className="" />
//                 <FaIcons.FaStar className="" />
//                 <FaIcons.FaStar className="" />
//                 <FaIcons.FaStar className="" />
//               </div>
//             </div>

//             <div className="flex items-center gap-4 w-full ">
//               <span className="text-xl font-semibold">${"400"}</span>
//               <span className="text-black opacity-80 line-through">
//                 ${"450"}
//               </span>
//               <Button
//                 size={"sm"}
//                 className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all"
//               >
//                 -66%
//               </Button>
//             </div>
//             <span> Color: Gray</span>
//             <span>size</span>
//             {/* qty */}
//             <div className="flex items-center gap-3">
//               <span className="border-1 rounded w-mx p-2">Qty:</span>
//               <Button
//                 size={"sm"}
//                 variant={"outline"}
//                 className="text-xl font-semibold"
//               >
//                 +
//               </Button>
//               <Button
//                 size={"sm"}
//                 variant={"outline"}
//                 className="text-xl font-semibold"
//               >
//                 3
//               </Button>
//               <Button
//                 size={"sm"}
//                 variant={"outline"}
//                 className="text-xl font-semibold"
//               >
//                 -
//               </Button>
//             </div>
//             <Button
//               size={"sm"}
//               className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all w-full"
//             >
//               Add to cart
//             </Button>

//             {/* <span></span>
//             <span></span> */}
//           </div>
//         </div>
//         {/* overview And descriptions */}
//         <div className="flex flex-col w-full mt-10 shadow-lg p-3">

//         <div  className="flex items-center gap-5 ">
//             <span className="border-b-2 "><a href="#overview">Overview</a> </span>

//             <span><a href="#description">Descriptions</a> </span>
//             <span><a href="#warranty">Warranty</a> </span>
//             <span><a href="#delivery">Delivery</a> </span>
//             {/* <span>Reviews</span> */}
//             </div>
//            <div id="overview" className={` mt-5 `}>
//            <h3 className="font-semibold text-xl mb-1">Overview:</h3>

//            {
//            overView.map((items,i)=>{
//             return <span key={i} className="block">{items}</span>
//            })     
//             }
//            </div>
//            {/* description */}
//            <div id="description" className={` mt-5 `}>
//             <h3 className="font-semibold text-xl mb-1">Description:</h3>
//            {
//            overView.map((items,i)=>{
//             return <span key={i} className="block">{items}</span>
//            })     
//             }
//            </div>
//            {/* Waranty */}
//            <div id="warranty" className={` mt-5 `}>
//            <h3 className="font-semibold text-xl mb-1">Warranty:</h3>

//            {
//            overView.map((items,i)=>{
//             return <span key={i} className="block">{items}</span>
//            })     
//             }
//            </div>
//            {/* delivery */}
//            <div id="delivery" className={` mt-5 `}>
//            <h3 className="font-semibold text-xl mb-1">Delivery:</h3>

//            {
//            overView.map((items,i)=>{
//             return <span key={i} className="block">{items}</span>
//            })     
//             }
//            </div>

//         </div>
//       </div>
//     </div>
//   );
// };
// export default page;
