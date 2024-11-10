import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import * as FaIcons from 'react-icons/fa';
import Home from './pages/Home';
import ImageSearch from './pages/ImageSearch';
import Todo from './pages/Todo';
import './App.css'; // Assuming you put the CSS in this file

const App: React.FunctionComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Router>
        <div>
          {/*TopNav*/}
          <nav className="flex justify-between items-center bg-zinc-800 p-6 text-white fixed w-full top-0 left-0 z-50">
            <button onClick={toggleSidebar} className="sidebar-toggle">
              <FaIcons.FaBars />
            </button>
          </nav>

          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <div className={`main-content ${sidebarOpen ? 'shifted' : ''}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/imageSearch" element={<ImageSearch />} />
              <Route path="/todo" element={<Todo />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
