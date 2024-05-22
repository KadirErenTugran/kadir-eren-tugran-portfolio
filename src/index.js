import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import AboutmeScreen from './screens/AboutmeScreen';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/aboutme' element={<AboutmeScreen/>}/>
        
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
