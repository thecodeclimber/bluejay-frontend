import React, { useState } from "react";
import classnames from "classnames";
import { HiOutlineArrowLeft as ArrowIcon } from "react-icons/hi";
import {
  RiArrowDownSLine as ArrowDown,
  RiSubtractFill as SubtractIcon,
} from "react-icons/ri";

const boltSpecifications = {
  boltSpec: [
    {
      id: 1,
      name: " Part#",
    },
    {
      id: 2,
      name: "Size",
    },
    {
      id: 3,
      name: "Pkg",
    },
    {
      id: 4,
      name: "Bulk",
    },
    {
      id: 5,
      name: "WT/C",
    },
  ],
  boltSpecSize: [
    {
      id: 1,
      name: " 98804008",
    },
    {
      id: 2,
      name: "4-40 x 1/4",
    },
    {
      id: 3,
      name: "100",
    },
    {
      id: 4,
      name: "12500",
    },
    {
      id: 5,
      name: "0.1",
    },
  ],
  grade: [
    {
      id: 1,
      grade: "A2",
    },
    {
      id: 2,
      grade: "18.8",
    },
    {
      id: 3,
      grade: "316",
    },
    {
      id: 4,
      grade: "Class 4.6",
    },
  ],
  threadSize: [
    {
      id: 1,
      size: "18-32",
    },
    {
      id: 2,
      size: "10-24",
    },

    {
      id: 3,
      size: "1/4-20",
    },
    {
      id: 4,
      size: "1/2-30",
    },
  ],
  materials: [
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
  ],
  boxSize: [
    {
      id: 1,
      size: "25 ",
    },
    {
      id: 2,
      size: "50",
    },
    {
      id: 3,
      size: "100 ",
    },
  ],
};

