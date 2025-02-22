// export const Allproduct = async () => {
//   const res = await fetch("http://localhost:3000/api/products");
//   return await res.json();
// };
export const Allproduct = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return await res.json();
};
// export const Singleproduct = async (id: string) => {
//   const res = await fetch(`http://localhost:3000/api/products/${id}`);
//   return await res.json();
// };
export const Singleproduct = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json();
};
