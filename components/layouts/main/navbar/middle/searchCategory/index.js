import React from "react";
import { func, shape } from "prop-types";
import { Menu, Transition } from "@headlessui/react";

const SearchCategory = (props) => {
  const { categories, handleSearchedCategory, handleActiveSearchType } =
    props || {};

  return (
    <Transition
      show={true}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      className="absolute z-10"
    >
      <Menu.Items
        className="font-ubuntu bg-white outline-none py-3 mt-4 text-dark rounded relative min-w-200 shadow-grey-8"
        static
      >
        <span className="w-5 h-5 -mt-2 ml-8 rounded-sm bg-white absolute -z-1 left-0 top-0 transform rotate-45" />
        <div className="max-h-350 overflow-y-auto">
          {categories.length > 0 &&
            categories.map((category, index) => {
              const { name } = category || {};
              return (
                <Menu.Item
                  as="div"
                  key={index}
                  className="text-base flex items-center justify-between px-6 py-2 truncate text-dark hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer focus:outline-none"
                  onClick={(e) => {
                    handleSearchedCategory(category);
                    handleActiveSearchType();
                  }}
                >
                  {name}
                </Menu.Item>
              );
            })}
        </div>
      </Menu.Items>
    </Transition>
  );
};

SearchCategory.propTypes = {
  categories: shape({}),
  handleSearchedCategory: func,
  handleActiveSearchType: func,
};

export default SearchCategory;
