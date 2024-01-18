import AssetCard from "./AssetCard";
import search from "../../assets/search.svg";

type AddAssetParam = {
  onClose: () => void;
};

const AddAssets = ({ onClose }: AddAssetParam) => {
  const handleSearch = () => {
    console.log("Handle Search")
  }
  return (
    <div className="w-full">
          <div className="w-full gap-2 flex justify-center items-center mx-auto gradient2 mb-6 border-2 shadow-lg border-black rounded-xl">
            <input type="text" className="p-2 px-4 w-full bg-transparent rounded-s-xl focus:outline-none " placeholder="Search..."/>
            <img onClick={handleSearch} className="h-8 p-1 px-2 border-l-2 hover:scale-110 border-black" src={search} alt="search"/>
          </div>
      <AssetCard isEditable={false} />
      <div className="flex gap-4 w-full">
        <button
          onClick={() => onClose()}
          className="p-2  rounded-xl mx-auto block bg-black text-white shadow-md w-full text-xl my-3"
        >
          Cancel
        </button>
        <button
          onClick={() => onClose()}
          className="p-2  rounded-xl mx-auto block bg-black text-white shadow-md w-full text-xl my-3"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddAssets;
