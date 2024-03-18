import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/password_reset/', { email });
      setMessage('If an account with that email exists, we have sent a password reset link.');
    } catch (error) {
      console.error('Failed to reset password', error);
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="h-screen grid place-items-center">
      <div className="grid place-items-center">
        <div
          className="grid place-items-center rounded-lg w-500 h-500 px-[100px] py-[30px] text-center bg-[#E2E2E2] border-[3px] border-black"
        >
          <h2 className="font-bold text-2xl pb-[10px]">Reset Your Password</h2>
          <form onSubmit={handleResetPassword}>
            <input
              className="bg-white text-center rounded-lg"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className="bg-[#19747E] text-white py-1 rounded hover:bg-[#316268] w-[100%] mt-4"
              type="submit"
            >
              Send Reset Link
            </button>
            {message && <p className="text-[#19747E] mt-4">{message}</p>}
          </form>
          <p className="pt-[5px]">
            Remembered? <Link to="/Login" className="text-[#19747E]">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}