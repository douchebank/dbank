import { useState } from "react";
import { useLocation } from "react-router-dom";
import dummyImg from "../assets/recent.png";
import bookmarkImg from "../assets/bookmark.svg";
import selectedBookmark from "../assets/selectedBookmark.svg";
import { BucketType } from "../constants/Types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Modal from "./Modal";

const Bucket = ({
  uid,
  logo,
  title,
  assets,
  price,
  tvl,
  invested,
  type,
}: BucketType) => {
  const [bookmark, setBookmark] = useState(false);
  const [openModal, setModalOpen] = useState(false);
  const [showExtraCoins, setShowExtraCoins] = useState(false);
  const toggleBookmark = () => {
    setBookmark(!bookmark);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const location = useLocation();

  const handleInvestClick = () => {
    if (location.pathname === "/sip" || location.pathname === "/sip/") {
      setModalOpen(true);
    } else if (
      location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/"
    ) {
      console.log(location.pathname, "You are in dashboard");
    }
  };

  const remainingPercentage = () => {
    let totalPercentage = 0;
    for (let i = 3; i < assets.length; i++) {
      totalPercentage += assets[i].percentage;
    }
    return totalPercentage;
  };

  return (
    <div className="h-fit min-w-[30%] py-5 px-4 rounded-xl gradient2 shadow-lg  overflow-hidden">
      <div className="flex gap-4">
        <img
          className="h-28 w-28 my-2 rounded-xl aspect-square object-cover"
          src={logo ? logo : dummyImg}
          alt="logo"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <p className="text-2xl max-h-16 font-bold tracking-wide overflow-hidden line-clamp-2">
              {title}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-1 mt-2">
            <p>
              Price:- <span className="text-sm">{price} GHO</span>
            </p>
            <p>
              TVL:- <span className="text-sm">${tvl}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex pb-2 mt-4 min-w-full ">
        <Swiper
          spaceBetween={10}
          slidesPerView={assets.length < 4 ? assets.length : 4}
        >
          {assets.length > 4 ? (
            <>
              {showExtraCoins && assets.length > 4
                ? assets.map((asset, index) => (
                    <SwiperSlide key={index}>
                      <div className="">
                        <div className="relative">
                          <p className="absolute cursor-pointer left-1/2 translate-x-[-50%] justify-center items-center bg-white h-10 w-10 rounded-full font-semibold opacity-0 hover:bg-opacity-75 hover:opacity-100 hover:flex">
                            {asset.name}
                          </p>
                          <img
                            src={asset.logo}
                            className="h-10 w-10 mx-auto rounded-full shadow-md"
                            alt="logo"
                          />
                        </div>
                        <p className="text-center text-xs">
                          {asset.percentage}%
                        </p>
                      </div>
                    </SwiperSlide>
                  ))
                : assets.slice(0, 3).map((asset, index) => (
                    <SwiperSlide key={index}>
                      <div className="">
                        <div className="relative">
                          <p className="absolute cursor-pointer left-1/2 translate-x-[-50%] justify-center items-center bg-white h-10 w-10 rounded-full font-semibold opacity-0 hover:bg-opacity-75 hover:opacity-100 hover:flex">
                            {asset.name}
                          </p>
                          <img
                            src={asset.logo}
                            className="h-10 w-10 mx-auto rounded-full shadow-md"
                            alt="logo"
                          />
                        </div>
                        <p className="text-center text-xs">
                          {asset.percentage}%
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
              {!showExtraCoins && assets.length > 4 && (
                <SwiperSlide>
                  <div
                    className="min-w-fit m-auto h-10 w-10 bg-white bg-opacity-45 rounded-full flex items-center justify-center  shadow-md"
                    onClick={() => {
                      setShowExtraCoins(true);
                    }}
                  >
                    <p className="text-center text-lg">+{assets.length - 3}</p>
                  </div>
                  <p className="text-center text-xs">
                    {remainingPercentage()}%
                  </p>
                </SwiperSlide>
              )}
            </>
          ) : (
            <>
              {assets.map((asset, index) => (
                <SwiperSlide key={index}>
                  <div className="">
                    <div className="relative">
                      <p className="absolute cursor-pointer left-1/2 translate-x-[-50%] justify-center items-center bg-white h-10 w-10 rounded-full font-semibold opacity-0 hover:bg-opacity-75 hover:opacity-100 hover:flex">
                        {asset.name}
                      </p>
                      <img
                        src={asset.logo}
                        className="h-10 w-10 mx-auto rounded-full shadow-md"
                        alt="logo"
                      />
                    </div>
                    <p className="text-center text-xs">{asset.percentage}%</p>
                  </div>
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      </div>

      <div className="flex justify-center items-center gap-2">
        {invested ? (
          <>
            <button className="w-full text-center border border-transparent hover:border-black rounded-lg bg-rose-400 p-2 shadow-md hover:shadow-lg ">
              Sell
            </button>
            <button className="w-full text-center border border-transparent hover:border-black rounded-lg bg-lime-400 p-2 shadow-md hover:shadow-lg">
              Buy More
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleInvestClick}
              className="text-center border border-transparent hover:border-black rounded-lg bg-lime-400  shadow-md hover:shadow-lg p-2  w-[90%]"
            >
              Invest
            </button>
          </>
        )}
        <img
          className="h-7"
          onClick={toggleBookmark}
          src={bookmark ? selectedBookmark : bookmarkImg}
          alt="bookmark"
        />
      </div>
      {openModal && <Modal title={title} uid={uid} onClose={closeModal} />}
    </div>
  );
};

export default Bucket;
