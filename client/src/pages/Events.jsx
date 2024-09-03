import React from "react";
import CircleAnimation from "../components/CircleAnimation";
import backgroundImage from "../assets/background.png";
import events from "../assets/events.jpg";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-2 mt-[80px]">
        <h1 className="text-center sm:m-10 sm:text-[40px]">Events</h1>
        <div className="ml-[200px] mr-[100px] flex">
          {/* left */}
          <div className="flex gap-[80px]">
            <img
              src={events}
              className="h-[500px] w-[380px] border shadow-lg rounded-3xl"
            />
            <div class="h-[450px] mt-[30px] border-l-2 border-black rounded"></div>
          </div>
          {/* right */}
          <div className="flex flex-col gap-4 ml-[50px]">
            <div className="flex gap-4">
              <img
                src={events}
                className="h-[250px] w-[250px] border shadow-lg rounded-xl"
              />
              <img
                src={events}
                className="h-[250px] w-[250px] border shadow-lg rounded-xl"
              />
            </div>
            <div className="flex gap-4">
              <img
                src={events}
                className="h-[250px] w-[250px] border shadow-lg rounded-xl"
              />
              <div className="group relative h-[250px] w-[250px] overflow-hidden border sm:w-[250px] shadow-lg hover:border-2 transition-all rounded-lg">
                <img
                  src={events}
                  alt="post cover"
                  className="h-[300px] w-[250px] object-cover group-hover:h-full transition-all duration-300 z-20 group-hover:filter group-hover:blur-sm"
                />
                <Link
  to="#"
  className="z-10 group-hover:bottom-[190px] absolute bottom-[-200px] left-0 right-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 via-purple-500 to-red-500 hover:bg-black hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
>
  Hacktober
</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
