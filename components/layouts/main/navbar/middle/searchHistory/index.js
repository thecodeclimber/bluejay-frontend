import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Link from "next/link";
import { func, array, shape } from "prop-types";
import { Menu, Transition } from "@headlessui/react";
import { VscClose as CloseIcon } from "react-icons/vsc";
import {
  getSearchHistoryLocalStorage,
  removeHistoryLocalStorage,
} from "../../../../../../utils/helper";

const SearchHistory = (props) => {
  const {
    SearchType,
    deleteSearchedHistory,
    searchedHistoryResults,
    handleSearchInputValue,
    handleActiveSearchType,
  } = props || {};
  const [historyData, setHistoryData] = useState([]);
  const [searchedResult, SetSearchedResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const searchHistory = getSearchHistoryLocalStorage() || [];
    setHistoryData(searchHistory);
  }, [searchedHistoryResults]);

  const handleHistorySearch = (e) => {
    setIsSearching(true);
    const searchedItem = historyData.filter((data) =>
      data.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    SetSearchedResult(searchedItem);
  };

  const clearHistory = () => {
    setHistoryData([]);
  };

  return (
    <Transition
      show={true}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <div className="flex justify-between font-light text-xs px-4 pt-3 border-t border-dark border-opacity-05">
        <input
          id="search_history"
          className={classnames(
            "focus:outline-none form-input text-dark text-opacity-75 font-ubuntu w-full font-light",
            {}
          )}
          placeholder="Search History"
          onChange={handleHistorySearch}
          onClick={(e) => {
            handleActiveSearchType(SearchType.history);
          }}
        />
        <div
          className="text-primary cursor-pointer truncate w-200 text-right"
          onClick={() => {
            removeHistoryLocalStorage();
            clearHistory();
          }}
        >
          Clear search history
        </div>
      </div>
      <Menu.Items
        className="font-ubuntu outline-none py-3 text-dark relative min-w-200"
        static
      >
        {searchedResult.length > 0 &&
          searchedResult.map((result, index) => {
            const { id, name, image } = result || {};
            return (
              <Menu.Item
                as="div"
                key={index}
                className="text-base flex items-center justify-between px-4 py-2 truncate hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer focus:outline-none"
              >
                <Link
                  href="/product/[slug]"
                  as={`/product${result?.custom_url}${result?.id}`}
                >
                  <a className="flex">
                    <div className="pr-3">
                      <img
                        src={image || `/img/img-placeholder.png`}
                        className="w-6 object-contain"
                        alt={`product-img-${index}`}
                      />
                    </div>
                    <div className="text-sm flex items-center text-dark">
                      {name}
                    </div>
                  </a>
                </Link>
                <div>
                  <CloseIcon
                    className="text-lg text-dark"
                    onClick={() => deleteSearchedHistory(id)}
                  />
                </div>
              </Menu.Item>
            );
          })}
        {!isSearching &&
          historyData.length > 0 &&
          historyData.map((history, index) => {
            const { id, name, image } = history || {};
            return (
              <Menu.Item
                as="div"
                key={index}
                className="text-base flex items-center justify-between px-4 py-2 truncate hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer focus:outline-none"
              >
                <div
                  className="w-full"
                  onClick={(e) => handleSearchInputValue(history)}
                >
                  <Link
                    href="/product/[slug]"
                    as={`/product${history?.custom_url}${history?.id}`}
                  >
                    <a className="flex">
                      <div className="pr-3">
                        <img
                          key={index}
                          src={image || `/img/img-placeholder.png`}
                          className="w-6 object-contain"
                          alt={`product-img-${index}`}
                        />
                      </div>
                      <div className="text-sm flex items-center text-dark">
                        {name}
                      </div>
                    </a>
                  </Link>
                </div>
                <div>
                  <CloseIcon
                    className="text-lg text-dark"
                    onClick={() => deleteSearchedHistory(id)}
                  />
                </div>
              </Menu.Item>
            );
          })}
      </Menu.Items>
    </Transition>
  );
};

SearchHistory.propTypes = {
  SearchType: shape({}),
  deleteSearchedHistory: func,
  searchedHistoryResults: array,
  handleSearchInputValue: func,
  handleActiveSearchType: func,
};

export default SearchHistory;
