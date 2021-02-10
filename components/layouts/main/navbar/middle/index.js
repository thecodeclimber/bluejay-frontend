import React, { useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "./search";
import Categories from "./categories";
import { httpGet } from "../../../../../utils/https";
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
    <Link href="/">
      <a>
        <Image src="/img/logo.png" width="68" height="68" />
      </a>
    </Link>
    {/* <div className="ml-3 font-medium text-white">
      <div>Bluejay</div>
      <div>Fasteners</div>
    </div> */}
  </div>
);

const MiddleNavbar = (props) => {
  const { categoryState, dispatchCategory } = useContext(Context);

  useEffect(() => {
    fetchCategories();
  }, []);

  const sortCategories = (categoriesData = []) => {
    const categories = [];
    categoriesData.sort(
      (prevCategory, nextCategory) =>
        prevCategory.sort_order - nextCategory.sort_order
    );
    categoriesData.forEach((data) => {
      if (!data.parent_id) {
        categories.push(data);
        const filteredData = categoriesData.filter(
          (cat) => cat.parent_id === data.id
        );
        if (filteredData && filteredData.length > 0) {
          categories.push(...filteredData);
        }
      }
    });
    return categories;
  };

  const fetchCategories = () => {
    dispatchCategory(setIsFetchingCategories(true));
    httpGet(URLS.NEXT.CATEGORY.CATEGORIES, {
      traceName: "get_all_categories",
    }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
        } else {
          if (res?.data && res.data.length > 0) {
            const getSortedCategories = sortCategories(res.data);
            dispatchCategory(setCategories(getSortedCategories));
          }
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
          SearchType={SearchType}
          isFetchingCategories={categoryState.isFetchingCategories}
          categories={categoryState.categories}
        />
      </div>
    </div>
  );
};

export default MiddleNavbar;
