import { useState } from "react"
import dummyImg from "../assets/recent.png"
import bookmarkImg from "../assets/bookmark.svg"
import selectedBookmark from "../assets/selectedBookmark.svg"

const Baskets = () => {
  const [bookmark, setBookmark] = useState(false)
  const toggleBookmark = () => {
    setBookmark(!bookmark)
  }
  return (

      <div className="w-fit p-4 rounded-xl gradient2 shadow-lg ">
        <div className="flex">
          <img className="h-28 w-28 rounded-xl " src={dummyImg} alt="logo" />
          <div className="w-full pl-4">
            <div className="flex justify-between gap-2 items-center">
              <p className="text-3xl font-bold tracking-wide">Name</p>  
              <img className="h-6" onClick={toggleBookmark} src={bookmark ? selectedBookmark : bookmarkImg } alt="bookmark" />
            </div>
            <div className="flex justify-between mt-2">
              <p className="">Price</p>
              <p className="">Tvl</p>
            </div>
          </div>
          </div>
          <div className="flex mt-4 gap-4 max-w-[250px] overflow-x-scroll scrollbar">
            <span className="h-6 w-6 p-6 rounded-full bg-blue-700"></span>
            <span className="h-6 w-6 p-6 rounded-full bg-blue-700"></span>
            <span className="h-6 w-6 p-6 rounded-full bg-blue-700"></span>
            <span className="h-6 w-6 p-6 rounded-full bg-blue-700"></span>  
            <span className="h-6 w-6 p-6 rounded-full bg-blue-700"></span>  
            <span className="h-6 w-6 p-6 rounded-full bg-blue-700"></span>  
        </div >
        <div className="flex mt-4 gap-2">
          <button className="border rounded-lg border-black shadow-lg p-2 w-full  ">Sell</button>
          <button className="border rounded-lg border-black shadow-lg p-2 w-full">Buy More</button>
        </div>
      </div>
  )
}

export default Baskets