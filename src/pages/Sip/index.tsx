import LeftSidebar from "../../components/LeftSidebar";

const index = () => {
  return (
    <div className="flex w-full min-h-screen  ">
      <div className="w-[10%]">
        <LeftSidebar />
      </div>
      <div className=" w-[90%] flex justify-center items-center ">SIP</div>
    </div>
  );
};

export default index;
