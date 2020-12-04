import classnames from "classnames";

const Partners = () => {
  const data = [{
    img: "img/home_fuller.svg",
  },
  {
    img: "img/infascologo.svg",
  },
  {
    img: "img/logoband.svg",
  },
  {
    img: "img/print-logo.svg",
  },
  {
    img: "img/naula.svg",
  }];

  return (
    <>
      <div className="container mx-auto pt-5 pb-10 text-3xl font-ubuntu text-dark text-center">
        <span className="font-light">Our</span> <span className="font-medium">Partners</span>
      </div>
      <div className="container mx-auto flex justify-center mb-20">
        {data.length > 0 && data.map((partners, index) => (
          <div key={index}
            className={classnames("mr-20", {
              "mr-0": index === partners.length - 1,
            })}
          >
            <img src={partners.img} alt={`img-${index}`} className="opacity-50" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Partners;
