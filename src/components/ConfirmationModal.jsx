import React from "react";

const ConfirmationModal = ({ itemId, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
        <p className="mb-6">Are you sure you want to delete this item?</p>
        <div className="flex justify-end">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-lg"
            onClick={() => onConfirm(itemId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
