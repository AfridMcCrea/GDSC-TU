import React from "react";
import logo from "../assets/logo.png";
import waves from "../assets/wave.svg";
export default function Home() {
  return (
    <div>
      <div className="ml-[50px] mt-[250px] sm:mt-[120px]">
        <div className="ml-[115px]">
          <img
            src={logo}
            alt="Logo"
            className="sm:h-[100px] sm:ml-[450px]  m-3 mt-4 h-[35px] "
          />
        </div>
        <div className="sm:ml-[270px]">
          <h1 className="text-black  sm:text-[54px] text-[21px] dark:text-gray-300">
            Google Developer Students Clubs
          </h1>
          <h1 className="text-gray-500 sm:ml-[270px]  sm:text-[40px] text-[21px] dark:text-gray-300 ml-[80px]">
            Tezpur University
          </h1>
        </div>
      </div>
      <div className="">
        <img
          src={waves}
          alt="Logo"
          className="h-[750px] w-[500px] sm:h-[550px] sm:w-[1600px]"
        />
      </div>
    </div>
  );
}
