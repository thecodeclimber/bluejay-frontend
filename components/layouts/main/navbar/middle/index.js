import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { httpGet } from "../../../../../utils/https";
import {
  getSearchHistoryLocalStorage,
  setSearchHistoryLocalStorage,
} from "../../../../../utils/helper";
import { Menu, Transition } from "@headlessui/react";
import classnames from "classnames";
import {
  MdAccountCircle as UserIcon,
  MdArrowDropDown as ArrowIcon,
  MdSearch as SearchIcon,
  MdSubject as CategoryIcon,
  MdChevronRight as ChevronRight,
} from "react-icons/md";
import { VscClose as CloseIcon } from "react-icons/vsc";
import URLS from "../../../../../utils/urls";
import { Context } from "../../../../../hooks/store";
import {
  setCategories,
  setIsFetchingCategories,
} from "../../../../../hooks/category/actions";

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

const Search = (props) => {
  const [activeSearchType, setActiveSearchType] = useState("");
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const data = {};

  data.searchProducts = [
    {
      img: "/img/screw-img1.svg",
      name: "Alloy Steel Socket Head Screws",
      price: "5.64",
    },
    {
      img: "/img/screw-img1.svg",
      name: "Alloy Steel Socket Head Screws",
      price: "5.64",
    },
    {
      img: "/img/screw-img1.svg",
      name: "Alloy Steel Socket Head Screws",
      price: "5.64",
    },
  ];

  data.searchResult = [
    {
      name: "Carriage Bolts 1/4-20 UNC Steel Zinc",
    },
    {
      name: "Carriage Bolts 1/4-20 UNC Steel Zinc",
    },
    {
      name: "Carriage Bolts 1/4-20 UNC Steel Zinc",
    },
    {
      name: "Carriage Bolts 1/4-20 UNC Steel Zinc",
    },
  ];

  const handleActiveSearchType = (type = "") => {
    setActiveSearchType(type);
  };

  const handleSearch = (e) => {
    if (!e.target.value) return;
    const searchParams = {
      name: e.target.value,
    };
    let searchUrl = URLS.NEXT.PRODUCT.SEARCH;
    searchUrl += `/${JSON.stringify(searchParams)}`;
    setIsSearching(true);
    httpGet(searchUrl, { traceName: "search_products" }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
          setIsSearching(false);
        } else {
          setIsSearching(false);
          setSearchResult(res.data || []);
          handleSearchHistory(res);
        }
      },
      (err) => {
        setIsSearching(false);
      }
    );
    setSearch(e.target.value);
  };

  const handleSearchHistory = (res) => {
    if (res && res.data && res.data.length > 0) {
      const searchHistory = getSearchHistoryLocalStorage() || [];
      let isDataAlreadyExist = false;
      if (searchHistory && searchHistory.length > 0) {
        isDataAlreadyExist = searchHistory.some(
          (history) => history.id == res.data[0]?.id
        );
      }
      if (!isDataAlreadyExist) {
        if (searchHistory && searchHistory.length > 7) {
          searchHistory.unshift(res.data[0]);
          searchHistory.pop();
        } else {
          searchHistory.push(res.data[0]);
        }
      }
      setSearchHistoryLocalStorage(searchHistory);
    }
  };

  const handleMainSearch = (e, type) => {
    handleActiveSearchType(type);
    handleSearch(e);
  };

  return (
    <div
      className="relative flex flex-grow ml-6 rounded-md"
      onMouseLeave={() => handleActiveSearchType()}
    >
      <Menu as="div" className="relative">
        <Menu.Button
          onClick={() => handleActiveSearchType(SearchType.category)}
          className={classnames(
            "inline-flex h-full items-center px-4 border-r border-solid bg-light border-alpha-05 sm:text-sm focus:outline-none",
            {
              "rounded-l-md":
                activeSearchType !== SearchType.result &&
                activeSearchType !== SearchType.history,
              "rounded-tl-md":
                activeSearchType === SearchType.result ||
                activeSearchType === SearchType.history,
            }
          )}
        >
          All
          <ArrowIcon className="ml-3" />
        </Menu.Button>
        {activeSearchType === SearchType.category && (
          <SearchCategory {...props} />
        )}
      </Menu>
      <input
        id="company_website"
        className={classnames(
          "flex-1 block w-full p-3 rounded-none focus:outline-none form-input sm:text-base sm:leading-5",
          {
            "rounded-r-md ":
              activeSearchType !== SearchType.result &&
              activeSearchType !== SearchType.history,
            "rounded-tr-md":
              activeSearchType === SearchType.result ||
              activeSearchType === SearchType.history,
          }
        )}
        placeholder="Search..."
        onClick={() => handleActiveSearchType(SearchType.history)}
        onChange={(e) => handleMainSearch(e, SearchType.result)}
        autoComplete="off"
      />
      <div className="absolute inset-y-0 right-0 flex items-center px-4 border-l border-solid pointer-events-none border-dark border-opacity-05">
        <SearchIcon className="text-xl text-primary" />
      </div>
      {activeSearchType === SearchType.history && (
        <Menu
          as="div"
          className="absolute w-full mt-11 bg-white shadow-grey-8 rounded-b z-30"
        >
          <SearchHistory />
        </Menu>
      )}
      {activeSearchType === SearchType.result && (
        <Menu
          as="div"
          className="absolute w-full mt-11 bg-white shadow-grey-8 rounded-b z-30"
        >
          <SearchResult
            {...data}
            searchResult={searchResult}
            search={search}
            isSearching={isSearching}
            handleSearch={handleSearch}
          />
        </Menu>
      )}
    </div>
  );
};

