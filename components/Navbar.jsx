"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login , logout} from "@/redux/slice/user/userSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Home() {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const router = useRouter()

  const { user, isLoggedin } = useSelector((state) => state.user);

  const fetchMe = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/me", {
        headers: {
          Authorization: token,
        },
      });

      const user = response.data.user;

      const userData = {
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        isAdmin: user.isAdmin,
      };

      dispatch(login(userData));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = ()=>{

    localStorage.removeItem('token')

    dispatch(logout())
    toast.success("Your account is logged out")
    router.push('/')
  }

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      fetchMe();
    }
  }, [token]);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <img
            src="https://seeklogo.com/images/F/freelancer-com-logo-2B5CE1A961-seeklogo.com.png"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Lancer
          </span>
        </Link>
        <div className="flex md:order-2">
          {isLoggedin ? (
            <>
              <Link href="/all-works">
                <button
                  type="button"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-0 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ml-3"
                >
                  All Works
                </button>

              </Link>
              {user && user.role == 'client' ?<Link href="/post-project">
                <button
                  type="button"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-0 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ml-3"
                >
                  Post Project
                </button>
              </Link> :"" }
              <button
                  type="button"
                  onClick={handleLogout}
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-0 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ml-3"
                >
                  Logout
                </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <button
                  type="button"
                  className="text-black bg-transparent-700 hover:bg-transparent-800 focus:ring-0 focus:outline-none focus:ring-transparent-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-transparent-600 dark:hover:bg-transparent-700 dark:focus:ring-transparent-800"
                >
                  Login
                </button>
              </Link>
              <Link href="/sign-up">
                <button
                  type="button"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-0 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ml-3"
                >
                  Signup
                </button>
              </Link>
            </>
          )}

        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-96 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
