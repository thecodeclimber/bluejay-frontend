import React from "react";
import GetYourCompany from "../about/getYourCompany";
import Partners from "../about/partners";
import GetCompanyAccount from "../product/productDetail/getCompanyAccount";
import Banner from "./banner";
import PopularCategories from "./popularCategories";
import BestProduct from "./bestProduct";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularCategories />
      <hr className="opacity-10 bg-dark mt-8 mb-12" />
      <BestProduct />
      <hr className="opacity-05 bg-dark mt-2 mb-12" />
      <GetCompanyAccount fromHome />
      <hr className="opacity-10 bg-dark mb-12" />
      <GetYourCompany />
      <hr className="opacity-10 bg-dark mb-12" />
      <Partners />
    </div>
  );
};

export default Home;
