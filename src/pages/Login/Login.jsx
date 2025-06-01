"use client"

import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import Swal from "sweetalert2"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const { login, loginWithGoogle, loginWithGitHub } = useContext(AuthContext)
  const navigate = useNavigate()

  // Handle email/password login
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        timer: 2000,
        showConfirmButton: false,
      })

      navigate("/")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Incorrect credentials. Please try again.",
      })
    }
  }

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle()

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back via Google!",
        timer: 2000,
        showConfirmButton: false,
      })

      navigate("/")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Google login failed. Please try again.",
      })
    }
  }

  // Handle GitHub login
  const handleGitHubLogin = async () => {
    try {
      await loginWithGitHub()

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back via GitHub!",
        timer: 2000,
        showConfirmButton: false,
      })

      navigate("/")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "GitHub login failed. Please try again.",
      })
    }
  }

  return (
    <div
      className={`flex items-center justify-center min-h-screen px-4 
      bg-white dark:bg-gray-900 
      lg:bg-[url('/login.png')] 
      lg:bg-cover 
      lg:bg-center`}
    >
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-sm mx-auto lg:ml-40 xl:ml-64">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            {/* Password visibility toggle */}
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>

        {/* Social login buttons */}
        <div className="mt-4 flex justify-between gap-2 flex-wrap">
          <button onClick={handleGoogleLogin} className="flex-1 bg-red-500 text-white p-2 rounded">
            Google
          </button>
          <button onClick={handleGitHubLogin} className="flex-1 bg-gray-800 text-white p-2 rounded">
            GitHub
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 font-medium">
            Create one!
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
