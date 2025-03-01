"use client";
import React, { useState } from "react";
// import { Button } from "../ui/button"
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
// import Uploader from "../Uploader";
import { UploadButton } from "../Uploader";
import axios from "axios";
import { Card, CardContent, CardHeader } from "../ui/card";
import Additional_Info from "./Additional_Info";

const schema = yup.object({
  title: yup.string().min(3).required({ message: "Title is required" }),
  price: yup.number().min(1).required({ message: "Price is required" }),
  discount_price: yup
    .number()
    .min(1)
    .required({ message: "Price is required" }),
  available_Quantity: yup.number().min(1),
  description: yup.string(),
  color: yup.string().min(3),
  size: yup.string(),
  category: yup.string().min(3),
  slug: yup.string().min(3),
  brand: yup.string().min(3),
  // password:yup.string().min(10).required({message:"Password is required"})
});
type image = {
  url: string;
};

type Inputs = {
  title: string;
  slug: string;
  brand: string;
  price: number;
  discount_price: number;
  category: string;
  description: string;
  color: string;
  size: string;
  available_Quantity: number;
  overview: [{ title: string; info: string }];
};
const AddProduct = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<any>({ url: "" });
  const [overview, setOverview] = useState([{ title: "", info: "" }]);
  console.log(overview);

  // const handleRoomAmenities = () => {
  //   setOverview({
  //     ...overview,
  //     title: [...overview.title, ""],
  //   });
  // };

  // Amenities Input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const { name, value } = e.target;
    const overviewVal = [...overview];
    overviewVal[i][name] = value;
    setOverview(overviewVal);
  };
  const HandleClick = () => {
    setOverview([...overview, { title: "", info: "" }]);
    // setDes("");
  };

  console.log(files);
  const image: image[] = [];
  console.log(image);
  for (let index = 0; index < files.length; index++) {
    const { url } = files[index];
    image.push({ url });
  }

  // setImage({url:files[0].url,key:files[0].key})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: Inputs) => {
    //   router.push("/order")
    setIsLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/products",
        {
          title: data.title,
          slug: data.slug,
          brand: data.brand,
          price: data.price,
          discount_price: data.discount_price,
          category: data.category,
          overview: overview,
          description: data.description,
          image: image,
          color: data.color,
          size: data.size,
          available_Quantity: data.available_Quantity,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      router.push("/dashboard/products");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-full w-[90%]   p-3 mx-auto z-20">
      <form
        action=""
        className=" w-[95%] flex flex-col items-center mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2   mx-auto gap-5  ">
          {/* <div className="flex w-full px-5 gap-3 items-center mb-3 ">
            <h3 className="font-semibold text-xl">
              Please provice your home address for your delivery
            </h3>
          </div> */}
          <div className="flex flex-col ">
            <Label
              htmlFor="title"
              className="flex flex-col gap-3 px-3 py-1 w-full "
            >
              <span>Title</span>
              <Input
                id="title"
                {...register("title")}
                className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
              />
              {errors.title && (
                <span className="text-rose-500 text-xs">
                  {errors.title.message}
                </span>
              )}
            </Label>
            <Label
              htmlFor="brand"
              className="flex flex-col gap-3 px-3 py-1 w-full "
            >
              <span>Brand</span>
              <Input
                id="brand"
                {...register("brand")}
                className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
              />
              {errors.brand && (
                <span className="text-rose-500 text-xs">
                  {errors.brand.message}
                </span>
              )}
            </Label>
            <Label
              htmlFor="slug"
              className="flex flex-col gap-3 px-3 py-1 w-full "
            >
              <span>Sku</span>
              <Input
                id="slug"
                {...register("slug")}
                className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
              />
              {errors.slug && (
                <span className="text-rose-500 text-xs">
                  {errors.slug.message}
                </span>
              )}
            </Label>

            <div className="flex items-center  gap-4 w-full">
              <Label
                htmlFor="price"
                className="flex flex-col gap-3 px-3 py-1  w-full"
              >
                <span>Price</span>
                <Input
                  id="price"
                  {...register("price")}
                  type="price"
                  className="border-2 focuse:outline-0 fucous:border-0  rounded-lg py-2"
                />
                {errors.price && (
                  <span className="text-rose-500 text-xs">
                    {errors.price.message}
                  </span>
                )}
              </Label>
              <Label
                htmlFor="discount_price"
                className="flex flex-col gap-3 px-3 py-1 w-full "
              >
                <span>Discount price</span>
                <Input
                  id="discount_price"
                  {...register("discount_price")}
                  type="text"
                  className="border-2 focuse:outline-0 fucous:border-0  rounded-lg py-2"
                />
                {errors.discount_price && (
                  <span className="text-rose-500 text-xs">
                    {errors.discount_price.message}
                  </span>
                )}
              </Label>
            </div>
            <div className="flex items-center  gap-4 w-full">
              <Label
                htmlFor="color"
                className="flex flex-col gap-3 px-3 py-1 w-full "
              >
                <span>Color</span>
                <Input
                  id="color"
                  {...register("color")}
                  className="border-2 focuse:outline-0 fucous:border-0  rounded-lg py-2"
                />
                {errors.color && (
                  <span className="text-rose-500 text-xs">
                    {errors.color.message}
                  </span>
                )}
              </Label>
              <Label
                htmlFor="size"
                className="flex flex-col gap-3 px-3 py-1 w-full "
              >
                <span>Size</span>
                <Input
                  id="size"
                  {...register("size")}
                  className="border-2 focuse:outline-0 fucous:border-0  rounded-lg py-2"
                />
                {errors.size && (
                  <span className="text-rose-500 text-xs">
                    {errors.size.message}
                  </span>
                )}
              </Label>
            </div>
          </div>

          {/* seecond part */}

          <div className="flex flex-col ">
            <Label
              htmlFor="category"
              className="flex flex-col gap-3 px-3 py-1 w-full "
            >
              <span>Category</span>

              <select
                id="category"
                {...register("category")}
                className="border-2 focuse:outline-0 fucous:border-0  rounded-lg py-2"
              >
                <option value="" disabled={true}>
                  Cartegory
                </option>
                <option value="phone">Phone & Accessories</option>
                <option value="computer">Computer & Accessories</option>
                <option value="electronics">Electronics</option>
                <option value="home&office">Home & Office</option>
                <option value="fashion">Fashion</option>
                <option value="sports">Sport</option>
              </select>
              {errors.brand && (
                <span className="text-rose-500 text-xs">
                  {errors.brand.message}
                </span>
              )}
            </Label>
            <Label
              htmlFor="available_Quantity"
              className="flex flex-col gap-3 px-3 py-1 w-full "
            >
              <span>Available Quantity</span>
              <Input
                id="available"
                {...register("available_Quantity")}
                className="border-2 focuse:outline-0 fucous:border-0  rounded-lg py-2"
              />
              {errors.available_Quantity && (
                <span className="text-rose-500 text-xs">
                  {errors.available_Quantity.message}
                </span>
              )}
            </Label>

            <Label
              htmlFor="description"
              className="flex flex-col gap-3 px-3 py-1  w-full"
            >
              <span>Description</span>
              <textarea
                id="description"
                {...register("description")}
                className="border-2 focuse:outline-0 fucous:border-0  rounded-lg py-2"
              />
              {errors.price && (
                <span className="text-rose-500 text-xs">
                  {errors.price.message}
                </span>
              )}
            </Label>

            <div className="w-max border-2 rounded-xl my-4 mx-3">
              <Additional_Info
                HandleClick={HandleClick}
                overview={overview}
                handleChange={handleChange}
              />
            </div>

            <div className="flex flex-col  w-full ">
              <Card>
                <CardHeader>
                  <span>Upload your images</span>
                </CardHeader>

                <CardContent>
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      if (res) {
                        setFiles(res);
                      }

                      alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                </CardContent>
              </Card>

              {image.length > 0 ? (
                <div className="flex gap-2 items-center w-full rounded-lg border-gray-300 p-2">
                  {image.map((item: image, index: number) => {
                    return (
                      <img
                        src={item.url}
                        key={index}
                        alt="product"
                        className="w-28 h-full object-contain"
                      />
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-3 py-1 w-[300px] mt-2 mb-2">
          <button className="p-2 rounded-lg text-white bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all w-full">
            {isLoading ? (
              <div
                className="radial-progress text-primary animate-spin"
                style={{
                  "--value": 80,
                  "--size": "1rem",
                  "--thickness": "2px",
                }}
                role="progressbar"
              ></div>
            ) : (
              "Add to product"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
