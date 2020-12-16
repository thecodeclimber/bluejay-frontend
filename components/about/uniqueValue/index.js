import classnames from "classnames";

const UniqueValue = () => {
  const data = [
    {
      img: "img/screw.svg",
      title: "Organize Your Business",
      description:
        "Bolts secure material by applying pressure from the \n head of the bolt. They fit with corresponding \n holes and nuts to create bolted joints.",
    },
    {
      img: "img/screw.svg",
      title: "Organize Your Business",
      description:
        "Bolts secure material by applying pressure from the \n head of the bolt. They fit with corresponding \n holes and nuts to create bolted joints.",
    },
    {
      img: "img/screw.svg",
      title: "Organize Your Business",
      description:
        "Bolts secure material by applying pressure from the \n head of the bolt. They fit with corresponding \n holes and nuts to create bolted joints.",
    },
  ];

  return (
    <div className="mb-12">
      <div className="container mx-auto pt-6 pb-8 text-3xl font-ubuntu text-dark text-center">
        <span className="font-light">Unique</span>{" "}
        <span className="font-medium">Value Proposition</span>
      </div>
      <div className="container mx-auto flex">
        {data.length > 0 &&
          data.map((dataValue, index) => (
            <div
              key={index}
              className={classnames(
                "font-ubuntu rounded shadow-grey-8 text-center mr-1 py-5 px-6",
                {
                  "mr-1": index === 0,
                  "ml-3 mr-3": index === 1,
                  "ml-1": index === 2,
                }
              )}
            >
              <div className="flex justify-center pt-4 pb-6">
                <img src={dataValue.img} alt={`img-${index}`} />
              </div>
              <div className="text-xl text-dark">{dataValue.title}</div>
              <hr className="my-5 opacity-10 bg-dark" />
              <div className="font-light text-base text-dark leading-relaxed whitespace-pre-line">
                {dataValue.description}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UniqueValue;
