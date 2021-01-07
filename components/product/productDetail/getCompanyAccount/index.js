import classnames from "classnames";

const data = [
  {
    sno: "/img/01.svg",
    title: "Organize Your Business",
    description:
      "We understand the importance and need for fast turnaround times \n and make this a high priority when working with your project \n schedules. Our commitment is to give you a quality product at \n competitive prices with fast and dependable service.",
    img: "/img/img.png",
  },
  {
    sno: "/img/02.png",
    title: "Organize Your Business",
    description:
      "We understand the importance and need for fast turnaround times \n and make this a high priority when working with your project \n schedules. Our commitment is to give you a quality product at \n competitive prices with fast and dependable service.",
    img: "/img/img.png",
  },
  {
    sno: "/img/03.png",
    title: "Organize Your Business",
    description:
      "We understand the importance and need for fast turnaround times \n and make this a high priority when working with your project \n schedules. Our commitment is to give you a quality product at \n competitive prices with fast and dependable service.",
    img: "/img/img.png",
  },
];

const GetCompanyAccount = (props) => {
  const { fromHome } = props || {};
  return (
    <div className="relative font-ubuntu">
      {fromHome && (
        <div>
          <div className="absolute -top-5 right-0">
            <img src="/img/account-placeholder-right.png" />
          </div>
          <div className="absolute bottom-0 left-0">
            <img src="/img/account-placeholder-left.png" />
          </div>
        </div>
      )}

      <div className="container mx-auto">
        <div className="flex items-center justify-center pb-12 py-16">
          <div className="text-3xl text-dark font-light whitespace-pre tracking-tight ">
            Get{" "}
            <span className="font-medium tracking-tight ">
              Your Company An Account
            </span>
          </div>
        </div>

        {data.length > 0 &&
          data.map((data, index) => (
            <div
              key={index}
              className={classnames("flex px-16 pb-16 ", {
                "flex  px-16  flex-row-reverse": index % 2 !== 0,
              })}
            >
              <div
                className={classnames("w-3/6 flex flex-col justify-center", {
                  "w-3/6 flex flex-col justify-center pl-12": index % 2 !== 0,
                })}
              >
                <div>
                  <div className="relative pb-2">
                    <img src={data.sno} />
                    <div className="absolute -mt-16 ml-12 text-2xl font-bolder tracking-tight text-dark">
                      {data.title}
                    </div>
                  </div>
                  <div className="font-light text-base text-dark opacity-75 ml-12 tracking-tight  whitespace-pre-line ">
                    {data.description}
                  </div>
                </div>
              </div>
              <div
                className={classnames("w-3/6", {
                  "pr-6 pl-0": index % 2 !== 0,
                  "pl-6": index % 2 === 0,
                })}
              >
                <img className="" src={data.img} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GetCompanyAccount;
