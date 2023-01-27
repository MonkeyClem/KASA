import '../styles/header.css'
// import logo from "../assets/logo.svg"
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.svg"

function Banner ({ children }) {
  console.log (children)

  //Nous loggons la props children, afin d'inspecter ce qui se trouve dedans.  
  //Résultat : Apparait sous un format peu lisible.
  return <header className='kasa-header'>
  <img src= {logo} alt='Logo' className='kasa-logo'></img>  
  <nav className='kasa-header-nav'>
       <Link to="/" className='linkText'>Accueil</Link>
       <Link to="/aPropos" className='linkTextTwo'>A Propos</Link>
  </nav>
</header>
  //Possibilité d'utiliser la méthode toArray, qui transforme props.children en tableau. Nous mappons ensuite dessus afin de le parcourir 
  // const bannerChild = React.Children.toArray(children).map(enfant => enfant.props.children)
  // console.log(bannerChild)

  // return children
          
}



export default Banner

