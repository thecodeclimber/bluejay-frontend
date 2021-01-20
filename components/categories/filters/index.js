import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { shape } from "prop-types";
import { VscClose as CloseIcon } from "react-icons/vsc";
import { MdArrowDropDown as DropDownIcon } from "react-icons/md";

const Filters = (props) => {
  const { selectedCategory } = props;
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(false);
  };

  return (
    <div className="flex justify-between pt-2">
      <div className="flex items-center text-base border border-dark border-opacity-10 font-medium text-black px-5 py-3 rounded">
        <span className="mr-5">{selectedCategory?.name}</span>
        <span>
          <CloseIcon className="text-2lg text-black cursor-pointer" />
        </span>
      </div>
      <Menu as="div" className="relative" onMouseLeave={closeDropdown}>
        <div className="flex items-center text-base border border-dark border-opacity-10 text-black px-5 py-3 rounded">
          <span className="font-medium">Sort by:</span>
          <span className="mr-5 pl-1">a-z</span>
          <span>
            <DropDownIcon
              className="text-2lg text-black cursor-pointer"
              onClick={toggleDropdown}
            />
          </span>
        </div>
        <Transition
          show={openDropdown}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="absolute z-10 right-0"
        >
          <Menu.Items
            className="font-ubuntu bg-white outline-none p-6 text-dark rounded-b shadow-grey-8"
            static
          >
            <Menu.Item
              as="div"
              className="font-light text-sm truncate opacity-75 focus:outline-none"
            >
              ascending order
            </Menu.Item>
            <hr className="my-3 opacity-05" />
            <Menu.Item
              as="div"
              className="font-light text-sm truncate opacity-75 focus:outline-none"
            >
              descending order
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

Filters.propTypes = {
  selectedCategory: shape({}),
};

export default Filters;
