import React from "react";
import SideBar from "./sidebar";

const ProductCategories = () => {
  return (
    <div className="font-ubuntu">
      <div>
        <div className="container mx-auto text-3xl text-dark font-light">
          Product Category
        </div>
      </div>
      <hr className="my-6 opacity-10 bg-dark" />
      <div className="container mx-auto flex">
        <SideBar />
      </div>
    </div>
  )
};

export default ProductCategories;
