import plus from "../assets/plus.svg";
import receive from "../assets/receive.svg";
import send from "../assets/send.svg";

const MyWallet = () => {
  return (
    <div className="gradient2 w-fit h-fit rounded-3xl px-10 py-16 text-center shadow-lg  place-self-center">
      <p className="">My Wallet</p>
      <p className="text-6xl font-bold px-6 mt-4">$128,921</p>
      <p className="text-xs mt-2">+ $12,921 from last week</p>
      <div className="mt-8 flex gap-6 items-center justify-center">

        <div className="flex justify-center items-center gap-8 p-2 h-16  w-fit bg-black rounded-full ">
          <img
            src={send}
            className="h-full p-2 bg-black rounded-full border-r-2 border-t-2 border-dashed hover:translate-x-1 hover:-translate-y-1 hover:border-r-4 hover:border-t-4 transition-transform "
            alt="plus"
          />
          <img
            src={receive}
            className="h-full p-2 bg-black rounded-full border-l-2 border-b-2 border-dashed hover:-translate-x-1 hover:translate-y-1 hover:border-l-4 hover:border-b-4 transition-transform"
            alt="plus"
          />
        </div>

        <img
          src={plus}
          className="h-16 p-6 bg-yellow rounded-full"
          alt="plus"
        />
        {/* brand home sip */}
      </div>
    </div>
  );
};

export default MyWallet;
