"use client"

import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify'
import { useRouter } from "next/navigation";
import { useDispatch} from "react-redux";
import { login } from "@/redux/slice/user/userSlice";

export default function page() {
  
  const [form , setForm] = useState({})
  const router = useRouter();
  const dispatch = useDispatch()

  const handleChange = (e)=>{
    setForm((prevalue)=> ({
      ...prevalue, 
      [e.target.name] : e.target.value
    }))
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        form
      );

      toast.success(response.data.message);

      localStorage.setItem("token" , response.data.token)
      localStorage.setItem('user', response.data.user)

      const user = response.data.user;

      const userData = {
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        isAdmin: user.isAdmin,
      };

      dispatch(login(userData));

      router.push("/all-works");
      // window.location.href = "/all-works";

      setForm({});
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }

  }

  return (
    <div className="flex items-center justify-center">
      <title>Lancer | Login</title>
      <div className="w-full max-w-sm mt-16  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6" action="#">
          <h5 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
            Login to Lancer
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start">
            <a
              href="#"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Forget Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              href="sign-up"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
