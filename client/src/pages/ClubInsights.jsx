import CircleAnimation from "../components/CircleAnimation";
// import backgroundImage from "../assets/background.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CountUp from 'react-countup'

export default function ClubInsights() {
  const headingRef = useRef(null);
  useGSAP(
    () => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          y: 10,
          delay: 0.5,
          duration: 0.5,
          opacity: 0,
          scrollTrigger: {
            trigger: "#heading",
            markers: true,
            start: "top 80%",
            end: "top 30%",
            scrub: 2,
          },
        });
      }
    },
    {
      scope: headingRef,
    }
  );

  return (
    <div
      id="divOne"
      className="max-h-screen pb-60 bg-gradient-to-b from-[#539e44] via-[#fff] to-[#ffff]"
      
    >
      <div id="heading" ref={headingRef} className="p-2 pt-44">
        <h1 ref={headingRef} className="text-center font- sm:m-10 sm:text-[40px]">
          Club Insights
        </h1>
      </div>
      <div className="flex gap-10 items-center justify-center m-5">
        <div className="h-[400px] w-[320px] border shadow-lg rounded-xl">
          <div className="ml-[120px] mt-[100px]">
            <CircleAnimation />
          </div>
          <h1 className="ml-[100px] text-5xl m-5">
            <CountUp start={0} end={300} duration={4} />+
          </h1>
          <div className="">
            <h1 className="ml-[110px] font-light text-3xl ">Active</h1>
            <h1 className="ml-[90px] font-light text-3xl ">Members</h1>
          </div>
        </div>
        <div className="h-[400px] w-[320px] border shadow-lg rounded-xl">
          <div className="ml-[120px] mt-[100px]">
            <CircleAnimation />
          </div>
          <h1 className="ml-[100px] text-5xl m-5">
          <CountUp start={0} end={300} duration={4} />+
          </h1>
          <div className="">
            <h1 className="ml-[110px] font-light text-3xl ">Active</h1>
            <h1 className="ml-[90px] font-light text-3xl ">Members</h1>
          </div>
        </div>
        <div className="h-[400px] w-[320px] border shadow-lg rounded-xl">
          <div className="ml-[120px] mt-[100px]">
            <CircleAnimation />
          </div>
          <h1 className="ml-[100px] text-5xl m-5">
          <CountUp start={0} end={300} duration={4} />+
          </h1>
          <div className="">
            <h1 className="ml-[110px] font-light text-3xl ">Active</h1>
            <h1 className="ml-[90px] font-light text-3xl ">Members</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
