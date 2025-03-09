import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function PosterSlider() {
    const slides = [
        {
            url: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FWeb%2520Banner%2Feverseas-dawago-banner-web4.jpg&w=1920&q=50",
        },
        {
            url: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FWeb%2520Banner%2FGift%2520of%2520Care-Web-Banner.jpg&w=1920&q=50",
        },
        {
            url: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FWeb%2520Banner%2Feverseas-dawago-banner-web4.jpg&w=1920&q=50",
        },
        {
            url: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FWeb%2520Banner%2FGift%2520of%2520Care-Web-Banner.jpg&w=1920&q=50",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [iconSize, setIconSize] = useState(30);

    useEffect(() => {
      const updateSize = () => {
        if (window.innerWidth < 600) {
          setIconSize(15); // Smaller size for mobile
        } else if (window.innerWidth < 1024) {
          setIconSize(25); // Medium size for tablets
        } else {
          setIconSize(30); // Default size for desktops
        }
      };
  
      updateSize(); // Initial size
      window.addEventListener("resize", updateSize);
  
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    console.log(iconSize)
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        
        return () => clearInterval(interval);
    }, [currentIndex]);
    return (
        <div  className="w-full  mt-0 sm:mt-4 md:mt-10  xl:mt-16 lg:mt-14  h-[100px]  sm:h-[200px] md:h-[240px] lg:h-[320px] xl:h-[365px] m-auto  px-0 relative group">
            {/* Image Slider */}
            <div className="w-full h-full flex justify-center items-center">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.url}
                        alt={`Slide ${index + 1}`}
                        className={`absolute h-full xl:w-[1280px] object-contain transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
            </div>

            {/* Left Arrow */}
            <div
                onClick={prevSlide}
                className="hidden group-hover:block absolute top-[50%] left-8 -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            >
                <BsChevronCompactLeft size={iconSize} />
            </div>

            {/* Right Arrow */}
            <div
                onClick={nextSlide}
                className="hidden group-hover:block absolute top-[50%] right-8 -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            >
                <BsChevronCompactRight size={iconSize} />
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center py-0 sm:py-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`text-xl cursor-pointer ${index === currentIndex ? "text-red-500" : "text-gray-400"
                            }`}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PosterSlider;













// import React, { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

// function PosterSlider() {
//     const slides = [
//         {
//             url: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FWeb%2520Banner%2Feverseas-dawago-banner-web4.jpg&w=1920&q=50",
//         },
//         {
//             url: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FWeb%2520Banner%2FGift%2520of%2520Care-Web-Banner.jpg&w=1920&q=50",
//         },
//         {
//             url: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FWeb%2520Banner%2Feverseas-dawago-banner-web4.jpg&w=1920&q=50",
//         },
//         {
//             url: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FWeb%2520Banner%2FGift%2520of%2520Care-Web-Banner.jpg&w=1920&q=50",
//         },
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const prevSlide = () => {
//         setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     };

//     const nextSlide = () => {
//         setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     };

//     return (
//         <div className="w-full h-[467px] m-auto py-16 px-0 relative overflow-hidden">
//             <div className="flex w-full h-full transition-transform duration-500 ease-in-out"
//                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//                 {slides.map((slide, index) => (
//                     <img
//                         key={index}
//                         src={slide.url}
//                         alt={`Slide ${index + 1}`}
//                         className="h-full w-full object-contain flex-shrink-0"
//                     />
//                 ))}
//             </div>

//             {/* Left Arrow */}
//             <div
//                 onClick={prevSlide}
//                 className="absolute top-[50%] left-5 -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
//             >
//                 <BsChevronCompactLeft size={30} />
//             </div>

//             {/* Right Arrow */}
//             <div
//                 onClick={nextSlide}
//                 className="absolute top-[50%] right-5 -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
//             >
//                 <BsChevronCompactRight size={30} />
//             </div>
//         </div>
//     );
// }

// export default PosterSlider;

