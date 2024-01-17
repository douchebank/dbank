import dumyImg from "../assets/recent.png";
import { BucketType } from "../constants/Types";
const WatchList = ({ uid, title, price, tvl, logo }: BucketType) => {
  return (
    <div className="my-4">
      <div className="flex flex-col gap-4 py-2 px-4 max-w-[400px] gradient2 rounded-xl">
        <div className="flex gap-4 justify-center items-center">
          <img
            src={logo ? logo : dumyImg}
            alt="largeCap"
            className="w-24 h-24 rounded-xl"
          />
          <div>
            <p className="text-3xl font-bold tracking-wider text-ellipsis overflow-hidden whitespace-nowrap w-[250px] ">{title}</p>
            <div className=" flex gap-5">
              <p className="text-lg">
                Price: <span>{price} GHO</span>
              </p>
              <p className="text-lg">
                TVL: <span>${tvl}</span>
              </p>
            </div>
            <div className="flex gap-5 justify-between py-2 ">
              <button className="w-full text-center border border-transparent hover:border-black rounded-lg bg-rose-400   py-1 px-2 shadow-md hover:shadow-lg">
                Sell
              </button>
              <button className="w-full text-center border border-transparent hover:border-black rounded-lg bg-lime-400 py-1 px-2 shadow-md hover:shadow-lg">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
