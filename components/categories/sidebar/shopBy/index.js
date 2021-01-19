import React, { useState } from "react";
import {
  IoIosArrowUp as UpIcon,
  IoIosArrowDown as DownIcon,
} from "react-icons/io";

const ShopBy = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleShopBy = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4 pr-4">
        <div className="text-lg font-medium text-dark">Shop By</div>
        <div>
          {isOpen ? (
            <UpIcon
              className="text-lg text-dark cursor-pointer"
              onClick={toggleShopBy}
            />
          ) : (
            <DownIcon
              className="text-lg text-dark cursor-pointer"
              onClick={toggleShopBy}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ShopBy;
