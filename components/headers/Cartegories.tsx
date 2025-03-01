import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Categories({ handleCategory }: any) {
  // const handleChange = (value: string) => {
  //   console.log(value);
  // };
  return (
    <Select onValueChange={handleCategory}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="product by category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Product Categories</SelectLabel>
          <SelectItem defaultValue={"all"} value="all">
            All
          </SelectItem>
          <SelectItem value="men">Men</SelectItem>
          <SelectItem value="women">Women</SelectItem>
          <SelectItem value="beauty">Beauty</SelectItem>
          <SelectItem value="kids">Kids</SelectItem>
          <SelectItem value="accessories">Accessories</SelectItem>
          <SelectItem value="home-decoration">Home & Decoration</SelectItem>
          <SelectItem value="kitchen-accessories">
            Kitchen Accessories
          </SelectItem>
          <SelectItem value="laptops">Laptops</SelectItem>
          {/* <SelectItem value="mobiles">Mobiles</SelectItem> */}
          {/* <SelectItem value="music">Music</SelectItem> */}
          <SelectItem value="tablets">Tablets</SelectItem>
          <SelectItem value="skin-care">Skin Care</SelectItem>
          <SelectItem value="smart-phones">Phones Phones</SelectItem>
          <SelectItem value="sports-accessories">Sports Accessories</SelectItem>
          <SelectItem value="tools">Tools</SelectItem>
          <SelectItem value="toys">Toys</SelectItem>
          <SelectItem value="electronics">Electronics</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default Categories;
