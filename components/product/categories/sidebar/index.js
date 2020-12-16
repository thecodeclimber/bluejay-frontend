import React from "react";
import ProductCategory from "./productCategory";
import MaterialGrade from "./materialGrade";
import ThreadSize from "./threadSize";
import Material from "./material";
import ShopBy from "./shopBy";

const SideBar = () => {
  return (
    <div className="font-ubuntu pb-10">
      <div className="border-r border-opacity-10 border-dark w-full min-w-310 max-w-310">
        <ProductCategory />
        <hr className="mt-6 mb-8 opacity-10 bg-dark mr-4" />
        <MaterialGrade />
        <hr className="mt-6 mb-8 opacity-10 bg-dark mr-4" />
        <ThreadSize />
        <hr className="mt-6 mb-8 opacity-10 bg-dark mr-4" />
        <Material />
        <hr className="mt-6 mb-8 opacity-10 bg-dark mr-4" />
        <ShopBy />
      </div>
    </div>
  );
};

export default SideBar;
