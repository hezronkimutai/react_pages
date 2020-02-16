import React, { useState, useEffect } from 'react'
const Paginate = (allData, itemsPerPage) =>
  allData
    .map(
      (item, index) =>
        index % itemsPerPage === 0 && allData.slice(index, index + itemsPerPage)
    )
    .filter(Boolean)
export default ({
  data,
  itemsPerPage,
  onePage,
  next,
  prev,
  activePageStyle,
  pageName,
  pageButtons,
  paginationContainer,
  paginationButtons,
}) => {
  const [pageNo, setPageNo] = useState(0)

  const pages = data ? Paginate(data, itemsPerPage) : []

  const allPages = pages.map((item, index) => index)

  const allPageNumbers =
    pageNo < Math.round(pageButtons / 2)
      ? allPages.slice(0, pageButtons)
      : allPages.slice(
          pageNo - Math.round(pageButtons / 2),
          pageNo + Math.round(pageButtons / 2)
        )

  return (
    <div className="pagination-container" style={paginationContainer}>
      {(pages[pageNo] || pages[0]).map((item, index) => onePage(item, index))}
      <div className="pagination-buttons" style={paginationButtons}>
        <div className="arrows">
          <button
            id="prev"
            type="button"
            onClick={() => setPageNo(pageNo === 0 ? pageNo : pageNo - 1)}
          >
            {prev}
          </button>
        </div>
        <div className="pages">
          {allPageNumbers.map((item, index) => (
            <div id={index} key={index}>
              <button
                type="button"
                onClick={() => setPageNo(item)}
                style={item === pageNo ? activePageStyle : {}}
              >
                {pageName} {item + 1}
              </button>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button
            id="next"
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
  )
}
