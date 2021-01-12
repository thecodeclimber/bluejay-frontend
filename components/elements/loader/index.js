import React from "react";

const Loader = () => {
  return (
    <div className="bg-white bg-opacity-95 fixed flex justify-center w-full h-full z-500 top-0 items-center">
      <div className="flex items-center px-4">
        <div>
          <img src="/img/loader.jpg" alt="loading..." className="w-16" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
