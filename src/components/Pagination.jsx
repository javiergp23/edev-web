export function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const stylePrveBtn = isFirstPage ? "is-disabled" : "";
  const styleNextBtn = isLastPage ? "is-disabled" : "";

  const handlePrevClick = (e) => {
    e.preventDefault();
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = (e, page) => {
    e.preventDefault();
    if (page !== currentPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className="pagination">
      <button style={{ stylePrveBtn }} href="" onClick={handlePrevClick}>
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLineJoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24h0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </button>

      {pages.map((page) => (
        <a href="#" className={currentPage === page ? "is-active" : ""}>
          {page}
        </a>
      ))}

      <a href="" style={{ styleNextBtn }} onClick={handleNextClick}>
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLineJoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="icon icon-tablerr icons-tabler-outline icon-tabler-chevron-right"
        >
          <path stroke="none" d="M0 0h24v24h0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </a>
    </nav>
  );
}
