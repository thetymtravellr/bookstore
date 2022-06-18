import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes, useLocation } from "react-router-dom";
import UserHeader from "./Components/Headers/UserHeader";
import auth from "./firebase.init";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Wishlist from "./Pages/Wishlist/Wishlist";

function App() {
  const location = useLocation()
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      {(location.pathname === '/login' || location.pathname === '/register') ? null :  <UserHeader/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* <Route
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
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
