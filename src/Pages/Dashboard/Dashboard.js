import { Outlet } from "react-router-dom";
import DashboardHeader from "../../Components/Headers/DashboardHeader";
import DashboardSidebar from "../../Components/Sidebars/DashboardSidebar";
const Dashboard = () => {
  return (
    <>
      <DashboardHeader></DashboardHeader>
      <DashboardSidebar></DashboardSidebar>
      <main className="w-full pl-24">
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
