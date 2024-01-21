import { client } from '@passwordless-id/webauthn'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import {v4} from 'uuid';
import { generateSHA256Hash, getItemFromStorage, setItemInStorage } from '../utils/helper';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/system-hooks/useAuth';
import { useConfig } from '../context/ConfigProvider';

type RegisterParams = {
    onClose : ()=> void
}

const Register = ({onClose}: RegisterParams) => {

  const [buttonTitle,setButtonTitle]=useState<string>('Register')
  const [userName,setUserName]=useState<string>('')
  const [signer, setSigner] = useState<any>(null);
  const [defaultChainId] = useState<number>(80001);

const smartAccountAddress = getItemFromStorage("smartAccount");
const allDevicesData = getItemFromStorage("devices");

  const { init } = useConfig();
  const navigate = useNavigate();
  const { login } = useAuth();

  async function getSmartWalletAddress() {
    await init(defaultChainId, userName);
    console.log("Register.jsx getSmartWalletAddress");
    // setButtonTitle("Done");
    // login();
    // toast.success("Account Created Successfully !", {
    //   icon: "🚀", // Custom icon
    //   duration: 3000, // Duration in milliseconds
    // });
    // navigate(`/dashboard`);
  }

 useEffect(() => {
   if (signer) {
     getSmartWalletAddress();
   }
 }, [signer]);

 useEffect(() => {
   if (smartAccountAddress) {
     setButtonTitle("Done");
     login();
     toast.success("Account Created Successfully !", {
       icon: "🚀", // Custom icon
       duration: 3000, // Duration in milliseconds
     });
     navigate(`/dashboard`);
   }
 }, [smartAccountAddress]);

  function generateEOA(credentialId: any, data: any) {
    setButtonTitle("Registering...");
    const inputBytes = ethers.utils.toUtf8Bytes(credentialId);
    const hash = ethers.utils.keccak256(inputBytes);

    const mnemonic = ethers.utils.entropyToMnemonic(hash);
    const eoa = ethers.Wallet.fromMnemonic(mnemonic);

    const newData = {
      ...data,
      signer: eoa.address,
    };

    if (allDevicesData) {
      setItemInStorage("devices", [newData, ...allDevicesData]);
    } else {
      console.log("in else generateEOA ");
      setItemInStorage("devices", [newData]);
    }
    // setItemInStorage("signer", eoa.address);

    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc.ankr.com/polygon_mumbai"
    );
    const localSigner = eoa.connect(provider);
    // if device entered in storage

    setSigner(localSigner);
    console.log("signer execute");
  }
  const registerUser=async ()=>{
      if(userName.trim()===''){
        return toast.error('Please enter your name')
      }
            const challenge = v4();

    const register=await client.register(userName, challenge, {
          authenticatorType: "both",
          userVerification: "required",
          timeout: 60000,
          attestation: false,
          debug: false,
        })
if (userName && register) {
      const deviceData = {
        hashCode: generateSHA256Hash(userName?.toString()),
        name: userName?.toString(),
        id: register?.credential.id,
      };
    setItemInStorage("isLoggedIn", true);
      generateEOA(register?.credential.id, deviceData);
  }
}

  return (
    <div className="w-[20em] h-[18em] absolute  text-center glass border-2 border-white shadow-lg rounded-xl p-4 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="text-center font-bold text-xl">Create Account</p>
        <div className='flex flex-col my-12 gap-4'>
          <input className="w-full p-2 rounded-lg border border-grey" type="text" placeholder="Enter your name"
          value={userName} 
          onChange={(e)=>{
            setUserName(e.target.value)
          }}
          />
          <button className="p-2 px-4 w-full rounded-lg bg-black text-white shadow-lg" onClick={registerUser}>{buttonTitle}</button>
        </div>
        <p onClick={onClose} className=" w-full text-gray-700 pt-2 border-t border-dashed border-gray-500 cursor-pointer">Or Login ?</p>
    </div>
  )
}

export default Register