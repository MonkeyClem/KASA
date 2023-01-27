import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '../src/pages/Home.js';
import AboutUs  from '../src/pages/aPropos';
import Error from '../src/components/Error/index'
import reportWebVitals from './reportWebVitals';
import data from '../src/datas/logements.json'
import Logement from '../src/pages/logement'



// function LogementPage() {
//   // Get the userId param from the URL.
//   let { userId } = useParams();
//   // ...
  


const dataMapping = data.map(element => element.id)
console.log(dataMapping)




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