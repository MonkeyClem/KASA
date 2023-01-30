import Banner from '../components/Banner'
import Error from '../components/Error/index'
import data from '../datas/logements.json'
import '../styles/logement.css'
import { useParams } from 'react-router-dom'
import { ImageSlider } from '../components/imageSlider'
import Collapsible from '../components/Collapse'
import Rating from '../components/Rating'

function Logement() {
  const routeParams = useParams()
  const foundHouse = data.find((el) => el.id === routeParams.id)

  if (foundHouse) {
    return (
      <div className="kasa-container">
        <Banner />
        {/* <img src={foundHouse.cover} alt = "Appartement proposé" className='logementImage'/> */}
        <ImageSlider slides={foundHouse.pictures}></ImageSlider>

        <section className="flexContainer">
          <article className="titleAndDescription">
            <h2 className="houseTitle">{foundHouse.title}</h2>
            <p className="houseLocalisation">{foundHouse.location}</p>

            <ul className="tagsContainer">
              {foundHouse.tags.map((tags, index) => (
                <li key={index} className="tags">
                  {tags}
                </li>
              ))}
            </ul>
          </article>

          <article className='mobileFlexReverseHost'>
            <div className="hostContainer">
              <p className="hostName">{foundHouse.host.name}</p>
              <img
                src={foundHouse.host.picture}
                alt="Propriétaire du bien"
                className="hostImg"
              />
            </div>
            <Rating />
          </article>
        </section>
        <div className="houseCollapseContainer">
          <div className="houseCollapseMobileAdjust">
            <Collapsible>
              <h4 className="collapseLabel">Description</h4>
              <p className='collapseDescription'>{foundHouse.description}</p>
            </Collapsible>
          </div>

          <div className="houseCollapseMobileAdjust justifyRightCollapse">
            <Collapsible>
              <h4 className="collapseLabel">Equipements</h4>
              <ul className="equipmentsContainer">
                {foundHouse.equipments.map((equipment, index) => (
                  <li key={index} className="equipment">
                    {equipment}
                  </li>
                ))}
              </ul>
            </Collapsible>
          </div>
        </div>
      </div>
    )
  } else {
    return <Error />
  }
}

export default Logement
