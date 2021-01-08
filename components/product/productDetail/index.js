import React, { useEffect } from "react";
import { func } from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import KnowYourBolt from "./knowYourBolt";
import GetCompanyAccount from "./getCompanyAccount";
import CustomerPurchase from "./customerPurchase";
import Specification from "./specification";
import BreadCrum from "./breadCrum";
import {
  setProductDetail,
  setIsFetchingProductDetail,
} from "../../../redux/product/actions";
import { getProductDetail } from "../../../redux/product/selectors";
import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";

const ProductDetail = (props) => {
  const { query, productDetail, setProductDetail } = props;

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
      <Specification productDetail={productDetail} />
      <KnowYourBolt />
      <GetCompanyAccount />
      <hr className="opacity-10 bg-dark mb-12" />
      <CustomerPurchase />
    </>
  );
};

ProductDetail.propTypes = {
  setProductDetail: func,
  setIsFetchingProductDetail: func,
};

const mapStateToProps = createStructuredSelector({
  productDetail: getProductDetail(),
});

export default connect(mapStateToProps, {
  setProductDetail,
  setIsFetchingProductDetail,
})(ProductDetail);
