import React, { useEffect, useState } from "react";
import ProductSlider from "../../../elements/productSlider";
import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { MAX_QUANTITY } from "../../../../utils/constants";

const CustomerPurchase = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [purchasedProducts, setPurchasedProducts] = useState([]);

  useEffect(() => {
    fetchPurchasedProducts();
  }, []);

  const fetchPurchasedProducts = () => {
    setIsFetching(true);
    const purchasedProductsUrl = `${URLS.NEXT.PRODUCT.PURCHASED}?limit=5`;
    httpGet(purchasedProductsUrl, {
      traceName: "get_customer_purchased_products",
    }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
        } else {
          if (res.data && res.data.length > 0) {
            const data = res.data.map((product) => {
              product.quantity = 1;
              product.quantity = product?.order_quantity_minimum || 1;
              product.order_quantity_maximum =
                product.order_quantity_maximum || MAX_QUANTITY;
              return product;
            });
            setPurchasedProducts(data);
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
    <div className="container mx-auto pb-6 tracking-tight font-ubuntu">
      <div className="relative">
        <div className="flex justify-center text-3xl text-dark font-light whitespace-pre">
          Customers <span className="font-medium">Also Purchased</span>
        </div>
      </div>
      <ProductSlider
        dots={true}
        products={purchasedProducts}
        isLoading={isFetching}
        handleProducts={setPurchasedProducts}
      />
    </div>
  );
};

export default CustomerPurchase;
