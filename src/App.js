import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    //route exact means path must exactly match path specified to render
    //Routes component ensures that once a route finds a path match, it does not render anything else but that route 
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
