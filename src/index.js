import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from '../src/pages/Home.js';
import AboutUs  from '../src/pages/aPropos';
import Logement from '../src/pages/logement'
import Error from '../src/components/Error/index'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path ="/aPropos" element={<AboutUs/>}/>
                    <Route path = "*" element = {<Error/>}></Route>
                    <Route path="/:id" element={<Logement/>} /> 
                </Routes>
            </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals()