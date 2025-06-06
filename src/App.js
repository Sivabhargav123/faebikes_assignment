import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import IitjeeDownloadPage from './components/IitjeeDownloadPage';
const App = () => {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<IitjeeDownloadPage />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
