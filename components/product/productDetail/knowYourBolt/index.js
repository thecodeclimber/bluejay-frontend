import classnames from "classnames";

const data = [
  {
    img: "/img/Group.png",
    boltOrg: "Organize Your Business",
    description:
      " Bolts secure material by applying \n pressure from the head of the bolt.",
  },
  {
    img: "/img/Group.png",
    boltOrg: "Organize Your Business",
    description:
      " Bolts secure material by applying \n pressure from the head of the bolt.",
  },
  {
    img: "/img/Group.png",
    boltOrg: "Organize Your Business",
    description:
      " Bolts secure material by applying \n pressure from the head of the bolt.",
  },
  {
    img: "/img/Group.png",
    boltOrg: "Organize Your Business",
    description:
      " Bolts secure material by applying \n pressure from the head of the bolt.",
  },
];

const KnowYourBolt = () => (
  <div className=" bg-light font-ubuntu  py-16  bg-opacity-50">
    <div className="container mx-auto  pb-8 pb-12  text-3xl font-ubuntu text-dark text-center">
      <span className="font-medium"> Know Your Bolt</span>
    </div>
    <div className="container mx-auto flex justify-between">
      {data.length > 0 &&
        data.map((item, index) => (
          <div
            key={index}
            className={classnames(
              "font-ubuntu rounded shadow-grey-8 cursor-pointer bg-white bg-opacity-05 hover:bg-white text-center px-2 sm:px-2 py-4 lg:px-5",
              {
                "mr-4 ": index != 3,
              }
            )}
          >
            <div className="flex justify-center pt-4 pb-6">
              <img src={item.img} alt={`img-${index}`} />
            </div>
            <div className="text-xl text-dark font-medium tracking-tight ">
              {item.boltOrg}
            </div>
            <hr className="my-5 opacity-10 bg-dark" />
            <div className="font-light text-base text-dark leading-relaxed tracking-tight  whitespace-pre-line">
              {item.description}
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default KnowYourBolt;
