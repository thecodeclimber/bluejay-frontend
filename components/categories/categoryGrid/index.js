import React from "react";
import classnames from "classnames";
import { array, bool, func } from "prop-types";
import { FiHeart as HearIcon } from "react-icons/fi/index";
import ProductQuantity from "../../elements/productQuantity";
import AddToCart from "../../elements/addToCart";

const CategoryGrid = (props) => {
  const { products, isFetchingProducts, handleProducts, handleCart } = props;
  return (
    <div className="font-ubuntu w-full">
      {isFetchingProducts && (
        <div className="text-center text-dark py-10">Loading...</div>
      )}
      <div className="flex flex-wrap">
        {!isFetchingProducts &&
          products &&
          products.length > 0 &&
          products.map((product, index) => {
            return (
              <div
                key={index}
                className={classnames(
                  "sm:w-full md:w-1/2 px-3 lg:w-1/3 mb-6 pb-3",
                  {
                    "lg:pl-0 lg:pr-6": index % 3 === 0,
                    "lg:pr-0 lg:pl-6": (index + 1) % 3 === 0,
                  }
                )}
              >
                <div className="h-full flex flex-col justify-between bg-white border border-dark border-opacity-10 rounded px-6 py-5">
                  <div>
                    <div className="flex justify-between">
                      <div className="bg-green text-xs font-normal text-white rounded-2xl px-3 h-5 h-full">
                        New
                      </div>
                      <HearIcon className="text-grey opacity-70 text-xl cursor-pointer" />
                    </div>
                    <div className="max-w-250 mb-3">
                      <img
                        className="w-full"
                        src={
                          product.primary_image?.url_thumbnail ||
                          "/img/no-image.png"
                        }
                      />
                    </div>
                    <div className="font-medium text-center text-dark text-xl mb-3 whitespace-pre-line leading-7">
                      {product.name}
                    </div>
                  </div>
                  <div>
                    <div className="text-primary text-center font-normal text-lg mb-5">
                      ${(product?.price && product.price.toFixed(2)) || 0}
                    </div>
                    <div className="mb-4">
                      <ProductQuantity
                        products={products}
                        product={product}
                        handleProducts={handleProducts}
                      />
                    </div>
                    <AddToCart product={product} handleData={handleCart} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

CategoryGrid.defaultProps = {
  products: [],
  isFetchingProducts: false,
  handleProducts: () => {},
  handleCart: () => {},
};

CategoryGrid.propTypes = {
  products: array,
  isFetchingProducts: bool,
  handleProducts: func,
  handleCart: func,
};

export default CategoryGrid;
