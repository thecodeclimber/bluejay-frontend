import React from "react";
import GetYourCompany from "../about/getYourCompany";
import Partners from "../about/partners";
import GetCompanyAccount from "../product/productDetail/getCompanyAccount";
import Banner from "./banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <GetCompanyAccount fromHome />
      <hr className="opacity-10 bg-dark mb-12" />
      <GetYourCompany />
      <hr className="opacity-10 bg-dark mb-12" />
      <Partners />
    </div>
  );
};

export default Home;
