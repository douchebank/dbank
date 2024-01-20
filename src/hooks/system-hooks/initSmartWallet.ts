import {
  BiconomySmartAccountV2,
  DEFAULT_ENTRYPOINT_ADDRESS,
} from "@biconomy/account";
import {
  ECDSAOwnershipValidationModule,
  DEFAULT_ECDSA_OWNERSHIP_MODULE,
} from "@biconomy/modules";
import { Bundler } from "@biconomy/bundler";
import { BiconomyPaymaster } from "@biconomy/paymaster";
import localforage from "localforage";

import {
  setItemInStorage,
  getItemFromStorage,
  generateSHA256Hash,
  getCoinBalance,
} from "../../utils/helper";

export default function initiateSmartWallet(
  rpcUrl: string,
  bundlerUrl: string,
  chainId: number,
  paymasterUrl: string,
  signer: any,
  login: any,
  setSmartAccountProvider: any,
  setSmartAccountAddress: any,
  provider: any,
  setBalance: any,
  setIsConnected: any,
  isInitialized: boolean,
  deviceId: any,
) {
  return async () => {
    const isLoggedIn = getItemFromStorage("isLoggedIn");

    if (!signer || !isLoggedIn) {
      console.log("[Hooks] No signer", null, "error");
      return;
    }

    const SCWProvider: any = await localforage.getItem(
      generateSHA256Hash("smartAccountProvider"),
    );
    const storageChainId: any = getItemFromStorage("network");
    const smartAccountAdd: any = getItemFromStorage("smartAccount");

    // Need to work on
    if (
      isInitialized === false &&
      SCWProvider &&
      storageChainId &&
      storageChainId === chainId &&
      smartAccountAdd
    ) {
      setItemInStorage("network", chainId);
      setItemInStorage("isLoggedIn", true);
      setSmartAccountProvider(JSON.parse(SCWProvider));
      setSmartAccountAddress(smartAccountAdd);

      getCoinBalance(smartAccountAdd, provider, setBalance);

      setIsConnected(true);

      return;
    }

    const bundler = new Bundler({
      bundlerUrl,
      chainId,
      entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
    });
    const paymaster = new BiconomyPaymaster({ paymasterUrl });
    const smartAccountConfig: any = {
      signer,
      chainId,
      rpcUrl,
      bundler,
      paymaster,
    };
    // const account = new BiconomySmartAccount(smartAccountConfig);
    // const smartAccount = await account.init();
    // const smartAccountAddress = await smartAccount.getSmartAccountAddress();

    const module = await ECDSAOwnershipValidationModule.create({
      signer,
      moduleAddress: DEFAULT_ECDSA_OWNERSHIP_MODULE,
    });
    const smartAccount = await BiconomySmartAccountV2.create({
      ...smartAccountConfig,
      defaultValidationModule: module,
      activeValidationModule: module,
    });
    // const smartAccount = await account.create();

    const smartAccountAddress = await smartAccount.getAccountAddress();

    console.log("[Hooks] Smart Account Address: ", smartAccountAddress, "info");

    login();
    let devices = getItemFromStorage("devices");
    let index = devices.findIndex((d: any) => d.id === deviceId);

    if (index < 0) {
      index = 0;
    }

    let newModified = devices.splice(index, 1)?.[0];

    newModified = {
      ...newModified,
      address: smartAccountAddress,
    };
    devices = [...devices, newModified];
    setItemInStorage("devices", devices);
    setItemInStorage("smartAccount", smartAccountAddress);
    setItemInStorage("network", chainId);
    setItemInStorage("isLoggedIn", true);
    setSmartAccountProvider(smartAccount);
    setSmartAccountAddress(smartAccountAddress);
    await localforage.setItem(
      generateSHA256Hash("smartAccountProvider"),
      JSON.stringify(smartAccount),
    );
    await getCoinBalance(smartAccountAddress, provider, setBalance);

    setIsConnected(true);
  };
}
