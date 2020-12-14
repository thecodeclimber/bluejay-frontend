import React, { useState } from "react";
import classnames from "classnames";
import {
  IoIosArrowUp as UpIcon,
  IoIosArrowDown as DownIcon,
} from "react-icons/io";

const ThreadSize = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedThread, setSelectedThread] = useState(2);

  const data = {};
  data.threadSize = [
    {
      id: 1,
      size: "8-32",
    },
    {
      id: 2,
      size: "10-24",
    },
    {
      id: 3,
      size: "10-32",
    },
    {
      id: 4,
      size: "1/4-20",
    },
    {
      id: 5,
      size: "1/2-30",
    },
    {
      id: 6,
      size: "M8",
    },
    {
      id: 7,
      size: "8-32",
    },
    {
      id: 8,
      size: "10-24",
    },
    {
      id: 9,
      size: "10-32",
    },
    {
      id: 10,
      size: "1/4-20",
    },
    {
      id: 11,
      size: "1/2-30",
    },
    {
      id: 12,
      size: "M8",
    },
  ];

  const toggleThreadSize = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4 pr-4">
        <div className="text-lg font-medium text-dark">
          Thread Size
          </div>
        <div>
          {isOpen
            ? <UpIcon className="text-lg text-dark cursor-pointer" onClick={toggleThreadSize} />
            : <DownIcon className="text-lg text-dark cursor-pointer" onClick={toggleThreadSize} />
          }
        </div>
      </div>
      {isOpen &&
        <div className="flex flex-wrap justify-between pt-4 pr-4">
          {data.threadSize && data.threadSize.length > 0
            && data.threadSize.map((thread, index) => (
              <div
                key={index}
                onClick={() => setSelectedThread(thread.id)}
                className={classnames("w-full cursor-pointer max-w-100 text-center py-2 px-3 rounded  border-dark text-dark mb-4", {
                  "border border-opacity-20": thread.id !== selectedThread,
                  "text-primary border-2 border-primary border-opacity-100": thread.id === selectedThread,
                })}
              >
                <div className="text-base whitespace-pre">
                  {thread.size}
                </div>
              </div>
            ))}
        </div>
      }
    </>
  )
};

export default ThreadSize;
