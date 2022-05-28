import { Route, Routes, useLocation } from "react-router-dom";
import RequireAuth from "./Components/RequireAuth";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import ManageUsers from "./Pages/Dashboard/ManageUsers";
import Summary from "./Pages/Dashboard/Summary";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import VerifyEmailMessage from "./Pages/VerifyEmailMessage";

function App() {
  const location = useLocation();
  return (
    <div className="App flex">
      {location.pathname === "/login" || location.pathname === "/register" || location.pathname === '/verifyEmail'  ? null : <Sidebar></Sidebar>}
      <Routes>
        <Route path="/" element={
            <Home />
        } />
        <Route path="/dashboard" element={
          <RequireAuth>
          <Dashboard />
        </RequireAuth>
        } >
          <Route index element={<Summary/>}/>
          <Route path="manageOrders" element={<ManageOrders/>}/>
          <Route path="manageProducts" element={<ManageProducts/>}/>
          <Route path="manageUsers" element={<ManageUsers/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifyEmail" element={<VerifyEmailMessage />} />
      </Routes>
    </div>
  );
}

export default App;
