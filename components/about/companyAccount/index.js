import React from 'react';

const CompanyAccount = () => {
  return (
    <div className="bg-account bg-cover bg-no-repeat py-8">
      <div className="container mx-auto border rounded border-opacity-10 border-white">
        <div className="text-3xl py-10 font-ubuntu text-white text-center">
          <span className="font-light">Get</span> <span className="font-medium">Your Company An Account</span>
        </div>
        <div className="flex ">
          <div className="w-full pl-20">
            <div className="font-light text-xs text-white mb-3">
              Company name *
            </div>
            <input type="text"
              name="email"
              placeholder="Company name"
              className="w-full border text-white text-base border-white h-12 bg-white bg-opacity-0 rounded border-opacity-10 px-4 font-normal focus:outline-none"
            />
          </div>
          <div className="w-full px-12">
            <div className="font-light text-xs text-white mb-3">
              E-mail *
            </div>
            <input type="text"
              name="email"
              placeholder="E-mail"
              className="w-full border text-white text-base border-white h-12 bg-white bg-opacity-0 rounded border-opacity-10 px-4 font-normal focus:outline-none"
            />
          </div>
          <div className="w-full pr-20">
            <div className="font-light text-xs text-white mb-3">
              Account Type *
            </div>
            <input type="text"
              name="email"
              placeholder="Account Type"
              className="w-full border text-white text-base border-white h-12 bg-white bg-opacity-0 rounded border-opacity-10 px-4 font-normal focus:outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center my-12">
          <button
            className="py-3 px-16 rounded bg-primary text-white text-base focus:outline-none"
          >
            Get an Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyAccount;