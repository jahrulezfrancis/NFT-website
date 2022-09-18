import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
  );
}

export default App;
