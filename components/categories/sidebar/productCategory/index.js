import React, { useState, useEffect } from "react";
import { func, shape } from "prop-types";
import Link from "next/link";
import classnames from "classnames";
import { httpGet } from "../../../../utils/https";
import {
  IoIosArrowUp as UpIcon,
  IoIosArrowDown as DownIcon,
} from "react-icons/io";
import URLS from "../../../../utils/urls";

const ProductCategory = (props) => {
  const { query, handleSelectedCategory } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [isFetchingCategories, setIsFetchingCategories] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    handleCategory(categories);
  }, [query]);

  const fetchCategories = () => {
    setIsFetchingCategories(true);
    httpGet(URLS.NEXT.CATEGORY.CATEGORIES, {
      traceName: "get_all_categories",
    }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
        } else {
          setCategories(res.data || []);
          handleCategory(res.data || []);
        }
        setIsFetchingCategories(false);
      },
      (err) => {
        setIsFetchingCategories(false);
      }
    );
  };

  const handleCategory = (categoriesData = []) => {
    if (categoriesData && categoriesData.length > 0) {
      const selectedCategory = categoriesData.find(
        (category) => category?.custom_url?.url === `/${query?.slug.join("/")}/`
      );
      handleSelectedCategory(selectedCategory);
    }
  };

  const toggleProductCategory = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4 mr-2">
        <div className="text-lg font-medium text-dark">Product Category</div>
        <div>
          {isOpen ? (
            <UpIcon
              className="text-lg text-dark cursor-pointer"
              onClick={toggleProductCategory}
            />
          ) : (
            <DownIcon
              className="text-lg text-dark cursor-pointer"
              onClick={toggleProductCategory}
            />
          )}
        </div>
      </div>
      {isFetchingCategories && (
        <div className="text-center text-dark">Loading...</div>
      )}
      {isOpen &&
        !isFetchingCategories &&
        categories &&
        categories.length > 0 &&
        categories.map((category, index) => (
          <div key={index}>
            <Link
              href="/categories/[slug]"
              as={`/categories${category?.custom_url?.url}`}
            >
              <a onClick={() => handleSelectedCategory(category)}>
                <div
                  className={classnames(
                    "py-3 mr-2 text-dark hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer",
                    {
                      "bg-primary bg-opacity-05 text-primary":
                        category?.custom_url?.url ===
                        `/${query?.slug.join("/")}/`,
                    }
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                      <div className="w-10">
                        <img
                          src="/img/product-category1.svg"
                          className="object-contain"
                          alt={`img-${index}`}
                        />
                      </div>
                      <div className="text-base max-w-200 tracking-tight">
                        {category.name}
                      </div>
                    </div>
                    <div className="font-light opacity-75 text-base pr-2">
                      (73)
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
    </>
  );
};

ProductCategory.propTypes = {
  handleSelectedCategory: func,
  query: shape({}),
};

export default ProductCategory;
