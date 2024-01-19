import { useState } from "react";
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import homeWhite from "../assets/homeWhite.svg";
import sipWhite from "../assets/sipWhite.svg";

import sip from "../assets/sip.svg";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/system-hooks/useAuth";
import { removeItemFromStorage, setItemInStorage } from "../utils/helper";
import Modal from "./common/Modal";

const LeftSidebar = () => {
  const currentLocation = useLocation();
  const currentPath = currentLocation.pathname;
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState<boolean>(false);
  const openLogOutModal = () => {
    setIsLogOutModalOpen(true);
  };

  const closeLogOutModal = () => {
    setIsLogOutModalOpen(false);
  };

  const logOut = async () => {
    logout();
    setItemInStorage("isLoggedIn", false);
    await removeItemFromStorage("smartAccount");
    navigate("/login");
  };

  return (
    <div className="gradient2 rounded-r-3xl p-4 shadow-lg shadow-gray-800 w-full h-full ">
      <img src={logo} className="h-32 mx-auto" alt="Doosh Bank" />
      <div className="flex flex-col gap-6 mb-52">
        <Link
          to="/dashboard"
          className={`${
            currentPath === "/dashboard"
              ? " text-white shadow-lg  shadow-orange-200 bg-black"
              : ""
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
            currentPath === "/sip"
              ? "text-white shadow-lg shadow-lime-200 bg-black"
              : ""
          } flex items-center rounded-lg p-2 px-4`}
        >
          <img
            src={currentPath === "/sip" ? sipWhite : sip}
            className="h-12 p-3"
            alt="Sip"
          />
          <p className="text-xl font-semibold tracking-wide ">SIP</p>
        </Link>
        <Link
          to="/account"
          className={`${
            currentPath === "/account"
              ? "text-white shadow-lg shadow-lime-200 bg-black"
              : ""
          } flex items-center rounded-lg p-2 px-4`}
        >
          {/* <img
            src={currentPath === "/account" ? sipWhite : sip}
            className="h-12 p-3"
            alt="Account"
          /> */}
          <p className="text-xl font-semibold tracking-wide ">Account</p>
        </Link>
      </div>
      <div className={`flex items-center rounded-lg p-2 px-4 cursor-pointer`}>
        <p
          className="text-xl font-semibold tracking-wide"
          onClick={openLogOutModal}
        >
          Log Out
        </p>
      </div>
      <Modal
        isOpen={isLogOutModalOpen}
        onCancel={closeLogOutModal}
        message="Do you want to logout"
        actionBtnName="Log Out"
        onRemove={() => logOut()}
      />
    </div>
  );
};

export default LeftSidebar;
