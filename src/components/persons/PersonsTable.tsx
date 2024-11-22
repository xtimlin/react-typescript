import React, { useState } from 'react';
import { Person } from './PersonTypes';
import * as fa from 'react-icons/fa6';

interface PersonsTableProps {
  persons: Person[];
  onEdit: (person: Person) => void;
  onDelete: (person: Person) => void;
}

const PersonsTable: React.FC<PersonsTableProps> = ({
  persons,
  onEdit,
  onDelete,
}) => {
  const rowsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<keyof Person | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const totalPages = Math.ceil(persons.length / rowsPerPage);
  const headers = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'address', label: 'Address' },
    { key: 'city', label: 'City' },
    { key: 'state', label: 'State' },
    { key: 'zipcode', label: 'Zipcode' },
  ];

  const handleSort = (column: keyof Person): void => {
    if (sortColumn === column) {
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const sortedPersons = [...persons].sort((a, b) => {
    if (!sortColumn) return 0;
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortOrder === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    }

    return 0;
  });

  const handlePageChange = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentRows = sortedPersons.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

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

  const renderSortIcon = (column: keyof Person): JSX.Element | null => {
    if (sortColumn !== column) return null;
    return sortOrder === 'asc' ? <fa.FaArrowUp /> : <fa.FaArrowDown />;
  };

  const renderPaginationControls = (): JSX.Element => (
    <div className="flex items-center gap-2 justify-center">
      {currentPage > 1 && (
        <>
          <fa.FaAnglesLeft
            className="icon-style"
            onClick={() => handlePageChange(1)}
          />
          <fa.FaAngleLeft
            className="icon-style"
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </>
      )}
      {paginationNumbers.map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={index}
            className={`px-4 py-2 rounded ${
              currentPage === page
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="px-4 py-2 text-gray-500">
            {page}
          </span>
        ),
      )}
      {currentPage < totalPages && (
        <>
          <fa.FaAngleRight
            className="icon-style"
            onClick={() => handlePageChange(currentPage + 1)}
          />
          <fa.FaAnglesRight
            className="icon-style"
            onClick={() => handlePageChange(totalPages)}
          />
        </>
      )}
    </div>
  );

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {headers.map(({ key, label }) => (
              <th
                key={key}
                className="p-3 text-left text-sm font-semibold text-gray-700 cursor-pointer border"
                onClick={() => handleSort(key as keyof Person)}
              >
                <div className="flex items-center gap-x-2">
                  <span>{label}</span>
                  {renderSortIcon(key as keyof Person)}
                </div>
              </th>
            ))}
            <th className="p-3 text-left text-sm font-semibold text-gray-700 border">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((person) => (
            <tr key={person.id} className="hover:bg-gray-50">
              <td className="p-3 border">{person.firstName}</td>
              <td className="p-3 border">{person.lastName}</td>
              <td className="p-3 border">{person.email}</td>
              <td className="p-3 border">{person.phone}</td>
              <td className="p-3 border">{person.address || 'N/A'}</td>
              <td className="p-3 border">{person.city || 'N/A'}</td>
              <td className="p-3 border">{person.state || 'N/A'}</td>
              <td className="p-3 border">{person.zipcode || 'N/A'}</td>
              <td className="p-3 border flex items-center gap-2">
                <fa.FaPencil
                  className="icon-style"
                  onClick={() => onEdit(person)}
                />
                <fa.FaRegTrashCan
                  className="icon-style"
                  onClick={() => onDelete(person)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4 bg-gray-100">{renderPaginationControls()}</div>
    </div>
  );
};

export default PersonsTable;