const SearchCategory = (props) => {
  const { categories } = props || {};
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
              const { name, id, custom_url } = category || {};
              return (
                <Menu.Item as="div" key={index}>
                  <Link
                    href="/categories/[slug]"
                    as={`/categories${custom_url?.url}`}
                  >
                    <a className="text-base flex items-center justify-between px-6 py-2 truncate text-dark hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer focus:outline-none">
                      {name}
                    </a>
                  </Link>
                </Menu.Item>
              );
            })}
        </div>
      </Menu.Items>
    </Transition>
  );
};

const SearchHistory = () => {
  const searchHistory = getSearchHistoryLocalStorage() || [];
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
      <div className="flex justify-between font-light text-xs px-4 pt-3 border-t border-dark border-opacity-05">
        <input
          id="search_history"
          className={classnames(
            "focus:outline-none form-input text-dark text-opacity-75 font-ubuntu w-full font-light",
            {}
          )}
          placeholder="Search History"
        />
        <div className="text-primary cursor-pointer truncate w-200 text-right">
          Clear search history
        </div>
      </div>
      <Menu.Items
        className="font-ubuntu outline-none py-3 text-dark relative min-w-200"
        static
      >
        {searchHistory.length > 0 &&
          searchHistory.map((history, index) => {
            const { name, img } = history || {};
            return (
              <Menu.Item
                as="div"
                key={index}
                className="text-base flex items-center justify-between px-4 py-2 truncate hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer focus:outline-none"
              >
                <div className="flex">
                  <div className="pr-3">
                    <img
                      key={index}
                      src="/img/screw-img.svg"
                      className="w-6 object-contain"
                      alt={`product-img-${index}`}
                    />
                  </div>
                  <div className="text-sm flex items-center text-dark">
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
};

const SearchResult = (props) => {
  const { isSearching, searchResult, search, handleSearch, searchProducts } =
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
    >
      {!isSearching && searchResult.length == 0 && (
        <div className="text-sm px-4 py-3 text-dark">No products found</div>
      )}
      {isSearching && (
        <div className="text-sm px-4 py-3 text-dark">Searching...</div>
      )}
      {!isSearching && searchResult.length > 0 && (
        <div>
          <div className="font-light text-xs px-4 py-3 border-t border-b border-dark border-opacity-05">
            <input
              value={search}
              name="search"
              onChange={handleSearch}
              id="search_result"
              className="focus:outline-none form-input text-dark text-opacity-75 font-ubuntu w-full font-light"
              placeholder="Search Result"
            />
          </div>
          <div className="flex text-dark">
            <Menu.Items
              className="font-ubuntu outline-none pb-3 text-dark relative min-w-200 lg:w-4/6"
              static
            >
              {searchResult.length > 0 &&
                searchResult.map((result, index) => {
                  const { name } = result || {};
                  return (
                    <Menu.Item
                      as="div"
                      key={index}
                      className="text-base flex items-center justify-between pl-6 pr-4 py-2 truncate hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer focus:outline-none"
                    >
                      <div className="text-sm flex items-center font-medium">
                        {name}
                      </div>
                    </Menu.Item>
                  );
                })}
            </Menu.Items>
            <div className="border-l border-dark border-opacity-05">
              {searchProducts.length > 0 &&
                searchProducts.map((product, index) => {
                  const { img, price, name } = product || {};
                  return (
                    <div className="pl-6" key={index}>
                      <div className="flex py-2">
                        <div className="flex items-center">
                          <img
                            src={img}
                            className="w-10 object-contain"
                            alt={`product-img-${index}`}
                          />
                        </div>
                        <div className="pl-4">
                          <div className="font-normal">{name}</div>
                          <div className="font-medium">${price}</div>
                        </div>
                      </div>
                      <hr className="opacity-05" />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

const Categories = (props) => {
  const [isActiveCategory, setIsActiveCategory] = useState(false);
  const [activeList, setActiveList] = useState("");
  const [activeSubList, setActiveSubList] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [capturedCategoryId, setCapturedCategoryId] = useState("");
  const [isFetchingCategoryProducts, setIsFetchingCategoryProducts] = useState(
    false
  );
  const { isFetchingCategories, categories } = props;

  const getCategoryProducts = (id) => {
    if (!id || id === capturedCategoryId) return;
    setCapturedCategoryId(id);
    setIsFetchingCategoryProducts(true);
    const categoryProductsUrl = `${URLS.NEXT.CATEGORY.PRODUCTS}?id=${id}&limit=6`;
    httpGet(categoryProductsUrl, { traceName: "get_category_products" }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
          setFormData({ ...formData, isLoading: false });
        } else {
          setCategoryProducts(res.data || []);
        }
        setIsFetchingCategoryProducts(false);
      },
      (err) => {
        setIsFetchingCategoryProducts(false);
      }
    );
  };

  const getParentCategories = () => {
    if (categories && categories.length > 0) {
      return categories.filter((data) => data.parent_id === 0);
    } else {
      return [];
    }
  };

  const handleSubCategories = (id) => {
    const filteredChildCategories =
      categories.filter((data) => data.parent_id == id) || [];
    setSubCategories(filteredChildCategories);
  };

  const handleActiveList = (id) => {
    setActiveList(id);
    const activeChildMenu =
      categories.find((data) => data.parent_id == id) || {};
    if (activeChildMenu?.id) {
      setActiveSubList(activeChildMenu.id);
      handleSubCategories(id);
      getCategoryProducts(activeChildMenu.id);
    } else {
      getCategoryProducts(id);
      handleSubCategories();
    }
  };

  const handleActiveSubList = (id) => {
    getCategoryProducts(id);
    setActiveSubList(id);
  };

  const setActiveCategory = (open = false) => {
    setIsActiveCategory(open);
    if (parentCategories && parentCategories.length > 0) {
      handleActiveList(parentCategories[0].id);
    }
  };

  const parentCategories = getParentCategories();

  return (
    <Menu
      as="div"
      onMouseLeave={() => setActiveCategory(false)}
      className="relative"
    >
      <Menu.Button
        onMouseOver={() => setActiveCategory(true)}
        className="px-4 py-2 focus:outline-none flex items-center bg-white border-2 border-white rounded-md  cursor-pointer border-opacity-10 text-dark hover:bg-primary hover:text-white ml-6"
      >
        <CategoryIcon className="mr-3" />
        Categories
        <ArrowIcon className="ml-2" />
      </Menu.Button>
      {isActiveCategory && (
        <Transition
          show={isActiveCategory}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="absolute z-30 -left-5"
        >
          <div className="mt-4">
            <Menu.Items
              className="font-ubuntu bg-white outline-none text-dark rounded relative shadow-grey-8"
              static
            >
              <span className="w-5 h-5 -mt-2 ml-56 rounded-sm bg-white absolute -z-1 left-0 top-0 transform rotate-45" />
              {isFetchingCategories && (
                <div className="bg-opacity-03 bg-dark flex py-32 w-full min-w-300 justify-center">
                  Loading....
                </div>
              )}
              {!isFetchingCategories && (
                <div className="flex">
                  <div className="bg-opacity-03 bg-dark  min-w-300">
                    {parentCategories &&
                      parentCategories.length > 0 &&
                      parentCategories.map((menu, index) => {
                        const { id, name, custom_url } = menu || {};
                        return (
                          <Menu.Item
                            as="div"
                            key={index}
                            onMouseEnter={() => handleActiveList(id)}
                          >
                            <Link
                              href="/categories/[slug]"
                              as={`/categories${custom_url?.url}`}
                            >
                              <a
                                onClick={() => setActiveCategory(false)}
                                className={classnames(
                                  "text-base focus:outline-none flex items-center justify-between px-4 py-3 truncate hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer",
                                  {
                                    "bg-primary bg-opacity-05 text-primary":
                                      activeList == id,
                                  }
                                )}
                              >
                                <div>{name}</div>
                                <div className="ml-10">
                                  {<ChevronRight className="text-lg" />}
                                </div>
                              </a>
                            </Link>
                          </Menu.Item>
                        );
                      })}
                  </div>
                  {subCategories && subCategories.length > 0 && (
                    <div className="bg-opacity-01 bg-dark min-w-300 border-r border-opacity-07 border-dark">
                      {subCategories.map((subMenu, index) => {
                        const { name, id, custom_url } = subMenu || {};
                        return (
                          <Menu.Item
                            as="div"
                            key={index}
                            onMouseOver={() => handleActiveSubList(id)}
                          >
                            <Link
                              href="/categories/[slug]"
                              as={`/categories${custom_url?.url}`}
                            >
                              <a
                                onClick={() => setActiveCategory(false)}
                                className={classnames(
                                  "text-base focus:outline-none flex items-center justify-between px-4 py-3 truncate hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer",
                                  {
                                    "bg-primary bg-opacity-05 text-primary":
                                      activeSubList == id,
                                  }
                                )}
                              >
                                <div>{name}</div>
                                <div className="ml-10">
                                  {<ChevronRight className="text-lg" />}
                                </div>
                              </a>
                            </Link>
                          </Menu.Item>
                        );
                      })}
                    </div>
                  )}
                  <div className="w-600 flex flex-wrap">
                    {isFetchingCategoryProducts && (
                      <div className="bg-opacity-03 bg-dark flex py-32 w-full min-w-300 justify-center">
                        Loading....
                      </div>
                    )}
                    {!isFetchingCategoryProducts &&
                      categoryProducts &&
                      categoryProducts.length > 0 &&
                      categoryProducts.map((row, index) => {
                        const { id, name, primary_image } = row || {};
                        return (
                          <Menu.Item
                            as="div"
                            key={index}
                            className={classnames(
                              "text-base focus:outline-none text-center w-200 hover:text-primary cursor-pointer",
                              {
                                "pl-10": index == 0,
                                "pr-10": index == 2 || index == 5,
                                "pt-10": index <= 2,
                                "pb-10":
                                  index >= 3 || categoryProducts.length <= 3,
                              }
                            )}
                          >
                            <Link href="/product/[id]" as={`/product/${id}`}>
                              <a>
                                <div
                                  className={classnames(
                                    "h-full flex items-center justify-center border-opacity-10 border-dark",
                                    {
                                      "border-b":
                                        index <= 2 &&
                                        categoryProducts.length > 3,
                                      "border-r": index != 2 && index != 5,
                                    }
                                  )}
                                >
                                  <div>
                                    {primary_image?.url_standard && (
                                      <img
                                        src={primary_image?.url_standard}
                                        width="120px"
                                        height="120px"
                                        className="object-contain"
                                        alt={`product-img-${index}`}
                                      />
                                    )}
                                    <div className="py-4 text-center px-2  font-medium leading-4 w-32 leading-5">
                                      {name}
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          </Menu.Item>
                        );
                      })}
                    {!isFetchingCategoryProducts &&
                      categoryProducts &&
                      categoryProducts.length === 0 && (
                        <div className="bg-opacity-03 bg-dark flex py-32 w-full min-w-300 justify-center">
                          Sorry! no products are available
                        </div>
                      )}
                  </div>
                </div>
              )}
            </Menu.Items>
          </div>
        </Transition>
      )}
    </Menu>
  );
};

const MiddleNavbar = (props) => {
  const { categoryState, dispatchCategory } = useContext(Context);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    dispatchCategory(setIsFetchingCategories(true));
    httpGet(URLS.NEXT.CATEGORY.CATEGORIES, {
      traceName: "get_all_categories",
    }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
        } else {
          dispatchCategory(setCategories(res.data || []));
        }
        dispatchCategory(setIsFetchingCategories(false));
      },
      (err) => {
        dispatchCategory(setIsFetchingCategories(false));
      }
    );
  };
  return (
    <div className="flex items-center py-1 bg-dark">
      <div className="container flex items-center mx-auto">
        <Logo />
        <Categories
          {...props}
          isFetchingCategories={categoryState.isFetchingCategories}
          categories={categoryState.categories}
        />
        <Search
          {...props}
          isFetchingCategories={categoryState.isFetchingCategories}
          categories={categoryState.categories}
        />
      </div>
    </div>
  );
};

export default MiddleNavbar;
