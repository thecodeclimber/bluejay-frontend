import React, { useState } from "react";
import classnames from "classnames";
import { func, string } from "prop-types";
import {
  IoIosArrowUp as UpIcon,
  IoIosArrowDown as DownIcon,
} from "react-icons/io";

const ProductCategory = (props) => {
  const { selectedCategory, handleSelectedCategory } = props;
  const [isOpen, setIsOpen] = useState(true);
  const data = {};
  data.productCategory = [
    {
      img: "/img/product-category1.svg",
      name: "Conical Plastic Anchors",
      total: 1679,
    },
    {
      img: "/img/product-category1.svg",
      name: "Drop-in Anchors & Setting Tools",
      total: 36,
    },
    {
      img: "/img/product-category1.svg",
      name: "E-Z Anchors (Metal & Plastic)",
      total: 73,
    },
    {
      img: "/img/product-category1.svg",
      name: "Expansion Shields (Single & Double)",
      total: 73,
    },
    {
      img: "/img/product-category1.svg",
      name: "Hammer Drive Anchors",
      total: 73,
    },
    {
      img: "/img/product-category1.svg",
      name: "Hollow Wall Anchors",
      total: 73,
    },
    {
      img: "/img/product-category1.svg",
      name: "Lag Shields",
      total: 73,
    },
  ];

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
      {isOpen &&
        data.productCategory &&
        data.productCategory.length > 0 &&
        data.productCategory.map((product, index) => (
          <div
            key={index}
            onClick={() => handleSelectedCategory(product.name)}
            className={classnames(
              "py-3 mr-2 text-dark hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer",
              {
                "bg-primary bg-opacity-05 text-primary":
                  product.name === selectedCategory,
              }
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <div className="w-10">
                  <img
                    src={product.img}
                    className="object-contain"
                    alt={`img-${index}`}
                  />
                </div>
                <div className="text-base max-w-200 tracking-tight">
                  {product.name}
                </div>
              </div>
              <div className="font-light opacity-75 text-base pr-2">
                ({product.total})
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

ProductCategory.propTypes = {
  handleSelectedCategory: func,
  selectedCategory: string,
};

export default ProductCategory;
