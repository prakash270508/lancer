"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function page() {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillsInput] = useState("");

  const [formData, setFormData] = useState({ skillsRequired: [] , plan: ""});

  const handleChange = (e) => {
    if (e.target.name === "plan") {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSetSkills = () => {
    setSkills((prevalue) => [...prevalue, skillInput]);
    setSkillsInput("");
  };

  const handleDeleteSkill = (index) => {
    const filteredSkill = skills.filter((skill, ind) => ind !== index);
    setSkills(filteredSkill);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.skillsRequired = skills;
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/project/createProject",
        formData
      );
      console.log(response.data);
      toast.success("Project created successfully");
    } catch (error) {
      console.log(error);
      toast.error("Project not created");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm mt-16  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6" action="#">
          <h5 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
            Post Your Project
          </h5>
          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Project Title"
              required
            />
          </div>

          <div>
            <label
              htmlFor="budget"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Budget
            </label>
            <input
              type="number"
              name="budget"
              id="budget"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Your budget for this project"
              required
            />
          </div>
          <div>
            <label
              htmlFor="plan"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Plan
            </label>
            <select
              id="plan"
              name="plan"
              value={formData.plan}
              required
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue value="">Choose a Plan</option>
              <option value="basic">Basic</option>
              <option value="general">General</option>
              <option value="premium">Premium</option>
            </select>
          </div>
          <div>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Skills Required
            </label>
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillsInput(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Add Required Skills"
            />

            {skillInput != "" ? (
              <button
                type="button"
                onClick={handleSetSkills}
                className="buttons text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add
              </button>
            ) : (
              ""
            )}
          </div>
          <div>
            {skills &&
              skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center mt-1 mx-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm p-1 rounded"
                >
                  {skill}
                  <div
                    className="cross ml-2"
                    onClick={() => handleDeleteSkill(index)}
                  ></div>
                </span>
              ))}
          </div>
          <div>
            <label
              htmlFor="duration"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Duration
            </label>
            <input
              type="text"
              name="duration"
              id="duration"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Project duration"
              required
            />
          </div>

          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              rows={7}
              type="text"
              name="description"
              id="description"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Brief description of you project"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Post Project
          </button>
        </form>
      </div>
    </div>
  );
}
