import React from 'react'
import { useState } from 'react'
import '../styles/Collapse.css'
import '../styles/logement.css'
import upArrow from '../assets/upArrow.svg'
import downArrow from '../assets/downArrow.svg'

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
        {/* A VOIR AVEC RIDA : QUEL OPTION FAVORISER ?? Celle ci-dessous est plus "claire" alors que celle ci-dessus correspond au format conseillé par React :  https://fr.reactjs.org/docs/conditional-rendering.html
                    {arrow && (<span><img src= {upArrow} alt = "Flèche indiquant qu'il est possible d'afficher du texte supplémentaire concernant les équipements ou la description du logement"/></span>)} 
                    {!arrow && <span><img src = {downArrow} alt = "Flèche indiquant qu'il est possible de masquer du texte concernant les équipements ou la description du logement"/></span>} */}
      </button>
      {open && (
        <div className="toggle">
          <h4 /*className="collapseLabel"*/>{children[1]}</h4>
        </div>
      )}
    </div>
  
  )
}

export default Collapsible
