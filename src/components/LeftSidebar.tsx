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
    <div className="gradient2 rounded-r-3xl p-4 shadow-lg shadow-gray-800 w-fit h-screen min-w-[10em]">
      <img src={logo} className="h-32" alt="Doosh Bank" />
      <div className="flex flex-col gap-6">
        <Link
          to="/dashboard"
          className={`${
            currentPath === "/dashboard" ? " text-white shadow-lg  shadow-orange-200 bg-black" : ""
          } flex items-center rounded-lg p-2 px-4`}
        >
          <img
            src={currentPath === "/dashboard" ? homeWhite : home}
            className="h-12"
            alt="Home"
          />
          <p className=" text-xl font-semibold tracking-wide">HOME</p>
        </Link>
        <Link
          to="/sip"
          className={`${
            currentPath === "/sip" ? "text-white shadow-lg shadow-lime-200 bg-black" : ""
          } flex items-center rounded-lg p-2 px-4`}
        >
          <img
            src={currentPath === "/sip" ? sipWhite : sip}
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
