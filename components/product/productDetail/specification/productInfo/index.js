import React from "react";
import { shape } from "prop-types";

const ProductInfo = (props) => {
  const { productDetail } = props;

  return (
    <div className="font-ubuntu">
      <div className="font-medium text-dark not-italic text-lg opacity-75 tracking-tight pb-3 pt-8">
        Product Information
      </div>
      <div className="font-light text-base text-dark tracking-tight leading-relaxed pb-6 pr-3">
        <div dangerouslySetInnerHTML={{ __html: productDetail?.description }} />
      </div>
      {productDetail?.options && productDetail.options.length > 0 && (
        <hr className="text-dark opacity-10 pb-6" />
      )}
    </div>
  );
};

ProductInfo.defaultProps = {
  productDetail: {},
};

ProductInfo.propTypes = {
  productDetail: shape({}),
};

export default ProductInfo;
