import { useState } from "react";
import { useLocation } from 'react-router-dom';
import dummyImg from "../assets/recent.png";
import bookmarkImg from "../assets/bookmark.svg";
import selectedBookmark from "../assets/selectedBookmark.svg";
import { BucketType } from "../constants/Types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import ethereum from "../assets/icons/ethereum.png"
import avalanche from "../assets/icons/avalanche.png"
import arbitrum from "../assets/icons/arbitrum.png"
import optimistic from "../assets/icons/optimistic.png"
import polygon from "../assets/icons/polygon.png"
import usdt from "../assets/icons/usdt.png"
import Modal from "./Modal";
import bucketimg from "../assets/bucket/4.jpeg";

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
  const toggleBookmark = () => {
    setBookmark(!bookmark);
  };
  const closeModal = () => {
    setModalOpen(false);
  }

  const location = useLocation();

  const handleInvestClick = () => {
    if (location.pathname === "/sip" || location.pathname === "/sip/"){
      setModalOpen(true);
    } else if (location.pathname === "/dashboard" || location.pathname === "/dashboard/") {
      console.log(location.pathname, "You are in dashboard");
    } 
  }

  return (
    <div className="h-fit min-w-[30%] py-5 px-4 rounded-xl glass border-2 border-white shadow-lg overflow-hidden ">
      <div className="relative">
      <div className="flex gap-4">
        <img
          className="h-28 w-28 my-2 rounded-xl aspect-square object-cover "
          src={logo ? "" : bucketimg}
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
            <p >
              TVL:- <span className="text-sm">${tvl}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pb-2 mt-4 max-w-[350px] mx-auto">
      <Swiper
          spaceBetween={0}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
          <div >
            <div className="relative">
              <p className="absolute  cursor-pointer left-1/2 translate-x-[-50%] justify-center items-center  bg-white h-10 w-10 rounded-full font-semibold opacity-0 hover:bg-opacity-75 hover:opacity-100 hover:flex">Eth</p>
              <img src={ethereum} className="h-10 w-10 mx-auto rounded-full  shadow-md"  alt="logo"/>
            </div>
            <p className="text-center text-xs">10%</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
            <div className="relative">
              <p className="absolute  cursor-pointer left-1/2 translate-x-[-50%] justify-center items-center bg-white h-10 w-10 rounded-full font-semibold opacity-0 hover:bg-opacity-75 hover:opacity-100 hover:flex">Eth</p>
              <img src={arbitrum} className="h-10 w-10 mx-auto rounded-full  shadow-md"  alt="logo"/>
            </div>
            <p className="text-center text-xs">10%</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
            <div className="relative">
              <p className="absolute  cursor-pointer left-1/2 translate-x-[-50%] justify-center items-center bg-white h-10 w-10 rounded-full font-semibold opacity-0 hover:bg-opacity-75 hover:opacity-100 hover:flex">Eth</p>
              <img src={avalanche} className="h-10 w-10 mx-auto rounded-full  shadow-md"  alt="logo"/>
            </div>
            <p className="text-center text-xs">10%</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
            <div className="relative">
              <p className="absolute  cursor-pointer left-1/2 translate-x-[-50%] justify-center items-center bg-white h-10 w-10 rounded-full font-semibold opacity-0 hover:bg-opacity-75 hover:opacity-100 hover:flex">Eth</p>
              <img src={optimistic} className="h-10 w-10 mx-auto rounded-full  shadow-md"  alt="logo"/>
            </div>
            <p className="text-center text-xs">10%</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
            <div className="relative">
              <p className="absolute  cursor-pointer left-1/2 translate-x-[-50%] justify-center items-center bg-white h-10 w-10 rounded-full font-semibold opacity-0 hover:bg-opacity-75 hover:opacity-100 hover:flex">Eth</p>
              <img src={polygon} className="h-10 w-10 mx-auto rounded-full  shadow-md"  alt="logo"/>
            </div>
            <p className="text-center text-xs">10%</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
            <div className="relative">
              <p className="absolute  cursor-pointer left-1/2 translate-x-[-50%] justify-center items-center bg-white h-10 w-10 rounded-full font-semibold opacity-0 hover:bg-opacity-75 hover:opacity-100 hover:flex">Eth</p>
              <img src={usdt} className="h-10 w-10 mx-auto rounded-full  shadow-md"  alt="logo"/>
            </div>
            <p className="text-center text-xs">10%</p>
          </div>
        </SwiperSlide>
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
            <button onClick={handleInvestClick} className="text-center text-white border border-transparent hover:border-black rounded-lg bg-black  shadow-md hover:shadow-lg p-2  w-[90%]">
              Invest
            </button>
          </>
        )}
      </div>
      <img
        className="h-6 absolute -top-5 -right-2"
        onClick={toggleBookmark}
        src={bookmark ? selectedBookmark : bookmarkImg}
        alt="bookmark"
      />
      </div>

      {
        openModal && 
          <Modal title={title} uid = {uid}  onClose={closeModal}/>   
      }
    </div>
  );
};

export default Bucket;
