"use client";

import { useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://cdn.dorahacks.io/static/files/1934329233f6a0a3126d09c4d17a135e.png@256h.webp",
    "https://cdn.dorahacks.io/static/files/18fbe8683f32ac95fc8c2dd40e4b62d6.jpg@256h.webp",
    "https://cdn.dorahacks.io/static/files/19347c89af8613f149d8dde4d1397c6e.png@256h.webp",
    "https://cdn.dorahacks.io/static/files/1932984823dda18eabbf77b439bbed78.png@256h.webp",
    "https://cdn.dorahacks.io/static/files/1924c22d15de99bf62a74b546e184d65.jpg@256h.webp",
    "https://cdn.dorahacks.io/static/files/19242449a4fa05986566e824c1cbc6a8.png@256h.webp",
  ];

  useEffect(() => {
    let currentIndex = 0;
    const totalSlides = images.length;
    const slider = document.getElementById("slider") as HTMLDivElement;
    const dots = document.querySelectorAll(".dot");

    const updateSlider = () => {
      slider.style.transform = `translateX(-${(currentIndex % totalSlides) * 100}%)`;

      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add("bg-gray-800");
          dot.classList.remove("bg-gray-400");
        } else {
          dot.classList.add("bg-gray-400");
          dot.classList.remove("bg-gray-800");
        }
      });
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    };

    const dotClick = (index: number) => {
      currentIndex = index;
      updateSlider();
    };

    const slideInterval = setInterval(nextSlide, 3000);

    document.getElementById("prev")?.addEventListener("click", prevSlide);
    document.getElementById("next")?.addEventListener("click", nextSlide);
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => dotClick(index));
    });

    return () => {
      clearInterval(slideInterval);
    };
  }, [images.length]);

  return (
    <div className="relative w-full lg:h-80 lg:w-[80%] md:w-[50%] max-w-3xl mx-auto mt-5 overflow-hidden rounded-lg shadow-lg">
      {/* Slider */}
      <div
        id="slider"
        className="flex transition-transform duration-500"
        style={{ transform: "translateX(0%)" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover max-h-[40vh] lg:h-80"
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        id="prev"
        className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 md:p-3 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        id="next"
        className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 md:p-3 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-gray-400 dot"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
