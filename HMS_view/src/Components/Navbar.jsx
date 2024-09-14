import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="bg-slate-800 h-16 px-16 py-4 items-center flex">
        <h1 className=" text-5xl font-bold text-green-500">EMS SERVICE</h1>
        <div className="space-x-4 ml-auto ">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>
          <a href="#" className="hover:text-blue-400">
            Login
          </a>
          <a href="#" className="hover:text-blue-400">
            Page
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar