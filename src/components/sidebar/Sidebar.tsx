import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="float-end flex mt-3 mr-4 text-2xl text-white ">
        <FaIcons.FaTimes className="" onClick={toggleSidebar} />
      </button>

      {SidebarData.map((item, index) => (
        <li key={index} className="flex items-center list-none px-0 py-3">
          <Link
            to={item.path}
            className="flex items-center px-8 text-lg text-white no-underline menu-item-link"
          >
            {item.icon}
            <span className="ml-4">{item.title}</span>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Sidebar;
