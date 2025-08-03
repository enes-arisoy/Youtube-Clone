import React from "react";

const Homepage = () => {
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 text-center w-fit">
      <div className="border border-gray-500 rounded-xl px-2 py-1">
        <h1
          className=" text-2xl font-bold mt-2 text-nowrap"
          style={{ fontSize: "clamp(1rem, 2vw, 2rem)" }}
        >
          Try searching to get started
        </h1>
        <p
          className="text-[#9DAAAA] text-sm mt-2 text-nowrap"
          style={{ fontSize: "clamp(0.6rem, 1vw, 1.6rem)" }}
        >
          Start watching videos to help us build a feed of videos you'll love.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
