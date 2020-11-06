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
                  <div className="bg-opacity-01 bg-dark min-w-293 border-r border-opacity-07 border-dark">
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
                <div className="w-640 flex flex-wrap">
                  {products && products.length > 0 && products.map((row, index) => {
                    const { img, name } = row || {}
                    return (
                      <Menu.Item as="div"
                        key={index}
                        className={classnames("text-base focus:outline-none text-center w-210 hover:text-primary cursor-pointer", {
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
