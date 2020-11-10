import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import classnames from "classnames";
import {
  MdAccountCircle as UserIcon,
  MdArrowDropDown as ArrowIcon,
  MdSearch as SearchIcon,
  MdSubject as CategoryIcon,
  MdChevronRight as ChevronRight,
} from "react-icons/md";
import {
  VscClose as CloseIcon
} from "react-icons/vsc";

const SearchType = {
  category: "category",
  history: "history",
  result: "result",
};

const Logo = () => (
  <div className="flex items-center">
    <Image src="/img/logo.png" width="68" height="68" />
    {/* <div className="ml-3 font-medium text-white">
      <div>Bluejay</div>
      <div>Fasteners</div>
    </div> */}
  </div>
);

const Search = () => {
  const [activeSearchType, setActiveSearchType] = useState("");
  const data = {};
  data.searchCategories = [
    {
      name: "Anchors"
    },
    {
      name: "Carriage Bolts"
    },
    {
      name: "Chain & S-Hooks"
    },
    {
      name: "Cotter Pins"
    },
    {
      name: "Drywall Screws"
    },
    {
      name: "Flange Bolts"
    },
    {
      name: "Cotter Pins"
    },
    {
      name: "Drywall Screws"
    },
    {
      name: "Flange Bolts"
    },
  ];

  data.searchHistory = [
    {
      img: "/img/screw-img.svg",
      name: "Carriage Bolts 1/4-20 UNC Steel Zinc"
    },
    {
      img: "/img/screw-img.svg",
      name: "Carriage Bolts 5/16-18 UNC Steel Zinc"
    },
    {
      img: "/img/screw-img.svg",
      name: "Carriage Bolts 3/8-16 UNC Steel Zinc"
    },
    {
      img: "/img/screw-img.svg",
      name: "Carriage Bolts 1/2-13 UNC Steel Zinc"
    },
  ];

  const handleActiveSearchType = (type = "") => {
    setActiveSearchType(type);
  }

  return (
    <div className="relative flex flex-grow mx-8 rounded-md" onMouseLeave={() => handleActiveSearchType()}>
      <Menu as="div" className="relative">
        <Menu.Button
          onClick={() => handleActiveSearchType(SearchType.category)}
          className={classnames("inline-flex h-full items-center px-4 border-r border-solid bg-light border-alpha-05 sm:text-sm focus:outline-none", {
            "rounded-l-md": activeSearchType !== SearchType.history,
            "rounded-tl-md": activeSearchType === SearchType.history
          })}
        >
          All
        <ArrowIcon className="ml-3" />
        </Menu.Button>
        {activeSearchType == SearchType.category && <SearchCategory {...data} />}
      </Menu>
      <input
        id="company_website"
        className={classnames("flex-1 block w-full p-3 rounded-none focus:outline-none form-input sm:text-base sm:leading-5", {
          "rounded-r-md ": activeSearchType !== SearchType.history,
          "rounded-tr-md": activeSearchType === SearchType.history
        })}
        placeholder="Search..."
        onClick={() => handleActiveSearchType(SearchType.history)}
      />
      <div className="absolute inset-y-0 right-0 flex items-center px-4 border-l border-solid pointer-events-none border-light">
        <SearchIcon className="text-xl text-primary" />
      </div>
      {activeSearchType == SearchType.history
        && <Menu as="div" className="absolute w-full mt-11 bg-white shadow-grey-8 rounded-b">
          <SearchHistory {...data} />
        </Menu>}

    </div>
  );
};

const SearchCategory = (data) => {
  const { searchCategories } = data || {};
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
      <Menu.Items className="font-ubuntu bg-white outline-none py-3 mt-4 text-dark rounded relative min-w-200 shadow-grey-8" static>
        <span className="w-5 h-5 -mt-2 ml-8 rounded-sm bg-white absolute -z-1 left-0 top-0 transform rotate-45" />
        {searchCategories.length > 0 && searchCategories.map((category, index) => {
          const { name } = category || {};
          return (<Menu.Item as="div" key={index}
            className="text-base flex items-center justify-between px-6 py-2 truncate hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer focus:outline-none"
          >
            {name}
          </Menu.Item>
          );
        })}
      </Menu.Items>
    </Transition>
  );
};

