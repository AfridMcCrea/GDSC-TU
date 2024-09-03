import React from "react";
import CircleAnimation from "../components/CircleAnimation";
import backgroundImage from "../assets/background.png";
import events from "../assets/events.jpg";

export default function MeetTeam() {
  return (
    <div
      className="h-screen border"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-20 m-5 ">
        <div className="p-2 mt-[10px]">
          <h1 className="text-center sm:m-10 sm:text-[40px]">Meet the Team!</h1>
        </div>
        <div className="flex flex-wrap gap-10 items-center justify-center m-5">
          <div className="h-[300px] w-[280px] bg-gray-400 border shadow-lg rounded-[50px]">
            <div className="ml-[70px] mt-[40px]">
              <img
                src={events}
                alt=""
                className="rounded-full h-[150px] w-[150px]"
              />
            </div>
            <h1 className="ml-[51px] text-2xl mt-2">
              <span>Abhinav Upadhyay</span>
            </h1>
            <h1 className="ml-[90px] font-light text-xl ">GDSC Lead</h1>
          </div>
          <div className="h-[300px] w-[280px] bg-gray-400 border shadow-lg rounded-[50px]">
            <div className="ml-[70px] mt-[40px]">
              <img
                src={events}
                alt=""
                className="rounded-full h-[150px] w-[150px]"
              />
            </div>
            <h1 className="ml-[51px] text-2xl mt-2">
              <span>Abhinav Upadhyay</span>
            </h1>
            <h1 className="ml-[90px] font-light text-xl ">GDSC Lead</h1>
          </div>
          <div className="h-[300px] w-[280px] bg-gray-400 border shadow-lg rounded-[50px]">
            <div className="ml-[70px] mt-[40px]">
              <img
                src={events}
                alt=""
                className="rounded-full h-[150px] w-[150px]"
              />
            </div>
            <h1 className="ml-[51px] text-2xl mt-2">
              <span>Abhinav Upadhyay</span>
            </h1>
            <h1 className="ml-[90px] font-light text-xl ">GDSC Lead</h1>
          </div>
          <div className="h-[300px] w-[280px] bg-gray-400 border shadow-lg rounded-[50px]">
            <div className="ml-[70px] mt-[40px]">
              <img
                src={events}
                alt=""
                className="rounded-full h-[150px] w-[150px]"
              />
            </div>
            <h1 className="ml-[51px] text-2xl mt-2">
              <span>Abhinav Upadhyay</span>
            </h1>
            <h1 className="ml-[90px] font-light text-xl ">GDSC Lead</h1>
          </div>
          <div className="h-[300px] w-[280px] bg-gray-400 border shadow-lg rounded-[50px]">
            <div className="ml-[70px] mt-[40px]">
              <img
                src={events}
                alt=""
                className="rounded-full h-[150px] w-[150px]"
              />
            </div>
            <h1 className="ml-[51px] text-2xl mt-2">
              <span>Abhinav Upadhyay</span>
            </h1>
            <h1 className="ml-[90px] font-light text-xl ">GDSC Lead</h1>
          </div>
          <div className="h-[300px] w-[280px] bg-gray-400 border shadow-lg rounded-[50px]">
            <div className="ml-[70px] mt-[40px]">
              <img
                src={events}
                alt=""
                className="rounded-full h-[150px] w-[150px]"
              />
            </div>
            <h1 className="ml-[51px] text-2xl mt-2">
              <span>Abhinav Upadhyay</span>
            </h1>
            <h1 className="ml-[90px] font-light text-xl ">GDSC Lead</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
