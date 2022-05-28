import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";

const Dashboard = () => {

  return (
    <>
      <main className="w-full pl-24">
        <Header></Header>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
