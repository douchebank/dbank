import AssetCard from "./AssetCard";

type AddAssetParam = {
  onClose: () => void;
};

const AddAssets = ({ onClose }: AddAssetParam) => {
  return (
    <div className="w-full">
      <p>Search Box </p>
      <AssetCard isEditable={true} />
      <button
        onClick={() => onClose()}
        className="w-full border rounded-xl text-xl gradient2"
      >
        Save Changes
      </button>
    </div>
  );
};

export default AddAssets;
