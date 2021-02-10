import React from "react";
import classnames from "classnames";
import { IoIosArrowForward as SlideRightArrow } from "react-icons/io";
import { useRouter } from "next/router";
import { dashboardSideBarList } from "../../../utils/constants";

const BreadCrum = () => {
  const router = useRouter();
  const getBreadCrumList = () => {
    let breadCrumList = [];
    const pathNames = router?.pathname && router?.pathname.split("/");
    const findIndex = pathNames.findIndex((path) => path === "dashboard");
    if (findIndex > -1) {
      let getPathNames = pathNames.slice(findIndex + 1);
      getPathNames = getPathNames.filter((pathName) => pathName !== "[id]");
      if (getPathNames && getPathNames.length > 0) {
        getPathNames.forEach((pathName) => {
          dashboardSideBarList.forEach((path) => {
            if (path.link === pathName) {
              breadCrumList.push(path.name);
            }
          });
        });
      }
    }
    if (
      dashboardSideBarList &&
      dashboardSideBarList.length > 0 &&
      dashboardSideBarList[0].name
    ) {
      return [dashboardSideBarList[0].name, ...breadCrumList];
    }
    return breadCrumList;
  };

  const breadCrumList = getBreadCrumList();
  return (
    <div className="flex items-center font-Ubuntu">
      {breadCrumList.length > 0 &&
        breadCrumList.map((name, index) => {
          return (
            <div key={index} className="flex items-center">
              <div
                className={classnames("text-base tracking-tight", {
                  "text-primary": index !== breadCrumList.length - 1,
                  "text-dark font-medium": index === breadCrumList.length - 1,
                })}
              >
                {name}
              </div>
              {index !== breadCrumList.length - 1 && (
                <SlideRightArrow className="mx-6 text-dark opacity-25" />
              )}
            </div>
          );
        })}
    </div>
  );
};

BreadCrum.defaultProps = {};

BreadCrum.propTypes = {};

export default BreadCrum;
