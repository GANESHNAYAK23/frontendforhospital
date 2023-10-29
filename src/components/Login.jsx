import React, { useState } from "react";
import Axios from "axios";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    const dataToSend = {
      email: loginEmail,
      password: loginPassword,
    };
    Axios.post("http://localhost:3000/checkUser", dataToSend, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // Handle the response from the server
        console.log(response);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });

    console.log("Login Email:", loginEmail);
    console.log("Login Password:", loginPassword);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    if (confirmPassword === signupPassword) {
      console.log("Name:", name);
      console.log("Age:", age);
      console.log("Phone Number:", phoneNumber);
      console.log("Gender:", gender);
      console.log("Signup Email:", signupEmail);
      console.log("confirm Password:", confirmPassword);
      console.log("Signup Password:", signupPassword);
    } else {
      console.log("Password doesnt match");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">
          {showSignup ? "Sign Up" : "Login"}
        </h2>
        {showSignup ? (
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded focus:outline-none"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700">
                Age
              </label>
              <input
                type="number"
                id="age"
                className="w-full p-2 border rounded focus:outline-none"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full p-2 border rounded focus:outline-none"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                className="w-full p-2 border rounded focus:outline-none"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="signupEmail" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="signupEmail"
                className="w-full p-2 border rounded focus:outline-none"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="signupPassword" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="signupPassword"
                className="w-full p-2 border rounded focus:outline-none"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-2 border rounded focus:outline-none"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="loginEmail" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="loginEmail"
                className="w-full p-2 border rounded focus:outline-none"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="loginPassword" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                className="w-full p-2 border rounded focus:outline-none"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Log In
            </button>
          </form>
        )}
        <div className="mt-4 text-center">
          {showSignup ? (
            <p>
              Already have an account?{" "}
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setShowSignup(false)}
              >
                Log In
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setShowSignup(true)}
              >
                Sign Up
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
