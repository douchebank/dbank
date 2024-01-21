import { useState } from "react";
import Login from "../../components/Login";
import Register from "../../components/Register";
import { removeItemFromStorage } from "../../utils/helper";

const LandingPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const toggleShowLoginModal = () => {
    setShowRegisterModal(false);
    setShowLoginModal(!showLoginModal);
  }
  const toggleShowRegisterModal = () => {
    setShowLoginModal(false);
    removeItemFromStorage("smartAccount");
    setShowRegisterModal(!showRegisterModal);
  }
  return (
  <div className="h-screen w-screen flex justify-center items-center bg">
    <button onClick={toggleShowRegisterModal} className=" p-6 px-20 font-bold  text-lg shadow-lg rounded-lg glass border-4 border-white">Launch</button>

    {
      showRegisterModal &&
      <Register onClose={toggleShowLoginModal}/>
    }

    {
      showLoginModal && 
      <Login onClose={toggleShowRegisterModal}/>
    }

  </div>
  )
};

export default LandingPage;
