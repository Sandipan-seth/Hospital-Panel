import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_admin/assets";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { menuOpen, setMenuOpen } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-lg">
        <div className="text-2xl font-semibold text-gray-800">
          {aToken ? "Admin" : "Doctor"} Panel
        </div>
        <div className="flex items-center">
          <div className="text-gray-700 border border-gray-400 py-2 px-3 rounded-md hidden md:block">
            {aToken ? "Admin" : "Doctor"}
          </div>
          <div className="ml-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hidden md:block"
              onClick={() => {
                navigate("/");
                aToken && localStorage.removeItem("aToken");
                setAToken("");
                
              }}
            >
              Logout
            </button>
            <img
              src={assets.menu_icon}
              className="w-2/3 md:hidden"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
