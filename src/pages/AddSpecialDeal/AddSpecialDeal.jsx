"use client"

import { useState, useContext } from "react"
import { Helmet } from "react-helmet"
import { AuthContext } from "../../context/AuthContext"
import Swal from "sweetalert2"
import { CgImage } from "react-icons/cg"
import { useNavigate } from "react-router-dom"

const AddSpecialDeal = () => {
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    photoUrl: "",
    itemName: "",
    categoryName: "",
    description: "",
    price: "",
    originalPrice: "",
    rating: "",
    customization: "yes",
    processingTime: "1 day",
    stockStatus: "1",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const specialDeal = {
      ...formData,
      userEmail: currentUser.email,
      userName: currentUser.displayName,
    }

    try {
      const response = await fetch("https://b10-a10-server-side-roan.vercel.app/special-deals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(specialDeal),
      })

      if (response.ok) {
        const data = await response.json()
        if (data.success) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Special deal added successfully to the database.",
            timer: 2000,
            showConfirmButton: false,
          })

          setFormData({
            photoUrl: "",
            itemName: "",
            categoryName: "",
            description: "",
            price: "",
            originalPrice: "",
            rating: "",
            customization: "yes",
            processingTime: "1 day",
            stockStatus: "1",
          })

          navigate("/special-deals")
        } else {
          throw new Error(data.message || "Failed to add special deal")
        }
      } else {
        throw new Error("Server error: " + response.status)
      }
    } catch (error) {
      console.error("Error adding special deal:", error)

      try {
        const localDeal = {
          ...specialDeal,
          _id: Date.now().toString(),
        }

        const existingDeals = JSON.parse(localStorage.getItem("specialDeals") || "[]")

        existingDeals.push(localDeal)

        localStorage.setItem("specialDeals", JSON.stringify(existingDeals))

        Swal.fire({
          icon: "warning",
          title: "Partial Success",
          text: "Special deal saved locally. Server connection failed.",
          timer: 3000,
          showConfirmButton: false,
        })

        navigate("/special-deals")
      } catch (localError) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to add special deal. Please try again.",
          timer: 2000,
          showConfirmButton: false,
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6 dark:bg-gray-900">
      <Helmet>
        <title>Add Special Deal | SportsGear</title>
        <meta name="description" content="Add new special deals and offers to the SportsGear catalog." />
      </Helmet>
      <form className="w-full max-w-4xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Add Special Deal</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Photo URL</label>
            <div className="flex items-center">
              <CgImage size={24} className="mr-2 text-gray-500" />
              <input
                type="text"
                name="photoUrl"
                value={formData.photoUrl}
                placeholder="Enter Photo URL (e.g., https://i.imgur.com/example.jpg)"
                className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-100"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Item Name</label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              placeholder="Enter item name"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Category Name</label>
            <input
              type="text"
              name="categoryName"
              value={formData.categoryName}
              placeholder="Enter category (e.g., t-shirt, ball, bat)"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              placeholder="Enter product description"
              className="textarea textarea-bordered w-full dark:bg-gray-700 dark:text-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Sale Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              placeholder="Enter discounted price"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Original Price</label>
            <input
              type="text"
              name="originalPrice"
              value={formData.originalPrice}
              placeholder="Enter original price (before discount)"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Rating</label>
            <input
              type="text"
              name="rating"
              value={formData.rating}
              placeholder="Enter rating (e.g., 4.5)"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-100"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Customization</label>
            <select
              name="customization"
              value={formData.customization}
              onChange={handleChange}
              className="select select-bordered w-full dark:bg-gray-700 dark:text-gray-100"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Processing Time</label>
            <input
              type="text"
              name="processingTime"
              value={formData.processingTime}
              placeholder="Enter processing time (e.g., 1 day)"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-100"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Stock Status</label>
            <select
              name="stockStatus"
              value={formData.stockStatus}
              onChange={handleChange}
              className="select select-bordered w-full dark:bg-gray-700 dark:text-gray-100"
            >
              <option value="1">In Stock</option>
              <option value="0">Out of Stock</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn btn-primary w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Adding..." : "Add Special Deal"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddSpecialDeal
