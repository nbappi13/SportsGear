import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ConfirmationModal from "../../components/ConfirmationModal";
import LoadingSpinner from "../../components/LoadingSpinner";
import Swal from "sweetalert2";

const MyEquipmentList = () => {
  const { currentUser } = useContext(AuthContext);
  const [equipment, setEquipment] = useState([]);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserEquipment = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/equipment/user/${currentUser.email}`
        );
        const data = await response.json();
        setEquipment(data);
      } catch (error) {
        console.error("Error fetching equipment:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to fetch equipment. Please check your network connection and try again.",
          icon: "error",
          timer: 3000,
          showConfirmButton: false,
        });
      } finally {
        setIsLoading(false);
      }
    };

    if (currentUser?.email) {
      fetchUserEquipment();
    }
  }, [currentUser]);

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = (id) => {
    setDeleteItemId(id);
  };

  return (
    <div className="p-6 bg-gray-100">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-6 text-center">My Equipment List</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.length > 0 ? (
              equipment.map((item) => (
                <div
                  key={item._id}
                  className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <img
                    src={item.photoUrl}
                    alt={item.itemName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{item.itemName}</h3>
                    <p className="text-gray-600 mb-2">Category: {item.categoryName}</p>
                    <p className="text-gray-600 mb-2">Price: ${item.price}</p>
                    <p className="text-gray-600 mb-2">Rating: {item.rating}</p>
                    <div className="flex justify-between items-center mt-4">
                      <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        onClick={() => handleUpdate(item._id)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No equipment found.</p>
            )}
          </div>
          {deleteItemId && (
            <ConfirmationModal
              itemId={deleteItemId}
              onClose={() => setDeleteItemId(null)}
              onConfirm={() => {
                fetch(`http://localhost:5000/equipment/${deleteItemId}`, {
                  method: "DELETE",
                })
                  .then((response) => response.json())
                  .then(() => {
                    setEquipment((prev) =>
                      prev.filter((item) => item._id !== deleteItemId)
                    );
                    setDeleteItemId(null);
                    Swal.fire({
                      title: "Success!",
                      text: "Equipment deleted successfully!",
                      icon: "success",
                      timer: 3000,
                      showConfirmButton: false,
                    });
                  })
                  .catch((error) => {
                    console.error("Error deleting equipment:", error);
                    Swal.fire({
                      title: "Error!",
                      text: "Failed to delete equipment. Please check your network connection and try again.",
                      icon: "error",
                      timer: 3000,
                      showConfirmButton: false,
                    });
                  });
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MyEquipmentList;