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
    <div className="flex w-full max-h-screen ">
      <div className="w-[10%]">
        <LeftSidebar />
      </div>
      {/* Middle Part  */}
      <div className="w-[65%] flex flex-col pl-8 pt-5 gap-5">

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

        {/* lowerSection */}
        <div className=" flex flex-col gap-5 h-3/5 px-5 overflow-y-scroll scrollbar ">
          <div>
            {isInvested === true && (
              <>
                <h1 className="font-bold tracking-wide text-2xl">
                  Invested Accounts
                </h1>
                <div className="flex gap-5 py-4  h-full overflow-x-scroll scrollbar">
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
            <h1 className="font-bold tracking-wide text-2xl">All Buckets</h1>
            <div className="flex gap-5 py-4  overflow-x-scroll overflow-hidden scrollbar">
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
      <div className="w-[25%] gradient">
        <RightTab />
      </div>
    </div>
  );
};

export default Dashboard;
