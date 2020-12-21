import React, { useState } from "react";
import classnames from "classnames";

const Material = () => {
  const [selectedThread, setSelectedThread] = useState(1);
  const data = {};
  data.materials = [
    {
      id: 1,
      name: "Steel",
    },
    {
      id: 2,
      name: "Stailess Steel",
    },
    {
      id: 3,
      name: "Bronze",
    },
  ];

  return (
    <div>
      <div className="font-medium text-dark not-italic text-lg opacity-75 tracking-tight pb-4 ">
        Material
      </div>
      <div className="flex pb-4 pr-4">
        {data.materials &&
          data.materials.length > 0 &&
          data.materials.map((dataValue, index) => (
            <div
              key={index}
              onClick={() => setSelectedThread(dataValue.id)}
              className={classnames(
                " cursor-pointer text-center py-2 px-5 rounded mr-4 border-dark text-dark mb-4 focus:outline-none",
                {
                  "border border-opacity-10": dataValue.id !== selectedThread,
                  "text-white bg-primary border-primary ":
                    dataValue.id === selectedThread,
                }
              )}
            >
              <div
                className={classnames(
                  "text-base whitespace-pre tracking-tight px-3",
                  {
                    "text-dark": dataValue.id !== selectedThread,
                    "text-white ": dataValue.id === selectedThread,
                  }
                )}
              >
                {dataValue.name}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Material;
