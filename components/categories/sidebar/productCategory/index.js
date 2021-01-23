import React, { useState, useEffect, useContext } from "react";
import { func, shape } from "prop-types";
import Link from "next/link";
import classnames from "classnames";
import {
  IoIosArrowUp as UpIcon,
  IoIosArrowDown as DownIcon,
} from "react-icons/io";
import { Context } from "../../../../hooks/store";

const ProductCategory = (props) => {
  const { query } = props;
  const { categoryState } = useContext(Context);
  const [isOpen, setIsOpen] = useState(true);
  const categories = categoryState.categories || [];

  const toggleProductCategory = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4 mr-2">
        <div className="text-lg font-medium text-dark">Product Category</div>
        <div>
          {isOpen ? (
            <UpIcon
              className="text-lg text-dark cursor-pointer"
              onClick={toggleProductCategory}
            />
          ) : (
            <DownIcon
              className="text-lg text-dark cursor-pointer"
              onClick={toggleProductCategory}
            />
          )}
        </div>
      </div>
      <div className="max-h-450 overflow-y-scroll">
        {isOpen &&
          categories &&
          categories.length > 0 &&
          categories.map((category, index) => (
            <div key={index}>
              <Link
                href="/categories/[slug]"
                as={`/categories${category?.custom_url?.url}`}
              >
                <a>
                  <div
                    className={classnames(
                      "py-3 mr-2 text-dark hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer",
                      {
                        "bg-primary bg-opacity-05 text-primary":
                          category?.custom_url?.url ===
                          `/${query?.slug && query?.slug.join("/")}/`,
                      }
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-start">
                        <div className="w-10 mr-2">
                          <img
                            src={
                              category?.image_url || "/img/img-placeholder.png"
                            }
                            className="object-contain"
                            alt={`img-${index}`}
                          />
                        </div>
                        <div className="text-base max-w-200 tracking-tight">
                          {category.name}
                        </div>
                      </div>
                      <div className="font-light opacity-75 text-base pr-2">
                        {category?.total_products || 0}
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

ProductCategory.propTypes = {
  query: shape({}),
};

export default ProductCategory;
