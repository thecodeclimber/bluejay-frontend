import React, { useState } from "react";
import classnames from "classnames";
import Link from "next/link";
import { array, bool } from "prop-types";
import { Menu, Transition } from "@headlessui/react";
import {
  MdArrowDropDown as ArrowIcon,
  MdSubject as CategoryIcon,
  MdChevronRight as ChevronRight,
} from "react-icons/md";
import { httpGet } from "../../../../../../utils/https";
import URLS from "../../../../../../utils/urls";

const Categories = (props) => {
  const { isFetchingCategories, categories } = props;
  const [isActiveCategory, setIsActiveCategory] = useState(false);
  const [activeList, setActiveList] = useState("");
  const [activeSubList, setActiveSubList] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [capturedCategoryId, setCapturedCategoryId] = useState("");
  const [isFetchingCategoryProducts, setIsFetchingCategoryProducts] = useState(
    false
  );

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
                        const { id, name, primary_image, custom_url } =
                          row || {};
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
                            <Link
                              href="/product/[slug]"
                              as={`/product${custom_url?.url}${id}`}
                            >
                              <div
                                className={classnames(
                                  "h-full flex items-center justify-center border-opacity-10 border-dark",
                                  {
                                    "border-b":
                                      index <= 2 && categoryProducts.length > 3,
                                    "border-r": index != 2 && index != 5,
                                  }
                                )}
                              >
                                <div>
                                  {primary_image?.url_standard && (
                                    <img
                                      src={
                                        primary_image?.url_standard ||
                                        `/img/img-placeholder.png`
                                      }
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

Categories.propTypes = {
  isFetchingCategories: bool,
  categories: array,
};

export default Categories;
