import React from "react";
import { Chrono } from "react-chrono";

const TimeLine = () => {
  const items = [
    {
      title: "june 1, 2020",
      cardTitle: "Development Begins",
    },
    {
      title: "Oct 1, 2020",
      cardTitle: "Tocken Sale Announcement",
    },
    {
      title: "june 1, 2020",
      cardTitle: "Development Begins",
    },
    {
      title: "Oct 1, 2020",
      cardTitle: "Tocken Sale Announcement",
    },
  ];
  return (
    <div className="pb-18 font-ubuntu">
      <div className="container mx-auto text-3xl pb-10 text-dark text-center">
        <span className="font-light">Time</span>{" "}
        <span className="font-medium">Line</span>
      </div>
      <div style={{ width: "850px", height: "200px" }}>
        <Chrono items={items} hideControls mode="HORIZONTAL" slideShow={true} />
      </div>
    </div>
  );
};

export default TimeLine;
