import React from "react";
import KnowYourBolt from "./knowYourBolt";
import GetCompanyAccount from "./getCompanyAccount";
import CustomerPurchase from "./customerPurchase";
import Specification from "./specification";
import BreadCrum from "./breadCrum";

const ProductDetail = () => {
  return (
    <>
      <BreadCrum />
      <hr className="opacity-10 bg-dark mb-8" />
      <Specification />
      <KnowYourBolt />
      <GetCompanyAccount />
      <hr className="opacity-10 bg-dark mb-12" />
      <CustomerPurchase />
    </>
  );
};

export default ProductDetail;
