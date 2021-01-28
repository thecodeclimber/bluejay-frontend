import React from "react";
import MyBasket from "./myBasket";
import MyWishlist from "./myWishlist";
import MyOrders from "./myOrders";
import PersonalData from "./personalData";

const Profile = () => {
  return (
    <div className="pt-8 px-12 bg-gray90 tracking-tight font-ubuntu">
      <div className="flex">
        <MyBasket />
        <MyWishlist />
      </div>
      <div className="flex pt-16 pb-40">
        <MyOrders />
        <PersonalData />
      </div>
    </div>
  );
};

export default Profile;
