import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { BsArrowRight as RightArrowIcon } from "react-icons/bs";
import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";

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
          setIsFetching(false);
        } else {
          setIsFetching(false);
          setPopularCategories(res.data || []);
        }
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
              className={classnames(
                "sm:w-full md:w-1/2 mr-2 px-2 lg:w-1/3 mb-6",
                {
                  "lg:pl-0 lg:pr-2": index % popularCategories.length === 0,
                  "lg:pr-0 lg:pr-4":
                    (index + 1) % popularCategories.length === 0,
                }
              )}
            >
              <div className="bg-white h-full shadow-grey-8 hover:shadow-blue-10 cursor-pointer rounded px-6 pt-5 mb-6">
                <div className="flex pt-1 items-center">
                  <div className="mr-6">
                    <img
                      src={category.image_url}
                      alt={`img-${index}`}
                      width="60"
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
                <div className="font-medium text-primary text-base flex items-center">
                  <span className="mr-3">Show all</span>
                  <span>
                    <RightArrowIcon className="text-2lg" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        {isFetching && (
          <div className="flex justify-center w-full">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default PopularCategories;
