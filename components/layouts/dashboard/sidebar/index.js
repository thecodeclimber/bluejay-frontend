import React, { useState, useEffect } from "react";
import classname from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { dashboardSideBarList } from "../../../../utils/constants";

const Sidebar = () => {
  const [activeList, setActiveList] = useState("");
  const router = useRouter();

  useEffect(() => {
    const pathName = router?.pathname && router?.pathname.split("/").pop();
    if (pathName && activeList !== pathName) {
      setActiveList(pathName);
    }
  }, [router]);

  return (
    <div className="relative max-w-220 flex flex-col bg-dark">
      <div>
        <div className="flex px-4 py-5 items-center">
          <img src="/img/dashboard-logo.png" className="mr-4" />
          <div className="font-ubuntu font-medium text-white text-lg leading-21">
            Blue-Jay Fasteners
          </div>
        </div>
        <hr className="mb-5 opacity-07 bg-white h-px" />
      </div>
      {dashboardSideBarList && dashboardSideBarList.length > 0 && (
        <div className="flex flex-col justify-between">
          <div>
            {dashboardSideBarList.map((data, index) => {
              if (index === dashboardSideBarList.length - 1) return;
              return (
                <a onClick={()=> router.push(`/dashboard/${data.link}`)} key={index}>
                  <div
                    className={classname(
                      "flex items-center font-ubuntu px-4 py-5 font-medium text-white bg-dark hover:bg-primary cursor-pointer text-sm tracking-tight",
                      {
                        "bg-primary": data.link === activeList,
                      }
                    )}
                  >
                    <div className="ml-1 mr-4">
                      <img src={data.icon} alt={`img-${index}`} />
                    </div>
                    <div>{data.name}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
      <div className="absolute bottom-0 w-full">
        <div className="flex items-center font-ubuntu pl-4 py-5 font-medium text-white bg-white bg-opacity-03 hover:bg-error cursor-pointer text-sm tracking-tight">
          <div className="ml-1 mr-4">
            <img
              src={dashboardSideBarList[dashboardSideBarList.length - 1].icon}
              alt={`img-${dashboardSideBarList.length - 1}`}
            />
          </div>
          <div>
            {dashboardSideBarList[dashboardSideBarList.length - 1].name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
