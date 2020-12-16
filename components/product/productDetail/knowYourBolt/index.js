import classnames from "classnames";

const KnowYourBolt = () => {
  const data = {};
  data.boltCard = [
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

  return (
    // <div className="bg-light font-ubuntu">
    //   <div className="container mx-auto py-16">
    //     <div className="flex items-center justify-center pb-12 ">
    //       <div className="text-3xl text-dark font-medium whitespace-pre">
    //         Know Your Bolt
    //       </div>
    //     </div>
    //     <div className="container mx-auto flex ">
    //       {data.boltCard.map((data, index) => (
    //         <div
    //           key={index}
    //           className="font-ubuntu text-center mr-1 py-5 px-6 rounded shadow-grey-8 cursor-pointer hover:bg-white hover:bg-opacity-none"
    //         >
    //           <img className="mx-auto pb-6" src={data.img} />
    //           <div className="text-xl text-dark whitespace-pre font-medium text-center">
    //             {data.boltOrg}
    //           </div>
    //           <hr className="m-6 opacity-10" />
    //           <div className="text-center text-base whitespace-pre font-light leading-relaxed text-dark  whitespace-pre  ">
    //             {data.description}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className=" bg-light font-ubuntu  py-16  bg-opacity-50">
      <div className="container mx-auto  pb-8 pb-12  text-3xl font-ubuntu text-dark text-center">
        <span className="font-medium"> Know Your Bolt</span>
      </div>
      <div className="container mx-auto flex justify-between">
        {data.boltCard.map((dataValue, index) => (
          <div
            key={index}
            className={classnames(
              "font-ubuntu rounded shadow-grey-8 cursor-pointer bg-white hover:bg-opacity-100 text-center bg-opacity-05 px-2 sm:px-2 py-4 lg:px-5",
              {
                "mr-4 ": index != 3,
              }
            )}
          >
            <div className="flex justify-center pt-4 pb-6">
              <img src={dataValue.img} alt={`img-${index}`} />
            </div>
            <div className="text-xl text-dark font-medium ">
              {dataValue.boltOrg}
            </div>
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

export default KnowYourBolt;
