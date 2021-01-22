import React from "react";
import { array, bool, func } from "prop-types";
import { FiHeart as HearIcon } from "react-icons/fi";
import ProductQuantity from "../../elements/productQuantity";
import AddToCart from "../../elements/addToCart";
import ProductLoader from "../../elements/productLoader";

const CategoryList = (props) => {
  const { products, isFetchingProducts, handleProducts, handleCart } = props;
  return (
    <div className="font-ubuntu w-full">
      {isFetchingProducts && (
        <div>
          {Array(6)
            .fill()
            .map((d, index) => (
              <div key={index} className="mb-5">
                <ProductLoader isHorizontal={true} />
              </div>
            ))}
        </div>
      )}
      <div className="flex  flex-wrap mb-3">
        {!isFetchingProducts &&
          products &&
          products.length > 0 &&
          products.map((product, index) => (
            <div key={index} className="w-full mb-5">
              <div className="relative block lg:flex justify-between bg-white border border-dark border-opacity-05 hover:border-opacity-0 hover:shadow-grey-8  rounded px-4 py-5">
                <div className="absolute left-0 top-0 ml-2 mt-2 flex items-center inline bg-green text-xs font-normal text-white rounded-2xl px-3 py-1 h-5">
                  New
                </div>
                <div className="flex items-center py-2 mb-3 lg:mb-0">
                  <div className="mr-4">
                    <img
                      src={
                        product.primary_image?.url_thumbnail ||
                        "/img/no-image.png"
                      }
                      width="70px"
                    />
                  </div>
                  <div>
                    <div className="text-dark font-light text-xs leading-5 tracking-tight">
                      ID: {product.id}
                    </div>
                    <div className="flex items-center">
                      <div className="font-medium text-left text-dark text-xl mr-6 leading-7 tracking-tight">
                        {product.name}
                      </div>
                      <div className="text-primary text-center font-normal text-lg mr-6 tracking-tight">
                        ${(product?.price && product.price.toFixed(2)) || 0}
                      </div>
                      <div className="mr-6">
                        <HearIcon className="text-grey opacity-70 text-xl cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-5">
                    <ProductQuantity
                      products={products}
                      product={product}
                      handleProducts={handleProducts}
                    />
                  </div>
                  <div className="min-w-160">
                    <AddToCart product={product} handleData={handleCart} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {!isFetchingProducts && products.length === 0 && (
        <div className="text-center text-dark py-8">No product available</div>
      )}
    </div>
  );
};

CategoryList.defaultProps = {
  products: [],
  isFetchingProducts: false,
  handleProducts: () => {},
  handleCart: () => {},
};

CategoryList.propTypes = {
  products: array,
  isFetchingProducts: bool,
  handleProducts: func,
  handleCart: func,
};

export default CategoryList;
