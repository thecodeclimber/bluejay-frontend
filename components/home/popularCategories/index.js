import React, { useEffect, useState } from "react";
import Link from "next/link";
import classnames from "classnames";
import ContentLoader from "react-content-loader";
import { BsArrowRight as RightArrowIcon } from "react-icons/bs";
import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";

const productCategoriesLoader = () => (
  <div className="flex">
    <div className="border border-dark border-opacity-10 rounded">
      <ContentLoader
        speed={2}
        width={"100%"}
        height={380}
        viewBox="0 0 287 380"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="23" y="20" rx="3" ry="3" width="65" height="65" />
        <rect x="110" y="40" rx="3" ry="3" width="150" height="20" />
        <rect x="23" y="110" rx="3" ry="3" width="238" height="1" />
        <rect x="23" y="140" rx="3" ry="3" width="238" height="16" />
        <rect x="23" y="180" rx="3" ry="3" width="238" height="16" />
        <rect x="23" y="220" rx="3" ry="3" width="238" height="16" />
        <rect x="23" y="260" rx="3" ry="3" width="238" height="16" />
        <rect x="23" y="305" rx="3" ry="3" width="238" height="1" />
        <rect x="23" y="330" rx="3" ry="3" width="100" height="16" />
      </ContentLoader>
    </div>
  </div>
);

const PopularCategories = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [popularCategories, setPopularCategories] = useState([]);

  useEffect(() => {
    fetchPopularCategories();
  }, []);

  const fetchPopularCategories = () => {
    setIsFetching(true);
    httpGet(URLS.NEXT.CATEGORY.POPULAR, {
      traceName: "get_popular_categories",
    }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
        } else {
          setPopularCategories(res.data || []);
        }
        setIsFetching(false);
      },
      (err) => {
        setIsFetching(false);
      }
    );
  };

  return (
    <div className="container  mx-auto font-ubuntu w-full pl-5 font-ubuntu">
      <div className="flex justify-center text-3xl text-dark font-light whitespace-pre mb-12">
        Popular <span className="font-medium"> Categories</span>
      </div>
      <div className="flex">
        {!isFetching &&
          popularCategories &&
          popularCategories.length > 0 &&
          popularCategories.map((category, index) => (
            <div
              key={index}
              className={classnames("w-full pl-4 pr-4 mb-6", {
                "pl-0": index === 0,
                "pr-0": index === popularCategories.length - 1,
              })}
            >
              <div className="bg-white h-full shadow-grey-8 hover:shadow-blue-10 rounded px-6 pt-5 mb-6">
                <div className="flex pt-1 items-center">
                  <div className="mr-6">
                    <img
                      src={category.image_url || "/img/img-placeholder.png"}
                      alt={`img-${index}`}
                      width="60px"
                      className="h-60 object-cover"
                    />
                  </div>
                  <div className="font-medium text-primary text-2lg whitespace-pre-line">
                    {category.name}
                  </div>
                </div>
                <hr className="my-5 opacity-10 bg-dark" />
                <div>
                  {category.products &&
                    category.products.length > 0 &&
                    category.products.map((list, index) => (
                      <div
                        key={index}
                        className="font-normal text-base text-dark mb-4 max-w-250"
                      >
                        {list.name}
                      </div>
                    ))}
                </div>
                <hr className="my-5 opacity-10 bg-dark" />
                <div>
                  <Link
                    href="/categories/[slug]"
                    as={`/categories${category?.custom_url?.url}`}
                  >
                    <a className="font-medium text-primary text-base flex items-center cursor-pointer">
                      <span className="mr-3">Show all</span>
                      <span>
                        <RightArrowIcon className="text-2lg" />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      {isFetching && (
        <div className="flex">
          {Array(4)
            .fill()
            .map((d, index) => (
              <div
                key={index}
                className={classnames("w-full pl-4 pr-4 mb-6", {
                  "pl-0": index === 0,
                  "pr-0": index === 3,
                })}
              >
                {productCategoriesLoader()}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PopularCategories;
