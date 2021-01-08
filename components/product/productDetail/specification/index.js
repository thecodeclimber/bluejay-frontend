import React from "react";
import { shape } from "prop-types";
import ProductSpecification from "./productSpecification";
import ProductImages from "./productImages";
import ProductInfo from "./productInfo";
import ThreadSize from "./threadSize";
import Grade from "./grade";
import Quantity from "./quantity";
import ProductVideos from "./productVideos";
import TechnicalSpecs from "./technicalSpecs";
import Material from "./material";
import BoxSize from "./boxSize";
import Price from "./price";

const Specification = (props) => {
  const { productDetail } = props;
  return (
    <div>
      <div className="container mx-auto flex">
        <div className="flex-col">
          <ProductImages productDetail={productDetail} />
          <hr className="text-dark opacity-10 mb-10 mr-8" />
          <ProductVideos />
        </div>
        <div className="w-full border-l border-dark border-opacity-10 mb-16 pl-10">
          <ProductSpecification productDetail={productDetail} />
          <div className="flex">
            <div>
              <ProductInfo productDetail={productDetail} />
              <ThreadSize />
              <Grade />
              <Material />
            </div>
            <div>
              <div className="flex flex-col border-l border-dark border-opacity-10 pl-8 h-full">
                <Quantity productDetail={productDetail} />
                <BoxSize />
                <Price productDetail={productDetail} />
              </div>
            </div>
          </div>
          <hr className="text-dark opacity-10 py-3" />
          <TechnicalSpecs />
        </div>
      </div>
    </div>
  );
};

Specification.defaultProps = {
  productDetail: {},
};

Specification.propTypes = {
  productDetail: shape({}),
};

export default Specification;
