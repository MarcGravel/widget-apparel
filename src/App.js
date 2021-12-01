import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    //Routes component ensures that once a route finds a path match, it does not render anything else but that route 
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hats' element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
