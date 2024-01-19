import Bucket from "../../components/Bucket";
import LeftSidebar from "../../components/LeftSidebar";
import MyWallet from "../../components/MyWallet";
import RightTab from "../../components/RightTab/RightTab";
import WatchList from "../../components/WatchList";
import { BUCKET_TYPE } from "../../constants/Types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Dashboard = () => {
  const isInvested = true;

  return (
    <div className="flex w-full max-h-screen bg">
      <LeftSidebar />

      {/* Middle Part  */}
      <div className="w-[65%]  flex flex-col p-8 gap-5">
        {/* upperSection  */}
        <div className=" h-[42%]  flex  justify-between  ">
          <MyWallet />

          <div className="w-3/5 px-6">
            <div className="relative h-full w-fit overflow-y-scroll  mx-auto scrollbar">
              <p className="sticky top-0 bg-transparent text-white w-full font-bold tracking-wide text-xl pb-2">
                WatchList
              </p>
              <div className="pr-2 flex flex-col gap-4">
                {/* Map over it instead of copy pasting  */}
                <WatchList
                  uid="1"
                  title="Big Cap"
                  price={100}
                  tvl={1000}
                  logo=""
                  type={BUCKET_TYPE.GENERAL}
                  invested={false}
                />
                <WatchList
                  uid="1"
                  title="Big Cap"
                  price={100}
                  tvl={1000}
                  logo=""
                  type={BUCKET_TYPE.GENERAL}
                  invested={false}
                />
                <WatchList
                  uid="1"
                  title="Big Cap"
                  price={100}
                  tvl={1000}
                  logo=""
                  type={BUCKET_TYPE.GENERAL}
                  invested={false}
                />
                <WatchList
                  uid="1"
                  title="Big Cap"
                  price={100}
                  tvl={1000}
                  logo=""
                  type={BUCKET_TYPE.GENERAL}
                  invested={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* lowerSection */}
        <div className=" flex flex-col gap-5 h-3/5 overflow-y-scroll scrollbar pr-2 ">
          <div>
            {isInvested === true && (
              <>
                <h1 className=" txt-shadow font-bold text-white tracking-wide text-2xl">
                  Invested Accounts
                </h1>
                <div className="flex py-4 h-full overflow-hidden">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <Bucket
                        uid="1"
                        title="Big Cap dfadf dfasdfaasdfadf  sdfasd"
                        price={100}
                        tvl={1000}
                        logo=""
                        type={BUCKET_TYPE.GENERAL}
                        invested={false}
                        assets={[]}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Bucket
                        uid="1"
                        title="Big Cap"
                        price={100}
                        tvl={1000}
                        logo=""
                        type={BUCKET_TYPE.GENERAL}
                        invested={false}
                        assets={[]}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Bucket
                        uid="1"
                        title="Big Cap"
                        price={100}
                        tvl={1000}
                        logo=""
                        type={BUCKET_TYPE.GENERAL}
                        invested={false}
                        assets={[]}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Bucket
                        uid="1"
                        title="Big Cap"
                        price={100}
                        tvl={1000}
                        logo=""
                        type={BUCKET_TYPE.GENERAL}
                        invested={false}
                        assets={[]}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Bucket
                        uid="1"
                        title="Big Cap"
                        price={100}
                        tvl={1000}
                        logo=""
                        type={BUCKET_TYPE.GENERAL}
                        invested={true}
                        assets={[]}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </>
            )}
          </div>

          <div>
            <h1 className="font-bold tracking-wide text-white text-2xl txt-shadow">All Buckets</h1>
            <div className="flex gap-5 py-4 overflow-hidden">
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <Bucket
                    uid="1"
                    title="Big Cap"
                    price={100}
                    tvl={1000}
                    logo=""
                    type={BUCKET_TYPE.GENERAL}
                    invested={false}
                    assets={[]}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Bucket
                    uid="1"
                    title="Big Cap"
                    price={100}
                    tvl={1000}
                    logo=""
                    type={BUCKET_TYPE.GENERAL}
                    invested={false}
                    assets={[]}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Bucket
                    uid="1"
                    title="Big Cap"
                    price={100}
                    tvl={1000}
                    logo=""
                    type={BUCKET_TYPE.GENERAL}
                    invested={false}
                    assets={[]}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Bucket
                    uid="1"
                    title="Big Cap"
                    price={100}
                    tvl={1000}
                    logo=""
                    type={BUCKET_TYPE.GENERAL}
                    invested={false}
                    assets={[]}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Bucket
                    uid="1"
                    title="Big Cap"
                    price={100}
                    tvl={1000}
                    logo=""
                    type={BUCKET_TYPE.GENERAL}
                    invested={false}
                    assets={[]}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* Right Tab  */}
      <div className="w-[25%] glass border-l-2 border-white">
        <RightTab />
      </div>
    </div>
  );
};

export default Dashboard;
