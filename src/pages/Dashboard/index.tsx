import Bucket from "../../components/Bucket";
import LeftSidebar from "../../components/LeftSidebar";
import MyWallet from "../../components/MyWallet";
import RightTab from "../../components/RightTab/RightTab";
import WatchList from "../../components/WatchList";
import plus from "../../assets/plus.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { DummyData } from "../../utils/dummyData";
import { BucketType, CALL_TYPE } from "../../constants/Types";
import { useState } from "react";
import { NewBucketData } from "../../constants/Defaults";
import "swiper/css/navigation";
import "swiper/css";

const Dashboard = () => {
  const isInvested = true;
  const [callType, setCallType] = useState<CALL_TYPE>(CALL_TYPE.CREATE);
  const [bucketData, setBucketData] = useState<BucketType>(NewBucketData);

  const dataForRightTab = (_callType: CALL_TYPE, _bucketData: BucketType) => {
    setCallType(_callType);
    setBucketData(_bucketData);
  };

  return (
    <div className="flex w-full max-h-screen bg2">
      <LeftSidebar />

      {/* Middle Part  */}
      <div className="w-[65%]  flex flex-col p-8 pb-1 gap-5">
        {/* upperSection  */}
        <div className=" h-[42%]  flex  justify-between  ">
          <MyWallet
            dataForRightTab={(_callType) =>
              dataForRightTab(_callType, NewBucketData)
            }
          />

          <div className="w-3/5 px-6">
            <div className="relative h-full w-fit overflow-y-scroll  mx-auto scrollbar">
              <p className="sticky top-0 bg-white w-full font-bold tracking-wide text-2xl pb-2">
                WatchList
              </p>
              <div className="pr-2 flex flex-col gap-4">
                {/* Map over it instead of copy pasting  */}
                {DummyData.map((bucketsData) => {
                  return (
                    <>
                      <WatchList
                        bucketData={bucketsData}
                        dataForRightTab={(_callType, _bucketData) =>
                          dataForRightTab(_callType, _bucketData)
                        }
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
                    {DummyData.map((bucketsData) => {
                      return (
                        <>
                          <SwiperSlide>
                            <Bucket
                              bucketData={bucketsData}
                              dataForRightTab={(_callType, _bucketData) =>
                                dataForRightTab(_callType, _bucketData)
                              }
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
                {DummyData.map((bucketsData) => {
                  return (
                    <>
                      <SwiperSlide>
                        <Bucket
                          bucketData={bucketsData}
                          dataForRightTab={(_callType, _bucketData) =>
                            dataForRightTab(_callType, _bucketData)
                          }
                        />
                      </SwiperSlide>
                    </>
                  );
                })}
                {DummyData.map((bucketsData) => {
                  return (
                    <>
                      <SwiperSlide>
                        <Bucket
                          bucketData={bucketsData}
                          dataForRightTab={(_callType, _bucketData) =>
                            dataForRightTab(_callType, _bucketData)
                          }
                        />
                      </SwiperSlide>
                    </>
                  );
                })}
                <SwiperSlide>
                  <div className="h-full min-w-[30%] flex justify-center items-center py-5 px-4 rounded-xl gradient2 shadow-lg">
                    <img
                      onClick={() =>
                        dataForRightTab(CALL_TYPE.CREATE, NewBucketData)
                      }
                      className="h-20 w-20 p-6 rounded-full bg-white bg-opacity-45 shadow-lg"
                      src={plus}
                      alt="add more"
                    />
                    <p className="absolute bottom-[2em] text-center text-lg w-4/5">
                      Create your own personalised investment bucket! 🚀
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* Right Tab  */}
      <div className="w-[25%] gradient2">
        <RightTab callType={callType} bucketData={bucketData} />
      </div>
    </div>
  );
};

export default Dashboard;
