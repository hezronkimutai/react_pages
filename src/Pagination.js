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

  const pages = data ? Paginate(data, itemsPerPage) : [];

 const allPages = pages.map((item, index) => index);
  const allPageNumbers = pageNo < 5 ? allPages.slice(0, 10) : allPages.slice(pageNo-5, pageNo+5)
  
  return (
    <div className='pagination-container'>
      {(pages[pageNo] || pages[0]).map((item, index) => oneItem(item, index))}
      <div className='pagination-buttons'>
        <div className='arrows'>
          <button
            type='button'
            onClick={() => {
              setPageNo(pageNo === 0 ? pageNo : pageNo - 1);
            }}
          >
            {prev}
          </button>
        </div>
        <div className='pages'>
          {allPageNumbers.map((item, index) => (
            <div id={index}>
              <button
                type='button'
                onClick={() => {
                  setPageNo(item);
                }}
                style={item === pageNo ? activeStyle : {}}
              >
                {pageName} {item + 1}
              </button>
            </div>
          ))}
        </div>
        <div className='arrows'>
          <button
            type='button'
            onClick={() => {
              setPageNo(pageNo === pages.length - 1 ? pageNo : pageNo + 1);
            }}
          >
            {next}
          </button>
        </div>
      </div>
    </div>
  );
};
