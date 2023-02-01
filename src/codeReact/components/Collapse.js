import React from 'react'
import { useState } from 'react'
import '../styles/Collapse.css'
import '../styles/logement.css'
import upArrow from '../assets/upArrow.svg'
import downArrow from '../assets/downArrow.svg'

const Collapsible = ({ children }) => {

/*Syntaxe du UseState: Le premier élément est l'état initial et le second est une fonction qui est 
  utilisée pour mettre à jour l'état. 

  L'état initial des éléments (ici, il s'agit donc de open et de arrow) sont par la suite modifié par la fonction Toggle 
  Cette fonction toggle contient elle même les fonctions SetOpen, et setDown, qui sont utilisées respectivement pour modifier 
  l'état de Open, et l'état de arrow 
  */

  const [open, setOPen] = useState(false)
  const [arrow, setDown] = useState(false)
  const toggle = () => {
    setOPen(!open)
    setDown(!arrow)
  }

  console.log(open)
  console.log(arrow)

  /*Nous retournons donc au sein du HTML un boutton sur lequel la fonction Toggle se délenche lors du clique de
   l'utilisateur
   La props.children est utilisée afin de retourner au sein du DOM le contenu inclus entre les balises 
   d'ouverture et de fermeture lorsque le composant est appelé
   Pour finir, nous utilisons les opérateurs conditionnels afin de définir l'UI en fonction 
   de l'état de arrow et de open
   Si arrow est false (ce qui est son état de base), la fleche est orienté vers le haut, dans le cas contraire elle est
   orientée vers le bas
   */ 

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
