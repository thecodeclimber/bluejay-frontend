import React, { useState } from "react";
import { useRouter } from "next/router";
import classnames from "classnames";
import { shape, array } from "prop-types";
import SearchCategory from "../searchCategory";
import SearchHistory from "../searchHistory";
import SearchResult from "../searchResult";
import { Menu } from "@headlessui/react";
import {
  getSearchHistoryLocalStorage,
  setSearchHistoryLocalStorage,
  removeHistoryLocalStorage,
} from "../../../../../../utils/helper";
import {
  MdArrowDropDown as ArrowIcon,
  MdSearch as SearchIcon,
} from "react-icons/md";
import { httpGet } from "../../../../../../utils/https";
import URLS from "../../../../../../utils/urls";

let timer = "";

const Search = (props) => {
  const { SearchType, categories } = props || {};
  const router = useRouter();
  const [activeSearchType, setActiveSearchType] = useState("");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [searchedHistoryResults, setSearchedHistoryResults] = useState([]);
  const [inputValue, setInputValue] = useState({});
  const [activeList, setActiveList] = useState();
  const [isFetchingRelatedProducts, setisFetchingRelatedProducts] = useState(
    false
  );
  const [searchCategory, setSearchCategory] = useState({
    id: "",
    name: "All",
  });
  const initialCategory = "All";

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setRelatedProducts([]);
    if (!e.target.value) return;
    let searchUrl = URLS.NEXT.PRODUCT.SEARCH;
    searchUrl += `?name=${search}`;
    searchUrl += `&category_id=${searchCategory?.id}&limit=5`;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setIsSearching(true);
      httpGet(searchUrl, { traceName: "search_products" }).then(
        (res) => {
          if (res.errors && Object.keys(res.errors).length > 0) {
            alert(res.errors[Object.keys(res.errors)[0]]);
            setIsSearching(false);
          } else {
            setSearchResult(res.data || []);
            setActiveList(res?.data[0]?.id);
          }
          setIsSearching(false);
        },
        (err) => {
          setIsSearching(false);
        }
      );
    }, 400);
  };

  const handleSearchHistory = (res) => {
    if (res) {
      const searchHistory = getSearchHistoryLocalStorage() || [];
      let isDataAlreadyExist = false;
      if (searchHistory && searchHistory.length > 0) {
        isDataAlreadyExist = searchHistory.some(
          (history) => history.id == res?.id
        );
      }
      if (!isDataAlreadyExist) {
        if (searchHistory && searchHistory.length > 3) {
          searchHistory.unshift(res);
          searchHistory.pop();
        } else {
          searchHistory.push(res);
        }
      }
      setSearchHistoryLocalStorage(searchHistory);
      setSearchedHistoryResults(searchHistory);
    }
  };

  const deleteSearchedHistory = (id) => {
    if (id) {
      const searchHistory = getSearchHistoryLocalStorage() || [];
      if (searchHistory && searchHistory.length > 0) {
        const remainingItems = searchHistory.filter(
          (history) => history.id !== id
        );
        setSearchHistoryLocalStorage(remainingItems);
        setSearchedHistoryResults(remainingItems);
      }
    }
  };

  const handleRelatedProducts = (result) => {
    if (result.related_products[0] === -1) {
      setRelatedProducts([]);
      return;
    }
    let searchUrl = URLS.NEXT.PRODUCT.RELATED;
    searchUrl += `?product_ids=${result.related_products}`;
    searchUrl += "&limit=5";
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setisFetchingRelatedProducts(true);
      httpGet(searchUrl, { traceName: "related_products" }).then(
        (res) => {
          if (res.errors && Object.keys(res.errors).length > 0) {
            alert(res.errors[Object.keys(res.errors)[0]]);
            setisFetchingRelatedProducts(false);
          } else {
            setRelatedProducts(res || []);
            setisFetchingRelatedProducts(false);
          }
        },
        (err) => {
          setisFetchingRelatedProducts(false);
        }
      );
    }, 400);
  };

  const handleActiveSearchType = (type = "") => {
    setActiveSearchType(type);
  };

  const goToCategory = (e, isFromButtonClick = false) => {
    if (!search.trim()) return;
    if (e.charCode === 13 || isFromButtonClick) {
      router.push({
        pathname: `/categories${
          searchCategory.name === initialCategory ? "" : `${searchCategory.url}`
        }`,
        query: { q: search.trim() },
      });
    }
  };

  const handleMainSearch = (e, type) => {
    handleActiveSearchType(type);
    handleSearch(e);
    setInputValue(e.target.value);
    if (!e.target.value) {
      handleActiveSearchType(SearchType.history);
    }
  };

  const handleSearchedCategory = (category) => {
    setSearchCategory({
      id: category.id,
      name: category.name,
      url: category?.custom_url?.url,
    });
  };

  const handleSearchInputValue = (value) => {
    setInputValue(value);
    handleSearchHistory(value);
  };

  const handleActiveList = (id) => {
    setActiveList(id);
  };

  return (
    <div
      className="relative flex flex-grow ml-6 rounded-md"
      onMouseLeave={() => handleActiveSearchType()}
    >
      <Menu as="div" className="relative z-50">
        <Menu.Button
          onMouseOver={() => handleActiveSearchType(SearchType.category)}
          className={classnames(
            "inline-flex h-full items-center px-4 border-r border-solid bg-light border-alpha-05 sm:text-sm focus:outline-none",
            {
              "rounded-l-md":
                activeSearchType !== SearchType.result &&
                activeSearchType !== SearchType.history,
              "rounded-tl-md":
                activeSearchType === SearchType.result ||
                activeSearchType === SearchType.history,
            }
          )}
        >
          {searchCategory.name}
          <ArrowIcon className="ml-3" />
        </Menu.Button>
        {activeSearchType === SearchType.category && (
          <SearchCategory
            {...props}
            handleActiveSearchType={handleActiveSearchType}
            handleSearchedCategory={handleSearchedCategory}
          />
        )}
      </Menu>
      <input
        id="company_website"
        className={classnames(
          "flex-1 block w-full p-3 rounded-none focus:outline-none form-input sm:text-base sm:leading-5",
          {
            "rounded-r-md ":
              activeSearchType !== SearchType.result &&
              activeSearchType !== SearchType.history,
            "rounded-tr-md":
              activeSearchType === SearchType.result ||
              activeSearchType === SearchType.history,
          }
        )}
        placeholder="Search..."
        value={inputValue.name || search}
        onClick={() =>
          handleActiveSearchType(
            search ? SearchType.result : SearchType.history
          )
        }
        onKeyPress={(e) => goToCategory(e)}
        onChange={(e) => handleMainSearch(e, SearchType.result)}
        autoComplete="off"
      />

      <div
        className="absolute inset-y-0 right-0 flex items-center px-4 border-l border-solid cursor-pointer border-dark border-opacity-05"
        onClick={(e) => goToCategory(e, true)}
      >
        <SearchIcon className="text-xl text-primary" />
      </div>
      {activeSearchType === SearchType.history && (
        <Menu
          as="div"
          className="absolute w-full mt-11 bg-white shadow-grey-8 rounded-b z-30"
        >
          <SearchHistory
            SearchType={SearchType}
            handleSearchInputValue={handleSearchInputValue}
            searchedHistoryResults={searchedHistoryResults}
            handleActiveSearchType={handleActiveSearchType}
            deleteSearchedHistory={deleteSearchedHistory}
            removeHistoryLocalStorage={removeHistoryLocalStorage}
          />
        </Menu>
      )}
      {activeSearchType === SearchType.result && (
        <Menu
          as="div"
          className="absolute w-full mt-11 bg-white shadow-grey-8 rounded-b z-30"
        >
          <SearchResult
            handleSearchInputValue={handleSearchInputValue}
            relatedProducts={relatedProducts}
            searchResult={searchResult}
            search={search}
            handleActiveList={handleActiveList}
            activeList={activeList}
            isSearching={isSearching}
            isFetchingRelatedProducts={isFetchingRelatedProducts}
            handleSearch={handleSearch}
            handleRelatedProducts={handleRelatedProducts}
          />
        </Menu>
      )}
    </div>
  );
};

Search.propTypes = {
  SearchType: shape({}),
  categories: array,
};

export default Search;
