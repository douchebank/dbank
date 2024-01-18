type LoginParams = {
  onClose: () => void;
};

const Login = ({ onClose }: LoginParams) => {
  return (
    <div className="w-[20em] h-[18em] absolute text-center gradient shadow-lg rounded-xl p-4 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <p className="text-center font-bold text-xl">Select Account</p>

      <div className="flex flex-col my-12 gap-4">
        <select className="w-full p-2 rounded-lg border border-grey">
          <option disabled selected value="">
            Select Name
          </option>
          <option>Sandeep</option>
          <option>Shakti</option>
        </select>
        <button className="p-2 px-4 w-full rounded-lg bg-black text-white shadow-lg">
          Login
        </button>
      </div>
      <p
        onClick={onClose}
        className=" w-full text-gray-700 pt-2 border-t border-dashed border-gray-500"
      >
        Already have an account ?
      </p>
    </div>
  );
};

export default Login;
