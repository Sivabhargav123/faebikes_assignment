import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Food from './components/Food';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Render Login only when not logged in */}
        {!isLoggedIn && (
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        )}

        {/* Routes for authenticated users */}
        {isLoggedIn && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Food />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
