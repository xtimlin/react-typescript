import React, { useState } from 'react';
import { Person } from './PersonTypes';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import PaginationControls from './PaginationControls';
import ActiveFilters from './ActiveFilters';

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
  const [searchInputs, setSearchInputs] = useState<Record<string, string>>({});
  const [appliedFilters, setAppliedFilters] = useState<Record<string, string>>(
    {},
  );

  const headers: { key: keyof Person; label: string }[] = [
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
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const handleSearch = (column: keyof Person): void => {
    if (searchInputs[column]) {
      setAppliedFilters((prev) => ({
        ...prev,
        [column]: searchInputs[column],
      }));
    } else {
      setAppliedFilters((prev) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [column]: _, ...rest } = prev;
        return rest;
      });
    }
    setCurrentPage(1);
  };

  const removeFilter = (column: string): void => {
    setAppliedFilters((prev) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [column]: _, ...rest } = prev;
      return rest;
    });
    setSearchInputs((prev) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [column]: _, ...rest } = prev;
      return rest;
    });
  };

  const filteredPersons = persons.filter((person) =>
    Object.entries(appliedFilters).every(([key, value]) =>
      value
        ? `${person[key as keyof Person]}`
            .toLowerCase()
            .includes(value.toLowerCase())
        : true,
    ),
  );

  const sortedPersons = [...filteredPersons].sort((a, b) => {
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

  const totalPages = Math.ceil(sortedPersons.length / rowsPerPage);

  const currentRows = sortedPersons.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <ActiveFilters
        appliedFilters={appliedFilters}
        removeFilter={removeFilter}
      />

      <table className="min-w-full border-collapse border border-gray-200">
        <TableHeader
          headers={headers}
          sortColumn={sortColumn}
          sortOrder={sortOrder}
          onSort={handleSort}
          searchInputs={searchInputs}
          setSearchInputs={setSearchInputs}
          onSearch={handleSearch}
        />
        <TableBody rows={currentRows} onEdit={onEdit} onDelete={onDelete} />
      </table>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PersonsTable;
