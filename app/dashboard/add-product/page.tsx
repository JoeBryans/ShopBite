import Container from "@/components/Container";
import AddProduct from "@/components/form/AddProduct";

const page = () => {
  return (
    <div>
      <div className="flex w-screen min-h-[110vh]">
        <div className="max-w-[75rem]  w-[90%] flex flex-col justify-center  mx-auto mt-5">
          <h2 className="text-center font-bold text-3xl">Add Product</h2>
          <AddProduct />
        </div>
      </div>
    </div>
  );
};
export default page;
