import React from "react";
import Image from "next/image";

const Payment = () => {
  const cardDetails = {
      cardImg : "/img/visaLogo.png",
      cardNumber : "**** 3014",
  }

  return (
    <div className="py-6 pl-6 pr-2 w-4/12">
      <div className="border-b border-dark border-opacity-10">
        <div className="font-bold text-base">Payment Method: <span className="font-light">Cart</span></div>
        <div className="flex items-center py-2 pb-6">
          <Image src={cardDetails.cardImg} width="24" height="24" />
          <span className="pl-4">{cardDetails.cardNumber}</span>
        </div>
      </div>
      <div className="border-b border-dark border-opacity-10 pt-6 pb-10">
        <div className="font-bold">Delivery: <span className="font-light"> Express Delivery</span></div>
        <div className="flex text-xs text-dark opacity-50 items-center py-2 font-light">
          1770 W. Berteau Avenue <br />
          Unit 402 Chicago, IL 60613
        </div>
      </div>
      <div className="pt-6">
        <div className="flex justify-between">
          <div className="text-dark opacity-50">Subtotal</div>
          <div className="font-bolder">$33.00</div>
        </div>
        <div className="flex pt-2 pb-4 justify-between">
          <div className="text-dark opacity-50">Shipping</div>
          <div className="font-bolder">$6.24</div>
        </div>
        <div className="flex justify-between text-xl">
          <div>Total</div>
          <div className="font-bolder">$108.00</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
