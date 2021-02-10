import React from "react";

const Payment = () => {
  const cardDetails = {
    cardImg: "/img/visaLogo.png",
    cardNumber: "**** 3014",
  };

  return (
    <div className="py-6 pl-6 pr-2 w-4/12">
      <div className="border-b border-dark border-opacity-10">
        <div className="font-medium text-base tracking-tight">
          Payment Method: <span className="font-light">Cart</span>
        </div>
        <div className="flex items-center py-2 pb-6">
          <img src={cardDetails.cardImg} width="24px" height="24px" />
          <span className="pl-4 font-normal opacity-90">
            {cardDetails.cardNumber}
          </span>
        </div>
      </div>
      <div className="border-b border-dark border-opacity-10 pt-6 pb-16">
        <div className="font-medium tracking-tight">
          Delivery: <span className="font-light"> Express Delivery</span>
        </div>
        <div className="flex text-sm text-dark opacity-50 items-center py-2 font-light tracking-tight">
          1770 W. Berteau Avenue <br />
          Unit 402 Chicago, IL 60613
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-between">
          <div className="text-dark text-base font-light opacity-50 tracking-tight">
            Subtotal
          </div>
          <div className="font-medium">$33.00</div>
        </div>
        <div className="flex pt-2 pb-4 justify-between">
          <div className="text-dark font-light text-base opacity-50 tracking-tight">
            Shipping
          </div>
          <div className="font-medium">$6.24</div>
        </div>
        <div className="flex justify-between text-xl tracking-tight">
          <div className="font-light">Total</div>
          <div className="font-medium">$108.00</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