const SearchHistory = (data) => {
  const { searchHistory } = data || {};
  return (
    <Transition
      show={true}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <div className="flex justify-between font-light text-xs px-4 pt-3 border-t border-light">
        <input
          id="search_history"
          className={classnames("focus:outline-none form-input text-dark text-opacity-75 font-ubuntu w-full font-light", {
          })}
          placeholder="Search History"
        />
        <div className="text-primary cursor-pointer truncate w-200 text-right">
          Clear search history
      </div>
      </div>
      <Menu.Items className="font-ubuntu outline-none py-3 text-dark relative min-w-200" static>
        {searchHistory.length > 0 && searchHistory.map((history, index) => {
          const { name, img } = history || {};
          return (<Menu.Item as="div" key={index}
            className="text-base flex items-center justify-between px-4 py-2 truncate hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer focus:outline-none"
          >
            <div className="flex">
              <div className="pr-3">
                <img key={index} src={img} className="w-6 object-contain" alt="product-img" />
              </div>
              <div className="text-xs flex items-center">
                {name}
              </div>
            </div>
            <div>
              <CloseIcon className="text-lg text-dark" />
            </div>
          </Menu.Item>
          );
        })}
      </Menu.Items>
    </Transition>
  );
}
const Categories = () => {
  const [isActiveCategory, setIsActiveCategory] = useState(false)
  const [activeList, setActiveList] = useState(1);
  const [activeSubList, setActiveSubList] = useState(1);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const handleSubCategories = (id) => {
    const filteredSubCategories = data.categorySubMenu.filter((data) => data.categoryId == id) || [];
    setSubCategories(filteredSubCategories);
  }

  const handleActiveList = (id) => {
    setActiveList(id);
    const activeSubMenu = data.categorySubMenu.find((data) => data.categoryId == id) || {};

    if (activeSubMenu?.id) {
      setActiveSubList(activeSubMenu.id);
      handleSubCategories(id);
    }
  }

  const handleActiveSubList = (id) => {
    setActiveSubList(id);
    handleProducts();
  }

  const handleProducts = () => {
    setProducts(data.products);
  }

  const setActiveCategory = (open = false) => {
    setIsActiveCategory(open);
    setActiveList(1);
    handleSubCategories(1)
    handleActiveSubList(1)
  }

  const data = {}

  data.categoryMenu = [
    {
      id: 1,
      name: "Conical Plastic Anchors",
    },
    {
      id: 2,
      name: "Drop-in Anchors & Setting Tools",
    },
    {
      id: 3,
      name: "E-Z Anchors (Metal & Plastic)",
    },
    {
      id: 4,
      name: "Expansion Shields (Single & Double)",
    },
    {
      id: 5,
      name: "Hammer Drive Anchors",
    },
    {
      id: 6,
      name: "Hollow Wall Anchors",
    },
    {
      id: 7,
      name: "Lag Shields",
    },
    {
      id: 8,
      name: "Machine Screw Anchors & Setting Tools",
    },
    {
      id: 9,
      name: "Nylon Nail Anchors (Flat & Mushroom)",
    },
    {
      id: 10,
      name: "Sleeve Anchors",
    },
    {
      id: 11,
      name: "Wedge Anchors, Steel & Stainless Steel",
    }];

  data.categorySubMenu = [
    {
      id: 1,
      name: "Conical Plastic Anchors",
      categoryId: 1,
      productId: 1
    },
    {
      id: 2,
      name: "Drop-in Anchors",
      categoryId: 1,
      productId: 1
    },
    {
      id: 3,
      name: "E-Z Anchor",
      categoryId: 1,
      productId: 13
    },
    {
      id: 4,
      name: "Expansion Shields",
      categoryId: 1,
      productId: 1
    },
    {
      id: 5,
      name: "Hammer Anchors",
      categoryId: 1,
      productId: 1
    },
    {
      id: 6,
      name: "Hollow Wall Anchors",
      categoryId: 1,
      productId: 1
    },
    {
      id: 7,
      name: "Lag Shields",
      categoryId: 1,
      productId: 1
    },
    {
      id: 8,
      name: "Machine Screw Anchors",
      categoryId: 1,
      productId: 1
    },
    {
      id: 9,
      name: "Nylon Nail Anchors",
      categoryId: 1,
      productId: 1
    },
    {
      id: 10,
      name: "Sleeve Anchors",
      categoryId: 1,
      productId: 1
    },
    {
      id: 11,
      name: "Wedge Anchors",
      categoryId: 1,
      productId: 1
    },
    {
      id: 12,
      name: "Conical Plastic Anchors",
      categoryId: 2,
      productId: 1
    },
    {
      id: 13,
      name: "E-Z Anchor",
      categoryId: 3,
      productId: 1
    },
    {
      id: 14,
      name: "Expansion Shields",
      categoryId: 4,
      productId: 1
    },
    {
      id: 15,
      name: "Hammer Anchors",
      categoryId: 5,
      productId: 1
    },
    {
      id: 16,
      name: "Hollow Wall Anchors",
      categoryId: 6,
      productId: 1
    },
    {
      id: 17,
      name: "Lag Shields",
      categoryId: 7,
      productId: 1
    },
    {
      id: 18,
      name: "Machine Screw Anchors",
      categoryId: 8,
      productId: 1
    },
    {
      id: 19,
      name: "Nylon Nail Anchors",
      categoryId: 9,
      productId: 1
    },
    {
      id: 20,
      name: "Sleeve Anchors",
      categoryId: 10,
      productId: 1
    },
    {
      id: 21,
      name: "Wedge Anchors",
      categoryId: 11,
      productId: 1
    },
  ]

  data.products = [
    {
      id: 1,
      img: "/img/category-img1.svg",
      name: "6-32 Slotted Flat Head",
    },
    {
      id: 1,
      img: "/img/category-img2.svg",
      name: "6-32 Slotted Flat Head",
    },
    {
      id: 1,
      img: "/img/category-img3.svg ",
      name: "6-32 Slotted Flat Head",
    },
    {
      id: 1,
      img: "/img/category-img1.svg",
      name: "6-32 Slotted Flat Head",
    },
    {
      id: 1,
      img: "/img/category-img2.svg",
      name: "6-32 Slotted Flat Head",
    },
    {
      id: 1,
      img: "/img/category-img3.svg ",
      name: "6-32 Slotted Flat Head",
    }]

  return (
    <Menu as="div" onMouseLeave={() => setActiveCategory(false)} className="relative">
      <Menu.Button onMouseOver={() => setActiveCategory(true)}
        className="px-4 py-2 focus:outline-none flex items-center bg-white border-2 border-white rounded-lg hover:block cursor-pointer hover:block border-opacity-10 text-dark hover:bg-primary hover:text-white">
        <CategoryIcon className="mr-3" />
            Categories
          <ArrowIcon className="ml-2" />
      </Menu.Button>
      {isActiveCategory &&
        <Transition
          show={isActiveCategory}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="absolute z-10 right-0"
        >
          <div className="mt-4">
            <Menu.Items className="font-ubuntu bg-white outline-none text-dark rounded relative shadow-grey-8" static>
              <span className="w-5 h-5 -mt-2 mr-5 rounded-sm bg-white absolute -z-1 right-0 top-0 transform rotate-45" />
              <div className="flex">
                <div className="bg-opacity-03 bg-dark">
                  {data.categoryMenu.map((menu, index) => {
                    const { id, name } = menu || {}
                    return (
                      <Menu.Item as="div" key={index} onMouseOver={() => handleActiveList(id)}
                        className={classnames("text-base focus:outline-none flex items-center justify-between px-4 py-3 truncate hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer", {
                          "bg-primary bg-opacity-05 text-primary": activeList == id,
                        })}
                      >
                        <div>{name}</div>
                        <div className="ml-10">
                          {<ChevronRight className="text-lg" />}
                        </div>
                      </Menu.Item>
                    )
                  })}
                </div>
                {subCategories && subCategories.length > 0 &&
                  <div className="bg-opacity-01 bg-dark min-w-300 border-r border-opacity-07 border-dark">
                    {subCategories.map((subMenu, index) => {
                      const { name, id } = subMenu || {}
                      return (
                        <Menu.Item as="div"
                          key={index}
                          onMouseOver={() => handleActiveSubList(id)}
                          className={classnames("text-base focus:outline-none flex items-center justify-between px-4 py-3 truncate hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer", {
                            "bg-primary bg-opacity-05 text-primary": activeSubList == id,
                          })}
                        >
                          <div>{name}</div>
                          <div className="ml-10">
                            {<ChevronRight className="text-lg" />}
                          </div>
                        </Menu.Item>
                      )
                    })}
                  </div>
                }
                <div className="w-600 flex flex-wrap">
                  {products && products.length > 0 && products.map((row, index) => {
                    const { img, name } = row || {}
                    return (
                      <Menu.Item as="div"
                        key={index}
                        className={classnames("text-base focus:outline-none text-center w-200 hover:text-primary cursor-pointer", {
                          "pl-10": index == 0,
                          "pr-10": index == 2 || index == 5,
                          "pt-10": index <= 2,
                          "pb-10": index >= 3,
                        })}
                      >
                        <div
                          className={classnames("h-full flex items-center justify-center border-opacity-10 border-dark", {
                            "border-b": index <= 2,
                            "border-r": index != 2 && index != 5,
                          })}
                        >
                          <div>
                            <Image src={img} width="120" height="120" className="object-contain" />
                            <div className="py-4 text-center px-2  font-medium leading-4 w-32 leading-5">
                              {name}
                            </div>
                          </div>
                        </div>
                      </Menu.Item>
                    )
                  })}
                </div>
              </div>
            </Menu.Items>
          </div>
        </Transition>
      }
    </Menu>
  )
};

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
