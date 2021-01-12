import React from "react";
import GetYourCompany from "../about/getYourCompany";
import Partners from "../about/partners";
import GetCompanyAccount from "../product/productDetail/getCompanyAccount";
import Banner from "./banner";
import PopularCategories from "./popularCategories";
import BestProduct from "./bestProduct";
import FeaturedProduct from "./featuredProduct";
import TopDeals from "./topDeals";

const Home = () => {
  return (
    <div>
      <div className="pt-3">
        <Banner />
      </div>
      <PopularCategories />
      <hr className="opacity-10 bg-dark mt-8 mb-12" />
      <BestProduct />
      <hr className="opacity-05 bg-dark mt-2 mb-12" />
      <FeaturedProduct />
      <hr className="opacity-05 bg-dark  mt-2 mb-12" />
      <TopDeals />
      <hr className="opacity-10 bg-dark my-2" />
      <GetCompanyAccount fromHome />
      <hr className="opacity-10 bg-dark mb-12" />
      <GetYourCompany />
      <hr className="opacity-10 bg-dark mb-12" />
      <Partners />
    </div>
  );
};

export default Home;
