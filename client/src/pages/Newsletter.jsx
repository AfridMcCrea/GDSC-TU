import backgroundImage from "../assets/background.png";

const Newsletter = () => {

  return (
    <div
      className="max-h-screen w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full pt-8 flex justify-center text-[40px]">
        <p className="">Stay in the loop!</p>
      </div>
      <div className="w-full flex justify-center text-[20px]">
        <div className="w-[80%] flex justify-center">
          <p className="">
            Get the Latest Updates about technology, Events, and Exclusive Perks
            in GDG, Delivered Right to Your Inbox!
          </p>
        </div>
      </div>
      <div className="py-[6rem] flex justify-center">
        <div className="w-[30%] flex flex-row gap-1">
          <div className="basis-2/3">
            <input
              className="border-2 w-full border-gray-400 rounded-lg px-4 py-2 text-sm"
              type="email"
              placeholder="Your Email Address"
            />
          </div>
          <div className="basis-1/3 flex justify-center items-center">
            <button
              type="button"
              className="px-4 py-2 rounded-lg font-semibold hover:cursor-pointer hover:scale-105 transform ease-in-out duration-150 bg-black text-white"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
