import {useState} from 'react';
import {useParams} from "react-router-dom";
import data from '../datas/logements.json'
import rightArrow from '../assets/rightArrow.svg'
import leftArrow from '../assets/leftArrow.svg'
import '../styles/imageSlider.css'


    /* Explication de ImageSlider : 

        - routeParams permet de récupérer les paramètres de l'URL, dans lesquels se trouve l'ID du logement séléctionné par l'utilisateur
        - foundHouse nous permet ensuite de recherher au sein du fichier JSON un ID similaire à celui présent dans l'URL
        - Si foundhouse nous retourne une valeur, alors nous affichons les éléments correspondant dans le DOM. Dans le cas contraire, la page 
          error est retournée.

        -Nous utilisons useState, avec une valeur de départ de type Number (valeur 0)

        - Si la méthode Array.isArray (avec la props slides en valeur, qui correspond à foundHouse.pictures) 
        n'est pas respectée alors, ou que sa valeur est de 0, alors null nous est retournée

           - Les fonctions nextSlide et prevSlide se servent de la valeur présente dans current afin de fonctionner :

                                nextSlide :  Si current est strictement égale la valeur de length -1, alors la valeur passe 
                                            à 0, ce qui nous permet de revenir au début du tableau. Dans le cas contraire, nous 
                                            ajoutons simplement +1 au tableau

                                prevSlide : nous permet de revenir à l'index précédent :  Si current est strictement
                                            égale à 0, alors la valeur passe  à length -1, ce qui permet de revenir au 
                                            dernier index du tableau. Dans le cas contraire la valeur passe à current -1, ce qui 
                                            permet de revenir à l'index précédent

        - L'affichage de rightArrow et leftArrow n'est déclenché que si le logement possède plusieurs photos

     
    */
export function ImageSlider({slides}){

    const routeParams = useParams();
    const foundHouse = data.find(el => el.id === routeParams.id);
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const foundHouseImage = foundHouse.pictures;

    if(!Array.isArray(slides) || slides.length <= 0 ){
        return null
    };


    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    };
   
   const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
   };

if(length === 1){
    return <>
    <div className='logement-layout'>
    <section className='slider'>
        {foundHouseImage.map((slide, index) => {
            return(
            <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                {index === current &&(<img key={index} src={slide} alt='Les pièces du bien proposé à la location' className='logementImage' />)}
                <span className='indexNumbers'>{index + 1}/{length}</span>
            </div>
            )
        })}
  
        </section>
        </div>
   </>
}else if(length > 1){
    return <>
    <div className='logement-layout'>
    <section className='slider'>
       <img src={leftArrow} className='leftArrow' onClick={prevSlide} alt="Flèche vers précédente"/>
       <img src={rightArrow} className='rightArrow' onClick={nextSlide} alt="Flèche vers suivante"/>

        {foundHouseImage.map((slide, index) => {
            return(
            <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                {index === current &&(<img key={index} src={slide} alt='Les pièces du bien proposé à la location' className='logementImage' />)}
                <span className='indexNumbers'>{index + 1}/{length}</span>
            </div>
       
            )
            
        })}
        
    </section>
        </div>
   </>
};
   
}

export default ImageSlider