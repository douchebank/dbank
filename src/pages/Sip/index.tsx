import LeftSidebar from "../../components/LeftSidebar";
import Bucket from "../../components/Bucket";
import { BUCKET_TYPE } from "../../constants/Types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import search from "../../assets/search.svg"

const index = () => {
  const handleSearch = () => {
    console.log("Handle Search")
  }

  return (
    <div className="flex  w-full min-h-screen  ">
      <div className="w-[10%]">
        <LeftSidebar />
      </div>
      <div className=" w-[90%] h-fit  p-6 ">

        <div className="w-3/5 gap-2 flex justify-center items-center mx-auto gradient2 mb-6 border-2 shadow-lg border-black rounded-xl">
          <input type="text" className="p-2 px-4 w-full bg-transparent rounded-s-xl focus:outline-none " placeholder="Search..."/>
          <img onClick={handleSearch} className="h-8 p-1 px-2 border-l-2 hover:scale-110 border-black" src={search} alt="search"/>
        </div>

        <div className="w-full flex flex-wrap gap-4">
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
        </div>
      </div>
      {/* <Modal /> */}
    </div>
  );
};

export default index;
