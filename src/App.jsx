import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/noPage/NoPage";
import MyState from "./context/data/myState";
import Signup from "./pages/registration/Register";
import Login from "./pages/registration/Login";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <ProtectedRouteUser>
                <Order />
              </ProtectedRouteUser>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />

          {/* Admin */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteAdmin>
                <Dashboard />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteAdmin>
                <AddProduct />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRouteAdmin>
                <UpdateProduct />
              </ProtectedRouteAdmin>
            }
          />

          {/* Admin Ends */}

          <Route
            path="/login"
            element={
              <ProtectedRegistrationRoutes>
                <Login />
              </ProtectedRegistrationRoutes>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRegistrationRoutes>
                <Signup />
              </ProtectedRegistrationRoutes>
            }
          />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </MyState>
  );
}

export default App;

// User's Protected Routes

export const ProtectedRouteUser = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
export const ProtectedRegistrationRoutes = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};

// Admin's Protected routes
export const ProtectedRouteAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin && admin.user.email === "admin@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
