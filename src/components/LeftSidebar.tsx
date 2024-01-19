import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import homeWhite from "../assets/homeWhite.svg";
import sipWhite from "../assets/sipWhite.svg";

import sip from "../assets/sip.svg";
import { Link, useLocation } from "react-router-dom";

const LeftSidebar = () => {
  const currentLocation = useLocation();
  const currentPath = currentLocation.pathname;

  return (
    <div className=" glass border-r-2 rounded-r-3xl p-4 shadow-lg shadow-gray-800 w-fit h-screen min-w-[10em]">
      <img src={logo} className="h-32" alt="Doosh Bank" />
      <div className="flex flex-col gap-6">
        <Link
          to="/dashboard"
          className={`${
            currentPath === "/dashboard" ? " shadow-xl  shadow-white glass border-r-2" : ""
          } flex items-center rounded-lg p-2 px-4 text-white border-white `}
        >
          <img
            src={homeWhite}
            className="h-12"
            alt="Home"
          />
          <p className=" text-xl font-semibold tracking-wide">HOME</p>
        </Link>
        <Link
          to="/sip"
          className={`${
            currentPath === "/sip" ? " shadow-xl shadow-white glass border-r-2" : ""
          } flex items-center text-white rounded-lg p-2 px-4  border-white`}
        >
          <img
            src={sipWhite}
            className="h-12 p-3"
            alt="Sip"
          />
          <p className="text-xl font-semibold tracking-wide ">SIP</p>
        </Link>
      </div>
    </div>
  );
};

export default LeftSidebar;
