import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import AllSportsEquipment from './pages/AllSportsEquipment/AllSportsEquipment';
import AddEquipment from './pages/AddEquipment/AddEquipment';
import MyEquipmentList from './pages/MyEquipmentList/MyEquipmentList';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './components/PrivateRoute';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-sports-equipment" element={<AllSportsEquipment />} />
        <Route path="/add-equipment" element={<PrivateRoute><AddEquipment /></PrivateRoute>} />
        <Route path="/my-equipment-list" element={<PrivateRoute><MyEquipmentList /></PrivateRoute>} />
        <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={currentUser ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </>
  );
};

export default App;
