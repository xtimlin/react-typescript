import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [close, setClose] = useState(false);
  const showSidebar = () => setClose(!close);

  return (
    <>
      <nav className="flex items-center h-14 bg-blue-400">
        <Link
          to="#"
          onClick={showSidebar}
          className="flex justify-start ml-8 text-2xl text-white"
        >
          <FaIcons.FaBars />
        </Link>
      </nav>

      <div className={`sidebar-menu ${close ? 'open' : 'closed'}`}>
        <Link
          to="#"
          onClick={showSidebar}
          className="flex justify-end mt-3 mr-4 text-2xl text-white"
        >
          <FaIcons.FaTimes />
        </Link>

        {SidebarData.map((item, index) => (
          <li key={index} className="flex items-center list-none px-0 py-4">
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
    </>
  );
};

export default Sidebar;
