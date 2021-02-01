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
    name: "Steel",
    selected: false,
  },
  {
    id: 2,
    name: "Stailess Steel",
    selected: true,
  },
  {
    id: 3,
    name: "Bronze",
    selected: false,
  },
];

const Material = () => {
  const [isOpen, setIsOpen] = useState(true);
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
    <>
      <div className="flex justify-between items-center mb-4 pr-4">
        <div className="text-lg font-medium text-dark">Material</div>
        <div>
          {isOpen ? (
            <UpIcon
              className="text-lg text-dark cursor-pointer"
              onClick={toggleMaterial}
            />
          ) : (
            <DownIcon
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
                <div className="w-full font-normal text-dark text-base">
                  {material.name}
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Material;
