import React, { useState } from 'react';
import './PaginatedCardSection.css';

const PaginatedCardSection = ({ data = [], title = '', itemsPerPage = 3 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const getPaginatedItems = () => {
    // Calculate start index normally
    let start = (currentPage - 1) * itemsPerPage;

    // On last page, adjust start if remaining items < itemsPerPage
    if (currentPage === totalPages && data.length % itemsPerPage !== 0) {
      start = Math.max(0, data.length - itemsPerPage);
    }

    return data.slice(start, start + itemsPerPage);
  };

  const handlePageChange = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <section className="pagination-section">
      {title && <h2 className="section-title">{title}</h2>}

      <div className="pagination-cards-container">
        {getPaginatedItems().map((item, index) => (
          <div className="pagination-card" key={index}>
            <div>
            {item.image && <img src={item.image} alt={item.title || 'media'} loading="lazy" />}
                {item.title && <h3>{item.title}</h3>}
            {item.description && <p>{item.description}</p>}
            </div>
            <button className="pagination-read-more">Read more...</button>
          </div>
        ))}
      </div>

      <div className="pagination-controls">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </button>

        {[...Array(totalPages).keys()].map((page) => {
          const pageNum = page + 1;
          if (
            pageNum === 1 ||
            pageNum === totalPages ||
            (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
          ) {
            return (
              <button
                key={pageNum}
                className={pageNum === currentPage ? 'active' : ''}
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </button>
            );
          } else if (
            (pageNum === currentPage - 2 || pageNum === currentPage + 2) &&
            totalPages > 5
          ) {
            return <span key={pageNum}>...</span>;
          } else {
            return null;
          }
        })}

        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default PaginatedCardSection;
