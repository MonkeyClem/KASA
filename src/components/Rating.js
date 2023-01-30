import star from '../assets/star_rate.svg'
import greyStar from '../assets/empty_star.svg'
import {  useParams } from "react-router-dom";
import data from '../datas/logements.json'

const RateFunction = () => {
    const routeParams = useParams();
    const foundHouse = data.find(el => el.id === routeParams.id)
    const notation = foundHouse.rating
    let avis = notation;
    switch (avis) {
        case "1":
            return <div className='starContainer'> 
                        <img src= {star} alt = 'Etoile remplie' className='starRating'/>
                        <img src= {greyStar} alt = 'Notation' className='starRating'/><img src= {greyStar} alt = 'Notation' className='starRating'/><img src= {greyStar} alt = 'Notation' className='starRating'/><img src= {greyStar} alt = 'Notation' className='starRating'/> 

                    </div>
        case "2":
            return <div className='starContainer'> 
                        <img src= {star} alt = 'Notation' className='starRating'/><img src= {star} alt = 'Notation' className='starRating'/> 
                        <img src= {greyStar} alt = 'Notation' className='starRating'/><img src= {greyStar} alt = 'Notation' className='starRating'/> <img src= {greyStar} alt = 'Notation' className='starRating'/> 
                    </div>
        case "3":
            return <div className='starContainer'> 
                        <img src= {star} alt = 'Notation' className='starRating'/> <img src= {star} alt = 'Notation' className='starRating'/> <img src= {star} alt = 'Notation' className='starRating'/>
                        <img src= {greyStar} alt = 'Notation' className='starRating'/> <img src= {greyStar} alt = 'Notation' className='starRating'/> 
                    </div>
        case "4":
            return <div className='starContainer'> 
                        <img src= {star} alt = 'Notation' className='starRating'/><img src= {star} alt = 'Notation' className='starRating'/> <img src= {star} alt = 'Notation' className='starRating'/> <img src= {star} alt = 'Notation' className='starRating'/> 
                        <img src= {greyStar} alt = 'Notation' className='starRating'/> 
                    </div>
        case '5':
            return <div className='starContainer'> 
                        <img src= {star} alt = 'Notation' className='starRating'/><img src= {star} alt = 'Notation' className='starRating'/> <img src= {star} alt = 'Notation' className='starRating'/> <img src= {star} alt = 'Notation' className='starRating'/> <img src= {star} alt = 'Notation' className='starRating'/> 
                    </div>
        default:
            console.log('le switchCase fonctionne');
        }
}

export default RateFunction