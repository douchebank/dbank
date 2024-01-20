import Bucket from "../../components/Bucket";
import LeftSidebar from "../../components/LeftSidebar";
import MyWallet from "../../components/MyWallet";
import RightTab from "../../components/RightTab/RightTab";
import WatchList from "../../components/WatchList";
import plus from "../../assets/plus.svg";
import { Swiper, SwiperSlide} from "swiper/react";
import {  Navigation } from 'swiper/modules';
import { DummyData } from "../../utils/dummyData";
import 'swiper/css/navigation';
import "swiper/css";

const Dashboard = () => {
  const isInvested = true;

  return (
    <div className="flex w-full max-h-screen bg2">
      <LeftSidebar />

      {/* Middle Part  */}
      <div className="w-[65%]  flex flex-col p-8 pb-1 gap-5">
        {/* upperSection  */}
        <div className=" h-[42%]  flex  justify-between  ">
          <MyWallet />

          <div className="w-3/5 px-6">
            <div className="relative h-full w-fit overflow-y-scroll  mx-auto scrollbar">
              <p className="sticky top-0 bg-white w-full font-bold tracking-wide text-2xl pb-2">
                WatchList
              </p>
              <div className="pr-2 flex flex-col gap-4">
                {/* Map over it instead of copy pasting  */}
                {DummyData.map((buckets) => {
                  return (
                    <>
                      <WatchList
                        uid={buckets.uid}
                        title={buckets.title}
                        price={buckets.price}
                        tvl={buckets.tvl}
                        logo={buckets.logo}
                        type={buckets.type}
                        invested={buckets.invested}
                        assets={buckets.assets}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* lowerSection */}
        <div className=" flex flex-col gap-5 h-3/5 overflow-y-scroll scrollbar pr-2 ">
          <div>
            {isInvested === true && (
              <>
                <h1 className=" txt-shadow font-bold tracking-wide text-2xl mb-4">
                  Invested Accounts
                </h1>
                <div className="flex overflow-hidden">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={true}
                    modules={[Navigation]}
                  >
                    {DummyData.map((bucket) => {
                      return (
                        <>
                          <SwiperSlide >
                            <Bucket
                              uid={bucket.uid}
                              title={bucket.title}
                              price={bucket.price}
                              tvl={bucket.tvl}
                              logo={bucket.logo}
                              type={bucket.type}
                              invested={bucket.invested}
                              assets={bucket.assets}
                            />
                          </SwiperSlide>
                        </>
                      );
                    })}
                  </Swiper>
                </div>
              </>
            )}
          </div>

          <div>
            <h1 className="font-bold tracking-wide text-2xl">All Buckets</h1>
            <div className="flex gap-5 py-4 overflow-hidden">
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={true}
                modules={[Navigation]}
              >
                {DummyData.map((bucket) => {
                  return (
                    <>
                      <SwiperSlide>
                        <Bucket
                          uid={bucket.uid}
                          title={bucket.title}
                          price={bucket.price}
                          tvl={bucket.tvl}
                          logo={bucket.logo}
                          type={bucket.type}
                          invested={bucket.invested}
                          assets={bucket.assets}
                        />
                      </SwiperSlide>
                    </>
                  );
                })}
                {DummyData.map((bucket) => {
                  return (
                    <>
                      <SwiperSlide>
                        <Bucket
                          uid={bucket.uid}
                          title={bucket.title}
                          price={bucket.price}
                          tvl={bucket.tvl}
                          logo={bucket.logo}
                          type={bucket.type}
                          invested={bucket.invested}
                          assets={bucket.assets}
                        />
                      </SwiperSlide>
                    </>
                  );
                })}
                <SwiperSlide>
                  <div className="h-full min-w-[30%] flex justify-center items-center py-5 px-4 rounded-xl gradient2 shadow-lg">
                    <img className="h-20 w-20 p-6 rounded-full bg-white bg-opacity-45 shadow-lg" src={plus} alt="add more"/> 
                    <p className="absolute bottom-[2em] text-center text-lg w-4/5">Create your own personalised investment bucket! 🚀</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* Right Tab  */}
      <div className="w-[25%] gradient2">
        <RightTab bucketData={DummyData[1]} />
      </div>
    </div>
  );
};

export default Dashboard;
