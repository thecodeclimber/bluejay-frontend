import React from "react";
import classnames from "classnames";
import { BsArrowRight as RightArrowIcon } from "react-icons/bs";

const PopularCategories = () => {
  const data = {};
  data.list = [
    {
      name: "Conical Plastic Anchors",
    },
    {
      name: "Drop-in Anchors & Setting Tools",
    },
    {
      name: "E-Z Anchors (Metal & Plastic)",
    },
    {
      name: "Hammer Drive Anchors",
    },
  ];
  data.categories = [
    {
      img: "/img/category-screw4.svg",
      title: "Anchor",
      listData: data.list,
    },
    {
      img: "/img/category-screw.svg",
      title: "Drywall \n Screws",
      listData: data.list,
    },
    {
      img: "/img/category-screw2.svg",
      title: "Hex Head \n Cap Screws",
      listData: data.list,
    },
    {
      img: "/img/category-screw3.svg",
      title: "Machine \n Screws",
      listData: data.list,
    },
  ];

  return (
    <div className="container  mx-auto font-ubuntu w-full pl-5 font-ubuntu">
      <div className="flex justify-center text-3xl text-dark font-light whitespace-pre mb-12">
        Popular <span className="font-medium"> Categories</span>
      </div>
      <div className="flex ">
        {data.categories &&
          data.categories.length > 0 &&
          data.categories.map((category, index) => (
            <div
              key={index}
              className={classnames(
                "sm:w-full md:w-1/2 mr-2 px-2 lg:w-1/3 mb-6",
                {
                  "lg:pl-0 lg:pr-2": index % data.categories.length === 0,
                  "lg:pr-0 lg:pr-4": (index + 1) % data.categories.length === 0,
                }
              )}
            >
              <div className="bg-white h-full shadow-grey-8 hover:shadow-blue-10 cursor-pointer rounded px-6 pt-5 mb-6">
                <div className="flex pt-1 items-center">
                  <div className="mr-6">
                    <img src={category.img} alt={`img-${index}`} width="60" />
                  </div>
                  <div className="font-medium text-primary text-2lg whitespace-pre-line">
                    {category.title}
                  </div>
                </div>
                <hr className="my-5 opacity-10 bg-dark" />
                <div>
                  {category.listData &&
                    category.listData.length > 0 &&
                    category.listData.map((list, index) => (
                      <div
                        key={index}
                        className="font-normal text-base text-dark mb-4 max-w-250"
                      >
                        {list.name}
                      </div>
                    ))}
                </div>
                <hr className="my-5 opacity-10 bg-dark" />
                <div className="font-medium text-primary text-base flex items-center">
                  <span className="mr-3">Show all</span>
                  <span>
                    <RightArrowIcon className="text-2lg" />
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularCategories;
