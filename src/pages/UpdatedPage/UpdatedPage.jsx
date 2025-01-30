import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const UpdatedPage = () => {
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState({
    itemName: '',
    categoryName: '',
    price: '',
    rating: '',
    customization: 'no',
    stockStatus: '1',
    photoUrl: '',
    description: '',
  });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/equipment/${id}`)
        .then((response) => response.json())
        .then((data) => setEquipment(data))
        .catch((error) => {
          console.error("Error fetching equipment:", error);
          Swal.fire({
            title: 'Error!',
            text: 'Failed to fetch equipment. Please check your network connection and try again.',
            icon: 'error',
            timer: 3000,
            showConfirmButton: false,
          });
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEquipment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = { ...equipment };

    fetch(`http://localhost:5000/equipment/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            title: 'Success!',
            text: 'Equipment updated successfully!',
            icon: 'success',
            timer: 3000,
            showConfirmButton: false,
          }).then(() => {
            navigate('/my-equipment-list');
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: data.message || 'Failed to update equipment.',
            icon: 'error',
            timer: 3000,
            showConfirmButton: false,
          });
        }
      })
      .catch((error) => {
        console.error("Error updating equipment:", error);
        Swal.fire({
          title: 'Error!',
          text: 'Network error. Please check your connection and try again.',
          icon: 'error',
          timer: 3000,
          showConfirmButton: false,
        });
      });
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Update Equipment</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-gray-700 font-bold mb-2">
            User Email
          </label>
          <input
            type="email"
            name="userEmail"
            value={currentUser.email}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 font-bold mb-2">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            value={currentUser.displayName}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Item Name
          </label>
          <input
            type="text"
            name="itemName"
            value={equipment.itemName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Category
          </label>
          <input
            type="text"
            name="categoryName"
            value={equipment.categoryName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={equipment.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Rating
          </label>
          <input
            type="number"
            name="rating"
            value={equipment.rating}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Customization
          </label>
          <select
            name="customization"
            value={equipment.customization}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Stock Status
          </label>
          <select
            name="stockStatus"
            value={equipment.stockStatus}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="1">In Stock</option>
            <option value="0">Out of Stock</option>
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 font-bold mb-2">
            Photo URL
          </label>
          <input
            type="text"
            name="photoUrl"
            value={equipment.photoUrl}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={equipment.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="col-span-2 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Update Equipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatedPage;
