import React, { useState } from "react";
import classnames from "classnames";

const ThreadSize = () => {
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
  ];
  return (
    <div>
      <div className="font-medium text-dark not-italic text-lg opacity-75 tracking-tight pb-4">
        Thread Size
      </div>
      <div className="flex pb-2 pr-4">
        {data.threadSize &&
          data.threadSize.length > 0 &&
          data.threadSize.map((thread, index) => (
            <div
              key={index}
              onClick={() => setSelectedThread(thread.id)}
              className={classnames(
                " cursor-pointer px-5 text-center py-2 rounded mr-4 border-dark text-dark mb-4 focus:outline-none",
                {
                  "border border-opacity-10": thread.id !== selectedThread,
                  "text-white bg-primary border-primary ":
                    thread.id === selectedThread,
                }
              )}
            >
              <div
                className={classnames(
                  "text-base whitespace-pre tracking-tight",
                  {
                    "text-dark": thread.id !== selectedThread,
                    "text-white ": thread.id === selectedThread,
                  }
                )}
              >
                {thread.size}
              </div>
            </div>
          ))}
      </div>
      <hr className="text-dark opacity-10 pb-6" />
    </div>
  );
};

export default ThreadSize;
