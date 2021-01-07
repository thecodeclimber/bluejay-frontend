import React from "react";
import Link from "next/link";
import { FaHeart as HeartIcon } from "react-icons/fa/index";
import { BsFillBookmarkFill as BookmarkIcon } from "react-icons/bs/index";

const BoltSpecification = () => {
  return (
    <div className="container mx-auto  font-ubuntu ">
      <div className="flex items-center justify-between">
        <Link href="/moreDetails">
          <div className="text-dark text-3xl tracking-tight pb-6 font-medium">
            Hex Nut Cap Screw
          </div>
        </Link>
        <div className="flex justify-between items-center">
          <BookmarkIcon className="text-xl text-primary mr-10" />
          <HeartIcon className="text-lg text-primary" />
        </div>
      </div>
      <hr className="text-dark opacity-10 " />
    </div>
  );
};

export default BoltSpecification;
