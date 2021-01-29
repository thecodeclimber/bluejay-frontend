import React from "react";
import { func, shape } from "prop-types";
import ProductSpecification from "./productSpecification";
import ProductImages from "./productImages";
import ProductInfo from "./productInfo";
import ReactangleOptions from "./reactangleOptions";
import Quantity from "./quantity";
import ProductVideos from "./productVideos";
import TechnicalSpecs from "./technicalSpecs";
import RadioOptions from "./radioOptions";
import Price from "./price";

const Specification = (props) => {
  const { productDetail, setProductDetail } = props;
  return (
    <div>
      <div className="container mx-auto flex">
        <div className="flex-col pr-8">
          <ProductImages productDetail={productDetail} />
          <hr className="text-dark opacity-10 mb-10" />
          <ProductVideos productDetail={productDetail} />
        </div>
        <div className="w-full border-l border-dark border-opacity-10 mb-16 pl-10">
          <ProductSpecification productDetail={productDetail} />
          <div className="flex justify-between">
            <div className="w-full">
              <ProductInfo productDetail={productDetail} />
              <ReactangleOptions
                productDetail={productDetail}
                setProductDetail={setProductDetail}
              />
            </div>
            <div>
              <div className="flex flex-col border-l border-dark border-opacity-10 pl-8 h-full">
                <Quantity
                  productDetail={productDetail}
                  setProductDetail={setProductDetail}
                />
                <RadioOptions
                  productDetail={productDetail}
                  setProductDetail={setProductDetail}
                />
                <Price productDetail={productDetail} />
              </div>
            </div>
          </div>
          <hr className="text-dark opacity-10 py-3" />
          <TechnicalSpecs productDetail={productDetail} />
        </div>
      </div>
    </div>
  );
};

Specification.defaultProps = {
  productDetail: {},
  setProductDetail: () => {},
};

Specification.propTypes = {
  productDetail: shape({}),
  setProductDetail: func,
};

export default Specification;
