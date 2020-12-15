import React from "react";
import SideBar from "./sidebar";
import CategoryList from "./categoryList";
import {
  BsGrid3X3GapFill as GridIcon,
} from "react-icons/bs";
import {
  FaList as ListIcon,
} from "react-icons/fa";

const ProductCategories = () => {
  return (
    <div className="font-ubuntu">
      <div className="flex container mx-auto justify-between items-center">
        <div className="text-3xl text-dark font-light">
          Product Category
        </div>
        <div>
          <div className="border border-dark rounded border-opacity-10 flex px-6 py-4">
            <div className="pr-6">
              <GridIcon className="text-xl text-dark" />
            </div>
            <div className="border-r border-dark border-opacity-10" />
            <div className="pl-6">
              <ListIcon className="text-xl text-dark opacity-25" />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 opacity-10 bg-dark" />
      <div className="container mx-auto flex">
        <SideBar />
        <CategoryList />
      </div>
    </div>
  )
};

export default ProductCategories;
