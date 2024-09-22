import { useRef, useState } from "react";
import backgroundImage from "../assets/background.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../utils";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Events() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredEventId, setHoveredEventId] = useState(null);
  const eventsHeading = useRef(null);
  const borderNavbar = useRef(null);

  useGSAP(() => {
    if (eventsHeading.current) {
      gsap.from(eventsHeading.current, {
        y: 10,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#eventsHeading",
          markers: true,
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        },
      });
    }
  }, [eventsHeading]);

  useGSAP(() => {
    if (borderNavbar.current) {
      gsap.from(borderNavbar.current, {
        y: 10,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#border",
          markers: true,
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        },
      });
    }
  }, [borderNavbar]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter(
          (event) => event.category === selectedCategory.toLowerCase()
        );

  return (
    <div
      className="h-full overflow-x-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div id="eventsHeading" className="p-2 mt-[80px] w-full">
        <h1
          ref={eventsHeading}
          className="w-full flex flex-row justify-center text-[3rem]"
        >
          Events
        </h1>
        <div
          id="border"
          className="list-none w-full z-10 flex justify-center text-white pt-4 pb-6"
        >
          <ul
            ref={borderNavbar}
            className="flex flex-row border-[1px] border-slate-400 pl-6 rounded-3xl"
          >
            {["Workshops", "Sessions", "Competitions"].map((item, index) => (
              <li
                key={index}
                className={`py-4 pr-7 cursor-pointer hover:scale-105 transform ease-in-out duration-150 hover:font-semibold ${
                  selectedCategory === "Workshops"
                    ? "text-black"
                    : "text-slate-800 hover:text-black"
                }`}
                onClick={() => setSelectedCategory(`${item}`)}
              >
                <button
                  type="button"
                  className=""
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full ">
          <Slider {...settings}>
            {filteredData.map((d) => (
              <div
                key={d.id}
                className="p-4 relative"
                onMouseEnter={() => {
                  setHoveredEventId(d.id);
                }}
                onMouseLeave={() => setHoveredEventId(null)}
              >
                <div className="">
                  <div
                    className={`border-2 m-auto flex relative flex-col w-[24rem] bg-slate-50 shadow-lg rounded-3xl min-h-[500px] hover:scale-105 transform hover:scale-101 transition-transform duration-300 hover:cursor-pointer`}
                  >
                    <div className="flex pl-8 flex-col pt-4">
                      <div className="h-[5rem] w-full flex flex-col">
                        <button
                          type="button"
                          className="bg-[#2b2b2b] z-10 rounded-[25px] py-1 px-7 uppercase text-[2rem] text-white font-bold w-fit"
                        >
                          {d.title}
                        </button>
                        <p className="pl-2 pt-2 font-bold">
                          {`{ category: "${d.category.toUpperCase()}" }`}
                        </p>
                      </div>
                      <div className="w-full flex justify-center h-[20rem] items-center">
                        <div className="w-[90%]">
                          <p className="text-slate-400">{`<p>`}</p>
                          <p className="text-black text-xl">
                            {d.description} <br />
                          </p>
                          <p className="text-slate-400">{`<p>`}</p>
                        </div>
                      </div>
                      <div className="flex justify-center mt-auto">
                        <img
                          src=""
                          width={170}
                          alt=""
                          className="w-fit pt-4 pl-8 pr-8"
                        />
                      </div>
                      <div className="">
                        {/* <p className="text-[#808080] pl-8 pt-4 pb-4 hover:underline">
                          Know More
                        </p> */}
                        <button
                          type="button"
                          className="text-white px-4 py-1 bg-[#2b2b2b] rounded-xl hover:text-[#808080]"
                          onClick={() => {
                            navigate("/about");
                          }}
                        >
                          Know more
                        </button>
                        {hoveredEventId === d.id && (
                          <div className="absolute inset-0 transition-opacity ease-in-out duration-300">
                            <img
                              src={d.imageUrl}
                              alt={d.title}
                              className="object-cover w-full h-full rounded-3xl opacity-30"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
