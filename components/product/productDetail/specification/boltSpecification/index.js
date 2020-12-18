import React from "react";
import { FaHeart as HeartIcon } from "react-icons/fa/index";
import { BsFillBookmarkFill as BookmarkIcon } from "react-icons/bs/index";

const BoltSpecification = () => {
  return (
    <div className="container mx-auto  font-ubuntu ">
      <div className="flex items-center justify-between">
        <div className="text-medium text-dark text-3xl tracking-tight pb-6 font-medium">
          Hex Nut Cap Screw
        </div>
        <div className="flex justify-between">
          <BookmarkIcon className="text-xl text-primary mr-10" />
          <HeartIcon className="text-xl text-primary" />
        </div>
      </div>
      <hr className="text-dark opacity-10 " />
    </div>
  );
};

export default BoltSpecification;
