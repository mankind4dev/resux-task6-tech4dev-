import React from 'react'

export default function Home() {
  return (
    <div>
      <aside
        aria-label="Default sidebar example"
       className="absolute top-30 left-0  w-64 h-[500px]" 
      >
        <div className="mt-4 ml-5">

        <p className=" md:w-1/1 font-bold dark:text-white text-5xl px-2 py-1 bg-gradient-to-r from-indigo-700 via-purple-400 to-pink-500 rounded-lg text-white">
          Quinn
        </p>
        <p className="text-sm mt-5 ">
          Welcome to Quinn Platform, your premier destination for mastering
          frontend frameworks. Sign up with your email and password and enjoy
          your learning.
        </p>
        </div>
      </aside>
    </div>
  )
}
