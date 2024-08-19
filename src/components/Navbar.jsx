import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faList,
  faTimes,
  faUser,
  faStethoscope,
  faFileAlt,
  faFlask,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/Image/LgKlinik.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("Token");
    navigate("/");
  };

  return (
    <>
      <nav className="bg-green-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/Beranda">
            <div className="flex items-center">
              <img src={logo} alt="Klinik Logo" className="w-10 h-10" />
              <span className="text-white text-xl font-bold ml-2">Klinik</span>
            </div>
          </Link>
          <div className="flex space-x-4">
            <FontAwesomeIcon
              icon={faBell}
              className="text-white text-xl cursor-pointer hover:text-gray-300"
              onClick={toggleNotification}
            />
            <FontAwesomeIcon
              icon={faList}
              className="text-white text-xl cursor-pointer hover:text-gray-300"
              onClick={toggleSidebar}
            />
          </div>
        </div>

        {/* Sidebar Notifications */}
        {isNotificationOpen && (
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transition-transform transform duration-300 ease-in-out translate-x-0">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-lg font-bold ">Notifikasi</span>
              <FontAwesomeIcon
                icon={faTimes}
                className="text-gray-700 text-xl cursor-pointer"
                onClick={toggleNotification}
              />
            </div>
            <div className="p-4">
              <ul className="space-y-4">
                <li className="text-gray-600">Notifikasi 1</li>
                <li className="text-gray-600">Notifikasi 2</li>
                <li className="text-gray-600">Notifikasi 3</li>
              </ul>
            </div>
          </div>
        )}

        {/* Sidebar Menu */}
        {isSidebarOpen && (
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transition-transform transform duration-300 ease-in-out translate-x-0">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-lg font-bold ">Menu</span>
              <FontAwesomeIcon
                icon={faTimes}
                className="text-gray-700 text-xl cursor-pointer"
                onClick={toggleSidebar}
              />
            </div>
            <div className="p-4">
              <ul className="space-y-4">
                <li>
                  <a
                    href="/DataPasien"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="mr-2 text-blue-500"
                    />
                    Data Pasien
                  </a>
                </li>
                <li>
                  <a
                    href="/DataPasienRJ"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faStethoscope}
                      className="mr-2 text-blue-500"
                    />
                    List Pasien Rawat Jalan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="mr-2 text-blue-500"
                    />
                    Form CCPT
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faFlask}
                      className="mr-2 text-blue-500"
                    />
                    Form Pemeriksaan Fisik
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faFlask}
                      className="mr-2 text-blue-500"
                    />
                    Form Order Lab
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 bg-red-700 hover:bg-red-900 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 ease-in-out w-full text-left"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-base" />
                    <span className="text-sm">Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
