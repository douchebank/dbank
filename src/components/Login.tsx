import { useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import {  useNavigate } from "react-router-dom";
import { client } from "@passwordless-id/webauthn";
import { v4 } from "uuid";
import { useAuth } from "../hooks/system-hooks/useAuth";
import { getItemFromStorage, setItemInStorage } from "../utils/helper";
import Select from "./common/Select";

type LoginParams = {
  onClose: () => void;
};

const Login = ({ onClose }: LoginParams) => {
  const [deviceName, setDeviceName] = useState<string | null>(null);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInputChange = (val: any) => {
    setDeviceName(val);
  };

  const devicesFromStorage = getItemFromStorage("devices");

  const allDevices = useMemo(() => {
    if (devicesFromStorage) {
      const resultedOption = devicesFromStorage.map((d: any) => ({
        ...d,
        label: d?.name,
        value: d?.name,
      }));

      return resultedOption;
    }

    return [];
  }, [devicesFromStorage]);

  async function authenticateDevice() {
    if (deviceName) {
      try {
        const filterDevice = allDevices.filter(
          (d: any) => d.name === deviceName
        )?.[0];

        const challenge = v4();

        const authentication = await client.authenticate(
          [filterDevice?.id],
          challenge,
          {
            authenticatorType: "both",
            userVerification: "required",
            timeout: 60000,
          }
        );

        if (filterDevice?.address) {
          setItemInStorage("smartAccount", filterDevice.address);
        } else {
          toast.error("Some error Occurred !");
        }

        if (authentication.credentialId) {
          login();
          setItemInStorage("isLoggedIn", true);
          toast.success("Login Successful !", {
            icon: "🚀",
            duration: 3000,
          });
          navigate(`/dashboard`);
        }
      } catch (err) {
        console.log("Error at login - authenticateDevice()", err, "error");
        toast.error("Something went wrong!", {
          duration: 3000, // Duration in milliseconds
        });
      }
    } else {
      toast.error("Please select an option !", {
        duration: 3000, // Duration in milliseconds
      });
    }
  }
  return (
    <div className="w-[20em] h-[18em] absolute text-center gradient shadow-lg rounded-xl p-4 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <p className="text-center font-bold text-xl">Select Account</p>

      <div className="flex flex-col my-12 gap-4">
        <Select
          label="Select name"
          options={allDevices || []}
          className="w-full p-2 rounded-lg border border-grey"
          onChange={handleInputChange}
        />
        <button
          className="p-2 px-4 w-full rounded-lg bg-black text-white shadow-lg"
          onClick={authenticateDevice}
        >
          Login
        </button>
      </div>
      <p
        onClick={onClose}
        className=" w-full text-gray-700 pt-2 border-t border-dashed border-gray-500 cursor-pointer"
      >
        Already have an account ?
      </p>
    </div>
  );
};

export default Login;
