import  {useState} from 'react';
import { useParams } from "react-router-dom";
import data from '../datas/logements.json'
import rightArrow from '../assets/rightArrow.svg'
import leftArrow from '../assets/leftArrow.svg'
import '../styles/imageSlider.css'

export function ImageSlider({slides}){
    console.log('Nous entrons dans le Components ImageSlider')
    const routeParams = useParams();
    const foundHouse = data.find(el => el.id === routeParams.id)
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const foundHouseImage = foundHouse.pictures
    console.log(routeParams)
    console.log(foundHouse)
    if(!Array.isArray(slides) || slides.length <= 0 ){
        return null
    }
    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }
   const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
   }
   console.log(current)

    return <>
            <div className='logement-layout'>
            <section className='slider'>
               <img src={leftArrow} className='leftArrow' onClick={prevSlide} alt="Flèche vers précédente"/>
               <img src={rightArrow} className='rightArrow' onClick={nextSlide} alt="Flèche vers suivante"/>

                {foundHouseImage.map((slide, index) => {
                    return(
                    <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                        {index === current &&(<img key={index} src={slide} alt='Les pièces du bien proposé à la location' className='logementImage' />)}
                    </div>
                    )
                })}
          
                </section>
                </div>
           </>
    };

export default ImageSlider