import Baskets from "../../components/Baskets";
import MyWallet from "../../components/MyWallet";
import WatchList from "../../components/WatchList";

const Dashboard = () => {
  return (
    <div className="flex w-full min-h-screen ">
      {/* Left Sidebar  */}
      <div className="   flex justify-center items-start bg-grey rounded-r-3xl py-2 pt-5">
        Left Sidebar
      </div>

      {/* Middle Part  */}
      <div className="w-[70%] flex flex-col px-8 pt-5 gap-5">
        {/* upperSection  */}
        <div className="flex gap-5 justify-between ">
          <div className="w-2/5 flex justify-center justify-self-center ">
            <MyWallet />
          </div>
          <div className="w-3/5 px-8  ">
            <WatchList />
          </div>
        </div>
        {/* lowerSection */}
        <div className="h-full">
          <Baskets />
        </div>
      </div>
      {/* Right Tab  */}
      <div className="w-[30%]"></div>
    </div>
  );
};

export default Dashboard;
