import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          toast.success("Login successful.");
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        } else {
          toast.error("Invalid credentials.");
        }
      } else {
      }
    } catch (error) {
      //   console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };


  const toggleState = () => {
    setState((prevState) => (prevState === "Admin" ? "Doctor" : "Admin"));
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
        <p className="text-2xl font-semibold text-center text-gray-700 mb-6">
          <span className="text-blue-600">{state}</span> Login
        </p>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300 transition duration-200"
          >
            Login
          </button>
        </div>
        <div className="mt-4 text-center">
          {state === "Admin" ? (
            <p className="text-sm text-gray-600">
              Doctor Login?{" "}
              <span
                onClick={toggleState}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Click Here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Admin Login?{" "}
              <span
                onClick={toggleState}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Click Here
              </span>
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default Login;
