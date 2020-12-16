import React, { setState } from "react";
import KnowYourBolt from "./knowYourBolt";
import GetCompanyAccount from "./getCompanyAccount";

const ProductDetail = () => {
  return (
    <>
      <KnowYourBolt />
      <GetCompanyAccount />
      <hr className="opacity-10 bg-dark mb-12" />
    </>
  );
};

export default ProductDetail;
