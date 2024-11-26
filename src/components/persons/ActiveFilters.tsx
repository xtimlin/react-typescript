import React from 'react';
import * as fa from 'react-icons/fa6';

interface ActiveFiltersProps {
  appliedFilters: Record<string, string>;
  removeFilter: (key: string) => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  appliedFilters,
  removeFilter,
}) => {
  return Object.entries(appliedFilters).length > 0 ? (
    <div className="p-4 bg-gray-100 flex flex-wrap items-center gap-2">
      {Object.entries(appliedFilters).map(([key, value]) => (
        <div
          key={key}
          className="flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-lg"
        >
          <span>{`${key}: ${value}`}</span>
          <fa.FaCircleMinus
            className="ml-2 cursor-pointer"
            onClick={() => removeFilter(key)}
          />
        </div>
      ))}
    </div>
  ) : null;
};

export default ActiveFilters;
