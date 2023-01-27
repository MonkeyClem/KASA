import React from 'react';
// import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
import background from '../assets/IMG.svg'
import {Body} from '../components/body'
import {Card} from '../components/Card'
import Footer from '../components/Footer'
import data from '../datas/logements.json' 
console.log(data)


function Home() {

   return (
      <div>
            <div className='kasa-layout'>
               <Banner>
                  {/* <header className='kasa-header'>
                     <img src= {logo} alt='Logo' className='kasa-logo'></img>  
                     <nav className='kasa-header-nav'>
                        <Link to="/" className='linkText'>Accueil</Link>
                        <Link to="/aPropos" className='linkTextTwo'>A Propos</Link>
                     </nav>
               </header> */}
               </ Banner>

               <Body>
                  <section className='firstSection'>
                  <span className='tagline'>Chez vous, partout et ailleurs</span>   
                     <img className='homeImage' src={background} alt = "paysage Tropicale"/>
                  </section>

                  <section className='gallery'>
                           <Card>
                              {/* <div>
                                    <ul className='houseListContainer'>
                                    {data.map((house) => (
                                       <li key={house.id} className='houseListCard'>
                                          <Link to ={house.id} className='houseLink'>
                                             <img className="img" src={house.cover} alt="logement" />
                                             <p className='houseTitle'>{house.title}</p>
                                          </Link>
                                       </li>
                  ))}
                                    </ul>
                              </div> */}
                           </Card>
                  </section>

               </Body>
            
              </div>

            <Footer/>

         </div>
         
        )
  
}

export default Home