import Image from "next/image";
import { Menu } from "@headlessui/react";

import {
  MdAccountCircle as UserIcon,
  MdArrowDropDown as ArrowIcon,
  MdSearch as SearchIcon,
  MdSubject as CategoryIcon,
} from "react-icons/md";

const Logo = () => (
  <div className="flex items-center">
    <Image src="/img/logo.png" width="68" height="68" />
    {/* <div className="ml-3 font-medium text-white">
      <div>Bluejay</div>
      <div>Fasteners</div>
    </div> */}
  </div>
);

const Search = () => (
  <div className="relative flex flex-grow mx-8 rounded-md">
    <span className="inline-flex items-center px-4 border-r border-solid rounded-l-lg bg-light border-alpha-05 sm:text-sm">
      All
      <ArrowIcon className="ml-3" />
    </span>
    <input
      id="company_website"
      className="flex-1 block w-full p-3 rounded-none focus:outline-none form-input rounded-r-md sm:text-base sm:leading-5"
      placeholder="Search..."
    />
    <div className="absolute inset-y-0 right-0 flex items-center px-4 border-l border-solid pointer-events-none border-light">
      <SearchIcon className="text-xl text-primary" />
    </div>
  </div>
);

const Categories = () => (
  <div className="flex items-center px-4 py-2 bg-white border-2 border-white rounded-lg cursor-pointer border-opacity-10 text-dark hover:bg-success hover:text-white">
    <CategoryIcon className="mr-3" />
    Categories
    <ArrowIcon className="ml-2" />
  </div>
);

const MiddleNavbar = () => (
  <div className="flex items-center py-1 bg-dark">
    <div className="container flex items-center mx-auto">
      <Logo />
      <Search />
      <Categories />
    </div>
  </div>
);

export default MiddleNavbar;
