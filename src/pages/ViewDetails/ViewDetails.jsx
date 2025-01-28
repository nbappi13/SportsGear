import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';

const ViewDetails = () => {
  const { currentUser } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [isBought, setIsBought] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login'); 
    } else {
      fetch(`http://localhost:5000/equipment/${id}`)
        .then(response => response.json())
        .then(data => setItem(data))
        .catch(error => console.error('Error fetching item details:', error));
    }
  }, [currentUser, id, navigate]);

  const handleBuyNow = () => {
    setIsBought(true);
    Swal.fire({
      icon: 'success',
      title: 'Item Bought!',
      text: 'Congratulations! You have successfully bought the item.',
      timer: 2000,
      showConfirmButton: false
    });
  };

  const handleAddToCart = () => {
    addToCart(item);
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart',
      text: 'Item has been added to your cart.',
      timer: 2000,
      showConfirmButton: false
    });
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row gap-8">
          <img src={item.photoUrl} alt={item.itemName} className="w-full lg:w-2/5 h-72 object-cover rounded-lg shadow-lg" />
          <div className="flex flex-col justify-between w-full lg:w-3/5">
            <h2 className="text-4xl font-bold mb-4">{item.itemName}</h2>
            <p className="text-lg text-gray-700 mb-2"><strong>Category:</strong> {item.categoryName}</p>
            <p className="text-lg text-gray-700 mb-2">{item.description}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Price:</strong> ${item.price}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Rating:</strong> {item.rating}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Customization:</strong> {item.customization}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Processing Time:</strong> {item.processingTime}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Stock Status:</strong> {item.stockStatus}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>User Email:</strong> {item.userEmail}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>User Name:</strong> {item.userName}</p>
            <div className="flex gap-4 mt-6">
              <button
                className={`btn btn-primary ${isBought ? 'btn-disabled' : ''}`}
                onClick={handleBuyNow}
                disabled={isBought}
              >
                Buy Now
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
