import logo from  "../assets/logo.svg"
import home from "../assets/home.svg"
import sip from "../assets/sip.svg"
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="bg-grey rounded-r-3xl pt-5 w-[10%]">
    <img src={logo} className="h-20" alt="Doosh Bank"/>
    <div>
        
    </div>
    <Link to="/dashboard" className="flex justify-center items-center ">
      <img src={home} className="h-16" alt="Home"/>
      <p className=" text-2xl font-semibold tracking-wide">HOME</p>
    </Link>
    <Link to="/sip" className="flex justify-center items-center mt-6">
      <img src={sip} className="h-16  " alt="Sip"/>
      <p className="text-2xl font-semibold tracking-wide ">SIP</p>
    </Link>
  </div>
  )
}

export default LeftSidebar