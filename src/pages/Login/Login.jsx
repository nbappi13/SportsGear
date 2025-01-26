import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, loginWithGoogle, loginWithGitHub } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);

      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back!',
        timer: 2000,
        showConfirmButton: false,
      });

      navigate('/');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Incorrect credentials. Please try again.',
      });
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();

      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back via Google!',
        timer: 2000,
        showConfirmButton: false,
      });

      navigate('/');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Google login failed. Please try again.',
      });
      console.error(error);
    }
  };

  const handleGitHubLogin = async () => {
    try {
      await loginWithGitHub();

      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back via GitHub!',
        timer: 2000,
        showConfirmButton: false,
      });

      navigate('/');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'GitHub login failed. Please try again.',
      });
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <div className="relative w-full">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>

        <div className="mt-4 flex justify-between">
          <button
            onClick={handleGoogleLogin}
            className="bg-red-500 text-white p-2 rounded"
          >
            Login with Google
          </button>
          <button
            onClick={handleGitHubLogin}
            className="bg-gray-800 text-white p-2 rounded"
          >
            Login with GitHub
          </button>
        </div>

        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500">
            Create one!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
