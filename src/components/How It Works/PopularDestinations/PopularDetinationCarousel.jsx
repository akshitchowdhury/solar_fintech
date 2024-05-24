import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularDestinationCard from "./PopularDestinationCard";

const PopularDetinationCarousel = ({ testimonials }) => {
  const sliderRef = useRef(null);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSliding && sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isSliding]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Disable autoplay as we're handling it manually
    autoplaySpeed: 4000,
    arrows: true,
    beforeChange: (_, next) => {
      setIsSliding(true);
    },
    afterChange: () => {
      setIsSliding(false);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-inherit flex flex-col md:flex-row sm:flex-col py-16 px-6">
        <h2 className="text-center text-black text-3xl py-4 my-8 font-semibold md:text-3xl mb-8">
           Book your dream getaway today and embark on an unforgettable
          journey with us!:
        </h2>
        <div className="max-w-full md:max-w-2xl mx-auto">
          {" "}
          {/* Adjusted max-width */}
          <div className="carousel">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card-container mx-auto">
                  <PopularDestinationCard {...testimonial} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularDetinationCarousel;
