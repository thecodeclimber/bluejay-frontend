import React from "react";
import { shape, func } from "prop-types";
import classnames from "classnames";

const ReactangleOptions = (props) => {
  const { productDetail, setProductDetail } = props;

  const getProductOptions = () => {
    if (productDetail?.options && productDetail.options.length > 0) {
      const filteredOptions = productDetail.options.filter(
        ({ type }) => type === "rectangles"
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
    <div>
      {productOptions.length > 0 &&
        productOptions.map((optionData, index) => (
          <div key={index}>
            <div className="font-medium text-dark not-italic text-lg opacity-75 tracking-tight pb-4">
              {optionData.display_name}
            </div>
            <div className="flex pb-2 pr-4">
              {optionData?.option_values &&
                optionData.option_values.length > 0 &&
                optionData.option_values.map((optionValueData, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      handleSelectedOption(optionData, optionValueData)
                    }
                    className={classnames(
                      "cursor-pointer px-5 text-center py-2 rounded mr-4 border-dark text-dark mb-4 focus:outline-none",
                      {
                        "border border-opacity-10": !optionValueData.is_default,
                        "text-white bg-primary border-primary ":
                          optionValueData.is_default,
                      }
                    )}
                  >
                    <div
                      className={classnames(
                        "text-base whitespace-pre tracking-tight",
                        {
                          "text-dark": !optionValueData.is_default,
                          "text-white ": optionValueData.is_default,
                        }
                      )}
                    >
                      {optionValueData.label}
                    </div>
                  </div>
                ))}
            </div>
            {index !== productOptions.length - 1 && (
              <hr className="text-dark opacity-10 pb-6" />
            )}
          </div>
        ))}
    </div>
  );
};

ReactangleOptions.defaultProps = {
  productDetail: {},
  setProductDetail: () => {},
};

ReactangleOptions.propTypes = {
  productDetail: shape({}),
  setProductDetail: func,
};

export default ReactangleOptions;
