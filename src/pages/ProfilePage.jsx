"use client"

import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext)

  // Show login message if user not logged in
  if (!currentUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">Please log in to view your profile.</p>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-200 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* User profile image */}
          <img
            src={currentUser.photoURL || "/placeholder.svg"}
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-md mb-4 md:mb-0 md:mr-6"
            loading="lazy"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {currentUser.displayName || "User Name"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">Email: {currentUser.email}</p>
            <p className="text-gray-700 dark:text-gray-300">Joined: {currentUser.metadata?.creationTime || "N/A"}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Additional Information</h3>
          <p className="text-gray-700 dark:text-gray-300">
            This is user's profile page. In future can add more details here as needed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
