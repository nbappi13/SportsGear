import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import AllSportsEquipment from "./pages/AllSportsEquipment/AllSportsEquipment";
import AddEquipment from "./pages/AddEquipment/AddEquipment";
import MyEquipmentList from "./pages/MyEquipmentList/MyEquipmentList";
import UpdatedPage from "./pages/UpdatedPage/UpdatedPage"; 
import Cart from "./pages/Cart/Cart";
import BuyNow from "./pages/BuyNow/BuyNow";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ViewDetails from "./pages/ViewDetails/ViewDetails";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
import { AuthContext } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext"; 

const App = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-sports-equipment" element={<AllSportsEquipment />} />
        <Route
          path="/add-equipment"
          element={
            <PrivateRoute>
              <AddEquipment />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-equipment-list"
          element={
            <PrivateRoute>
              <MyEquipmentList />
            </PrivateRoute>
          }
        />
        <Route
          path="/update/:id"
          element={
            <PrivateRoute>
              <UpdatedPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={currentUser ? <Cart /> : <Navigate to="/login" />}
        />
        <Route
          path="/buy-now"
          element={currentUser ? <BuyNow /> : <Navigate to="/login" />}
        />
        <Route
          path="/viewdetails/:id"
          element={
            <PrivateRoute>
              <ViewDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={currentUser ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;
