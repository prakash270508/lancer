"use client";

import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
  const [clicked, setClicked] = useState(false);
  const [role, setRole] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setForm((prevalue) => ({
      ...prevalue,
      [e.target.name]: e.target.value,
    }));
  };

  const [form, setForm] = useState({
    name: "",
    username: "",
    role: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/register",
        form
      );

      toast.success(response.data.message);

      router.push("/login");

      setForm({
        name: "",
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
    <title>Lancer | sign-up</title>
      <div className="flex items-center justify-center">
        <div className="w-max max-w-sm mt-6  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          {!clicked ? (
            <>
              <h5 className="text-xl font-bold text-center text-gray-900 dark:text-white">
                Join as a client or freelancer
              </h5>

              <div className="flex">
                <div
                  className={`w-max cursor-pointer max-w-sm mt-6  p-4  border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ${
                    role == "client" ? "bg-green-500 text-white" : "bg-white"
                  }`}
                  onClick={() => {
                    setRole("client");
                    form.role = "client";
                  }}
                >
                  Client
                </div>
                <div
                  className={`w-max cursor-pointer max-w-sm mt-6  ml-3 p-4  border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800  dark:border-gray-700 ${
                    role == "freelancer"
                      ? "bg-green-500 text-white"
                      : "bg-white"
                  }`}
                  onClick={() => {
                    setRole("freelancer");
                    form.role = "freelancer";
                  }}
                >
                  Freelancer
                </div>
              </div>
              <button
                type="button"
                className="text-white w-full bg-green-700 hover:bg-green-800 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-6"
                onClick={() => setClicked(true)}
              >
                Join as {role}
              </button>

              <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-5">
                Already Have Account{" "}
                <Link
                  href="/login"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Login
                </Link>
              </div>
            </>
          ) : (
            <>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <h5 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
                  Create An Account
                </h5>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Jhon Doe"
                    onChange={handleChange}
                    value={form.name}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your username
                  </label>
                  <input
                    type="text"
                    value={form.username}
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="jhondoe88"
                    onChange={handleChange}
                    required
                  />
                </div>
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
                    value={form.email}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Create your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-0 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Create my account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-5">
                  Already Have Account{" "}
                  <Link
                    href="/login"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
