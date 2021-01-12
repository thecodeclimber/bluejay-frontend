import React, { useState } from "react";
import { shape, func } from "prop-types";
import classnames from "classnames";
import {
  IoIosArrowUp as UpIcon,
  IoIosArrowDown as DownIcon,
} from "react-icons/io";
import { BiCheck as CheckedIcon } from "react-icons/bi";

const RadioOptions = (props) => {
  const { productDetail, setProductDetail } = props;
  const [openItemsIndex, setOpenItemsIndex] = useState([0]);

  const toggleOpenItems = (index) => {
    const openItems = [...openItemsIndex];
    const isIndexExist = openItems.includes(index);
    if (isIndexExist) {
      const filteredIndex = openItems.filter((data) => data !== index);
      setOpenItemsIndex(filteredIndex);
    } else {
      openItems.push(index);
      setOpenItemsIndex(openItems);
    }
  };

  const getProductOptions = () => {
    if (productDetail?.options && productDetail.options.length > 0) {
      const filteredOptions = productDetail.options.filter(
        ({ type }) => type === "radio_buttons"
      );
      return filteredOptions;
    }
    return [];
  };

  const handleSelectedOption = (optionData, optionValueData) => {
    const product = { ...productDetail };
    optionData.option_values.map((data) => {
      if (data.id === optionValueData.id) {
        data.is_default = true;
      } else {
        data.is_default = false;
      }
    });
    const index = product.options.findIndex(({ id }) => id === optionData.id);
    product.options[index] = optionData;
    setProductDetail(product);
  };

  const productOptions = getProductOptions();

  return (
    <>
      {productOptions.length > 0 &&
        productOptions.map((optionData, index) => {
          const isOpen = openItemsIndex.includes(index);
          return (
            <div key={index}>
              <div className="flex items-center justify-between font-medium text-dark not-italic text-lg opacity-75 tracking-tight pt-8 pb-3 ">
                {optionData.display_name}
                <div>
                  {isOpen ? (
                    <DownIcon
                      className="text-lg text-dark cursor-pointer"
                      onClick={() => toggleOpenItems(index)}
                    />
                  ) : (
                    <UpIcon
                      className="text-lg text-dark cursor-pointer"
                      onClick={() => toggleOpenItems(index)}
                    />
                  )}
                </div>
              </div>
              {isOpen && (
                <div className="pt-4 pr-4">
                  {optionData?.option_values &&
                    optionData.option_values.length > 0 &&
                    optionData.option_values.map((optionValueData, index) => (
                      <div key={index} className="mb-5 flex items-center">
                        <div
                          className={classnames(
                            "border border-dark rounded-lg border-opacity-10 mr-4 cursor-pointer",
                            {
                              "bg-primary border-primary":
                                optionValueData.is_default,
                            }
                          )}
                          onClick={() =>
                            handleSelectedOption(optionData, optionValueData)
                          }
                        >
                          <CheckedIcon className="text-white text-2lg" />
                        </div>
                        <div className="w-full font-normal text-dark text-base tracking-tight">
                          {optionValueData.label}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          );
        })}
    </>
  );
};

RadioOptions.defaultProps = {
  productDetail: {},
  setProductDetail: () => {},
};

RadioOptions.propTypes = {
  productDetail: shape({}),
  setProductDetail: func,
};

export default RadioOptions;
