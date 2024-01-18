import Slider from "react-slick";
import { useState } from "react";
import dummyImg from "../assets/recent.png";
import bookmarkImg from "../assets/bookmark.svg";
import selectedBookmark from "../assets/selectedBookmark.svg";
import { BucketType } from "../constants/Types";

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
  const toggleBookmark = () => {
    setBookmark(!bookmark);
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    adaptiveHeight: true,
    centerPadding: "20px"
  }

  return (
    <div className=" relative min-w-[30%] py-5 px-4 mx-3 rounded-xl gradient2 shadow-lg  ">
      <div className="flex">
        <img
          className="h-28 w-28 rounded-xl "
          src={logo ? "" : dummyImg}
          alt="logo"
        />
        <div className="w-full pl-4">
          <div className="flex justify-between gap-2 items-center">
            <p className="text-3xl font-bold tracking-wide text-ellipsis overflow-hidden max-w-48">
              {title}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-1 mt-2">
            <p className="">
              Price:- <span className="text-sm">{price} GHO</span>
            </p>
            <p className="">
              TVL:- <span className="text-sm">${tvl}</span>
            </p>
          </div>
        </div>
      </div>
      <Slider {...settings} className="flex gap-4 mt-4 max-w-[350px] overflow-hidden">
        <span className="h-6 w-6 p-6  rounded-full bg-blue-700"></span>
        <span className="h-6 w-6 p-6  rounded-full bg-blue-700"></span>
        <span className="h-6 w-6 p-6  rounded-full bg-blue-700"></span>
        <span className="h-6 w-6 p-6  rounded-full bg-blue-700"></span>
      </Slider>
      <div className="flex justify-center items-center mt-4  gap-2">
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
            <button className="text-center border border-transparent hover:border-black rounded-lg bg-lime-400  shadow-md hover:shadow-lg p-2 w-[90%]">
              Invest
            </button>
          </>
        )}
      </div>
      <img
        className="h-6 absolute top-0 right-0"
        onClick={toggleBookmark}
        src={bookmark ? selectedBookmark : bookmarkImg}
        alt="bookmark"
      />
    </div>
  );
};

export default Bucket;
