export enum BUCKET_TYPE {
  GENERAL = "GENERAL",
  PERSONAL = "PERSONAL",
}

export type AssetType = {
  logo: string;
  name: string;
  price: number;
  percentage: number;
};

export type BucketType = {
  uid: string;
  logo: string;
  title: string;
  description?: string;
  assets?: AssetType[];
  price: number;
  tvl: number;
  invested: boolean; // IT WILL INDICATE THAT WE CAN SELL IT.
  type: BUCKET_TYPE; // THIS TO SET IF IT IS EDITIBLE OR NOT IN TERMS OF ADDING ASSETS.
  // aslo add a key named addedToWatchList = true // by default give it to false.
};

// Modal.tsx
export type ModalParams = {
  title: string;
  uid: string;
  onClose: () => void;
};