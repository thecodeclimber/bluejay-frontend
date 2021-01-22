import React, { useState, useEffect, useContext } from "react";
import { shape } from "prop-types";
import classnames from "classnames";
import SideBar from "./sidebar";
import CategoryGrid from "./categoryGrid";
import CategoryList from "./categoryList";
import Filters from "./filters";
import { BsGrid3X3GapFill as GridIcon } from "react-icons/bs";
import { FaList as ListIcon } from "react-icons/fa";
import { httpGet } from "../../utils/https";
import Drawer from "../elements/drawer";
import CartAdded from "../cart/cartAdded";
import URLS from "../../utils/urls";
import { SORT_OPTIONS } from "../../utils/constants";
import { Context } from "../../hooks/store";
import Pagination from "../elements/pagination";
import Loader from "../elements/loader";
import { scrollTo } from "../../utils/helper";

const VIEW_TYPE = {
  GRID: "grid",
  LIST: "list",
};

const ProductCategories = (props) => {
  const { query } = props;
  const { categoryState } = useContext(Context);
  const [viewType, setViewType] = useState(VIEW_TYPE.GRID);
  const [isFetchingProducts, setIsFetchingProducts] = useState(false);
  const [products, setProducts] = useState([]);
  const [isCartDrawer, setIsCartDrawer] = useState(false);
  const [paginationData, setPaginationData] = useState();
  const [selectedPage, setSelectedPage] = useState();
  const [selectedOption, setSelectedOption] = useState(SORT_OPTIONS.ALPHABET);
  const categories = categoryState.categories || [];

  const getSelectedCategory = () => {
    if (categories && categories.length > 0) {
      const selectedCategory = categories.find(
        (category) =>
          category?.custom_url?.url ===
          `/${query?.slug && query.slug.join("/")}/`
      );
      return selectedCategory;
    }
    return {};
  };

  const selectedCategory = getSelectedCategory();

  useEffect(() => {
    if (categories.length > 0) fetchProducts();
  }, [query, categories, selectedOption, selectedPage]);

  const fetchProducts = () => {
    let searchUrl = `${URLS.NEXT.CATEGORY.SEARCH}?include=primary_image`;
    if (selectedCategory?.id) {
      searchUrl += `&category_id=${selectedCategory?.id}`;
    }
    if (query?.q) {
      searchUrl += `&name=${query.q}`;
    }
    if (selectedOption?.type === "direction") {
      searchUrl += `&direction=${selectedOption?.value}`;
    }
    if (selectedOption?.type === "sort") {
      searchUrl += `&sort=${selectedOption?.value}`;
    }
    searchUrl += `&limit=6`;
    if (selectedPage) {
      searchUrl += `&page=${selectedPage}`;
    }
    setIsFetchingProducts(true);
    httpGet(searchUrl, {
      traceName: "get_search_products",
    }).then(
      (res) => {
        const data = [];
        if (res?.errors && Object.keys(res.errors).length > 0) {
          alert(res.errors[Object.keys(res.errors)[0]]);
        } else if (res?.data && res.data.length > 0) {
          const resData = res.data.map((product) => {
            product.quantity = 1;
            return product;
          });
          data.push(...resData);
        }
        setProducts(data);
        setPaginationData(res?.meta?.pagination || {});
        setIsFetchingProducts(false);
      },
      (err) => {
        setIsFetchingProducts(false);
      }
    );
  };

  const closeCartDrawer = () => {
    setIsCartDrawer(false);
  };

  const handleCart = ({ isOpenDrawer = false }) => {
    setIsCartDrawer(isOpenDrawer);
  };

  const handleSelectedPage = (page = 1) => {
    scrollTo(".scroll-point");
    setSelectedPage(page);
  };

  return (
    <div className="font-ubuntu pt-6 ">
      {categoryState?.isFetchingCategories && <Loader />}
      <Drawer isOpen={isCartDrawer} closeDrawer={closeCartDrawer}>
        <CartAdded closeCartDrawer={closeCartDrawer} isNewItem={true} />
      </Drawer>
      <div className="flex container mx-auto justify-between items-center">
        <div className="flex items-center">
          <div className="text-3xl text-dark font-light tracking-tight mr-6">
            Anchors
          </div>
          <div className="text-primary font-light text-xl tracking-tight mt-3">
            {paginationData?.total || 0} products found.
          </div>
        </div>
        <div>
          <div className="border border-dark rounded border-opacity-10 flex">
            <div
              onClick={() => setViewType(VIEW_TYPE.GRID)}
              className="px-6 py-4 cursor-pointer"
            >
              <GridIcon
                className={classnames("text-xl text-dark opacity-25", {
                  "opacity-100": viewType === VIEW_TYPE.GRID,
                })}
              />
            </div>
            <div className="border-r border-dark border-opacity-10 my-4" />
            <div
              onClick={() => setViewType(VIEW_TYPE.LIST)}
              className="px-6 py-4 cursor-pointer"
            >
              <ListIcon
                className={classnames("text-xl text-dark opacity-25", {
                  "opacity-100": viewType === VIEW_TYPE.LIST,
                })}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 opacity-10 bg-dark" />
      <div className="container mx-auto flex">
        <SideBar query={query} />
        <div className="w-full pl-5 scroll-point">
          <Filters
            query={query}
            selectedCategory={selectedCategory}
            selectedOption={selectedOption}
            handleSorting={setSelectedOption}
          />
          <hr className="my-5 opacity-10 bg-dark" />
          {viewType === VIEW_TYPE.GRID && (
            <CategoryGrid
              products={products}
              isFetchingProducts={isFetchingProducts}
              handleProducts={setProducts}
              handleCart={handleCart}
            />
          )}
          {viewType === VIEW_TYPE.LIST && (
            <CategoryList
              products={products}
              isFetchingProducts={isFetchingProducts}
              handleProducts={setProducts}
              handleCart={handleCart}
            />
          )}
          <div className="mb-12">
            <Pagination
              paginationData={paginationData}
              handleSelectedPage={handleSelectedPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCategories.propTypes = {
  query: shape({}),
};

export default ProductCategories;
