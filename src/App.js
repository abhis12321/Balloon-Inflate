import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BalloonPage from './components/Balloon';
import FormPage from './components/Form';
import  './components/style.css';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Balloon Animation</Link>
          </li>
          <li>
            <Link to="/form">Form with API Call</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element = {<BalloonPage />}> </Route>
        <Route path="/form" element = {<FormPage />}> </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;