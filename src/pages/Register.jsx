"use client";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Label,
  Spinner,
  TextInput,
} from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.age ||
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      return setErrorMessage("Please fill out all fields.");
    }

    try {
      setLoading(true);
      setErrorMessage(null);

      // Save user data to localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(formData); // Add the new user to the list
      localStorage.setItem('users', JSON.stringify(users));

      setLoading(false);
      navigate("/dashboard"); // Redirect to the dashboard or another page
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen min-w-lg mx-auto p-3">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10 border-2 rounded">
        <div className="flex-auto lg:w-16 mt-2">
        <p className=" md:w-1/1 font-bold dark:text-white text-5xl px-2 py-1 bg-gradient-to-r from-indigo-700 via-purple-400 to-pink-500 rounded-lg text-white">
          Quinn
        </p>
        <p className="text-sm mt-5 ">
          Welcome to Quinn Platform, your premier destination for mastering
          frontend frameworks. Sign up with your email and password and enjoy
          your learning.
        </p>
        </div>
        <div className="flex-auto lg:w-64">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="First Name:" />
              <TextInput
                type="text"
                placeholder="First Name"
                id="firstName"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Last Name:" />
              <TextInput
                type="text"
                placeholder="Last Name"
                id="lastName"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your username:" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Age:" />
              <TextInput
                type="number"
                placeholder="Age"
                id="age"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your email:" />
              <TextInput
                type="email"
                placeholder="name@gmail.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password:" />
              <TextInput
                type="password"
                placeholder="*********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToBlue"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
