import React, { useState } from "react";
import classnames from "classnames";
import {
  IoIosArrowUp as UpIcon,
  IoIosArrowDown as DownIcon,
} from "react-icons/io";
import { BiCheck as CheckedIcon } from "react-icons/bi";

const materialData = [
  {
    id: 1,
    size: "25 per box",
    selected: false,
  },
  {
    id: 2,
    size: "50 per box",
    selected: true,
  },
  {
    id: 3,
    size: "100 per box",
    selected: false,
  },
];

const BoxSize = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [materials, setMaterials] = useState(materialData);

  const toggleMaterial = () => {
    setIsOpen(!isOpen);
  };

  const handleMaterial = (id) => {
    const getMaterials = [...materials];
    const material = getMaterials.find((material) => material.id === id);
    const materialIndex = getMaterials.findIndex(
      (material) => material.id === id
    );
    const updatedMaterial = {
      ...material,
      selected: !material.selected,
    };
    getMaterials[materialIndex] = updatedMaterial;
    setMaterials(getMaterials);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between font-medium text-dark not-italic text-lg opacity-75 tracking-tight pt-8 pb-3 ">
        Box Size
        <div>
          {isOpen ? (
            <DownIcon
              className="text-lg text-dark cursor-pointer"
              onClick={toggleMaterial}
            />
          ) : (
            <UpIcon
              className="text-lg text-dark cursor-pointer"
              onClick={toggleMaterial}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="pt-4 pr-4">
          {materials &&
            materials.length > 0 &&
            materials.map((material, index) => (
              <div key={index} className="mb-5 flex items-center">
                <div
                  className={classnames(
                    "border border-dark rounded-lg border-opacity-10 mr-4 cursor-pointer",
                    {
                      "bg-primary border-primary": material.selected,
                    }
                  )}
                  onClick={() => handleMaterial(material.id)}
                >
                  <CheckedIcon className="text-white text-2lg" />
                </div>
                <div className="w-full font-normal text-dark text-base tracking-tight">
                  {material.size}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default BoxSize;
