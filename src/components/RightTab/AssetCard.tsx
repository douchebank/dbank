import dummyImg from "../../assets/recent.png";
import trash from "../../assets/trash.svg";
import polygon from "../../assets/icons/polygon.png";

type AssetCardParams = {
  isEditable: boolean;
};

const AssetCard = ({ isEditable }: AssetCardParams) => {
  // const isPersonalAndEditable = false; // get it form the props when passed in (this the enum value) used to make the
  const value = 10;
  return (
    <div className="w-full m-1 ">
      <div className="flex justify-between items-center shadow-md gradient2  w-[80%] border border-black   mx-auto py-2  px-5 rounded-xl gap-2">
        <div className="flex justify-center items-center gap-2">
          <img src={polygon} alt="Asset Name" className="h-10 w-10" />
          <p className="text-2xl font-semibold tracking-wider ">MATIC</p>
        </div>
        <label className="text-xl justify-self-end place-self-end  ">
          <input
            disabled={!isEditable}
            type="number"
            className="py-2 px-2 bg-transparent w-24 text-right outline-none "
            placeholder="0"
            defaultValue={value}
          />
          %
        </label>

        {isEditable && (
          <button>
            <img
              src={trash}
              alt="delete"
              className="w-7 h-7 place-self-end  "
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default AssetCard;