const MoreDetails = () => {
  const boltSpecificationlist = [boltSpecifications, boltSpecifications];
  const [selectedThread, setSelectedThread] = useState(3);
  const [selectedGrade, setSelectedGrade] = useState(3);
  const [selectedMaterial, setSelectedMaterial] = useState(3);
  const [selectedSize, setSelectedSize] = useState(3);
  const [selectedSpecification, setSelectedSpecification] = useState(0);

  const handleImage = (id, boltSpecification) => {
    const getSpecification = boltSpecification.boltSpec.find(
      (specificationID) => specificationID.id === id
    );
    setSelectedSpecification(getSpecification);
  };

  return (
    <div className="font-ubuntu">
      <div className="container mx-auto flex items-center justify-between mt-4">
        <div className="font-light text-dark text-3xl tracking-tight">
          Low-Strength Steel Square Neck
        </div>
        <div className="flex items-center text-lg text-dark border border-dark border-opacity-10 rounded cursor-pointer">
          <div className="py-4 px-6 flex text-lg items-center font-normal tracking-tight">
            <ArrowIcon className="mr-6" />
            Go Back
          </div>
        </div>
      </div>
      {boltSpecificationlist.map((boltSpecification, index) => (
        <div key={index}>
          <hr className="opacity-10 bg-dark mt-8 mb-20" />
          <div className="container mx-auto md:flex lg:flex">
            <div className="border-2 border-dark border-opacity-10 p-4 rounded h-full">
              <img src="/img/boltImg4.png" width="320px" height="274px" />
            </div>
            <div className="ml-12 pb-10 w-full h-full">
              <div className="text-dark font-medium text-2xl pb-6 tracking-tight">
                6-32 Slotted Flat Head Machine Screws Steel Zinc
              </div>

              <div className="font-light text-dark text-xl tracking-tight pb-6 leading-7">
                These carriage bolts' smooth domed heads have a square shoulder
                underneath to help pull into the material to prevent spinning
                during installation via right-handed (RH) threading.
              </div>
              <div className="font-medium text-dark text-xl tracking-tight pb-6">
                Grade A steel material is for light duty applications, often
                used in construction.
              </div>
              <div className="font-medium text-dark text-xl tracking-tight pb-6 leading-7">
                Class 4.6 steel carriage bolts can be used in automotive
                applications where they are commonly used to fasten light
                objects such as trim.
              </div>
              <div>
                <div className="relative flex bg-dark rounded-t justify-between items-center py-0 px-8">
                  {boltSpecification.boltSpec.length > 0 &&
                    boltSpecification.boltSpec.map((item, index) => (
                      <div
                        key={index}
                        className={classnames(
                          "flex items-center justify-center text-white tracking-tight text-lg cursor-pointer ",
                          {
                            "opacity-100 border-b-4 border-primary":
                              selectedSpecification.id === item.id,
                          },
                          {
                            "opacity-100 border border-dark":
                              selectedSpecification.id !== item.id,
                          }
                        )}
                        onClick={() => handleImage(item.id, boltSpecification)}
                      >
                        <span className="py-5 px-3">{item.name}</span>
                        <ArrowDown className="ml-3 mr-3" />
                      </div>
                    ))}
                </div>
                {boltSpecification.boltSpec.length > 0 &&
                  boltSpecification.boltSpec.map((item, index) => (
                    <div
                      key={index}
                      className={classnames({
                        hidden: index === 3,
                      })}
                    >
                      <div className="flex items-center bg-primary justify-between py-4 px-10">
                        {boltSpecification.boltSpecSize.length > 0 &&
                          boltSpecification.boltSpecSize.map((item, index) => (
                            <div
                              key={index}
                              className="text-white text-base tracking-tight font-normal max-w-100 w-full "
                            >
                              {item.name}
                            </div>
                          ))}
                      </div>
                      <div className="block lg:flex items-center border-2 border-primary justify-between py-6 px-6 w-full">
                        <div className="border-hidden lg:border-r lg:border-dark lg:border-opacity-15 w-1/2 pr-2">
                          <div className="flex items-center justify-between w-full mb-4">
                            <div className="flex min-w-150 text-dark text-base tracking-tight font-medium whitespace-pre">
                              Thread Size
                            </div>
                            <div className="flex w-full justify-between">
                              {boltSpecification.threadSize.length > 0 &&
                                boltSpecification.threadSize.map(
                                  (thread, index) => (
                                    <div
                                      key={index}
                                      onClick={() =>
                                        setSelectedThread(thread.id)
                                      }
                                      className={classnames(
                                        " cursor-pointer min-w-50 text-center py-1 px-1 mr-4 rounded border-dark text-dark focus:outline-none",
                                        {
                                          "border border-opacity-10":
                                            thread.id !== selectedThread,
                                          " border-primary border-2 border-primary":
                                            thread.id === selectedThread,
                                        }
                                      )}
                                    >
                                      <div
                                        className={classnames(
                                          "text-base whitespace-pre tracking-tight",
                                          {
                                            "text-dark font-normal":
                                              thread.id !== selectedThread,
                                            "text-primary font-medium ":
                                              thread.id === selectedThread,
                                          }
                                        )}
                                      >
                                        {thread.size}
                                      </div>
                                    </div>
                                  )
                                )}
                            </div>
                          </div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex min-w-150 text-dark text-base tracking-tight font-medium whitespace-pre">
                              Grade
                            </div>
                            <div className="flex items-center justify-between w-full">
                              {boltSpecification &&
                                boltSpecification.grade.length > 0 &&
                                boltSpecification.grade.map((item, index) => (
                                  <div
                                    key={index}
                                    onClick={() => setSelectedGrade(item.id)}
                                    className={classnames(
                                      "cursor-pointer w-full text-center py-1 px-2 rounded mr-4 border-dark text-dark focus:outline-none",
                                      {
                                        "border border-opacity-10":
                                          item.id !== selectedGrade,
                                        " border-primary border-2 border-primary ":
                                          item.id === selectedGrade,
                                      }
                                    )}
                                  >
                                    <div
                                      className={classnames(
                                        "text-base whitespace-pre tracking-tight",
                                        {
                                          "text-dark font-normal":
                                            item.id !== selectedGrade,
                                          "text-primary font-medium ":
                                            item.id === selectedGrade,
                                        }
                                      )}
                                    >
                                      {item.grade}
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex min-w-150 text-dark tracking-tight text-base font-medium whitespace-pre">
                              Material
                            </div>
                            <div className="flex items-center justify-between w-full">
                              {boltSpecification.materials &&
                                boltSpecification.materials.length > 0 &&
                                boltSpecification.materials.map(
                                  (dataValue, index) => (
                                    <div
                                      key={index}
                                      onClick={() =>
                                        setSelectedMaterial(dataValue.id)
                                      }
                                      className={classnames(
                                        " cursor-pointer text-center py-1 px-2 rounded mr-4 border-dark text-dark focus:outline-none",
                                        {
                                          "border border-opacity-10":
                                            dataValue.id !== selectedMaterial,
                                          " border-primary border-2 border-primary":
                                            dataValue.id === selectedMaterial,
                                        }
                                      )}
                                    >
                                      <div
                                        className={classnames(
                                          "text-base whitespace-pre tracking-tight",
                                          {
                                            "text-dark font-normal":
                                              dataValue.id !== selectedMaterial,
                                            "text-primary font-medium":
                                              dataValue.id === selectedMaterial,
                                          }
                                        )}
                                      >
                                        {dataValue.name}
                                      </div>
                                    </div>
                                  )
                                )}
                            </div>
                          </div>
                        </div>
                        <div className="w-1/2 mt-4 lg:mt-0 lg:ml-6">
                          <div className="flex items-center justify-between ">
                            <div className="flex items-center ">
                              <div className="flex text-dark tracking-tight text-base font-medium mr-4 whitespace-pre">
                                Box Size
                              </div>
                              <div className="flex">
                                {boltSpecification &&
                                  boltSpecification.boxSize.length > 0 &&
                                  boltSpecification.boxSize.map(
                                    (item, index) => (
                                      <div
                                        key={index}
                                        onClick={() => setSelectedSize(item.id)}
                                        className={classnames(
                                          "cursor-pointer w-full min-w-50 text-center py-1 px-2 rounded mr-4 border-dark text-dark focus:outline-none",
                                          {
                                            "border border-opacity-10":
                                              item.id !== selectedSize,
                                            " border-primary border-2 border-primary ":
                                              item.id === selectedSize,
                                          }
                                        )}
                                      >
                                        <div
                                          className={classnames(
                                            "text-base whitespace-pre tracking-tight",
                                            {
                                              "text-dark font-normal":
                                                item.id !== selectedSize,
                                              "text-primary font-medium ":
                                                item.id === selectedSize,
                                            }
                                          )}
                                        >
                                          {item.size}
                                        </div>
                                      </div>
                                    )
                                  )}
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="font-medium tracking-tight text-primary text-xl">
                                $24.59
                                <span className="text-dark tracking-tight font-light text-sm ml-2">
                                  /each
                                </span>
                              </div>
                            </div>
                          </div>
                          <hr className="text-dark opacity-15 my-6" />
                          <div className="flex items-center justify-between w-full">
                            <div className="flex justify-between items-center border rounded border-dark border-opacity-10 p-3">
                              <div className="flex justify-center cursor-pointertext-center items-center border rounded-sm border-dark border-opacity-10 p-0.5">
                                <SubtractIcon className=" text-black cursor-pointer" />
                              </div>
                              <div className="px-16 text-dark text-base tracking-tight">
                                01
                              </div>
                              <div className="flex justify-center cursor-pointer text-center items-center border rounded-sm border-dark border-opacity-10 p-0.5">
                                <SubtractIcon className="text-black cursor-pointer" />
                              </div>
                            </div>
                            <div className="flex font-medium font-base tracking-tight items-center whitespace-pre justify-center cursor-pointer text-white bg-primary rounded py-3 px-16">
                              Add to Cart
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreDetails;
