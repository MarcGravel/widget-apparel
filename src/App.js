import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hatspage/hatspage.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    //Routes component ensures that once a route finds a path match, it does not render anything else but that route 
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/hats' element={<HatsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
