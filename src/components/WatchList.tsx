import dumyImg from "../assets/recent.png";
import { BucketType, CALL_TYPE } from "../constants/Types";

type WatchListParams = {
  bucketData: BucketType;
  dataForRightTab: (_callType: CALL_TYPE, _bucketData: BucketType) => void;
};

const WatchList = ({ bucketData, dataForRightTab }: WatchListParams) => {
  return (
    <div className=" w-fit ">
      <div className="flex  gap-4 p-4 glass w-fit rounded-xl shadow-lg border-2 border-white">
        <img
          src={bucketData.logo ? bucketData.logo : dumyImg}
          alt="largeCap"
          className="w-24 h-24 my-auto rounded-xl aspect-square object-cover"
        />
        <div className="w-full">
          <p className="text-3xl font-bold tracking-wider text-ellipsis overflow-hidden whitespace-nowrap w-[350px] ">
            {bucketData.title}
          </p>
          <div className=" flex gap-5">
            <p className="text-lg">
              Price: <span>{bucketData.price} GHO</span>
            </p>
            <p className="text-lg">
              TVL: <span>${bucketData.tvl}</span>
            </p>
          </div>
          <div className="flex gap-5 justify-between mt-4 ">
            <button
              onClick={() => dataForRightTab(CALL_TYPE.SELL, bucketData)}
              className="w-full text-center border border-transparent hover:border-black rounded-lg bg-rose-400   py-1 px-2 shadow-md hover:shadow-lg"
            >
              Sell
            </button>
            <button
              onClick={() => dataForRightTab(CALL_TYPE.BUY, bucketData)}
              className="w-full text-center border border-transparent hover:border-black rounded-lg bg-lime-400 py-1 px-2 shadow-md hover:shadow-lg"
            >
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
