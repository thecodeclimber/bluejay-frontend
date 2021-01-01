import React, { useEffect, useState } from "react";
import ProductSlider from "../../../elements/productSlider";
import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";

const CustomerPurchase = () => {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    const productUrl = URLS.NEXT.PRODUCT.PRODUCTS;
    httpGet(productUrl, { isBigCommerce: true }).then((res) => {
      getProducts(res.data);
    });
  }, []);

  return (
    <div className="container mx-auto pb-6 tracking-tight font-ubuntu">
      <div className="relative">
        <div className="flex justify-center text-3xl text-dark font-light whitespace-pre">
          Customers <span className="font-medium">Also Purchased</span>
        </div>
      </div>
      {products ? <ProductSlider products={products} /> : null}
    </div>
  );
};

export default CustomerPurchase;
