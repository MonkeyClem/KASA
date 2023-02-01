import '../styles/banner.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.svg"

function Banner () {

  return <header className='kasa-header'>
  <img src= {logo} alt='Logo' className='kasa-logo'></img>  
  <nav className='kasa-header-nav'>
       <Link to="/" className='linkText'>Accueil</Link>
       <Link to="/aPropos" className='linkTextTwo'>A Propos</Link>
  </nav>
</header>
          
}

export default Banner
