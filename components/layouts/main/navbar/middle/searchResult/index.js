import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { number, func, array, bool, string } from "prop-types";
import { Menu, Transition } from "@headlessui/react";

const SearchResult = (props) => {
  const {
    isSearching,
    searchResult,
    handleSearchInputValue,
    isFetchingRelatedProducts,
    search,
    handleActiveList,
    activeList,
    handleSearch,
    relatedProducts,
    handleRelatedProducts,
  } = props || {};

  const showResult = (result) => {
    const regExp = new RegExp(
      search.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&"),
      "gi"
    );
    const searchedWord = result.name.match(regExp);
    return result.name.replaceAll(
      searchedWord?.length > 0 ? searchedWord[0] : searchedWord,
      (match) => `<span style="color:#1E74DF">${match}</span>`
    );
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
      {!isSearching && searchResult.length == 0 && (
        <div className="text-sm px-4 py-3 text-dark">No products found</div>
      )}
      {isSearching && (
        <div className="text-sm px-4 py-3 text-dark">Searching...</div>
      )}
      {!isSearching && searchResult.length > 0 && (
        <div>
          <div className="font-light text-xs px-4 py-3 border-t border-b border-dark border-opacity-05">
            <input
              value={search}
              name="search"
              onChange={handleSearch}
              id="search_result"
              className="focus:outline-none form-input text-dark text-opacity-75 font-ubuntu w-full font-light"
              placeholder="Search Result"
            />
          </div>
          <div className="flex text-dark">
            <Menu.Items
              className="font-ubuntu outline-none pb-3 text-dark relative min-w-200 lg:w-4/6"
              static
            >
              {searchResult.length > 0 &&
                searchResult.map((result, index) => {
                  return (
                    <Menu.Item
                      as="div"
                      key={index}
                      className={classnames(
                        "text-base flex items-center justify-between pl-6 pr-4 py-2 truncate cursor-pointer focus:outline-none",
                        {
                          "bg-primary bg-opacity-05 ": result.id === activeList,
                        }
                      )}
                      onMouseOver={() => {
                        handleRelatedProducts(result);
                        handleActiveList(result.id);
                      }}
                    >
                      <Link
                        href="/product/[slug]"
                        as={`/product${result?.custom_url}${result?.id}`}
                      >
                        <a
                          className={classnames("text-sm font-medium w-full")}
                          dangerouslySetInnerHTML={{
                            __html: showResult(result),
                          }}
                          onClick={(e) => handleSearchInputValue(result)}
                        />
                      </Link>
                    </Menu.Item>
                  );
                })}
            </Menu.Items>
            <div className="border-l border-dark border-opacity-05">
              {isFetchingRelatedProducts && (
                <div className="bg-opacity-03 bg-dark flex h-full w-full min-w-450 justify-center items-center">
                  Loading....
                </div>
              )}
              {!isFetchingRelatedProducts && relatedProducts.length === 0 && (
                <div className="bg-opacity-03 bg-dark flex h-full w-full min-w-450 justify-center items-center">
                  No Related Products
                </div>
              )}
              {!isFetchingRelatedProducts &&
                relatedProducts.length > 0 &&
                relatedProducts.map((relatedProduct, index) => {
                  return (
                    <div
                      className="px-6 hover:bg-primary hover:bg-opacity-05"
                      key={index}
                    >
                      <Link
                        href="/product/[slug]"
                        as={`/product${relatedProduct?.custom_url}${relatedProduct?.id}`}
                      >
                        <a className="flex py-3 cursor-pointer">
                          <div className="flex items-center">
                            <img
                              src={
                                relatedProduct.image ||
                                `/img/img-placeholder.png`
                              }
                              className="w-10 object-contain"
                              alt={`product-img-${index}`}
                            />
                          </div>
                          <div className="pl-4">
                            <div className="font-normal">
                              {relatedProduct.name}
                            </div>
                            <div className="font-medium">
                              ${relatedProduct.price}
                            </div>
                          </div>
                        </a>
                      </Link>
                      <hr className="opacity-05" />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

SearchResult.propTypes = {
  relatedProducts: array,
  handleRelatedProducts: func,
  handleSearch: func,
  handleActiveList: func,
  activeList: number,
  isSearching: bool,
  search: string,
  searchResult: array,
  handleSearchInputValue: func,
  isFetchingRelatedProducts: bool,
};

export default SearchResult;
