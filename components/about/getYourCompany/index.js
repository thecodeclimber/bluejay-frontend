import React, { useContext } from "react";
import { setModal } from "../../../hooks/modal/actions";
import { MODAL_TYPES } from "../../../hooks/modal/constants";
import { Context } from "../../../hooks/store";

const GetYourCompany = () => {
  const { dispatchModal } = useContext(Context);
  return (
    <div className="container mx-auto px-8 bg-account bg-cover bg-no-repeat py-8 rounded mb-16">
      <div className="border rounded border-opacity-10 border-white">
        <div className="text-3xl pt-10 pb-4 font-ubuntu text-white text-center">
          <span className="font-light">Get</span>{" "}
          <span className="font-medium">Your Company An Account</span>
        </div>
        <div className="flex justify-center mb-12">
          <button
            className="py-3 px-16 rounded bg-primary text-white text-base focus:outline-none"
            onClick={() => dispatchModal(setModal(MODAL_TYPES.REGISTRATION))}
          >
            Get an Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetYourCompany;
