import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Rotina from './Rotina';
import Contato from './Contato';

function App() {
  return (
    <Router>
      <div className="App">
       

        <Routes>
          <Route path="/" element={<Rotina />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
