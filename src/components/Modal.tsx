import { SyntheticEvent } from "react";
import cross from "../assets/plus.svg";
import { ModalParams } from "../constants/Types";

const Modal = ({ onClose, bucketData }: ModalParams) => {
  //This for closing the modal on outside click
  const handleChildClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-75 z-10"

    >
      <div
        onClick={handleChildClick}
        className="relative gradient rounded-lg p-4 px-6"
      >
        <img
          onClick={onClose}
          className="h-5 absolute right-2 top-2 rotate-45"
          src={cross}
          alt="close"
        />
        <p className="text-center font-bold text-xl mb-2">{bucketData.title}</p>
        <div className="mb-4">
          <p className="ml-2">Amount</p>
          <input
            className="w-full p-2 rounded-lg border border-grey"
            type="text"
          />
        </div>
        <div>
          <p className="ml-2">Interval Days</p>
          <div className="flex items-center gap-4">
            <input
              className="p-2 rounded-lg border border-grey"
              type="number"
            />
            <p>days</p>
          </div>
        </div>
        <button
          onClick={() => console.log(bucketData)}
          className="p-2 px-4 w-full rounded-lg bg-black text-white shadow-lg mt-8"
        >
          Invest
        </button>
      </div>
    </div>
  );
};

export default Modal;
