import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_admin/assets";
import { AppContext } from "../context/AppContext";

const Sidebar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { menuOpen, setMenuOpen } = useContext(AppContext);
  const navigate = useNavigate();
  //   const {aToken, setAToken} = useContext(AdminContext);

  return (
    <>
      <div className=" w-64 min-h-screen hidden md:block">
        {aToken && (
          <ul className="space-y-4 py-6">
            <li>
              <NavLink
                to="/admin-dashboard"
                className={({ isActive }) =>
                  `flex items-center space-x-4 px-6 py-3 rounded-lg ${
                    isActive
                      ? "bg-blue-400"
                      : "hover:bg-gray-400 transition duration-200"
                  }`
                }
              >
                <img
                  src={assets.home_icon}
                  alt="Dashboard Icon"
                  className="h-6 w-6"
                />
                <p>Dashboard</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/all-appointments"
                className={({ isActive }) =>
                  `flex items-center space-x-4 px-6 py-3 rounded-lg ${
                    isActive
                      ? "bg-blue-400"
                      : "hover:bg-gray-400 transition duration-200"
                  }`
                }
              >
                <img
                  src={assets.appointment_icon}
                  alt="Appointments Icon"
                  className="h-6 w-6"
                />
                <p>Appointments</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/add-doctor"
                className={({ isActive }) =>
                  `flex items-center space-x-4 px-6 py-3 rounded-lg ${
                    isActive
                      ? "bg-blue-400"
                      : "hover:bg-gray-400 transition duration-200"
                  }`
                }
              >
                <img
                  src={assets.add_icon}
                  alt="Add Doctors Icon"
                  className="h-6 w-6"
                />
                <p>Add Doctors</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/doctor-list"
                className={({ isActive }) =>
                  `flex items-center space-x-4 px-6 py-3 rounded-lg ${
                    isActive
                      ? "bg-blue-400"
                      : "hover:bg-gray-400 transition duration-200"
                  }`
                }
              >
                <img
                  src={assets.people_icon}
                  alt="Doctors List Icon"
                  className="h-6 w-6"
                />
                <p>Doctors List</p>
              </NavLink>

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg block md:hidden"
                onClick={() => {
                  navigate("/");
                  aToken && localStorage.removeItem("aToken");
                  setAToken("");
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>

      <div
        className={` ${
          !menuOpen ? "h-0 w-0" : "fixed w-80"
        } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-200 rounded shadow-xl`}
      >
        {aToken && (
          <>
            <div className="flex items-center justify-between px-5 py-6">
              <img
                className="w-10"
                src={assets.cross_icon}
                alt=""
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              />
            </div>
            <ul className="space-y-4 py-6 items-center flex flex-col justify-center">
              <li>
                <NavLink
                  to="/admin-dashboard"
                  className={({ isActive }) =>
                    `flex items-center space-x-4 px-6 py-3 rounded-lg ${
                      isActive
                        ? "bg-blue-400"
                        : "hover:bg-gray-400 transition duration-200"
                    }`
                  }
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  <img
                    src={assets.home_icon}
                    alt="Dashboard Icon"
                    className="h-6 w-6"
                  />
                  <p>Dashboard</p>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/all-appointments"
                  className={({ isActive }) =>
                    `flex items-center space-x-4 px-6 py-3 rounded-lg ${
                      isActive
                        ? "bg-blue-400"
                        : "hover:bg-gray-400 transition duration-200"
                    }`
                  }
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  <img
                    src={assets.appointment_icon}
                    alt="Appointments Icon"
                    className="h-6 w-6"
                  />
                  <p>Appointments</p>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/add-doctor"
                  className={({ isActive }) =>
                    `flex items-center space-x-4 px-6 py-3 rounded-lg ${
                      isActive
                        ? "bg-blue-400"
                        : "hover:bg-gray-400 transition duration-200"
                    }`
                  }
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  <img
                    src={assets.add_icon}
                    alt="Add Doctors Icon"
                    className="h-6 w-6"
                  />
                  <p>Add Doctors</p>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/doctor-list"
                  className={({ isActive }) =>
                    `flex items-center space-x-4 px-6 py-3 rounded-lg ${
                      isActive
                        ? "bg-blue-400"
                        : "hover:bg-gray-400 transition duration-200"
                    }`
                  }
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  <img
                    src={assets.people_icon}
                    alt="Doctors List Icon"
                    className="h-6 w-6"
                  />
                  <p>Doctors List</p>
                </NavLink>

                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
                  onClick={() => {
                    navigate("/");
                    aToken && localStorage.removeItem("aToken");
                    setAToken("");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
