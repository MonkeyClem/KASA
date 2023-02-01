import React from 'react'
import { useState } from 'react'
import '../styles/Collapse.css'
import '../styles/logement.css'
import upArrow from '../assets/upArrow.svg'
import downArrow from '../assets/downArrow.svg'

/*  Collapsible :  

  - Dans la fonction ci-dessous, nous commençons par définir le state de open et de arrow, qui est false par défaut.

  - L'état initial des éléments sera ensuite modifié lors de l'appel de la fonction 
    Toggle (déclenchée au click du button)

  - Cette fonction Toggle contient elle même les fonctions SetOpen et setDown, qui sont utilisées respectivement pour modifier 
  l'état de open, et l'état de arrow 

  - Enfin, nous utilisons les opérateurs conditionnels afin de définir l'Interface Utilisateur en fonction 
    de l'état de arrow et de open

  RAPPEL : la syntaxe du UseState => Le premier élément est l'état initial,  le second est une fonction qui est 
           utilisée pour mettre à jour l'état.
  */

const Collapsible = ({ children }) => {

  const [open, setOPen] = useState(false)
  const [arrow, setDown] = useState(false)

  const toggle = () => {
    setOPen(!open)
    setDown(!arrow)
  }

  return (
    <div className = "mobileAdjust">
      <button onClick={toggle} className="collapseBanner">
        {children[0]}
        {arrow ? (
          <span>
            <img
              src={upArrow}
              alt="Flèche indiquant qu'il est possible d'afficher du texte supplémentaire concernant les équipements ou la description du logement"
              className='toggleArrow'
           />
          </span>
        ) : (
          <span>
            <img
              src={downArrow}
              alt="Flèche indiquant qu'il est possible de masquer du texte concernant les équipements ou la description du logement"
              className='toggleArrow'
            />
          </span>
        )}
      </button>
      {open && (
        <div className="toggle">
          <span>{children[1]}</span>
        </div>
      )}
    </div>
  
  )
}

export default Collapsible
