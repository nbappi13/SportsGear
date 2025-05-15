import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { CgImage } from "react-icons/cg";

const AddEquipment = () => {
  const { currentUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    photoUrl: "",
    itemName: "",
    categoryName: "",
    description: "",
    price: "",
    rating: "",
    customization: "no",
    processingTime: "",
    stockStatus: "1",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userEquipment = {
      ...formData,
      userEmail: currentUser.email,
      userName: currentUser.displayName,
    };

    fetch("https://b10-a10-server-side-roan.vercel.app/addEquip", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Equipment added successfully.",
            timer: 2000,
            showConfirmButton: false,
          });
          setFormData({
            photoUrl: "",
            itemName: "",
            categoryName: "",
            description: "",
            price: "",
            rating: "",
            customization: "no",
            processingTime: "",
            stockStatus: "1",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: data.message || "Failed to add equipment.",
            timer: 2000,
            showConfirmButton: false,
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Network error. Please try again.",
          timer: 2000,
          showConfirmButton: false,
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <Helmet>
        <title>Add Equipment | SportsGear</title>
        <meta
          name="description"
          content="Contribute to our community by adding new sports equipment to our catalog."
        />
        <meta property="og:title" content="Add Equipment | SportsGear" />
        <meta
          property="og:description"
          content="Help us enrich our collection with your contributions."
        />
      </Helmet>
      <form
        className="w-full max-w-4xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Add Equipment</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
       
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Photo URL
            </label>
            <div className="flex items-center">
              <CgImage size={24} className="mr-2 text-gray-500" />
              <input
                type="text"
                name="photoUrl"
                value={formData.photoUrl}
                placeholder="Enter Photo URL"
                className="input input-bordered w-full text-gray-900 dark:text-white dark:bg-gray-700"
                onChange={handleChange}
              />
            </div>
          </div>

         
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Item Name
            </label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              className="input input-bordered w-full text-gray-900 dark:text-white dark:bg-gray-700"
              onChange={handleChange}
            />
          </div>

        
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Category Name
            </label>
            <input
              type="text"
              name="categoryName"
              value={formData.categoryName}
              className="input input-bordered w-full text-gray-900 dark:text-white dark:bg-gray-700"
              onChange={handleChange}
            />
          </div>

        
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              className="textarea textarea-bordered w-full text-gray-900 dark:text-white dark:bg-gray-700"
              onChange={handleChange}
            />
          </div>

       
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Price</label>
            <input
              type="number"
              step="0.01"
              name="price"
              value={formData.price}
              className="input input-bordered w-full text-gray-900 dark:text-white dark:bg-gray-700"
              onChange={handleChange}
            />
          </div>

      
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Rating</label>
            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              name="rating"
              value={formData.rating}
              className="input input-bordered w-full text-gray-900 dark:text-white dark:bg-gray-700"
              onChange={handleChange}
            />
          </div>

         
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Customization
            </label>
            <select
              name="customization"
              value={formData.customization}
              onChange={handleChange}
              className="select select-bordered w-full text-gray-900 dark:text-white dark:bg-gray-700"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

        
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Processing Time
            </label>
            <input
              type="text"
              name="processingTime"
              value={formData.processingTime}
              className="input input-bordered w-full text-gray-900 dark:text-white dark:bg-gray-700"
              onChange={handleChange}
            />
          </div>

       
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Stock Status
            </label>
            <select
              name="stockStatus"
              value={formData.stockStatus}
              onChange={handleChange}
              className="select select-bordered w-full text-gray-900 dark:text-white dark:bg-gray-700"
            >
              <option value="1">In Stock</option>
              <option value="0">Out of Stock</option>
            </select>
          </div>
        </div>

      
        <div className="mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Add Equipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEquipment;
