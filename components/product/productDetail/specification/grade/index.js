import React, { useState } from "react";
import classnames from "classnames";

const data = [
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
];

const Grade = () => {
  const [selectedThread, setSelectedThread] = useState(3);

  return (
    <div>
      <div className="font-medium text-dark not-italic text-lg opacity-75 tracking-tight pb-4 ">
        Grade
      </div>
      <div className="flex pb-2 pr-4">
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedThread(item.id)}
              className={classnames(
                "cursor-pointer px-5 text-center py-2 rounded mr-4 border-dark text-dark mb-4 focus:outline-none",
                {
                  "border border-opacity-10": item.id !== selectedThread,
                  "text-white bg-primary border-primary ":
                    item.id === selectedThread,
                }
              )}
            >
              <div
                className={classnames(
                  "text-base whitespace-pre tracking-tight",
                  {
                    "text-dark": item.id !== selectedThread,
                    "text-white ": item.id === selectedThread,
                  }
                )}
              >
                {item.grade}
              </div>
            </div>
          ))}
      </div>
      <hr className="text-dark opacity-10 pb-6" />
    </div>
  );
};

export default Grade;
