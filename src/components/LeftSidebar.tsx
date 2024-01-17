import { useState } from "react";
import logo from  "../assets/logo.svg"
import home from "../assets/home.svg"
import sip from "../assets/sip.svg"
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState(true)

  return (
    <div className="bg-grey rounded-r-3xl p-4 shadow-inner shadow-gray-600">
    <img src={logo} className="h-20" alt="Doosh Bank"/>
    <div className="flex flex-col gap-6">
      <Link to="/dashboard" className={`${selectedMenu &&  "shadow-md shadow-gray-600"} flex items-center rounded-lg p-2 px-4`}>
        <img src={home} className="h-12" alt="Home"/>
        <p className=" text-xl font-semibold tracking-wide">HOME</p>
      </Link>
      <Link to="/sip" className={`${selectedMenu &&  "shadow-md shadow-gray-600"} flex items-center rounded-lg p-2 px-4`}>
        <img src={sip} className="h-12 p-3" alt="Sip"/>
        <p className="text-xl font-semibold tracking-wide ">SIP</p>
      </Link>
    </div>
  </div>
  )
}

export default LeftSidebar