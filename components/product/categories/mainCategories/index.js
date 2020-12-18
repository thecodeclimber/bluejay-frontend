import React from "react";
import { BsArrowRight as RightArrowIcon } from "react-icons/bs";

const MainCategories = () => {
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
    {
      img: "/img/category-screw.svg",
      title: "Drywall\nScrews",
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
    <div className="font-ubuntu w-full pl-5">
      <div className="flex justify-between flex-wrap">
        {data.categories &&
          data.categories.length > 0 &&
          data.categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-grey-8 rounded min-w-300 px-6 py-5 mb-6"
            >
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
          ))}
      </div>
    </div>
  );
};

export default MainCategories;
