import { BUCKET_TYPE, BucketType } from "./Types";

export const NewBucketData: BucketType = {
  uid: crypto.randomUUID(),
  logo: "",
  title: "New Bucket",
  assets: [],
  price: 10,
  tvl: 0,
  invested: false,
  type: BUCKET_TYPE.PERSONAL,
};