import React from "react";
import logo from "../assets/logo.png";
import WavesSvg from "../components/WavesSvg";
import "../components/WavesSvg.css";
import ClubInsights from "./ClubInsights";
import Headers from "../components/Headers";
import Events from "./Events";
import MeetTeam from "./MeetTeam";

export default function Home() {
  return (
    <div className="h-screen">
      <Headers />
      <div className="mt-[250px] sm:mt-[120px] ml-[50px]">
        <div className="ml-[115px]">
          <img
            src={logo}
            alt="Logo"
            className="m-3 mt-4 h-[35px] sm:h-[100px] sm:ml-[450px]"
          />
        </div>
        <div className="sm:ml-[270px]">
          <h1 className="text-black dark:text-gray-300 sm:text-[54px] text-[21px]">
            Google Developer Student Clubs
          </h1>
          <h1 className="text-gray-500 dark:text-gray-300 sm:text-[40px] text-[21px] ml-[80px] sm:ml-[270px]">
            Tezpur University
          </h1>
        </div>
      </div>
      <div className="sm:w-[1450px] w-[650px] sm:mr-5 mt-5">
        <WavesSvg />
      </div>
      <ClubInsights />
      <Events />
      <MeetTeam/>
    </div>
  );
}
