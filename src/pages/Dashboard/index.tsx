import Baskets from "../../components/Baskets";
import MyWallet from "../../components/MyWallet";
import WatchList from "../../components/WatchList";
import logo from "../../assets/logo.svg";
import home from "../../assets/home.svg";
import sip from "../../assets/sip.svg";

const Dashboard = () => {
  return (
    <div className="flex w-full min-h-screen ">
      {/* Left Sidebar  */}
      <div className="gradient2 rounded-r-3xl pt-5">
        <img src={logo} className="h-20" alt="Doosh Bank" />
        <img src={home} className="h-16 p-3 mx-auto" alt="Home" />
        <img src={sip} className="h-16 p-3 mx-auto" alt="Sip" />
      </div>

      {/* Middle Part  */}
      <div className="w-[70%] flex flex-col px-8 pt-5 gap-5">
        {/* upperSection  */}
        <div className=" h-2/5  flex gap-5 justify-between  ">
          <div className="w-2/5 flex justify-center justify-self-center ">
            <MyWallet />
          </div>
          <div className="w-3/5 px-8 ">
            <p className="font-bold tracking-wide text-xl mb-2">WatchList</p>

            <div className="h-[90%] overflow-y-scroll">
              {/* Map over it instead of copy pasting  */}
              <WatchList
                uid="1"
                title="Big Cap adns asdfahsdfa"
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
        <div className="h-3/5 px-5">
          <h1 className="font-bold tracking-wide text-2xl">Baskets</h1>

          <Baskets />
        </div>
      </div>
      {/* Right Tab  */}
      <div className="w-[30%]"></div>
    </div>
  );
};

export default Dashboard;
