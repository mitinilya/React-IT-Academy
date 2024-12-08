import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange, onItemsPerPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const handleItemsPerPageChange = (e) => {
    onItemsPerPageChange(Number(e.target.value));
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <div className="pagination-controls">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageClick(currentPage - 1)}
          className="pagination-button"
        >
          Предыдущая
        </button>

        <div className="page-numbers">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={`page-button ${currentPage === pageNumber ? 'active' : ''}`}
            >
              {pageNumber}
            </button>
          ))}
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageClick(currentPage + 1)}
          className="pagination-button"
        >
          Следующая
        </button>
      </div>

      <div className="items-per-page-selector">
        <label>
          Показывать по:
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={150}>150</option>
          </select>
          элементов
        </label>
      </div>
    </div>
  );
};

export default Pagination;
