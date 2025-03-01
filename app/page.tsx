"use client";
import Hero from "@/components/headers/Hero";
import Home from "@/components/home/Home";
import Container from "@/components/Container";
import Categories from "@/components/headers/Cartegories";
import { FilterIcon } from "lucide-react";
import Filter from "@/components/Filter/Filter";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function page() {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("All");
  const handleCategory = (value: string) => {
    setCategory(value);
  };
  console.log(category);
  useEffect(() => {
    // router.push(``)
    //  router.push(`/product/${category}`)
  }, [category]);

  const handleFilter = (e: any) => {
    setFilter(e.target.value);
  };
  return (
    <>
      <Container>
        <Hero />
        <div className=" flex items-center justify-between w-full my-7">
          <Categories handleCategory={handleCategory} />
          {/* <Filter filter={filter} handleFilter={handleFilter} /> */}
          <Filter />
        </div>
        <Home category={category} />
      </Container>
    </>
  );
}
export default page;
