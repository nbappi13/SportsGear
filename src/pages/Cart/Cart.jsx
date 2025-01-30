import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { CgClose } from 'react-icons/cg';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleBuyNow = (index) => {
    Swal.fire({
      icon: 'success',
      title: 'Item Bought!',
      text: 'Congratulations! You have successfully bought the item.',
      timer: 2000,
      showConfirmButton: false
    }).then(() => {
      removeFromCart(index);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">Your cart is currently empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100 shadow-md p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between relative">
              <div className="flex items-center">
                <span className="mr-4 font-bold text-lg">{index + 1}.</span>
                <img src={item.photoUrl} alt={item.itemName} className="w-24 h-24 object-cover rounded-lg shadow-lg mb-4 sm:mb-0" />
              </div>
              <div className="flex-grow ml-4">
                <h3 className="text-xl font-bold mb-2">{item.itemName}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-1">Category: {item.categoryName}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-1">Price: ${item.price}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-1">Rating: {item.rating}</p>
              </div>
              <div className="flex flex-col items-end">
                <button
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-2 px-4 rounded-lg mb-2 transition-colors duration-300"
                  onClick={() => handleBuyNow(index)}
                >
                  Buy Now
                </button>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => removeFromCart(index)}
                >
                  <CgClose size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
