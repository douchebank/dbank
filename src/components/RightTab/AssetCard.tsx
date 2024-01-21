import dummyImg from "../../assets/recent.png";
import trash from "../../assets/trash.svg";
import trashRed from "../../assets/trashRed.svg";
import addIcon from "../../assets/plus.svg";
import { useState } from "react";
import { AssetType } from "../../constants/Types";

type AssetCardParams = {
  assetData: AssetType;
  isEditable: boolean;
  toBeAdded: boolean;
};

const AssetCard = ({ isEditable, toBeAdded, assetData }: AssetCardParams) => {
  // const isPersonalAndEditable = false; // get it form the props when passed in (this the enum value) used to make the
  const value = 10;
  const [hoverOnDelete, setHoverOnDelete] = useState(false);

  return (
    <div className="w-full m-1 py-2">
      <div className="flex justify-between items-center shadow-md gradient2  w-[80%] border border-black   mx-auto py-2  px-5 rounded-xl gap-2">
        <div className="flex justify-center items-center gap-2">
          <img src={assetData.logo} alt="Asset Name" className="h-10 w-10 rounded-full" />
          <p className="text-2xl font-semibold tracking-wider ">
            {assetData.name}
          </p>
        </div>

        {!toBeAdded === true ? (
          <>
            <label className="text-xl whitespace-nowrap justify-self-end place-self-end  ">
              <input
                disabled={!isEditable}
                type="number"
                className="py-2 px-2 bg-transparent w-24 text-right outline-none "
                placeholder="0"
                defaultValue={assetData.percentage}
              />
              %
            </label>

            {isEditable && (
              <button
                onMouseOver={() => setHoverOnDelete(true)}
                onMouseLeave={() => setHoverOnDelete(false)}
              >
                <img
                  src={hoverOnDelete ? trashRed : trash}
                  alt="delete"
                  className="w-7 h-7 place-self-end  "
                />
              </button>
            )}
          </>
        ) : (
          <>
            <button className="hover:bg-white px-2 py-1 rounded-lg hover:border border-black">
              <img src={addIcon} alt="Add Asset" className="w-6 h-8" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AssetCard;
