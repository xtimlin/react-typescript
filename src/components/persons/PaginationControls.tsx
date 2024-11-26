import React from 'react';
import * as fa from 'react-icons/fa6';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const generatePagination = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    for (
      let i = Math.max(1, currentPage - 5);
      i <= Math.min(totalPages, currentPage + 5);
      i++
    ) {
      pages.push(i);
    }
    if (pages[0] > 1) pages.unshift('...');
    if (pages[pages.length - 1] < totalPages) pages.push('...');
    return pages;
  };

  const paginationNumbers = generatePagination();

  return (
    <div className="flex items-center gap-2 justify-center">
      {currentPage > 1 && (
        <>
          <fa.FaAnglesLeft
            className="icon-style"
            onClick={() => onPageChange(1)}
          />
          <fa.FaAngleLeft
            className="icon-style"
            onClick={() => onPageChange(currentPage - 1)}
          />
        </>
      )}
      {paginationNumbers.map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={index}
            className={`px-4 py-2 ${currentPage === page ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ) : (
          <span key={index}>{page}</span>
        ),
      )}
      {currentPage < totalPages && (
        <>
          <fa.FaAngleRight
            className="icon-style"
            onClick={() => onPageChange(currentPage + 1)}
          />
          <fa.FaAnglesRight
            className="icon-style"
            onClick={() => onPageChange(totalPages)}
          />
        </>
      )}
    </div>
  );
};

export default PaginationControls;
