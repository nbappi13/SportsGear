import React from "react";

const ConfirmationModal = ({ itemId, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-gray-100 border dark:border-gray-700 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 dark:text-gray-100 text-black p-6">Confirm Deletion</h2>
        <p className="text-gray-800 dark:text-gray-300 p-6 mb-6 text-center">Are you sure you want to delete this item?</p>
        <div className="flex justify-end space-x-4 p-6">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg dark:bg-gray-500 dark:hover:bg-gray-700 dark:text-gray-100"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg dark:bg-red-500 dark:hover:bg-red-700 dark:text-gray-100"
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