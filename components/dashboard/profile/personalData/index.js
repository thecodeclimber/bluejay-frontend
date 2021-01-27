import React from "react";
import { GoPencil as PencilIcon } from "react-icons/go";

const PersonalData = () => {
  return (
    <div className="max-w-365 bg-white rounded-lg tracking-tight py-6 px-8">
      <div>
        {" "}
        <div className="text-dark text-2xl font-light whitespace-pre pb-6">
          Personal
          <span className="font-medium"> Data</span>
        </div>
        <div>
          <div className="font-medium text-lg text-dark pb-3 whitespace-pre">
            Andrew Babak
          </div>
          <div className="font-medium text-dark text-base pb-3 whitespace-pre">
            E-mail:<span className="font-light"> andreybabak101@gmail.com</span>
          </div>
          <div className="font-medium text-dark text-base whitespace-pre">
            Phone:<span className="font-light">380 97 135 9883</span>
          </div>
        </div>
        <div className="flex justify-between pt-4">
          <div className="flex items-center text-primary text-sm w-full whitespace-pre px-4">
            <PencilIcon className="mr-2" />
            Change Data
          </div>
          <div className="flex items-center text-sm text-primary border-l whitespace-pre border-dark border-opacity-10 w-full px-4">
            <PencilIcon className="mr-2" />
            Change Password
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
