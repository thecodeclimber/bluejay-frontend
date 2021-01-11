import React, { useEffect, useState } from "react";
import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";
import ProductSlider from "../../elements/productSlider";

const BestProduct = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalBestProducts, setTotalBestProducts] = useState([]);

  useEffect(() => {
    fetchBestProducts();
  }, []);

  const fetchBestProducts = () => {
    setIsFetching(true);
    const bestProductsUrl = `${URLS.NEXT.PRODUCT.BEST}?limit=5`;
    httpGet(bestProductsUrl, {
      traceName: "get_best_products",
    }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
          setIsFetching(false);
        } else {
          setIsFetching(false);
          setTotalBestProducts(res.meta?.pagination?.total || 0);
          if (res.data && res.data.length > 0) {
            const data = res.data.map((product) => {
              product.quantity = 1;
              return product;
            });
            setBestProducts(data);
          }
        }
      },
      (err) => {
        setIsFetching(false);
      }
    );
  };

  return (
    <div className="container mx-auto pb-6 tracking-tight font-ubuntu">
      <div className="relative">
        <div className="flex justify-center text-3xl text-dark font-light whitespace-pre">
          Best <span className="font-medium">Product</span>
        </div>
        <div className="h-full absolute flex justify-between right-0 top-0 items-center">
          <div className="right-0 mr-4 text-normal text-primary text-lg cursor-pointer">
            Show All ({totalBestProducts})
          </div>
        </div>
      </div>
      <ProductSlider
        dots={true}
        products={bestProducts}
        isLoading={isFetching}
        handleProducts={setBestProducts}
      />
    </div>
  );
};

export default BestProduct;
