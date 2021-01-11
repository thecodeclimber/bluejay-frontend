import React, { useEffect, useState } from "react";
import { httpGet } from "../../../utils/https";
import KnowYourBolt from "./knowYourBolt";
import GetCompanyAccount from "./getCompanyAccount";
import CustomerPurchase from "./customerPurchase";
import Specification from "./specification";
import BreadCrum from "./breadCrum";
import URLS from "../../../utils/urls";

const ProductDetail = (props) => {
  const { query } = props;
  const [productDetail, setProductDetail] = useState({});
  const [isFetchingProductDetail, setIsFetchingProductDetail] = useState(false);

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const fetchProductDetail = () => {
    setIsFetchingProductDetail(true);
    const productUrl = `${URLS.NEXT.PRODUCT.PRODUCTS}/${query.id}`;
    httpGet(productUrl, {
      traceName: "get_product_detail",
    }).then(
      (res) => {
        if (res.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
        } else {
          if (res.data) {
            res.data = {
              ...res.data,
              quantity: 1,
            };
            setProductDetail(res.data || {});
          }
        }
        setIsFetchingProductDetail(false);
      },
      (err) => {
        setIsFetchingProductDetail(false);
      }
    );
  };

  return (
    <>
      <BreadCrum productDetail={productDetail} />
      <hr className="opacity-10 bg-dark mb-8" />
      <Specification
        productDetail={productDetail}
        setProductDetail={setProductDetail}
      />
      <KnowYourBolt />
      <GetCompanyAccount />
      <hr className="opacity-10 bg-dark mb-12" />
      <CustomerPurchase />
    </>
  );
};

export default ProductDetail;
