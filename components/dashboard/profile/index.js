import React from "react";
import MyBasket from "./myBasket";
import MyWishlist from "./myWishlist";
import MyOrders from "./myOrders";
import PersonalData from "./personalData";

const Profile = () => {
  return (
    <div className="px-16 py-10 h-full bg-gray90 tracking-tight font-ubuntu">
      <div className="flex items-center justify-between">
        <MyBasket />
        <MyWishlist />
      </div>
      <div className="flex items-center justify-between py-12">
        <MyOrders />
        <PersonalData />
      </div>
    </div>
  );
};

export default Profile;
