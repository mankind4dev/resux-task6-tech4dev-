import React from "react";
import { Link } from "react-router-dom";

import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export default function Home() {
  return (
    <>
      <div className="flex gap-2">
        <Sidebar aria-label="Sidebar with content separator example" className="min-h-screen">
          <Sidebar.Items  className="mb-10 min-h-screen">
            <Sidebar.ItemGroup className="gap-10">
              <p className=" md:w-1/1 font-bold dark:text-white text-5xl px-2 py-1 bg-gradient-to-r from-indigo-700 via-purple-400 to-pink-500 rounded-lg text-white">
                Quinn
              </p>
              <Sidebar.Item href="#" icon={HiChartPie} className="mb-5 mt-5">
                Dashboard
              </Sidebar.Item>
              
              <Link to="/dashboard">
              <Sidebar.Item href="#" icon={HiUser} className="mb-5">
                Users
              </Sidebar.Item>
              </Link> 
              <Sidebar.Item href="#" icon={HiArrowSmRight} className="mb-5">
                Sign Out
              </Sidebar.Item>
              
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar> 
        <div className="flex max-w-lg mx-auto text-center justify-center">
          <div className=" ">
            
          <p className="text-sm mt-5 ">
            Welcome to Quinn Platform, your premier destination for mastering
            frontend frameworks. Sign up with your email and password and enjoy
            your learning.
          </p>
          <div className="w-8 pt-5 rounded border-sky-300">
            sdh
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
