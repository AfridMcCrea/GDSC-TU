import React from "react";
import CircleAnimation from "../components/CircleAnimation";
import events from "../assets/events.jpg";

export default function Events() {
  return (
    <div className="h-screen">
      <div className="p-2 mt-[80px]">
        <h1 className="text-center sm:m-10 text-4xl">Events</h1>
        <div className="ml-[200px] mr-[100px] flex">
          {/* left */}
          <div className="flex gap-[80px]">
            <img src={events} className="h-[500px] w-[380px] border shadow-lg rounded-3xl"
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
              <img
                src={events}
                className="h-[250px] w-[250px] border shadow-lg rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
