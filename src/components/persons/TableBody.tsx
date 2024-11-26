import React from 'react';
import * as fa from 'react-icons/fa6';
import { Person } from './PersonTypes';

interface TableBodyProps {
  rows: Person[];
  onEdit: (row: Person) => void;
  onDelete: (row: Person) => void;
}

const TableBody: React.FC<TableBodyProps> = ({ rows, onEdit, onDelete }) => (
  <tbody>
    {rows.map((row, index) => (
      <tr key={index} className="hover:bg-gray-50">
        {Object.entries(row)
          .filter(([k]) => k !== 'id') // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .map(([_, v], idx) => (
            <td key={idx} className="p-3 border">
              {v !== null && v !== undefined ? String(v) : 'N/A'}
            </td>
          ))}
        <td className="p-3 border flex items-center gap-2">
          <fa.FaPencil className="icon-style" onClick={() => onEdit(row)} />
          <fa.FaRegTrashCan
            className="icon-style"
            onClick={() => onDelete(row)}
          />
        </td>
      </tr>
    ))}
  </tbody>
);

export default TableBody;
