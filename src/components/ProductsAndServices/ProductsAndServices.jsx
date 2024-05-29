import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


import microsharesImg from '../../assets/browseMicroshare.png';
import corporateSolutionsImg from '../../assets/browseMicroshare.png';
import technologyImg from '../../assets/browseMicroshare.png';

// Initialize AOS
AOS.init();

const ProductsAndServices = () => {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSliding) {
        sliderRef1.current?.slickNext();
        sliderRef2.current?.slickNext();
        sliderRef3.current?.slickNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isSliding]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay as we're handling it manually
    arrows: true,
    beforeChange: () => setIsSliding(true),
    afterChange: () => setIsSliding(false),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  const microsharesImages = [microsharesImg, microsharesImg, microsharesImg];
  const corporateSolutionsImages = [corporateSolutionsImg, corporateSolutionsImg, corporateSolutionsImg];
  const technologyImages = [technologyImg, technologyImg, technologyImg];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Products & Services</h1>
        <p className="text-xl">Empowering sustainable investments through innovative solutions.</p>
      </section>

      {/* Microshares Section */}
      <section className="container mx-auto p-6 my-12">
        <div className="flex flex-col lg:flex-row items-center mb-12" data-aos="fade-up">
          <div className="lg:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Microshares</h2>
            <p className="mb-4">Our microshares offering allows individuals to invest in renewable energy projects with affordable minimum amounts. Explore various investment options, understand the expected returns, and review the terms.</p>
            <ul className="list-disc list-inside mb-4">
              <li>Investment options: Diversified portfolio of solar projects</li>
              <li>Minimum amounts: Starting as low as $100</li>
              <li>Expected returns: Competitive returns based on project performance</li>
              <li>Terms: Transparent and flexible investment terms</li>
            </ul>
          </div>
          <div className="lg:w-1/2 p-4">
            <img src={microsharesImg} alt="Microshares" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Carousel for Microshares */}
        <div className="mb-12" data-aos="fade-up">
          <Slider ref={sliderRef1} {...settings}>
            {microsharesImages.map((img, index) => (
              <div key={index}><img src={img} alt={`Microshares ${index}`} className="rounded-lg shadow-lg" /></div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Corporate Solutions Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto p-6">
          <div className="flex flex-col lg:flex-row items-center mb-12" >
            <div className="lg:w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-4">Corporate Solutions</h2>
              <p className="mb-4">We offer tailored packages for solar panel installations to corporations. Enjoy the benefits of going solar, including significant cost savings and a positive environmental impact.</p>
              <ul className="list-disc list-inside mb-4">
                <li>Cost savings: Reduce energy expenses</li>
                <li>Environmental impact: Lower carbon footprint</li>
                <li>Customized packages: Solutions tailored to your needs</li>
              </ul>
            </div>
            <div className="lg:w-1/2 p-4">
              <img src={corporateSolutionsImg} alt="Corporate Solutions" className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Carousel for Corporate Solutions */}
          <div className="mb-12" data-aos="fade-up">
            <Slider ref={sliderRef2} {...settings}>
              {corporateSolutionsImages.map((img, index) => (
                <div key={index}><img src={img} alt={`Corporate Solutions ${index}`} className="rounded-lg shadow-lg" /></div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="container mx-auto p-6 my-12">
        <div className="flex flex-col lg:flex-row items-center mb-12" data-aos="fade-up">
          <div className="lg:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Technology</h2>
            <p className="mb-4">Our solar technology is at the forefront of innovation, ensuring maximum efficiency and reliability. We partner with top manufacturers and hold multiple certifications to guarantee quality and performance.</p>
            <ul className="list-disc list-inside mb-4">
              <li>High efficiency: Cutting-edge solar technology</li>
              <li>Certifications: Industry-standard certifications</li>
              <li>Partnerships: Collaborations with leading manufacturers</li>
              <li>Technical specifications: Detailed performance metrics</li>
            </ul>
          </div>
          <div className="lg:w-1/2 p-4">
            <img src={technologyImg} alt="Technology" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Carousel for Technology */}
        <div className="mb-12" data-aos="fade-up">
          <Slider ref={sliderRef3} {...settings}>
            {technologyImages.map((img, index) => (
              <div key={index}><img src={img} alt={`Technology ${index}`} className="rounded-lg shadow-lg" /></div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default ProductsAndServices;
