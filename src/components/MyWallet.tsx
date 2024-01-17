import plus from "../assets/plus.svg";
import receive from "../assets/receive.svg";
import send from "../assets/send.svg";

const MyWallet = () => {
  return (
    <div className="bg-grey w-fit rounded-2xl px-12 py-14 text-center">
      <p className="text-sm">My Wallet</p>
      <p className="text-6xl font-bold px-6 mt-4">$128,921</p>
      <p className="text-xs mt-2">+ $12,921 from last week</p>
      <div className="mt-8 flex gap-6 items-center justify-center">
        <div className=" relative flex gap-6  w-fit  rounded-full ">
          <span className=" absolute w-20 h-4 rounded-xl -rotate-[25deg] bg-black top-[14px]   left-1/2 translate-x-[-45%] "></span>
          <span className=" absolute w-20 h-4 rounded-xl -rotate-[340deg] bg-black top-[14px]   left-1/2 translate-x-[-45%] "></span>
          <img
            src={send}
            className="h-12 p-2 bg-black rounded-full z-10"
            alt="plus"
          />
          <img
            src={receive}
            className="h-12 p-2 bg-black rounded-full z-10"
            alt="plus"
          />
        </div>
        <img
          src={plus}
          className="h-12 p-4 bg-yellow rounded-full"
          alt="plus"
        />
      </div>
    </div>
  );
};

export default MyWallet;
