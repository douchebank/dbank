import { useState } from "react";
import dummyImage from "../../assets/recent.png";
import AssetCard from "./AssetCard";

const RightTab = () => {
  const [selectedAction, setSelectedAction] = useState<string>("Buy");
  const [sipSelected, setSipSelected] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2 px-5   w-full divide-y divide-black divide-opacity-75">
        {/* Bucket information  */}
        <div className=" flex mx-auto gap-5 my-5">
          <img
            src={dummyImage}
            alt="Bucket image"
            className=" w-32 h-32 rounded-xl"
          />
          <div>
            <p className="text-3xl font-semibold">Name of Bucket</p>
            <div className=" flex flex-col gap-3 my-3 text-lg font-medium ">
              <p>
                Price:- <span>100 GHO</span>
              </p>
              <p>
                TVL:- <span>$ 100</span>
              </p>
            </div>
          </div>
        </div>

        {/* Assets Section  */}
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold tracking-wide text-center ">
            Assets
          </h1>
          <AssetCard />
          <button className="p-2  rounded-xl gradient shadow-md w-[40%] text-xl my-3">
            Edit
          </button>
        </div>

        {/* Invest Section  */}
        <div className="w-full ">
          <div className="w-full flex justify-around gap-3 text-2xl px-2 py-2">
            <button
              onClick={() => setSelectedAction("Buy")}
              className="w-[50%] py-2 bg-green  rounded-xl "
            >
              Buy
            </button>
            <button
              onClick={() => setSelectedAction("Sell")}
              className="w-[50%] py-2 bg-red-300 rounded-xl"
            >
              Sell
            </button>
          </div>

          {/* BelowContent  */}
          <div>
            {selectedAction === "Buy" ? (
              <>
                <div>
                  <div>
                    <button
                      onClick={() => {
                        setSipSelected(false);
                      }}
                    >
                      Lumsum
                    </button>
                    <button
                      onClick={() => {
                        setSipSelected(true);
                      }}
                    >
                      SIP
                    </button>
                  </div>
                  <div>
                    {sipSelected && (
                      <label>
                        Interval <input type="number" />
                      </label>
                    )}
                    <label>
                      Amount
                      <input type="number" />
                    </label>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p>Sell</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightTab;
