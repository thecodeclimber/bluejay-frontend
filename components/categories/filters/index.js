import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { shape, func } from "prop-types";
import { VscClose as CloseIcon } from "react-icons/vsc";
import { MdArrowDropDown as DropDownIcon } from "react-icons/md";
import { SORT_OPTIONS_ARRAY } from "../../../utils/constants";
import { useRouter } from "next/router";

const Filters = (props) => {
  const router = useRouter();
  const { selectedCategory, query, handleSorting, selectedOption } = props;
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdownSelection = (option) => {
    handleSorting(option);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(false);
  };

  return (
    <div className="flex justify-between pt-2">
      <div>
        {(query?.q || selectedCategory?.name) && (
          <div
            onClick={() => router.push("/categories")}
            className="flex items-center text-base border border-dark border-opacity-10 font-medium text-black px-5 py-3 rounded"
          >
            <span className="mr-5">{query?.q || selectedCategory?.name}</span>
            <span>
              <CloseIcon className="text-2lg text-black cursor-pointer" />
            </span>
          </div>
        )}
      </div>
      <Menu as="div" className="relative" onMouseLeave={closeDropdown}>
        <div
          onClick={toggleDropdown}
          className="flex cursor-pointer items-center text-base border border-dark border-opacity-10 text-black px-5 py-3 rounded"
        >
          <span className="font-medium">Sort by:</span>
          <span className="mr-5 pl-1">{selectedOption.name}</span>
          <span>
            <DropDownIcon className="text-2lg text-black" />
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
          className="absolute z-10 right-0 w-full"
        >
          <Menu.Items
            className="font-ubuntu bg-white outline-none py-3 text-dark rounded-b shadow-grey-8"
            static
          >
            {SORT_OPTIONS_ARRAY &&
              SORT_OPTIONS_ARRAY.length > 0 &&
              SORT_OPTIONS_ARRAY.filter(
                (data) => data.value !== selectedOption.value
              ).map((option, index) => {
                return (
                  <div key={index}>
                    <Menu.Item
                      as="div"
                      onClick={() => handleDropdownSelection(option)}
                      className="font-light px-6 py-3 text-sm truncate opacity-75 focus:outline-none cursor-pointer"
                    >
                      {option.name}
                    </Menu.Item>
                    {index !== SORT_OPTIONS_ARRAY.length - 2 && (
                      <hr className="opacity-05 mx-6" />
                    )}
                  </div>
                );
              })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

Filters.defaultProps = {
  query: {},
  selectedCategory: {},
  selectedOption: {},
  handleSorting: () => {},
};

Filters.propTypes = {
  query: shape({}),
  selectedCategory: shape({}),
  selectedOption: shape({}),
  handleSorting: func,
};

export default Filters;
