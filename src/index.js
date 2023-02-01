import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './reactRouter/App'

/*  L'ajout de React.StrictMode n'est pas obligatoire et n’a aucune incidence sur l’interface utilisateur, mais 
    permet d’apporter des vérifications additionnelles pour ses enfants. */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
                <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals()