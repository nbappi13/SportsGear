import React from "react";

const ConfirmationModal = ({ itemId, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center dark:bg-black dark:bg-opacity-50">
      <div className="dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
        <p className="mb-6">Are you sure you want to delete this item?</p>
        <div className="flex justify-end">
          <button
            className="dark:bg-gray-500 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-100 py-2 px-4 rounded-lg mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="dark:bg-red-500 dark:hover:bg-red-700 dark:text-gray-100 py-2 px-4 rounded-lg"
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