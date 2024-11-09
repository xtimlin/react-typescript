import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';

import Home from './pages/Home';
import ImageSearch from './pages/ImageSearch';
import Todo from './pages/Todo';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imageSearch" element={<ImageSearch />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
