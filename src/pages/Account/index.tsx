import LeftSidebar from "../../components/LeftSidebar";

function index() {
  return (
    <div className="flex w-full min-h-screen  bg">
      <div className="w-[10%]">
        <LeftSidebar />
      </div>
      <div className=" w-[90%] flex justify-center items-center ">Account Section</div>
    </div>
  );
}

export default index