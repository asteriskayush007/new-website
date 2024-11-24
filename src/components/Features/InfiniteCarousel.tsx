import React from "react";
import "../Features/InfiniteCarousel.css"; // CSS for custom animation

const InfiniteCarousel: React.FC = () => {
  return (
    <div className="slider relative w-full h-[150px] md:h-[150px] overflow-hidden bg-white">
      {/* Left gradient */}
      <div className="absolute inset-y-0 left-0 w-[200px] bg-gradient-to-r z-10"></div>

      {/* Right gradient */}
      <div className="absolute inset-y-0 right-0 w-[200px] bg-gradient-to-l z-10"></div>

      {/* Slider track */}
      <div className="slide-track flex animate-scroll bg-yellow-400">
        {Array(3)
          .fill([
            "https://img.icons8.com/?size=96&id=fpGM2cINbbu4&format=png",
            "https://imgix.datadoghq.com/img/dd_logo_n_70x75.png?ch=Width,DPR&fit=max&auto=format&w=70&h=75&dpr=2",
            "https://www.ibm.com/brand/experience-guides/developer/57dcf7c808bca7c58a7b6eabb80617c9/ibm-8-bar-positive.svg",
            "https://img.icons8.com/?size=160&id=OPUdQmdeIEMR&format=png",
            "https://img.icons8.com/?size=100&id=12599&format=png",
            "https://img.icons8.com/?size=160&id=RduYmqw5H7xm&format=png",
          ])
          .flat()
          .map((src, index) => (
            <div key={index} className="slide flex-shrink-0 w-[250px] h-[150px] flex items-center justify-center">
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[100px] object-contain" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
