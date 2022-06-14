import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Components/Authorization/RequireAuth";
import UserHeader from "./Components/Headers/UserHeader";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import ManageUsers from "./Pages/Dashboard/ManageUsers";
import Summary from "./Pages/Dashboard/Summary";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import VerifyEmailMessage from "./Pages/VerifyEmailMessage";

function App() {
  return (
    <div className="App">
      <UserHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Summary />} />
          <Route path="manageOrders" element={<ManageOrders />} />
          <Route path="manageProducts" element={<ManageProducts />} />
          <Route path="manageUsers" element={<ManageUsers />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifyEmail" element={<VerifyEmailMessage />} />
      </Routes>
    </div>
  );
}

export default App;
