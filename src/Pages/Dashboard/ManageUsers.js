import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";

const ManageUsers = () => {
  const [user] = useAuthState(auth);

  const email = user?.email;
  const placeHolderImg =
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";

  const { data, isLoading, error } = useQuery("users", async () => {
    const res = await axios.get(
      "https://agile-atoll-96122.herokuapp.com/user",
      {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return res.data;
  });

  return (
    <section className="p-4">
      <h1 className="text-4xl my-4 font-semibold text-purple-900">Manage Users</h1>
      <div className="overflow-x-auto w-full z-10">
        <table className="table w-full">
          <thead>
            <tr className="text-white">
              <th className="bg-purple-500"></th>
              <th className="bg-purple-500">Name</th>
              <th className="bg-purple-500">Email</th>
              <th className="bg-purple-500">Details</th>
              <th className="bg-purple-500">Role</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => (
              <tr key={user._id}>
                <td>
                  <h3 className="font-bold text-lg">
                    {data.indexOf(user) + 1}
                  </h3>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img
                          src={user.img || placeHolderImg}
                          alt="User Avatar"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="font-semibold flex items-center space-x-1">
                        <h2>{user.name}</h2>
                        {user.email === email && (
                          <p className="text-xs">(you)</p>
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <td>
                  <p
                    className={`${
                      user.role === "admin" && "bg-purple-700"
                    } text-white text-sm px-1 rounded-md w-fit`}
                  >
                    {user.role}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageUsers;
