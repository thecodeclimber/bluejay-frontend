import React from "react";
import { string } from "prop-types";
import { VscClose as CloseIcon } from "react-icons/vsc";
import { MdArrowDropDown as DropDownIcon } from "react-icons/md";

const Filters = (props) => {
  const { selectedCategory } = props;

  return (
    <div className="pl-5 flex justify-between">
      <div className="flex items-center text-base border border-dark border-opacity-10 font-medium text-black px-5 py-3 rounded">
        <span className="mr-5">{selectedCategory}</span>
        <span>
          <CloseIcon className="text-2lg text-black cursor-pointer" />
        </span>
      </div>
      <div className="flex items-center text-base border border-dark border-opacity-10 text-black px-5 py-3 rounded">
        <span className="font-medium">Sort by:</span>
        <span className="mr-5 pl-1">a-z</span>
        <span>
          <DropDownIcon className="text-2lg text-black" />
        </span>
      </div>
    </div>
  );
};

Filters.propTypes = {
  selectedCategory: string,
};

export default Filters;
