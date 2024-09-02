import React from "react";
import CircleAnimation from "../components/CircleAnimation";

export default function ClubInsights() {
  return (
    <div className="h-screen">
      <div className="p-2 mt-[150px]">
        <h1 className="text-center sm:m-10 text-4xl">Club Insights</h1>
      </div>
      <div className="flex gap-10 items-center justify-center m-5">
        <div className="h-[400px] w-[320px] border shadow-lg rounded-xl">
          <div className="ml-[120px] mt-[100px]">
            <CircleAnimation />
          </div>
          <h1 className="ml-[100px] text-5xl m-5">300+</h1>
          <div className="">
            <h1 className="ml-[110px] font-light text-3xl ">Active</h1>
            <h1 className="ml-[90px] font-light text-3xl ">Members</h1>
          </div>
        </div>
        <div className="h-[400px] w-[320px] border shadow-lg rounded-xl">
          <div className="ml-[120px] mt-[100px]">
            <CircleAnimation />
          </div>
          <h1 className="ml-[100px] text-5xl m-5">300+</h1>
          <div className="">
            <h1 className="ml-[110px] font-light text-3xl ">Active</h1>
            <h1 className="ml-[90px] font-light text-3xl ">Members</h1>
          </div>
        </div>
        <div className="h-[400px] w-[320px] border shadow-lg rounded-xl">
          <div className="ml-[120px] mt-[100px]">
            <CircleAnimation />
          </div>
          <h1 className="ml-[100px] text-5xl m-5">300+</h1>
          <div className="">
            <h1 className="ml-[110px] font-light text-3xl ">Active</h1>
            <h1 className="ml-[90px] font-light text-3xl ">Members</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
