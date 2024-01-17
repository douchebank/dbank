
import dummyImg from "../assets/recent.png"
const Baskets = () => {
  return (
    <div className=''>
      <div className="w-[25%] border rounded-xl gradient2  ">
        <img className="h-28 w-28 rounded-xl " src={dummyImg} alt="logo" />
        <div>
          <p className="text-3xl font-bold tracking-wide">Name</p>
          <p className="whitespace-pre-wrap text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptates.</p>
        </div>
      </div>
    </div>
  )
}

export default Baskets