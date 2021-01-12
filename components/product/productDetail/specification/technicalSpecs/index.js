import React from "react";
import { shape } from "prop-types";
import classnames from "classnames";

const TechnicalSpecs = (props) => {
  const { productDetail } = props;
  const customFieldsLength =
    (productDetail?.custom_fields && productDetail.custom_fields.length) || 0;

  const getTechnicalSpecs = () => {
    const leftSpecs = [];
    const rightSpecs = [];
    if (customFieldsLength > 0) {
      const technicalSpecs = [...productDetail.custom_fields];
      const half = Math.ceil(technicalSpecs.length / 2);
      leftSpecs.push(...technicalSpecs.splice(0, half));
      rightSpecs.push(...technicalSpecs.splice(-half));
    }
    return { leftSpecs, rightSpecs };
  };

  const { leftSpecs, rightSpecs } = getTechnicalSpecs();

  return (
    <div className="font-ubuntu">
      {customFieldsLength > 0 && (
        <div className="flex items-center justify-between font-medium text-dark not-italic text-lg opacity-75 tracking-tight pb-4">
          Technical Specs
        </div>
      )}
      <div className="flex justify-between items-start">
        {leftSpecs.length > 0 && (
          <div className="flex-col w-full mr-10">
            {leftSpecs.map((item, index) => (
              <div key={index} className="w-full">
                <div
                  className={classnames("flex justify-between items-center", {
                    "bg-dark bg-opacity-03": index % 2 === 0,
                  })}
                >
                  <div className="font-light text-sm text-dark tracking-tight font-ubuntu py-4 px-6">
                    {item.name}
                  </div>
                  <div className="font-medium text-sm tracking-tight text-dark font-ubuntu py-4 px-6">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {rightSpecs.length > 0 && (
          <div className="flex-col w-full">
            {rightSpecs.map((item, index) => (
              <div key={index} className="w-full">
                <div
                  className={classnames("flex justify-between items-center", {
                    "bg-dark bg-opacity-03": index % 2 === 0,
                  })}
                >
                  <div className="font-light text-sm text-dark tracking-tight font-ubuntu py-4 px-6">
                    {item.name}
                  </div>
                  <div className="font-medium text-sm tracking-tight text-dark font-ubuntu py-4 px-6">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

TechnicalSpecs.defaultProps = {
  productDetail: {},
};

TechnicalSpecs.propTypes = {
  productDetail: shape({}),
};

export default TechnicalSpecs;
