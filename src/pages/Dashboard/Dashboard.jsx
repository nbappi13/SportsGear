"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext)

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">Please log in to view your dashboard.</p>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-200 dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg mr-6 lg:mr-10">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4"> User Profile</h3>
          <div className="flex flex-col items-center">
            <img
              src={currentUser.photoURL || "/placeholder.svg"}
              alt="Profile"
              className="w-32 h-32 rounded-full shadow-md mb-4"
            />
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {currentUser.displayName || "User Name"}
            </h4>
            <p className="text-gray-700 dark:text-gray-300">Email: {currentUser.email}</p>
            <p className="text-gray-700 dark:text-gray-300">Joined: {currentUser.metadata?.creationTime || "N/A"}</p>
          </div>
        </div>
        <div className="w-full lg:w-3/4 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <Link to="/add-equipment" className="bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-orange-500 transition-all duration-300 text-center">
              Add Equipment
            </Link>
            <Link to="/my-equipment-list" className="bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-orange-500 transition-all duration-300 text-center">
              My Equipment List
            </Link>
            <Link to="/add-special-deal" className="bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-orange-500 transition-all duration-300 text-center">
              Add Special Deal
            </Link>
            <Link to="/handle-special-deals" className="bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-orange-500 transition-all duration-300 text-center">
              Handle Special Deals
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard