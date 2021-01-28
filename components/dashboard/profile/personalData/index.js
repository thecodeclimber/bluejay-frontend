import React from "react";
import { GoPencil as PencilIcon } from "react-icons/go";

const PersonalData = () => {
  return (
    <div className="max-w-365 bg-white rounded-lg tracking-tight shadow-grey-8">
      <div className="p-6">
        {" "}
        <div className="text-dark text-2xl font-light whitespace-pre pb-6">
          Personal
          <span className="font-medium"> Data</span>
        </div>
        <div>
          <div className="font-medium text-lg text-dark pb-2 whitespace-pre">
            Andrew Babak
          </div>
          <div className="font-medium text-dark text-base pb-2 whitespace-pre">
            E-mail:<span className="font-light"> andreybabak101@gmail.com</span>
          </div>
          <div className="font-medium text-dark text-base whitespace-pre">
            Phone:<span className="font-light">380 97 135 9883</span>
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <div className="flex items-center justify-start w-full text-primary text-sm w-full whitespace-pre pr-4">
            <PencilIcon className="mr-2" />
            Change Data
          </div>
          <div className="flex items-center text-sm text-primary w-full border-l whitespace-pre border-dark border-opacity-10 w-full pl-4">
            <PencilIcon className="mr-2" />
            Change Password
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
