import React, { useRef, useState } from 'react';
import classnames from "classnames";
import Slider from "react-slick";

const CustomerReviews = () => {
  const slider = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    afterChange: current => setActiveSlide(current)
  };

  const data = [{
    img: "img/reviewer.svg",
    description: "“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”",
    name: "Piers Hardy",
    subTitle: "Our partner",
  }, {
    img: "img/reviewer-2.svg",
    description: "“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”",
    name: "Artemy Lebedev",
    subTitle: "Our partner",
  }, {
    img: "img/reviewer.svg",
    description: "“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”",
    name: "Piers Hardy",
    subTitle: "Our partner",
  }, {
    img: "img/reviewer-2.svg",
    description: "“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”",
    name: "Artemy Lebedev",
    subTitle: "Our partner",
  }, {
    img: "img/reviewer.svg",
    description: "“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”",
    name: "Piers Hardy",
    subTitle: "Our partner",
  }];

  const handleSlideGoTo = (index) => {
    slider.current.slickGoTo(index);
    setActiveSlide(index);
  }

  return (
    <div className="bg-customer-review bg-cover bg-no-repeat">
      <div className="bg-primary bg-opacity-90 pb-16">
        <div className="container mx-auto text-3xl py-10 font-ubuntu text-white text-center">
          <span className="font-light">Customer</span> <span className="font-medium">Reviews</span>
        </div>
        <Slider {...settings} className="overflow-hidden" ref={slider}>
          {data.length > 0 && data.map((reviewer, index) => {
            const { img, description, name, subTitle } = reviewer || {};
            return (
              <div key={index}>
                <div className="flex justify-center">
                  <div className="font-ubuntu text-white px-2 text-center">
                    <div className="flex justify-center mb-10">
                      <img src={img} alt={`img-${index}`} />
                    </div>
                    <div className="bg-customer-card bg-opacity-05 px-12 pb-4">
                      <div className="max-w-400">
                        <div className="font-light leading-8 mb-8">
                          {description}
                        </div>
                        <div className="flex justify-center items-center mb-8">
                          <div>
                            <img src="img/quote-left.svg" alt="img-1" className="opacity-25" />
                          </div>
                          <div className="px-16 py-5">
                            <div className="font-bold pb-1 text-2lg font-montserrat">
                              {name}
                            </div>
                            <div className="font-light text-sm font-montserrat opacity-75">
                              {subTitle}
                            </div>
                          </div>
                          <div>
                            <img src="img/quote-right.svg" alt="img-2" className="opacity-25" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
        <div className="pt-12 flex justify-center items-center">
          {data.length > 0 && data.map((reviewer, index) => {
            return (
              <div
                className={classnames("bg-white w-2 h-2 rounded bg-opacity-75 mx-4 cursor-pointer", {
                  "w-3.5 h-3.5 bg-opacity-100": activeSlide === index,
                })}
                onClick={() => handleSlideGoTo(index)}
              >
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
