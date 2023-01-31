import React from 'react';
import Banner from '../components/Banner'
import background from '../assets/IMG.svg'
import { Body } from '../components/body'
import { Card } from '../components/Card'
import Footer from '../components/Footer'

function Home() {

   return (
      <div>
         <div className='kasa-container'>
            <Banner />
            <Body>
               <section className='firstSection'>
                  <span className='tagline'>Chez vous, partout et ailleurs</span>
                  <img className='homeImage' src={background} alt="paysage Tropicale" />
               </section>
               <section className='gallery'>
                  <Card />
               </section>
            </Body>
         </div>
         <Footer />
      </div>

   )

}

export default Home