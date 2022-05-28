import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading";

const ManageOrders = () => {
  const { data, isLoading, error, refetch } = useQuery(
    "allOrders",
    async () => {
      const res = await fetch(
        `https://agile-atoll-96122.herokuapp.com/orders`,
        {
          method: "GET",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return res.json();
    }
  );

  console.log(data);

  return (
    <section className="p-4">
      <h1 className="text-4xl my-4">Manage Users</h1>
      {isLoading && <div className="min-h-[50vh] w-full grid place-content-center"><Loading></Loading></div>}
      {data && <div className="overflow-x-auto w-full z-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Customer Email</th>
              <th>Order Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
           
            {
              data?.map((order) => (
                <tr key={order.id}>
                  <td>{data.indexOf(order) + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={order.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{order.name}</div>
                        <div className="text-sm opacity-50">
                          {order.status.city}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h4 className="font-semibold">{order.orderQuantity}</h4>
                  </td>
                  <td>
                    <h4 className="font-semibold">{order.customerEmail}</h4>
                  </td>
                  <td>
                    <p
                      className={`btn btn-xs border-0 text-white ${
                        order.status === "unpaid" && "bg-yellow-500 hover:bg-yellow-500"
                      } ${order.status === "pending" && "bg-purple-600 hover:bg-purple-600"} ${
                        order.status === "shipped" && "bg-green-600 hover:bg-green-600"
                      }`}
                    >
                      {order.status}
                    </p>
                  </td>
                  <td>
                    {order.status !== "shipped" && (
                      <>
                        <button className={`btn btn-xs mr-2`}>shipped</button>{" "}
                        <button
                          className={`btn border-0 text-white bg-red-500 btn-xs`}
                        >
                          cancel
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>}
    </section>
  );
};

export default ManageOrders;
