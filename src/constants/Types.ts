export type AssetType = {
  logo: string;
  name: string;
  price: number;
  percentage: number;
};

export type BucketType = {
  uid: string;
  logo?: string;
  title: string;
  description?: string;
  assets?: AssetType[];
  price: number;
  tvl: number;
};
