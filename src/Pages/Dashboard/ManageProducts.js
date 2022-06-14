import { ExclamationIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading";
import Modals from "../../Components/Modals/Modals";

const ManageProducts = () => {
  const [confirm, setConfirm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { data, isLoading, error, refetch } = useQuery("products", async () => {
    const res = await fetch(
      "https://agile-atoll-96122.herokuapp.com/products",
      {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return res.json();
  });

  return (
    <section className="p-4">
      <h1 className="text-4xl my-4">Manage Products</h1>
      {isLoading && (
        <div className="min-h-[50vh] w-full grid place-content-center">
          <Loading></Loading>
        </div>
      )}
      {data && (
        <div className="overflow-x-auto w-full z-10">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Supplier Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((product) => (
                <tr key={product._id}>
                  <td>{data.indexOf(product) + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.productName}</div>
                        <div className="text-md font-semibold opacity-50">
                          <p className="text-yellow-600">${product.price}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h4 className="font-semibold">{product.quantity}</h4>
                  </td>
                  <td>
                    {product.supplierName}
                    <br />
                    <span class="badge badge-ghost badge-sm">
                      {product.supplierEmail}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => setShowModal(true)}
                      className={`btn btn-xs bg-red-500 border-0 text-white font-poppins`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Modals showModal={showModal} setShowModal={setShowModal} confirm={setConfirm}>
      <div className="text-red-500">
             <p>
               <ExclamationIcon className="w-16 mx-auto" />
             </p>
             <p className="text-md text-center">
               Are You Sure You Want To Delete This Product?
             </p>
             <div className="w-full flex justify-center space-x-2 mt-6">
               <button onClick={() => setShowModal(false)} className="btn px-8 bg-purple-500 hover:bg-purple-600 border-0 text-white">No</button>
               <button onClick={() => setConfirm(true)} className="btn px-8 bg-red-500 hover:bg-red-600 border-0 text-white">Yes</button>
             </div>
           </div>
      </Modals>
{/* <DeleteModals isOpen={openModal} close={setOpenModal} confirm={setConfirm}/> */}
    </section>
  );
};

export default ManageProducts;
