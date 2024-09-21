import { useState } from "react";
import backgroundImage from "../assets/background.png";
import events from "../assets/events.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredEventId, setHoveredEventId] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const data = [
    {
      participation: "solo",
      id: "1",
      category: "tech",
      title: "HACKATHON",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque vel tempus viverra,arcu ipsum egestas nisi, a convallis neque tellus vel velit.",
      imageUrl: "../../public/tsn.jpg",
    },
    {
      participation: "team",
      id: "2",
      category: "games",
      title: "React Ep 00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque vel tempus viverra, arcu ipsum egestas nisi, a convallis neque tellus vel velit.",
      imageUrl: "../",
    },
    {
      participation: "solo",
      id: "3",
      category: "tech",
      title: "CODE WAR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque vel tempus viverra, arcu ipsum egestas nisi, a convallis neque tellus vel velit.",
      imageUrl: "./code war.jpeg",
    },
    {
      participation: "solo",
      id: "4",
      category: "workshops",
      title: "TEDTALK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque vel tempus viverra, arcu ipsum egestas nisi, a convallis neque tellus vel velit.",
      imageUrl: "./tedtalk.jpeg",
    },
  ];

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter(
          (event) => event.category === selectedCategory.toLowerCase()
        );

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-2 mt-[80px] w-full">
        <h1 className="w-full flex flex-row justify-center text-[3rem]">
          Events
        </h1>
        <div className="list-none w-full z-10 flex justify-center text-white pt-4 pb-6">
          <ul className="flex flex-row border-[1px] border-slate-400 px-6 rounded-3xl">
            <li
              className={`py-4 pr-7 cursor-pointer hover:scale-105 transform ease-in-out duration-150 hover:font-semibold ${
                selectedCategory === "Workshops"
                  ? "text-black"
                  : "text-slate-800 hover:text-black"
              }`}
              onClick={() => setSelectedCategory("Workshops")}
            >
              Workshops
            </li>
            <li
              className={`py-4 pr-7 cursor-pointer hover:scale-105 transform ease-in-out duration-150 hover:font-semibold ${
                selectedCategory === "Sessions"
                  ? "text-black"
                  : "text-slate-800 hover:text-black"
              }`}
              onClick={() => setSelectedCategory("Sessions")}
            >
              Sessions
            </li>
            <li
              className={`py-4 cursor-pointer hover:scale-105 transform ease-in-out duration-150 hover:font-semibold ${
                selectedCategory === "Competitions"
                  ? "text-black"
                  : "text-slate-800 hover:text-black"
              }`}
              onClick={() => setSelectedCategory("Competitions")}
            >
              Competitions
            </li>
          </ul>
        </div>
        <div className="w-full">
          <Slider {...settings}>
            {filteredData.map((d) => (
              <div
                key={d.id}
                className="p-4"
                onMouseEnter={() => {
                  setHoveredEventId(d.id);
                }}
                onMouseLeave={() => setHoveredEventId(null)}
              >
                <div className="">
                  <div
                    className={`flex relative flex-col w-[25rem] bg-slate-50 shadow-lg rounded-3xl min-h-[500px] hover:scale-105 transform hover:scale-101 transition-transform duration-300 hover:cursor-pointer`}
                  >
                    <div className="flex pl-8 flex-col pt-4">
                      <div className="h-[4rem] w-full">
                        <button
                          type="button"
                          className="bg-[#2b2b2b] rounded-[25px] py-1 px-7 uppercase text-[2rem] text-white font-bold w-fit"
                        >
                          {d.title}
                        </button>
                      </div>
                      <div className="w-full flex justify-center h-[20rem] items-center">
                        <div className="w-[90%]">
                          <p className="text-black text-xl">{d.description}</p>
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
                        <p className="text-[#808080] pl-8 pt-4 pb-4">
                          Know More
                        </p>
                        {hoveredEventId === d.id && (
                          <div className="absolute inset-0 opacity-30 transition-opacity ease-in-out duration-300">
                            <img
                              src={d.imageUrl}
                              alt={d.title}
                              className="object-cover w-full h-full rounded-3xl"
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
