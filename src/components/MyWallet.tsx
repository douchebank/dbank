import plus from "../assets/plus.svg";
import receive from "../assets/receive.svg";
import send from "../assets/send.svg";

const MyWallet = () => {
  return (
    <div className="bg-grey w-fit rounded-lg p-6 text-center">
    <p>My Wallet</p>
    <p className="text-5xl font-bold px-6 mt-4">$128,921</p>
    <p className="text-xs mt-2">+ $12,921 from last week</p>
    <div className="mt-4 flex gap-4 items-center justify-center">
      <div className=" p-2 flex gap-4  w-fit rounded-full bg-black ">
        <img src={send} className="h-12 p-2 bg-black rounded-full" alt="plus" />
        <img src={receive} className="h-12 p-2 bg-black rounded-full" alt="plus" />
      </div>
      <img src={plus} className="h-12 p-4 bg-yellow rounded-full" alt="plus" />
    </div>
  </div>
  )
}

export default MyWallet