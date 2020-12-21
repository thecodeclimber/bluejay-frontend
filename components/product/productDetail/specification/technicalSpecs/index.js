import React from "react";
import classnames from "classnames";

const data = [
  {
    name: "Item",
    value: "Carriage Bolt",
  },
  {
    name: "System of Measurement",
    value: "Inch",
  },
  {
    name: " Carriage Bolt Type",
    value: "Carriage Bolt",
  },
  {
    name: " Neck Type",
    value: "Square",
  },
  {
    name: " Basic Material",
    value: "Steel",
  },
  {
    name: "Grade A",
    value: "Material Grade",
  },
  {
    name: " Fastener Finish",
    value: "Hot Dipped Galvanized",
  },
  {
    name: " Dia./Thread Size",
    value: '1/4"-20',
  },
];

const TechnicalSpecs = () => (
  <div className="font-ubuntu">
    <div className="flex items-center justify-between font-medium text-dark not-italic text-lg opacity-75 tracking-tight pb-4">
      Technical Specs
    </div>
    <div className="flex items-center justify-between">
      <div className="flex-col w-full mr-10">
        {data.map((item, index) => (
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
      <div className="flex-col w-full">
        {data.map((item, index) => (
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
    </div>
  </div>
);

export default TechnicalSpecs;
