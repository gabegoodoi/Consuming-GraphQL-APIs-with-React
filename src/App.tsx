import { Route, Routes } from 'react-router-dom'; 
import React from 'react';
import CreateAlbumPage from './Pages/CreateAlbumPage.tsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateAlbumPage />} />
    </Routes>
  );
}

export default App;
