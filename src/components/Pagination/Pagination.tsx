import React, { FC } from "react";
import "./Pagination.scss";
import classNames from "classnames";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

type PaginationProps = {
  pageNum: number;
  pagesCount: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  onLastClick?: () => void;
  onFirstClick?: () => void;
};

const Pagination: FC<PaginationProps> = ({
  pageNum,
  pagesCount,
  onPrevClick,
  onNextClick,
  onLastClick,
  onFirstClick,
}) => {
  return (
    <div className="pagesContainer">
      <div
        className={classNames("pagesBtn", {
          ["inactive"]: pageNum === 1,
        })}
        onClick={onFirstClick}
      >
        FIRST
      </div>
      <div
        className={classNames("pagesBtn", {
          ["inactive"]: pageNum === 1,
        })}
        onClick={onPrevClick}
      >
        <BsArrowLeft />
      </div>
      <div className="pagesPageNum">{pageNum}</div>
      <div
        className={classNames("pagesBtn", {
          ["inactive"]: pageNum === pagesCount,
        })}
        onClick={onNextClick}
      >
        <BsArrowRight />
      </div>
      <div
        className={classNames("pagesBtn", {
          ["inactive"]: pageNum === pagesCount,
        })}
        onClick={onLastClick}
      >
        LAST
      </div>
    </div>
  );
};

export default Pagination;
