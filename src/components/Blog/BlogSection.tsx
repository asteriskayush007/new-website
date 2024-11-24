import React from "react";
import ImageSlider from "../Common/ImageSlider"; // Adjust the import path based on your project structure

const BlogSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-4 h-auto md:h-[50vh] w-full p-6 md:p-16">
      {/* Left Section */}
      <div className="left-div md:ml-12 mt-8 md:mt-[10vh] h-auto w-full md:w-[50%] text-center md:text-left">
        <h1 className="text-2xl md:text-5xl font-medium">
          The Hub of Open Source Contribution Event
        </h1>
        <br />
        <h3 className="text-base md:text-xl font-light">
        DevRhylme Foundation invites you to dive into the world of open source through impactful contributions and engaging events. Collaborate, innovate, and create at our hackathons, or host your own to empower the developer community.
        </h3>
        <br />
        <div className="flex flex-col md:flex-row h-auto md:h-32 w-full items-center md:items-start">
          <button
            className="h-12 w-full md:w-60 bg-blue-500 text-white rounded-md mb-4 md:mb-0"
            type="button"
          >
            Create an Event
          </button>
          <button
            className="h-12 w-full md:w-60 border-solid border-2 border-zinc-500 rounded-md md:ml-10 hover:bg-zinc-900 hover:text-white"
            type="button"
          >
            View Guide
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-div mt-8 md:mt-[5vh] h-auto w-full md:w-[50%] relative overflow-hidden">
        <ImageSlider />
      </div>
    </div>
  );
};

export default BlogSection;
