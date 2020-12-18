import React, { useState } from "react";
import classnames from "classnames";

const Grade = () => {
  const [selectedThread, setSelectedThread] = useState(3);
  const data = {};
  data.grade = [
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

  return (
    <div>
      <div className="font-medium text-dark not-italic text-lg opacity-75 tracking-tight pb-4 ">
        Grade
      </div>
      <div className="flex pb-2 pr-4">
        {data.grade &&
          data.grade.length > 0 &&
          data.grade.map((grade, index) => (
            <div
              key={index}
              onClick={() => setSelectedThread(grade.id)}
              className={classnames(
                "cursor-pointer px-5 text-center py-2 rounded mr-4 border-dark text-dark mb-4 focus:outline-none",
                {
                  "border border-opacity-10": grade.id !== selectedThread,
                  "text-white bg-primary border-primary ":
                    grade.id === selectedThread,
                }
              )}
            >
              <div
                className={classnames(
                  "text-base whitespace-pre tracking-tight",
                  {
                    "text-dark": grade.id !== selectedThread,
                    "text-white ": grade.id === selectedThread,
                  }
                )}
              >
                {grade.grade}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Grade;
