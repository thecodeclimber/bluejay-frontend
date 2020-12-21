import React, { useState } from "react";
import classnames from "classnames";
import {
  BsArrowLeft as LeftArrowIcon,
  BsArrowRight as RightArrowIcon,
} from "react-icons/bs";

const Pagination = () => {
  const [selectedPage, setSelectedPage] = useState(2);

  const handlePage = (page = 1) => {
    setSelectedPage(page);
  };

  const arrayLength = 13;
  return (
    <div className="font-ubuntu flex justify-between">
      <div className="flex items-center mr-4 px-5 py-2 rounded border border-dark border-opacity-10 text-dark cursor-pointer">
        <LeftArrowIcon className="text-xl mr-5" />
        <span className="text-lg tracking-tight font-normal">Back</span>
      </div>
      <div className="flex">
        {Array(arrayLength)
          .fill()
          .map((data, index) => {
            const incrementedIndex = index + 1;
            if (index > 4 && index < 11) return;
            if (index === 11)
              return (
                <div
                  key={index}
                  className="mr-3 text-dark opacity-50 flex items-end"
                >
                  ...
                </div>
              );
            return (
              <div
                key={index}
                className={classnames(
                  "flex justify-center items-center px-4 py-2 tracking-tight  rounded border border-dark border-opacity-10 cursor-pointer",
                  {
                    "mr-0": index === arrayLength - 1,
                    "mr-3": index !== arrayLength - 1,
                    "bg-primary text-white": selectedPage === incrementedIndex,
                    "text-dark": selectedPage !== incrementedIndex,
                  }
                )}
                onClick={() => handlePage(incrementedIndex)}
              >
                {incrementedIndex}
              </div>
            );
          })}
      </div>
      <div className="flex items-center ml-4 px-5 py-2 rounded border border-dark border-opacity-10 text-dark cursor-pointer">
        <span className="text-lg tracking-tight mr-5 font-normal">Next</span>
        <RightArrowIcon className="text-xl" />
      </div>
    </div>
  );
};

export default Pagination;
