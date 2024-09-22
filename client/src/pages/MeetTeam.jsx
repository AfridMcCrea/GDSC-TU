import backgroundImage from "../assets/background.png";
import { leads } from "../utils";

export default function MeetTeam() {
  return (
    <div
      className="border"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-20 m-5">
        <div className="p-2 pt-[10px]">
          <h1 className="text-center sm:m-10 sm:text-[40px]">Meet the Team</h1>
        </div>
        <div className="text-[1.5rem] w-full">
          <h3 className="w-full font-semibold">Presenting your leads:</h3>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center m-5">
          {leads.map((lead, index) => (
            <div
              key={index}
              id={lead.id}
              className="h-[450px] w-[320px] bg-slate-300 border shadow-xl rounded-[50px]"
            >
              <div className="flex justify-center h-[45%] pt-[40px]">
                <img
                  src={lead.imageUrl}
                  alt=""
                  className="rounded-full shadow-2xl h-[150px] w-[150px]"
                />
              </div>
              <div className="w-full flex justify-center h-[10%] text-3xl pt-2">
                <span>{lead.name}</span>
              </div>
              <div className="w-full flex justify-center h-[5%] font-light text-lg ">
                <span className="pr-4 font-medium">
                  {lead.title.toUpperCase()}
                </span>
              </div>
              <div className="w-full flex justify-center items-center pt-4 pb-2 h-[20%]">
                <div className="w-[80%] flex justify-center text-sm">
                  {`"${lead.quote}"`}
                </div>
              </div>
              <div className="w-full h-[5%] mb-2">
                <p className="pl-10">Follow on:</p>
              </div>
              <div className="w-full flex justify-center h-[15%]">
                <div className="w-[80%] flex flex-row gap-2">
                  <div className="basis-1/4 flex justify-center">
                    <img
                      src="../public/instagram.png"
                      alt=""
                      className="w-9 h-9 hover:cursor-pointer hover:scale-110 transform duration-150 ease-in-out"
                    />
                  </div>
                  <div className="basis-1/4 flex justify-center">
                    <img
                      src="../public/linkedin.png"
                      alt=""
                      className="w-9 h-9 hover:cursor-pointer hover:scale-110 transform duration-150 ease-in-out"
                    />
                  </div>
                  <div className="basis-1/4 flex justify-center">
                    <img
                      src="../public/twitter.png"
                      alt=""
                      className="w-9 h-9 hover:cursor-pointer hover:scale-110 transform duration-150 ease-in-out"
                    />
                  </div>
                  <div className="basis-1/4 flex justify-center">
                    <img
                      src="../public/github.png"
                      alt=""
                      className="w-9 h-9 hover:cursor-pointer hover:scale-110 transform duration-150 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
