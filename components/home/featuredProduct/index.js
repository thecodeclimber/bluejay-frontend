import React, { useEffect, useState } from "react";
import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";
import ProductSlider from "../../elements/productSlider";

const FeaturedProduct = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [totalFeaturedProducts, setTotalFeaturedProducts] = useState([]);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = () => {
    setIsFetching(true);

    httpGet(URLS.NEXT.PRODUCT.FEATURED, {
      traceName: "get_featured_products",
    }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
          setIsFetching(false);
        } else {
          setIsFetching(false);
          setTotalFeaturedProducts(res.meta?.pagination?.total || 0);
          if (res.data && res.data.length > 0) {
            const data = res.data.map((product) => {
              product.quantity = 1;
              return product;
            });
            setFeaturedProducts(data);
          }
        }
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
            Show All ({totalFeaturedProducts})
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
