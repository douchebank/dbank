import { BUCKET_TYPE, BucketType } from "../constants/Types";

import ETH from "../assets/icons/ethereum.png";
import MATIC from "../assets/icons/polygon.png";
import OPT from "../assets/icons/optimistic.png";
import USDT from "../assets/icons/usdt.png";
import AVAX from "../assets/icons/avalanche.png";
import ARB from "../assets/icons/arbitrum.png";

import bucketimg1 from "../assets/bucket/4.jpeg";
import bucketimg3 from "../assets/bucket/3.jpeg";
import bucketimg2 from "../assets/bucket/1.jpeg";
import bucketimg4 from "../assets/bucket/2.jpeg";

export const DummyData: BucketType[] = [
  {
    uid: crypto.randomUUID(),
    logo: `${bucketimg2}`,
    title: "Big Cap",
    assets: [
      {
        logo: `${ETH}`,
        name: "ETH",
        percentage: 50,
      },
      {
        logo: `${MATIC}`,
        name: "MATIC",
        percentage: 25,
      },
      {
        logo: `${OPT}`,
        name: "OPT",
        percentage: 15,
      },
      {
        logo: `${USDT}`,
        name: "USDT",
        percentage: 10,
      },
    ],
    price: 100,
    tvl: 1000,
    invested: false,
    type: BUCKET_TYPE.GENERAL,
  },

  {
    uid: crypto.randomUUID(),
    logo: `${bucketimg3}`,
    title: "Mid Cap",
    assets: [
      {
        logo: `${AVAX}`,
        name: "AVAX",
        percentage: 20,
      },
      {
        logo: `${MATIC}`,
        name: "MATIC",
        percentage: 20,
      },

      {
        logo: `${ETH}`,
        name: "ETH",
        percentage: 20,
      },
      {
        logo: `${OPT}`,
        name: "OPT",
        percentage: 20,
      },
      {
        logo: `${USDT}`,
        name: "USDT",
        percentage: 20,
      },
    ],
    price: 50,
    tvl: 1000,
    invested: false,
    type: BUCKET_TYPE.GENERAL,
  },
  {
    uid: crypto.randomUUID(),
    logo: `${bucketimg1}`,
    title: "Small Cap",
    assets: [
      {
        logo: `${ARB}`,
        name: "ARB",
        percentage: 25,
      },
      {
        logo: `${MATIC}`,
        name: "MATIC",
        percentage: 25,
      },
      {
        logo: `${USDT}`,
        name: "USDT",
        percentage: 20,
      },
    ],
    price: 10,
    tvl: 1000,
    invested: true,
    type: BUCKET_TYPE.PERSONAL,
  },
  {
    uid: crypto.randomUUID(),
    logo: `${bucketimg4}`,
    title: "PERSONAL",
    assets: [
      {
        logo: `${AVAX}`,
        name: "AVAX",
        percentage: 25,
      },
      {
        logo: `${MATIC}`,
        name: "MATIC",
        percentage: 25,
      },
      {
        logo: `${ETH}`,
        name: "ETH",
        percentage: 50,
      },
    ],
    price: 100,
    tvl: 1000,
    invested: false,
    type: BUCKET_TYPE.GENERAL,
  },
];
