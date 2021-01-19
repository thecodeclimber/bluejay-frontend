import React, { useState } from "react";
import { shape } from "prop-types";
import classnames from "classnames";
import SideBar from "./sidebar";
import CategoryGrid from "./categoryGrid";
import CategoryList from "./categoryList";
import Filters from "./filters";
import { BsGrid3X3GapFill as GridIcon } from "react-icons/bs";
import { FaList as ListIcon } from "react-icons/fa";

const VIEW_TYPE = {
  GRID: "grid",
  LIST: "list",
};

const ProductCategories = (props) => {
  const { query } = props;
  const [viewType, setViewType] = useState(VIEW_TYPE.GRID);
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <div className="font-ubuntu">
      <div className="flex container mx-auto justify-between items-center">
        <div className="flex items-center">
          <div className="text-3xl text-dark font-light tracking-tight mr-6">
            Anchors
          </div>
          <div className="text-primary font-light text-xl tracking-tight mt-3">
            88,814 products found.
          </div>
        </div>
        <div>
          <div className="border border-dark rounded border-opacity-10 flex px-6 py-4">
            <div className="pr-6">
              <GridIcon
                className={classnames(
                  "text-xl text-dark opacity-25 cursor-pointer",
                  {
                    "opacity-100": viewType === VIEW_TYPE.GRID,
                  }
                )}
                onClick={() => setViewType(VIEW_TYPE.GRID)}
              />
            </div>
            <div className="border-r border-dark border-opacity-10" />
            <div className="pl-6">
              <ListIcon
                className={classnames(
                  "text-xl text-dark opacity-25 cursor-pointer",
                  {
                    "opacity-100": viewType === VIEW_TYPE.LIST,
                  }
                )}
                onClick={() => setViewType(VIEW_TYPE.LIST)}
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6 opacity-10 bg-dark" />
      <div className="container mx-auto flex">
        <SideBar handleSelectedCategory={setSelectedCategory} query={query} />
        <div>
          <Filters selectedCategory={selectedCategory} />
          <hr className="my-5 opacity-10 bg-dark ml-5" />
          {viewType === VIEW_TYPE.GRID && <CategoryGrid />}
          {viewType === VIEW_TYPE.LIST && <CategoryList />}
        </div>
      </div>
    </div>
  );
};

ProductCategories.propTypes = {
  query: shape({}),
};

export default ProductCategories;
