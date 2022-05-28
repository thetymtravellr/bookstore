import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const ManageUsers = () => {

  const { data, isLoading, error } = useQuery("users", async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  })

  return (
    <section className="p-4">
      <h1 className="text-4xl my-4">Manage Users</h1>
      <div class="overflow-x-auto w-full z-10">
      <table class="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
         {
           data?.map(user =>  <tr key={user.id}>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{user.name}</div>
                  <div class="text-sm opacity-50">{user.address.city}</div>
                </div>
              </div>
            </td>
            <td>
              {user.company.name}
              <br />
              <span class="badge badge-ghost badge-sm">
                {user.company.bs}
              </span>
            </td>
            <td>{user.email}</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>)
         }
        </tbody>
      </table>
    </div>
    </section>
  );
};

export default ManageUsers;
