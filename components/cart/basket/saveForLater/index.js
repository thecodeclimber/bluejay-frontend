import React from "react";
import { FiPlus as PlusIcon } from "react-icons/fi/index";
import { RiSubtractFill as SubtractIcon } from "react-icons/ri/index";
import { FiStar as StarIcon } from "react-icons/fi";
import { FaRegHeart as FavouriteIcon } from "react-icons/fa";
import { AiOutlineDelete as DeleteIcon } from "react-icons/ai";

const basketList = [
  {
    id: 1,
    name: "Carriage Bolts 1/4-20 UNC Steel Zinc",
    price: 5.64,
    img: "/img/basket-1.png",
    itemsSelected: 1,
  },
  {
    id: 2,
    name: "Carriage Bolts 1/4-20 UNC Steel Zinc",
    price: 5.64,
    img: "/img/basket-1.png",
    itemsSelected: 1,
  },
];

const saveForLater = () => {
  return (
    <div className="container mx-auto font-ubuntu">
      <div className="text-dark tracking-tight text-2xl mb-6">
        <span className="font-light">Saved </span>
        <span className="font-medium">for Later</span>
      </div>
      {basketList.length > 0 &&
        basketList.map((data, index) => {
          const { name, price, img, itemsSelected } = data || {};
          return (
            <div
              key={index}
              className="flex justify-between border border-dark border-opacity-10 rounded mb-6 hover:border-opacity-0 hover:shadow-grey-8 overflow-hidden"
            >
              <div className="w-full border-r border-dark border-opacity-10">
                <div className="flex justify-between items-center border-b border-dark border-opacity-10 w-full">
                  <div className="flex p-3 items-center">
                    <div className="mr-5">
                      <img src={img} alt={`img-${index}`} />
                    </div>
                    <div className="text-base tracking-tight">
                      <div className="font-normal text-dark leading-5 mb-2">
                        {name}
                      </div>
                      <div className="font-medium text-primary">${price}</div>
                    </div>
                  </div>
                  <div className="pr-5">
                    <div className="flex justify-between items-center border rounded border-dark border-opacity-10">
                      <div className="flex justify-center cursor-pointer border-r border-dark border-opacity-10 text-center items-center p-4 px-4">
                        <SubtractIcon className="text-black" />
                      </div>
                      <div className="text-base text-dark min-w-60 text-center px-6">
                        {itemsSelected < 10 && 0}
                        {itemsSelected}
                      </div>
                      <div className="flex justify-center border-l cursor-pointer border-dark border-opacity-10 text-center items-center p-4 px-4">
                        <PlusIcon className="text-dark" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pr-5">
                  <div className="flex text-primary font-medium p-5 tracking-tight">
                    <div className="flex items-center">
                      <span className="mr-4">
                        <img src="/img/Cart.svg" alt="cart-img" width="16px" />
                      </span>
                      <span className="text-sm">Add to Cart</span>
                    </div>
                    <div className="py-1">
                      <div className="border-r border-dark border-opacity-10 ml-5 h-full" />
                    </div>
                    <div className="flex items-center ml-5">
                      <span className="mr-4">
                        <StarIcon className="text-base" />
                      </span>
                      <span className="text-sm">Add to Favorites</span>
                    </div>
                  </div>
                  <div className="tracking-tight">
                    <span className="text-dark text-sm font-light">
                      total for this item:
                    </span>{" "}
                    <span className="font-medium text-primary text-sm text-lg">
                      $59.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center px-5 opacity-50  cursor-pointer text-dark hover:opacity-100 hover:bg-primary hover:text-white">
                <DeleteIcon className="text-xl" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default saveForLater;
