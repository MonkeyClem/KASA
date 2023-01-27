import Banner from '../Banner.js'
import '../../styles/header.css'
import '../../styles/error.css'
import Erreur from '../../assets/error.svg'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='kasa-layout'>
            <Banner />
            <div className='errorBody'>
                <img src={Erreur} alt='Erreur 404' className='errorImg'/>
                <p className='ErrorText'>Oups! La page que vous demandez n'existe pas</p>
                <Link to = '/' className='homeLink'>Retournez vers la page d'accueil</Link>
            </div>

        </div>
    )
}
 
export default Error