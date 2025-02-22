import Container from "@/components/Container";
import React from "react";

const page = () => {
  return (
    <div>
      <Container>
        <div className="card bg-base-100 mx-auto max-w-full w-[90%] z-20 ">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Instock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {[1, 2, 3, 4, 5].map((item: number, index: number) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                <img
                                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </td>
                        <td>
                          Iphone 16 Pro Max
                          <br />
                          {/* short description */}
                          <span className="badge badge-ghost badge-sm">
                            Desktop Support Technician
                          </span>
                        </td>
                        <td>Apple</td>
                        <td>
                          <span className="">details</span>
                        </td>
                        <td>
                          <span className="">$ 2,600,000</span>
                        </td>
                        <td>
                          <span className="">$ 3,600,000</span>
                        </td>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex flex-col gap-2">
                            <button className="text-white rounded-lg bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all w-full">
                              edit
                            </button>
                            <button className="text-white rounded-lg bg-rose-500 hover:bg-white hover:text-rose-500 hover:border-rose-500 hover:border-2 font-semibold transition:all w-full">
                              delet
                            </button>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
