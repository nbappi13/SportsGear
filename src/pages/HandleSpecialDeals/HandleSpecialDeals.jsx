"use client"

import { useState, useEffect, useContext } from "react"
import { Helmet } from "react-helmet"
import { AuthContext } from "../../context/AuthContext"
import Swal from "sweetalert2"
import LoadingSpinner from "../../components/LoadingSpinner"

const HandleSpecialDeals = () => {
  const { currentUser } = useContext(AuthContext)
  const [specialDeals, setSpecialDeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSpecialDeals = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("https://b10-a10-server-side-roan.vercel.app/special-deals")
        const data = await response.json()
        setSpecialDeals(data)
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Failed to fetch special deals. Please check your network connection and try again.",
          icon: "error",
          timer: 3000,
          showConfirmButton: false,
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchSpecialDeals()
  }, [])

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://b10-a10-server-side-roan.vercel.app/special-deals/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setSpecialDeals((prev) => prev.filter((deal) => deal._id !== id))
        Swal.fire({
          title: "Success!",
          text: "Special deal deleted successfully!",
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
        })
      } else {
        throw new Error("Failed to delete the special deal.")
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to delete the special deal. Please try again.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      })
    }
  }

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Helmet>
        <title>Handle Special Deals | SportsGear</title>
        <meta name="description" content="Manage special deals for your sports equipment." />
      </Helmet>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-6 text-center dark:text-gray-100">Handle Special Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialDeals.length > 0 ? (
              specialDeals.map((deal) => (
                <div
                  key={deal._id}
                  className="bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <img
                    src={deal.photoUrl || "/placeholder.svg"}
                    alt={deal.itemName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 dark:text-gray-100">{deal.itemName}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Category: {deal.categoryName}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Price: ${deal.price}</p>
                    <div className="flex justify-end mt-4">
                      <button
                        className="bg-red-500 dark:bg-red-500 text-white dark:text-white py-2 px-4 rounded-lg hover:bg-red-600 dark:hover:bg-red-600"
                        onClick={() => handleDelete(deal._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center dark:text-gray-300">No special deals found.</p>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default HandleSpecialDeals
