import Container from "@/components/Container";
import { Order } from "@/Request/request";
import { Orders } from "@/typing";
import { User2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = async () => {
  const data = await Order();
  const orders = data?.order;
  console.log(data?.order);
  return (
    <div>
      <Container>
        <div className="card bg-base-100 mx-auto max-w-full w-[90%] z-20 ">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>user</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>OrderId</th>
                  <th>PaymentId</th>
                  <th>Payment</th>
                  <th>Delivary</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="relative">
                {/* row 1 */}
                {orders.map((item: Orders, index: number) => {
                  return (
                    <>
                      <tr key={index} className="h-20 py-2 ">
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              {item.user.image === null ? (
                                <div className="mask mask-squircle h-12 w-12">
                                  <User2 />
                                </div>
                              ) : (
                                <>
                                  <Image
                                    src={item.user.image}
                                    alt={item.user.image}
                                    width={100}
                                    height={100}
                                  />
                                </>
                              )}
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>{item.user.name}</span>
                        </td>
                        <td>
                          <span>{item.total_price}</span>
                          <br />
                          {/* short description */}
                        </td>
                        <td>
                          <span>{item.id}</span>
                        </td>
                        <td>
                          <span className="">{item.paymentIntentId}</span>
                        </td>
                        <td>
                          <span className="">{item.paymentStatus}</span>
                        </td>
                        <td>
                          <span className="">{item.deliveryStatus}</span>
                        </td>
                        <td>
                          <span className="">paid</span>
                        </td>
                        <td>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </td>
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
