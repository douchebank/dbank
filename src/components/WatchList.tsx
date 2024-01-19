import dumyImg from "../assets/recent.png";
import { BucketType } from "../constants/Types";
const WatchList = ({ uid, title, price, tvl, logo }: BucketType) => {
  return (
    <div className=" w-fit">
      <div className="flex  gap-4 p-4  gradient2 w-fit rounded-xl shadow-lg">
        {/* <div className="flex gap-4 justify-around items-center"> */}
        <img
          src={logo ? logo : dumyImg}
          alt="largeCap"
          className="w-24 h-24 my-auto rounded-xl aspect-square object-cover"
        />
        <div className="w-full">
          <p className="text-3xl font-bold tracking-wider text-ellipsis overflow-hidden whitespace-nowrap w-[350px] ">
            {title}
          </p>
          <div className=" flex gap-5">
            <p className="text-lg">
              Price: <span>{price} GHO</span>
            </p>
            <p className="text-lg">
              TVL: <span>${tvl}</span>
            </p>
          </div>
          <div className="flex gap-5 justify-between mt-4 ">
            <button className="w-full text-center border border-transparent hover:border-black rounded-lg bg-rose-400   py-1 px-2 shadow-md hover:shadow-lg">
              Sell
            </button>
            <button className="w-full text-center border border-transparent hover:border-black rounded-lg bg-lime-400 py-1 px-2 shadow-md hover:shadow-lg">
              Buy
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default WatchList;
