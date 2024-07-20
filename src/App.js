import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Compra from './Compra';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Compra />} />
      </Routes>
    </Router>
  );
}

export default App;
