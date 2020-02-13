import React, { useState } from "react";

export default ({ data, itemsPerPage, oneItem, next, prev }) => {
  const [pageNo, setPageNo] = useState(0);
  const pages =
    data &&
    data
      .map(
        (item, index) =>
          index % itemsPerPage === 0 && data.slice(index, index + itemsPerPage)
      )
      .filter(Boolean);
  return (
    <div>
      {pages[pageNo].map(item => oneItem(item))}
      <div className="pagination-buttons">
        <div className="arrows">
          <button
            type="button"
            onClick={() => setPageNo(pageNo === 0 ? pageNo : pageNo - 1)}
          >
            {prev}
          </button>
        </div>
        <div className="pages">
          {pages.map((item, index) => (
            <button type="button" onClick={() => setPageNo(index)}>
              {index+1}
            </button>
          ))}
        </div>
        <div className="arrows">
          <button
            type="button"
            onClick={() =>
              setPageNo(pageNo === pages.length - 1 ? pageNo : pageNo + 1)
            }
          >
            {next}
          </button>
        </div>
      </div>
    </div>
  );
};
