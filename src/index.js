import React, { useState, useEffect } from "react";
const Paginate = (allData, itemsPerPage) =>
  allData
    .map(
      (item, index) =>
        index % itemsPerPage === 0 && allData.slice(index, index + itemsPerPage)
    )
    .filter(Boolean);
export default ({
  data,
  itemsPerPage,
  oneItem,
  next,
  prev,
  activeStyle,
  pageName
}) => {
  const [pageNo, setPageNo] = useState(0);
  const [check, setCheck] = useState(true);
  const [lower, setLower] = useState(false);
  const [upper, setUpper] = useState(false);
  const [goBack, setGoBack] = useState(true);
  const [goFoward, setGoFoward] = useState(true);
  const [currentLength, setCurrentLength] = useState(0);
  const [paginationPageNo, setPaginationPageNo] = useState(0);

  useEffect(() => {
    setPageNo(0);
  }, [data, pages]);

  const pages = data ? Paginate(data, itemsPerPage) : [];

  const allPageNumbers =
    pages &&
    Paginate(
      pages.map((item, index) => index),
      10
    );
   
  if ((pageNo + 1) % 10 === 0 && pageNo !== 0 && check) {
    setPaginationPageNo(paginationPageNo + 1);
    setCurrentLength(currentLength + 10);
    setCheck(false);
    setLower(true);
    
  }

  if (pageNo / currentLength === 1) {
    setPaginationPageNo(paginationPageNo - 1);
    setCurrentLength(currentLength - 10);
    setCheck(false);
    setUpper(true);
  }

  return (
    <div className="pagination-container">
      {(pages[pageNo] || pages[0]).map((item, index) => oneItem(item, index))}
      <div className="pagination-buttons">
        <div className="arrows">
          <button
            type="button"
            onClick={() => {
              setPageNo(pageNo === 0 ? pageNo : pageNo - 1);
              setCheck(true);
              setLower(false);
              setUpper(false);
            }}
          >
            {prev}
          </button>
        </div>
        <div className="pages">
          {lower && (
            <div>
              <button type="button" style={activeStyle}>
                {pageNo + 1}
              </button>
            </div>
          )}

          {(allPageNumbers[paginationPageNo] || allPageNumbers[0]).map(
            (item, index) => (
              <div id={index}>
                <button
                  type="button"
                  onClick={() => {
                    setPageNo(item);
                    setCheck(true);
                    setLower(false);
                    setUpper(false);
                  }}
                  style={pageNo === currentLength + index ? activeStyle : {}}
                >
                  {pageName} {item + 1}
                </button>
              </div>
            )
          )}
          {upper && (
            <div>
              <button type="button" style={activeStyle}>
                {pageNo + 1}
              </button>
            </div>
          )}
        </div>
        <div className="arrows">
          <button
            type="button"
            onClick={() => {
              setPageNo(pageNo === pages.length - 1 ? pageNo : pageNo + 1);
              setCheck(true);
              setLower(false);
              setUpper(false);
            }}
          >
            {next}
          </button>
        </div>
      </div>
    </div>
  );
};
