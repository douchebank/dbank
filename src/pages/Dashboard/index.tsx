import Bucket from "../../components/Bucket";
import LeftSidebar from "../../components/LeftSidebar";
import MyWallet from "../../components/MyWallet";
import RightTab from "../../components/RightTab/RightTab";
import WatchList from "../../components/WatchList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { DummyData } from "../../utils/dummyData";
import { BUCKET_TYPE, BucketType, CALL_TYPE } from "../../constants/Types";
import { useState } from "react";

const Dashboard = () => {
  const isInvested = true;
  const [callType, setCallType] = useState<CALL_TYPE>(CALL_TYPE.CREATE);
  const [bucketData, setBucketData] = useState<BucketType>({
    uid: crypto.randomUUID(),
    logo: "",
    title: "New Bucket",
    assets: [],
    price: 10,
    tvl: 0,
    invested: false,
    type: BUCKET_TYPE.PERSONAL,
  });

  const dataForRightTab = (_callType: CALL_TYPE, _bucketData: BucketType) => {
    setCallType(_callType);
    setBucketData(_bucketData);
  };

  return (
    <div className="flex w-full max-h-screen bg2">
      {/* <div className="w-[10%]"> */}
      <LeftSidebar />
      {/* </div> */}

      {/* Middle Part  */}
      <div className="w-[65%]  flex flex-col p-8 pb-1 gap-5">
        {/* upperSection  */}
        <div className=" h-[42%]  flex  justify-between  ">
          <MyWallet
            dataForRightTab={(_callType) =>
              dataForRightTab(_callType, bucketData)
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
                <h1 className=" txt-shadow font-bold tracking-wide text-2xl">
                  Invested Accounts
                </h1>
                <div className="flex py-4 h-full overflow-hidden">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
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
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
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
