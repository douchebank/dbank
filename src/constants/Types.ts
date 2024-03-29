export enum BUCKET_TYPE {
  GENERAL = "GENERAL",
  PERSONAL = "PERSONAL",
}

export enum CALL_TYPE {
  BUY = "BUY",
  SELL = "SELL",
  CREATE = "CREATE",
}

export type AssetType = {
  logo: string;
  name: string;
  percentage: number;
};

export type BucketType = {
  uid: string;
  logo: string;
  title: string;
  assets: AssetType[];
  price: number;
  tvl: number;
  invested: boolean; // IT WILL INDICATE THAT WE CAN SELL IT.
  type: BUCKET_TYPE; // THIS TO SET IF IT IS EDITIBLE OR NOT IN TERMS OF ADDING ASSETS.
  // aslo add a key named addedToWatchList = true // by default give it to false.
};

// Modal.tsx
export type ModalParams = {
  bucketData: BucketType;
  onClose: () => void;
};
