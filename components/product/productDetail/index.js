import React from "react";
import KnowYourBolt from "./knowYourBolt";
import GetCompanyAccount from "./getCompanyAccount";
import CustomerPurchase from "./customerPurchase";

const ProductDetail = () => {
  return (
    <>
      <KnowYourBolt />
      <GetCompanyAccount />
      <hr className="opacity-10 bg-dark mb-12" />
      <CustomerPurchase />
    </>
  );
};

export default ProductDetail;
