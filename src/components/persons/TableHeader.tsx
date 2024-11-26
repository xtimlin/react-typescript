import React, { useState } from 'react';
import * as fa from 'react-icons/fa6';
import { Person } from './PersonTypes';

interface TableHeaderProps {
  headers: { key: keyof Person; label: string }[];
  sortColumn: keyof Person | null;
  sortOrder: 'asc' | 'desc';
  onSort: (column: keyof Person) => void;
  searchInputs: Partial<Record<keyof Person, string>>;
  setSearchInputs: React.Dispatch<
    React.SetStateAction<Partial<Record<keyof Person, string>>>
  >;
  onSearch: (column: keyof Person) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  headers,
  sortColumn,
  sortOrder,
  onSort,
  searchInputs,
  setSearchInputs,
  onSearch,
}) => {
  const [filterVisible, setFilterVisible] = useState<
    Record<keyof Person, boolean>
  >(() => {
    const initialState = {} as Record<keyof Person, boolean>;
    headers.forEach(({ key }) => {
      initialState[key] = false;
    });
    return initialState;
  });

  const toggleFilter = (key: keyof Person) => {
    setFilterVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <thead className="bg-gray-100">
      <tr>
        {headers.map(({ key, label }) => (
          <th
            key={key}
            className="p-3 text-left text-sm font-semibold text-gray-700 border"
          >
            <div className="flex items-center justify-between">
              <span onClick={() => onSort(key)}>{label}</span>
              {sortColumn === key && (
                <span className="text-gray-500">
                  {sortOrder === 'asc' ? <fa.FaArrowUp /> : <fa.FaArrowDown />}
                </span>
              )}
              <fa.FaFilter
                className="text-gray-500 cursor-pointer"
                onClick={() => toggleFilter(key)}
              />
            </div>
            {filterVisible[key] && (
              <div className="flex items-center gap-x-2 mt-1">
                <input
                  type="text"
                  value={searchInputs[key] || ''}
                  onChange={(e) =>
                    setSearchInputs((prev) => ({
                      ...prev,
                      [key]: e.target.value,
                    }))
                  }
                  placeholder={`Search ${label}`}
                  className="border p-1 text-sm rounded-md"
                />
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={() => {
                    onSearch(key);
                    toggleFilter(key);
                  }}
                >
                  Apply
                </button>
              </div>
            )}
          </th>
        ))}
        <th className="p-3 text-left text-sm font-semibold text-gray-700 border">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
