import React, { useEffect, useState } from "react";
import Link from "next/link";
import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";
import ProductSlider from "../../elements/productSlider";
import { MAX_QUANTITY } from "../../../utils/constants";

const TopDeals = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [topDeals, setTopDeals] = useState([]);
  const [totalTopDeals, setTotalTopDeals] = useState([]);

  useEffect(() => {
    fetchTopDeals();
  }, []);

  const fetchTopDeals = () => {
    setIsFetching(true);
    const topDealProductsUrl = `${URLS.NEXT.PRODUCT.TOP_DEALS}?limit=5`;
    httpGet(topDealProductsUrl, {
      traceName: "get_top_deal_products",
    }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
        } else {
          setTotalTopDeals(res.meta?.pagination?.total || 0);
          if (res.data && res.data.length > 0) {
            const data = res.data.map((product) => {
              product.quantity = 1;
              product.quantity = product?.order_quantity_minimum || 1;
              product.order_quantity_maximum =
                product.order_quantity_maximum || MAX_QUANTITY;
              return product;
            });
            setTopDeals(data);
          }
        }
        setIsFetching(false);
      },
      (err) => {
        setIsFetching(false);
      }
    );
  };

  return (
    <div className="container mx-auto pb-6 tracking-tight">
      <div className="relative">
        <div className="flex justify-center text-3xl text-dark font-light whitespace-pre">
          Top <span className="font-medium">Deals</span>
        </div>
        <div className="h-full absolute flex justify-between right-0 top-0 items-center">
          <div className="right-0 mr-4 text-normal text-primary text-lg cursor-pointer">
            <Link href="/categories">
              <a>Show All ({totalTopDeals})</a>
            </Link>
          </div>
        </div>
      </div>
      <ProductSlider
        dots={true}
        products={topDeals}
        isLoading={isFetching}
        handleProducts={setTopDeals}
      />
    </div>
  );
};

export default TopDeals;
