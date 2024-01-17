import { useState } from "react";

const LandingPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const toggleShowLoginModal = () => {
    setShowRegisterModal(false);
    setShowLoginModal(!showLoginModal);
  }
  const toggleShowRegisterModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(!showRegisterModal);
  }
  return (
  <div className="h-screen w-screen flex justify-center items-center">
    <button onClick={toggleShowRegisterModal} className=" p-6 px-20 font-bold  text-lg shadow-lg rounded-lg gradient">Launch</button>

    {
      showRegisterModal &&

    <div className="absolute  text-center gradient shadow-lg rounded-xl p-4 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <p className="text-center font-bold text-xl mb-6">Create Account</p>
      <p className="ml-2 text-left mb-2">Enter your name</p>
      <input className="w-full p-2 rounded-lg border border-grey mb-6" type="text"/>
      <button className="p-2 px-4 rounded-lg bg-black mb-4 text-white shadow-lg">Register</button>
      <p onClick={toggleShowLoginModal} className="text-gray-700 pt-2 border-t border-dashed border-gray-500">Or Login ?</p>
    </div>
    }

    {
      showLoginModal && 
      <div className="absolute text-center bg-white border-2 rounded-lg p-4 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="text-center font-bold text-xl mb-6">Select Account</p>
        <p className="ml-2 text-left mb-2">Enter your name</p>
        <input className="w-full p-2 rounded-lg border border-grey mb-6" type="text"/>
        <button className="p-2 px-4 rounded-lg gradient mb-4 shadow-lg">Register</button>
        <p onClick={toggleShowLoginModal} className="text-gray-500 pt-2 border-t border-dashed border-gray-500">Or Login ?</p>
    </div>
    }

  </div>
  )
};

export default LandingPage;
