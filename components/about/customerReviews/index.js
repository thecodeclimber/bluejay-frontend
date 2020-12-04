import Slider from "react-slick";

const SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1
};

const CustomerReviews = () => {
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
  }];

  return (
    <div className="bg-customer-review bg-cover bg-no-repeat">
      <div className="bg-primary bg-opacity-90 pb-20">
        <div className="container mx-auto text-3xl py-10 font-ubuntu text-white text-center">
          <span className="font-light">Customer</span> <span className="font-medium">Reviews</span>
        </div>
        <Slider {...SETTINGS} className="overflow-hidden">
          {data.length > 0 && data.map((reviewer, index) => {
            const { img, description, name, subTitle } = reviewer || {};
            return (
              <div key={index}>
                <div className="flex justify-center">
                  <div className="font-ubuntu text-white max-w-400 px-2 text-center">
                    <div className="flex justify-center mb-10">
                      <img src={img} alt={`img-${index}`} />
                    </div>
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
            )
          })}
        </Slider>
      </div>
    </div>
  );
}

export default CustomerReviews;
