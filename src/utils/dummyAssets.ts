import { AssetType } from "../constants/Types";

import MATIC from "../assets/icons/polygon.png";
import OPT from "../assets/icons/optimistic.png";
import ETH from "../assets/icons/ethereum.png";
import ARB from "../assets/icons/arbitrum.png";
import AVAX from "../assets/icons/avalanche.png";
import USDT from "../assets/icons/usdt.png";

export const DummyAssets: AssetType[] = [
  { logo: `${MATIC}`, name: "MATIC", percentage: 0 },
  { logo: `${OPT}`, name: "OPT", percentage: 0 },
  { logo: `${ETH}`, name: "ETH", percentage: 0 },
  { logo: `${ARB}`, name: "ARB", percentage: 0 },
  { logo: `${AVAX}`, name: "AVAX", percentage: 0 },
  { logo: `${USDT}`, name: "USDT", percentage: 0 },
];
