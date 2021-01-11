import React from "react";
import { RiSubtractFill as SubtractIcon } from "react-icons/ri";

const addedData = [
  {
    img: "/img/cart-added.png",
    name: "Alloy Steel Low-Profile Socket Head Screws",
    price: "5.64",
  },
  {
    img: "/img/cart-added.png",
    name: "Alloy Steel Ultra-Low-Profile Socket Head Screws",
    price: "5.64",
  },
  {
    img: "/img/cart-added.png",
    name: "Alloy Steel Ultra-Low-Profile Socket Head Screws",
    price: "5.64",
  },
];

const AddedToCart = () => {
  return (
    <div className="mb-40">
      {addedData.length > 0 &&
        addedData.map((data, index) => (
          <div key={index}>
            <div className="text-dark flex px-5 mt-5 mb-4">
              <img
                src={data.img}
                alt={`img-${index}`}
                width="50px"
                className="mr-6 object-contain"
              />
              <div className="flex justify-between items-center w-full">
                <div>
                  <div className="text-base mb-3 font-normal leading-5">
                    {data.name}
                  </div>
                  <div className="flex items-center">
                    <div className="border border-light p-1 rounded-md">
                      <SubtractIcon className="text-base" />
                    </div>
                    <div className="text-base px-4">01</div>
                    <div className="border border-light p-1 rounded-md">
                      <SubtractIcon className="text-base" />
                    </div>
                  </div>
                </div>
                <div className="text-lg font-medium">${data.price}</div>
              </div>
            </div>
            {index !== addedData.length - 1 && (
              <hr className="opacity-05 text-dark mx-5" />
            )}
          </div>
        ))}
    </div>
  );
};

export default AddedToCart;
