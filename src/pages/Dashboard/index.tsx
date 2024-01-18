import Baskets from "../../components/Baskets";
import LeftSidebar from "../../components/LeftSidebar";
import MyWallet from "../../components/MyWallet";
import WatchList from "../../components/WatchList";

const Dashboard = () => {
  return (
    <div className="flex w-full max-h-screen ">
      <div className="w-[10%]">
        <LeftSidebar />
      </div>
      {/* Middle Part  */}
      <div className="w-[65%] flex flex-col px-8 pt-5 gap-5">
        {/* upperSection  */}
        <div className=" h-[42%]  flex  justify-between  ">
          <div className="w-2/5 flex justify-center justify-self-center ">
            <MyWallet />
          </div>
          <div className="w-3/5 px-6">
            <p className="font-bold tracking-wide text-xl mb-2">WatchList</p>

            <div className="h-[90%] w-fit overflow-y-scroll flex flex-col gap-4 pr-4 scrollbar">
              {/* Map over it instead of copy pasting  */}
              <WatchList
                uid="1"
                title="Big Cap"
                price={100}
                tvl={1000}
                logo=""
              />
              <WatchList uid="1" title="Big Cap" price={100} tvl={1000} />
              <WatchList uid="1" title="Big Cap" price={100} tvl={1000} />
              <WatchList uid="1" title="Big Cap" price={100} tvl={1000} />
            </div>
          </div>
        </div>
        {/* lowerSection */}
        <div className=" flex flex-col gap-5 h-3/5 px-5">
          <h1 className="font-bold tracking-wide text-2xl">Baskets</h1>

          <div className="flex gap-5 py-4  overflow-x-scroll overflow-hidden">
            <Baskets />
            <Baskets />
            <Baskets />
            <Baskets />
            <Baskets />
            <Baskets />
          </div>
        </div>
      </div>
      {/* Right Tab  */}
      <div className="w-[25%]"></div>
    </div>
  );
};

export default Dashboard;
