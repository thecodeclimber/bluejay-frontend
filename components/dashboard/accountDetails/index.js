import React from "react";
import BreadCrum from "../breadCrum";
import { GoPencil as PencilIcon } from "react-icons/go";

const AccountDetails = () => {
  const accountDetails = [
    {
      firstName: "Andrew",
      lastName: "Babak",
      email: "andreybabak101@gmail.com",
      phone: "(773) 281-3100",
      Address: "1770 W. Berteau Avenue Unit 402 Chicago, IL 60613",
      dob: "August 30, 1996",
      language: "Ukraine, English",
    },
  ];

  return (
    <div className="flex flex-col pt-8 px-12 bg-gray90 tracking-tight font-ubuntu h-full tracking-tight">
      <BreadCrum />
      <div className="flex justify-between mt-8 rounded w-full bg-white shadow-grey-8 pr-8 py-8">
        <div className="flex-col items-center justify-center text-center w-2/12 border-r border-dark border-opacity-10">
          <div className="relative flex justify-center mb-6">
            <img src="/img/account-detail-logo.png" />
            <div className="absolute right-0 bottom-0 mb-1 mr-10 rounded bg-white p-2 rounded-full shadow-grey-8">
              <PencilIcon className="text-dark" />
            </div>
          </div>
          <div className="font-medium text-dark text-base pb-2 whitespace-pre">
            Andrey Babak{" "}
          </div>
          <div className="font-light text-sm text-dark opacity-75 whitespace-pre">
            Joined Jan 07, 2020
          </div>
        </div>
        <div className="w-6/12">
          <div>
            {accountDetails.length > 0 &&
              accountDetails.map((person, index) => (
                <div className="flex-col" key={index}>
                  <div className="text-base font-normal">
                    <span className="text-dark opacity-75 min-w-150">
                      First Name:
                    </span>
                    <span className="font-medium text-dark">
                      {person.firstName}
                    </span>
                  </div>
                  <hr className="text-dark opacity-10 my-4" />
                  <div className="flex justify-between text-base font-normal">
                    <span className="text-dark opacity-75">Last name:</span>
                    <span className="font-medium text-dark">
                      {person.lastName}
                    </span>
                  </div>
                  <hr className="text-dark opacity-10 my-4" />
                  <div className="text-base font-normal">
                    <span className="text-dark opacity-75">E-mail:</span>
                    <span className="font-medium text-dark">
                      {person.email}
                    </span>
                  </div>
                  <hr className="text-dark opacity-10 my-4" />
                  <div className="text-base font-normal">
                    <span className="text-dark opacity-75">Phone:</span>
                    <span className="font-medium text-dark">
                      {person.phone}
                    </span>
                  </div>
                  <hr className="text-dark opacity-10 my-4" />
                  <div className="text-base font-normal">
                    <span className="text-dark opacity-75">
                      Shipping Addresses:
                    </span>
                    <span className="font-medium text-dark">
                      {person.Address}
                    </span>
                  </div>
                  <hr className="text-dark opacity-10 my-4" />
                  <div className="text-base font-normal">
                    <span className="text-dark opacity-75">Date of Birth:</span>
                    <span className="font-medium text-dark">{person.dob}</span>
                  </div>
                  <hr className="text-dark opacity-10 my-4" />
                  <div className="text-base font-normal">
                    <span className="text-dark opacity-75">Language:</span>
                    <span className="font-medium text-dark">
                      {person.language}
                    </span>
                  </div>
                </div>
              ))}
            <div className="flex items-center justify-between pt-8">
              <div className="flex py-2 px-2 bg-light rounded-3xl">
                <img className="mr-4" src="/img/facebook-icon.png" />
                <div className="pr-2">
                  <div className="text-facebook">Facebook</div>
                  <div className="text-facebook cursor-pointer font-light text-sm opacity-90">
                    Connect to the social network
                  </div>
                </div>
              </div>
              <div className="flex py-2 px-2 bg-light rounded-3xl">
                <img className="mr-4" src="/img/google-icon.png" />
                <div className="pr-2">
                  <div className="text-dark">Andrew Babak</div>
                  <div className="text-error cursor-pointer font-light text-sm opacity-90">
                    Connect to the social network
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/12 border-l border-dark border-opacity-10 pl-8">
          <div className="flex items-center text-primary text-base font-medium justify-center px-4 py-3 border border-primary border-opacity-10 rounded mb-4 cursor-pointer">
            Edit personal information
          </div>
          <div className="flex items-center text-primary text-base font-medium justify-center px-4 py-3 border border-primary border-opacity-10 rounded mb-4 cursor-pointer">
            Change password
          </div>
          <div className="flex items-center text-error text-base font-medium justify-center px-4 py-3 border border-error border-opacity-10 rounded cursor-pointer">
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
