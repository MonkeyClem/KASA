import React from 'react'
import Banner from '../components/Banner'
import Collapsible from '../components/Collapse'
import background from '../assets/aboutUsBackground.svg'
import Footer from '../components/Footer'
import '../styles/aPropos.css'
// import logo from "../assets/logo.svg"

function aPropos() {
  console.log('Nous dans la page aPropos.jsx')
  return (
    <div>
      <div className="kasa-layout">
        <Banner></Banner>
        <section className="firstSection">
          <img className="homeImage" src={background} alt="paysage Tropicale" />
        </section>

          <div className="collapseTabContainer">
            <Collapsible>
              <h4>Fiabilité</h4>
              <p className="aboutUsCollapseContent">
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            </Collapsible>

            <Collapsible>
              <h4>Respect</h4>
              <p className="aboutUsCollapseContent">
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </Collapsible>
            <Collapsible>
              <h4>Service</h4>
              <p className="aboutUsCollapseContent">
                Nos équipes se tiennent à votre disposition pour vous fournir
                une expérience parfaite. N'hésitez pas à nous contacter si vous
                avez la moindre question.
              </p>
            </Collapsible>
            <Collapsible>
              <h4>Responsabilité</h4>
              <p className="aboutUsCollapseContent">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            </Collapsible>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default aPropos
