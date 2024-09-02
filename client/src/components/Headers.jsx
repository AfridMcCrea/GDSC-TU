import React from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Headers() {
  const path = useLocation().pathname;
  return (
    <Navbar className="">
      <div className="flex m-1 lg:m-2">
        <img src={logo} alt="Logo" className="sm:h-6  m-3 mt-4 h-[10px]" />
        <div className="sm:flex sm:flex-col hidden">
          <span className="text-black ml-1 mt-2 sm:text-[14px] text-[11px] dark:text-gray-300">
            Google Developer Students Clubs
          </span>
          <span className="text-gray-600 ml-1 sm:text-[11px] text-[9px] dark:text-gray-400">
            Tezpur University
          </span>
        </div>
      </div>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/" className="text-gray-700 font-light text-[20px]">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about" className="text-gray-700 font-light text-[20px]">
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects" className="text-gray-700 font-light text-[20px]">
            Projects
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/blogs"} as={"div"}>
          <Link to="/projects" className="text-gray-700 font-light text-[20px]">
            Blog
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
