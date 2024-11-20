import React from 'react';
import { Person } from './PersonTypes';

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
  console.log(persons);
  return (
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
        {persons.map((person, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="table-cell-value">{person.firstName}</td>
            <td className="table-cell-value">{person.lastName}</td>
            <td className="table-cell-value">{person.email}</td>
            <td className="table-cell-value">{person.phone}</td>
            <td className="table-cell-value">{person.address || 'N/A'}</td>
            <td className="table-cell-value">{person.city || 'N/A'}</td>
            <td className="table-cell-value">{person.state || 'N/A'}</td>
            <td className="table-cell-value">{person.zipcode || 'N/A'}</td>
            <td className="table-cell-value">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                onClick={() => onEdit(person)}
              >
                Edit
              </button>

              <button
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                onClick={() => onDelete(person)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PersonsTable;
