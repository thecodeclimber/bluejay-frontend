import React, { useEffect, useState } from "react";
import Link from "next/link";
import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";
import ProductSlider from "../../elements/productSlider";
import { MAX_QUANTITY } from "../../../utils/constants";

const FeaturedProduct = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [totalFeaturedProducts, setTotalFeaturedProducts] = useState([]);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = () => {
    setIsFetching(true);
    const featuredProductsUrl = `${URLS.NEXT.PRODUCT.FEATURED}?limit=5`;
    httpGet(featuredProductsUrl, {
      traceName: "get_featured_products",
    }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
        } else {
          setTotalFeaturedProducts(res.meta?.pagination?.total || 0);
          if (res.data && res.data.length > 0) {
            const data = res.data.map((product) => {
              product.quantity = 1;
              product.quantity = product?.order_quantity_minimum || 1;
              product.order_quantity_maximum =
                product.order_quantity_maximum || MAX_QUANTITY;
              return product;
            });
            setFeaturedProducts(data);
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
          Featured <span className="font-medium">Product</span>
        </div>
        <div className="h-full absolute flex justify-between right-0 top-0 items-center">
          <div className="right-0 mr-4 text-normal text-primary text-lg cursor-pointer">
            <Link href="/categories">
              <a>Show All ({totalFeaturedProducts})</a>
            </Link>
          </div>
        </div>
      </div>
      <ProductSlider
        dots={true}
        products={featuredProducts}
        isLoading={isFetching}
        handleProducts={setFeaturedProducts}
      />
    </div>
  );
};

export default FeaturedProduct;
