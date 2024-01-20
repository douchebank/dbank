import { useState } from "react";
import dummyImage from "../../assets/recent.png";
import AssetCard from "./AssetCard";
import AddAssets from "./AddAssets";
import {
  AssetType,
  BUCKET_TYPE,
  BucketType,
  CALL_TYPE,
} from "../../constants/Types";

type RightTabParams = {
  bucketData: BucketType; // this could be the bucket object , uid , name / if we get the uid then we can fetch it form the contract.
  callType: CALL_TYPE;
};

const RightTab = ({ callType, bucketData }: RightTabParams) => {
  const [selectedAction, setSelectedAction] = useState<string>("Buy");
  const [sipSelected, setSipSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const isPersonalAndEditable = true; // get it form the props when passed in (this the enum value) used to make the

  const closeEditingMode = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className="flex flex-col gap-2 px-5 h-full  w-full divide-y divide-black divide-opacity-75">
        {/* Bucket information  */}
        <div className=" flex mx-auto gap-5 my-5">
          <img
            src={callType === CALL_TYPE.CREATE ? dummyImage : bucketData.logo}
            alt="Bucketimage"
            className=" w-32 h-32 rounded-xl aspect-square object-cover "
          />
          <div>
            <p className="text-3xl font-semibold">{bucketData.title}</p>
            <div className=" flex flex-col gap-3 my-3 text-lg font-medium ">
              <p>
                Price:- <span>{bucketData.price} GHO</span>
              </p>
              <p>
                TVL:- <span>$ {bucketData.tvl}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Assets Section  */}
        <div
          className={` flex flex-col justify-center items-center ${
            isEditing && "h-full"
          } `}
        >
          {isPersonalAndEditable && !isEditing ? (
            <>
              <h1 className="text-3xl my-4 font-semibold tracking-wide text-center flex justify-center gap-1">
                Assets
                <span className="font-light text-lg text-center">
                  ({bucketData.assets.length}){" "}
                </span>
              </h1>
              <div className="max-h-[250px] overflow-y-scroll w-full overflow-x-hidden scrollbar">
                {bucketData.assets.map((asset: AssetType) => {
                  return (
                    <>
                      <AssetCard
                        assetData={asset}
                        isEditable={false}
                        toBeAdded={false}
                      />
                    </>
                  );
                })}
              </div>
              {bucketData.type === BUCKET_TYPE.PERSONAL && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2  rounded-xl bg-black text-white shadow-md w-[40%] text-xl my-3"
                >
                  {bucketData.assets.length > 0 ? "Edit " : "Add Assets"}
                </button>
              )}
            </>
          ) : (
            <>
              <h1 className="text-3xl my-4 font-semibold tracking-wide text-center ">
                Edit Assets
              </h1>
              <AddAssets
                assetData={bucketData.assets}
                onClose={closeEditingMode}
              />
            </>
          )}
        </div>

        {/* Invest Section  */}
        {!isEditing && bucketData.assets.length > 0 ? (
          <div className="w-full ">
            <div className="w-full flex justify-around gap-3 text-2xl px-2 py-2">
              <button
                onClick={() => setSelectedAction("Buy")}
                className="w-[50%] py-2 bg-lime-400 shadow-md  rounded-xl "
              >
                Buy
              </button>
              <button
                onClick={() => setSelectedAction("Sell")}
                className="w-[50%] py-2 bg-rose-400 shadow-md rounded-xl"
              >
                Sell
              </button>
            </div>

            {/* BelowContent  */}
            <div>
              {selectedAction === "Buy" ? (
                <>
                  <div className=" rounded-3xl shadow-lg mt-4 p-2 ">
                    <div className="bg-white rounded-full p-2">
                      <button
                        className={`${
                          sipSelected ? "" : "bg-yellow shadow-md"
                        } w-1/2 p-2 rounded-full`}
                        onClick={() => {
                          setSipSelected(false);
                        }}
                      >
                        Lumsum
                      </button>
                      <button
                        className={`${
                          sipSelected ? "bg-yellow shadow-md" : ""
                        } w-1/2 p-2 rounded-full`}
                        onClick={() => {
                          setSipSelected(true);
                        }}
                      >
                        SIP
                      </button>
                    </div>
                    <div className="p-4 flex flex-col gap-4  rounded-xl font-semibold ">
                      {sipSelected && (
                        <div className="flex items-center gap-4">
                          <label className="">Interval:</label>
                          <input
                            type="number"
                            className="p-2 px-4 tracking-widest focus:outline-none rounded-xl w-full "
                          />
                        </div>
                      )}

                      <div className="flex items-center gap-4">
                        <label className="">Amount:</label>
                        <input
                          type="number"
                          className="p-2 px-4 tracking-widest focus:outline-none  rounded-xl w-full "
                        />
                      </div>
                    </div>
                    <button className=" w-full border border-black bg-white rounded-xl px-4 py-2 text-2xl">
                      Invest
                    </button>
                  </div>
                </>
              ) : (
                <div className="mt-4 p-2 ">
                  <button className=" w-4/5 mx-auto block  bg-black text-white rounded-xl px-4 py-2 text-xl mb-4">
                    Liquidate
                  </button>
                  <p className="text-sm text-center">
                    You call only liquidate the whole amount
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            {!isEditing && (
              <div className="pt-10">
                <p className="text-center text-xl font-bold tracking-wider ">
                  Create you own investment bucket that will take your protfolio
                  to the moon 🚀.
                </p>
                <p className="text-lg font-semibold tracking-wide mt-5">
                  Below are the steps to create your own unique bucket.
                </p>
                <ul className=" flex  flex-col gap-2 py-3">
                  <li>1. Create select a unique name for your portfolio</li>
                  <li>
                    2. Add your favourite assets that will take you to the moon
                  </li>
                  <li>3. Create a sip payment to not miss on the lows</li>
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default RightTab;
