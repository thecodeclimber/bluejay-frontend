import React, { useState } from "react";
import {
  IoIosArrowUp as UpIcon,
  IoIosArrowDown as DownIcon,
} from "react-icons/io";

const MaterialGrade = () => {
  const [isOpen, setIsOpen] = useState(true);
  const data = {};
  data.materialGrade = [
    {
      grade: "A2",
      total: 56,
    },
    {
      grade: "18.8",
      total: 144,
    },
    {
      grade: "316",
      total: 73,
    },
    {
      grade: "Class 4.6",
      total: 121,
    },
    {
      grade: "Grade 2",
      total: 18,
    },
    {
      grade: "Grade 5",
      total: 137,
    },
  ];

  const toggleMaterialGrade = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4 pr-4">
        <div className="text-lg font-medium text-dark">Material Grade</div>
        <div>
          {isOpen ? (
            <UpIcon
              className="text-lg text-dark cursor-pointer"
              onClick={toggleMaterialGrade}
            />
          ) : (
            <DownIcon
              className="text-lg text-dark cursor-pointer"
              onClick={toggleMaterialGrade}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-wrap justify-between pt-4 pr-4">
          {data.materialGrade &&
            data.materialGrade.length > 0 &&
            data.materialGrade.map((material, index) => (
              <div
                key={index}
                className={
                  "w-full max-w-100 text-center py-3 px-3 leading-4 rounded border border-opacity-20 border-dark text-dark mb-4"
                }
              >
                <div className="text-base whitespace-pre">{material.grade}</div>
                <div className="text-xs font-light text-grey">
                  ({material.total})
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default MaterialGrade;
