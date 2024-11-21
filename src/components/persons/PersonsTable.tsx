import React from 'react';
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
  const rowsPerPage: number = 15;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(persons.length / rowsPerPage);

  const currentRows = persons.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const generatePagination = () => {
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
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <table className="min-w-full border-collapse border border-gray-200 bg-white shadow-md rounded-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="table-header">First Name</th>
            <th className="table-header">Last Name</th>
            <th className="table-header">Email</th>
            <th className="table-header">Phone</th>
            <th className="table-header">Street</th>
            <th className="table-header">City</th>
            <th className="table-header">State</th>
            <th className="table-header">ZipCode</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentRows.map((person, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="table-cell-value">{person.firstName}</td>
              <td className="table-cell-value">{person.lastName}</td>
              <td className="table-cell-value">{person.email}</td>
              <td className="table-cell-value">{person.phone}</td>
              <td className="table-cell-value">{person.address || 'N/A'}</td>
              <td className="table-cell-value">{person.city || 'N/A'}</td>
              <td className="table-cell-value">{person.state || 'N/A'}</td>
              <td className="table-cell-value">{person.zipcode || 'N/A'}</td>
              <td className="table-cell-value flex">
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

      {/* Pagination Controls */}
      <div className="flex items-center p-4 bg-gray-100 justify-center">
        {currentPage > 1 && (
          <div className="flex text-2xl">
            <fa.FaAnglesLeft
              className="icon-style"
              onClick={() => handlePageChange(1)}
            />
            <fa.FaAngleLeft
              className="icon-style"
              // className={`text-2xl ${currentPage === 1 ? 'bg-gray-300' : 'hover:bg-gray-300'} `}
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </div>
        )}

        {/* Page Numbers */}
        <div className="flex gap-2 ml-5 mr-5">
          {paginationNumbers.map((page, index) =>
            typeof page === 'number' ? (
              <button
                key={index}
                className={`px-4 py-2 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ) : (
              <span key={index} className="px-4 py-2 text-gray-500">
                ...
              </span>
            ),
          )}

          {currentPage < totalPages && (
            <div className="flex text-2xl items-center">
              <fa.FaAngleRight
                className="icon-style"
                onClick={() => handlePageChange(currentPage + 1)}
              />
              <fa.FaAnglesRight
                className="icon-style"
                onClick={() => handlePageChange(totalPages)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonsTable;
