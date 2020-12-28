import React from "react";
import classnames from "classnames";

const additionalProducts = [
  {
    img: "/img/cart-added.png",
    name: "Alloy Steel Socket Head Screws",
    price: "5.64",
  },
  {
    img: "/img/cart-added.png",
    name: "Alloy Steel Socket Head Screws",
    price: "5.64",
  },
  {
    img: "/img/cart-added.png",
    name: "Alloy Steel Socket Head Screws",
    price: "5.64",
  },
  {
    img: "/img/cart-added.png",
    name: "Head Screws Socket Head Screws",
    price: "5.64",
  },
  {
    img: "/img/cart-added.png",
    name: "Alloy Steel Socket Head Screws",
    price: "5.64",
  },
  {
    img: "/img/cart-added.png",
    name: "Alloy Steel Socket Head Screws",
    price: "5.64",
  },
  {
    img: "/img/cart-added.png",
    name: "Alloy Steel Socket Head Screws",
    price: "5.64",
  },
  {
    img: "/img/cart-added.png",
    name: "Alloy Steel Socket Head Screws",
    price: "5.64",
  },
  {
    img: "/img/cart-added.png",
    name: "Alloy Steel Socket Head Screws",
    price: "5.64",
  },
  {
    img: "/img/cart-added.png",
    name: "Head Screws Socket Head Screws",
    price: "5.64",
  },
  {
    img: "/img/cart-added.png",
    name: "Alloy Steel Socket Head Screws",
    price: "5.64",
  },
  {
    img: "/img/cart-added.png",
    name: "Alloy Steel Socket Head Screws",
    price: "5.64",
  },
];

const AdditionalProducts = () => {
  return (
    <div>
      <div className="text-xl text-dark mt-5 px-5 mb-8">
        <span className="font-light">Discover </span>
        <span className="font-medium">Additional Products</span>
      </div>
      <div className="flex flex-wrap px-5">
        {additionalProducts.length > 0 &&
          additionalProducts.map((data, index) => (
            <div key={index} className={classnames("w-1/3 mb-6", {})}>
              <div
                className={classnames(
                  "flex border-r border-dark border-opacity-05 w-full",
                  {
                    "border-none": (index + 1) % 3 === 0,
                  }
                )}
              >
                <img
                  src={data.img}
                  alt={`img-${index}`}
                  width="40px"
                  className="object-contain"
                />
                <div className="pl-5">
                  <div className="font-normal text-xs text-dark leading-2 mb-1">
                    {data.name}
                  </div>
                  <div className="font-medium text-sm text-dark">
                    ${data.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdditionalProducts;
