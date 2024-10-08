import { Button } from "flowbite-react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleTheme } from "../redux/theme/themSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div className="flex w-full p-5 px-8 justify-between">
        <Link to="/">
          <img
            src="./src/assets/images/logo.png"
            alt="Logo"
            className="w-[80px] h-[30px]"
          />
        </Link>

        <nav className="flex gap-5 md:flex">
          <li className="list-none ">
            <Link to="/" className="no-underline capitalize text-xl">
              Home
            </Link>
          </li>
          <li className="list-none ">
            <Link to="/project" className="no-underline capitalize text-xl ">
              projects
            </Link>
          </li>
          <li className="list-none ">
            <Link to="/about" className="no-underline capitalize text-xl ">
              About
            </Link>
          </li>
        </nav>
        <div className="flex gap-5">
          <div className="flex gap-4 md:order-4">
            <Button
              onClick={() => dispatch(toggleTheme())}
              className="w-12 h-10  hidden sm:inline"
              color="gray"
              pill
            >
              {theme === "light" ? <FaSun /> : <FaMoon />}
            </Button>
          </div>

          <button className="">
            {currentUser ? (
              <>
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar
                      alt="user"
                      src={Logo}
                      sx={{ width: 56, height: 56 }}
                      rounded
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">
                      @{currentUser.username}
                    </span>
                    <span className="block text-sm font-medium truncate">
                      {currentUser.email}
                    </span>
                  </Dropdown.Header>
                  <Link to="/dashboard">
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Sign Out</DropdownItem>
                  </Link>
                </Dropdown>
              </>
            ) : (
              <Link to="/register" className="whitespace-nowrap">
                <Button gradientDuoTone="purpleToBlue" outline>
                  Sign Up
                </Button>
              </Link>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
