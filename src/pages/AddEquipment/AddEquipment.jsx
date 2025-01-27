import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { CgLaptop } from 'react-icons/cg';
import Swal from 'sweetalert2';

const AddEquipment = () => {
  const { currentUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    photoUrl: '',
    itemName: '',
    categoryName: '',
    description: '',
    price: '',
    rating: '',
    customization: '',
    processingTime: '',
    stockStatus: '',
    userEmail: currentUser.email,
    userName: currentUser.displayName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 

    const newAddEquip = formData;



fetch('http://localhost:5000/addEquip', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newAddEquip)
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Equipment has been added successfully.',
      timer: 2000,
      showConfirmButton: false
    });
  })
  .catch(error => {
    console.error("Error:", error);
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Failed to add equipment. Please try again.',
      timer: 2000,
      showConfirmButton: false
    });
  });

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <form className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Add Equipment</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              value={formData.photoUrl}
              placeholder='Enter Photo URL'
              className="input input-bordered w-full"
              onChange={handleChange}
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              className="input input-bordered w-full"
              onChange={handleChange}
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <input
              type="text"
              name="categoryName"
              value={formData.categoryName}
              className="input input-bordered w-full"
              onChange={handleChange}
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              className="textarea textarea-bordered w-full"
              onChange={handleChange}
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              className="input input-bordered w-full"
              onChange={handleChange}
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              className="input input-bordered w-full"
              onChange={handleChange}
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <input
              type="text"
              name="customization"
              value={formData.customization}
              className="input input-bordered w-full"
              onChange={handleChange}
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="text"
              name="processingTime"
              value={formData.processingTime}
              className="input input-bordered w-full"
              onChange={handleChange}
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <input
              type="number"
              name="stockStatus"
              value={formData.stockStatus}
              className="input input-bordered w-full"
              onChange={handleChange}
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              className="input input-bordered w-full"
              readOnly
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              className="input input-bordered w-full"
              readOnly
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Add Equipment
        </button>
      </form>
    </div>
  );
};

export default AddEquipment;
