import React from "react";
import classnames from "classnames";
import { shape, func } from "prop-types";
import {
  BsArrowLeft as LeftArrowIcon,
  BsArrowRight as RightArrowIcon,
} from "react-icons/bs";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];
  while (i <= to) {
    range.push(i);
    i += step;
  }
  return range;
};

const Pagination = (props) => {
  const { paginationData, handleSelectedPage } = props;
  const { current_page, total_pages } = paginationData || {};
  if (!total_pages || total_pages <= 1) return null;

  const pageNeighbours = 2;

  const fetchPageNumbers = () => {
    const totalPages = total_pages;
    const currentPage = current_page;
    const totalNumbers = pageNeighbours * 2 + 2;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(1, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [...new Set([1, ...pages, totalPages])];
    }
    return [...new Set(range(1, totalPages))];
  };

  const pages = fetchPageNumbers();

  return (
    <div className="font-ubuntu flex justify-between">
      <div
        onClick={() => current_page > 1 && handleSelectedPage(current_page - 1)}
        className={classnames(
          "flex items-center mr-4 px-5 py-2 rounded border border-dark border-opacity-10 text-dark cursor-pointer",
          { "cursor-not-allowed opacity-50": current_page === 1 }
        )}
      >
        <LeftArrowIcon className="text-xl mr-5" />
        <span className="text-lg tracking-tight font-normal">Back</span>
      </div>
      <div className="flex">
        {pages &&
          pages.length > 0 &&
          pages.map((page, index) => {
            if (page === LEFT_PAGE || page === RIGHT_PAGE)
              return (
                <div
                  key={index}
                  className="mr-3 text-dark opacity-50 flex items-end"
                >
                  ...
                </div>
              );
            return (
              <div
                key={index}
                className={classnames(
                  "flex mr-3 justify-center items-center px-4 py-2 tracking-tight  rounded border border-dark border-opacity-10",
                  {
                    "bg-primary text-white cursor-default":
                      page === current_page,
                    "text-dark cursor-pointer": page !== current_page,
                  }
                )}
                onClick={() =>
                  page !== current_page && handleSelectedPage(page)
                }
              >
                {page}
              </div>
            );
          })}
      </div>
      <div
        onClick={() =>
          total_pages > current_page && handleSelectedPage(current_page + 1)
        }
        className={classnames(
          "flex items-center ml-4 px-5 py-2 rounded border border-dark border-opacity-10 text-dark cursor-pointer",
          { "cursor-not-allowed opacity-50": current_page === total_pages }
        )}
      >
        <span className="text-lg tracking-tight mr-5 font-normal">Next</span>
        <RightArrowIcon className="text-xl" />
      </div>
    </div>
  );
};

Pagination.defaultProps = {
  paginationData: {},
  handleSelectedPage: () => {},
};

Pagination.propTypes = {
  paginationData: shape({}),
  handleSelectedPage: func,
};

export default Pagination;
