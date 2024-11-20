import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import * as FaIcons from 'react-icons/fa';
import HomePage from './pages/HomePage';
import ImageSearchPage from './pages/ImageSearchPage';
import LocationSearchPage from './pages/LocationSearchPage';
import TodoPage from './pages/TodoPage';
import MiniMarketPage from './pages/MiniMarketPage';
import PersonsPage from './pages/PersonsPage';
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
              <Route path="/" element={<HomePage />} />
              <Route path="/ImageSearch" element={<ImageSearchPage />} />
              <Route path="/LocationSearch" element={<LocationSearchPage />} />
              <Route path="/Todo" element={<TodoPage />} />
              <Route path="/MiniMarket" element={<MiniMarketPage />} />
              <Route path="/Persons" element={<PersonsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
