import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import classnames from "classnames";
import ContentLoader from "react-content-loader";
import { httpGet } from "../../../../utils/https";
import { Context } from "../../../../hooks/store";
import URLS from "../../../../utils/urls";

const additionalProductsLoader = () => (
  <ContentLoader
    speed={2}
    width={"100%"}
    height={60}
    viewBox="0 0 287 80"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="23" y="20" rx="3" ry="3" width="65" height="65" />
    <rect x="110" y="20" rx="3" ry="3" width="150" height="20" />
    <rect x="110" y="60" rx="3" ry="3" width="80" height="20" />
  </ContentLoader>
);

const AdditionalProducts = () => {
  const [isFetching, setIsFetching] = useState(false);
  const { cartState } = useContext(Context);
  const [additionalProducts, setAdditionalProducts] = useState([]);
  useEffect(() => {
    fetchAdditionalProducts();
  }, []);

  const getProductIds = () => {
    if (
      cartState?.cart &&
      cartState?.cart?.cart_items &&
      cartState?.cart?.cart_items.length > 0
    ) {
      return cartState.cart.cart_items.map(({ product_id }) => product_id);
    }
    return [];
  };

  const fetchAdditionalProducts = () => {
    setIsFetching(true);
    const productIds = getProductIds();
    let additionalProductsUrl = `${URLS.NEXT.PRODUCT.ADDITIONAL}?limit=12`;
    if (productIds && productIds.length > 0) {
      additionalProductsUrl += `&product_ids=${productIds}`;
    }
    httpGet(additionalProductsUrl, {
      traceName: "get_additional_products",
    }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
        } else if (res?.data && res.data.length > 0) {
          setAdditionalProducts(res.data);
        }
        setIsFetching(false);
      },
      (err) => {
        setIsFetching(false);
      }
    );
  };

  return (
    <div>
      <div className="text-xl text-dark mt-5 px-5 mb-8">
        <span className="font-light">Discover </span>
        <span className="font-medium">Additional Products</span>
      </div>
      <div className="flex flex-wrap px-5">
        {isFetching &&
          Array(12)
            .fill()
            .map((d, index) => (
              <div key={index} className="w-1/3 mb-6">
                <div
                  className={classnames(
                    "flex w-full",
                    {
                      "border-l border-dark border-opacity-05 pl-4 pr-2":
                        index % 3 !== 0,
                    },
                    {
                      "pr-4": index % 3 === 0,
                    }
                  )}
                >
                  {additionalProductsLoader()}
                </div>
              </div>
            ))}
        {!isFetching &&
          additionalProducts.length > 0 &&
          additionalProducts.map((data, index) => (
            <div key={index} className="w-1/3 mb-6">
              <div
                className={classnames(
                  "flex w-full ",
                  {
                    "border-l border-dark border-opacity-05 pl-4 pr-2":
                      index % 3 !== 0,
                  },
                  {
                    "pr-4": index % 3 === 0,
                  }
                )}
              >
                <img
                  src={
                    data.primary_image?.url_tiny || "/img/img-placeholder.png"
                  }
                  alt={`img-${index}`}
                  width="40px"
                  className="object-contain"
                />
                <div className="pl-5">
                  <Link
                    href="/product/[slug]"
                    as={`/product${data?.custom_url?.url}`}
                  >
                    <a>
                      <div className="font-normal text-xs text-dark leading-2 mb-1 hover:text-primary">
                        {data.name}
                      </div>
                    </a>
                  </Link>
                  <div className="font-medium text-sm text-dark">
                    ${data.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdditionalProducts;
