// export const Allproduct = async () => {
//   const res = await fetch("http://localhost:3000/api/products");
//   return await res.json();
// };
export const Allproduct = async (category: string) => {
  const res = await fetch(
    `${
      category
        ? `https://dummyjson.com/products/category/${category}`
        : "https://dummyjson.com/products"
    }`
  );
  return await res.json();
};
// export const Allproduct = async () => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   return await res.json();
// };
// export const Singleproduct = async (id: string) => {
//   const res = await fetch(`http://localhost:3000/api/products/${id}`);
//   return await res.json();
// };

export const Singleproduct = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return await res.json();
};
export const Categoryproduct = async (category: string) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  return await res.json();
};

export const Order = async () => {
  const res = await fetch(`http://localhost:3000/api/order`);
  return await res.json();
};
