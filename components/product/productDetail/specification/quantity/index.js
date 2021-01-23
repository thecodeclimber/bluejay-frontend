import React from "react";
import { shape, func } from "prop-types";
import ProductQuantity from "../../../../elements/productQuantity";

const Quantity = (props) => {
  const { productDetail, setProductDetail } = props;
  return (
    <>
      <div className="font-medium text-dark not-italic text-lg opacity-75 tracking-tight pt-8 pb-5 ">
        Quantity
      </div>
      <div className="min-w-200">
        <ProductQuantity
          product={productDetail}
          handleProducts={setProductDetail}
        />
      </div>
    </>
  );
};

Quantity.defaultProps = {
  productDetail: {},
  setProductDetail: () => {},
};

Quantity.propTypes = {
  productDetail: shape({}),
  setProductDetail: func,
};

export default Quantity;
