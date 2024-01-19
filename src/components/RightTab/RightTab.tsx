import { useState } from "react";
import dummyImage from "../../assets/recent.png";
import bucketimg from "../../assets/bucket/3.jpeg";
import AssetCard from "./AssetCard";
import AddAssets from "./AddAssets";

const RightTab = () => {
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
            src={bucketimg}
            alt="Bucketimage"
            className=" w-32 h-32 rounded-xl aspect-square object-cover"
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
        <div
          className={` flex flex-col justify-center items-center ${
            isEditing && "h-full"
          } `}
        >
          {isPersonalAndEditable && !isEditing ? (
            <>
              <h1 className="text-3xl my-4 font-semibold tracking-wide text-center ">
                Assets
              </h1>
              <AssetCard isEditable={false} toBeAdded={false} />
              <button
                onClick={() => setIsEditing(true)}
                className="p-2  rounded-xl bg-black text-white shadow-md w-[40%] text-xl my-3"
              >
                Edit
              </button>
            </>
          ) : (
            <>
              <h1 className="text-3xl my-4 font-semibold tracking-wide text-center ">
                Edit Assets
              </h1>
              <AddAssets onClose={closeEditingMode} />
            </>
          )}
        </div>

        {/* Invest Section  */}
        {!isEditing && (
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
                  <p className="text-sm text-center">You call only liquidate the whole amount</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RightTab;
