import React from 'react'

type RegisterParams = {
    onClose : ()=> void
}

const Register = ({onClose}: RegisterParams) => {
  return (
    <div className="w-[20em] h-[18em] absolute  text-center gradient shadow-lg rounded-xl p-4 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="text-center font-bold text-xl">Create Account</p>
        <div className='flex flex-col my-12 gap-4'>
          <input className="w-full p-2 rounded-lg border border-grey" type="text" placeholder="Enter your name"/>
          <button className="p-2 px-4 w-full rounded-lg bg-black text-white shadow-lg">Register</button>
        </div>
        <p onClick={onClose} className=" w-full text-gray-700 pt-2 border-t border-dashed border-gray-500">Or Login ?</p>
    </div>
  )
}

export default Register