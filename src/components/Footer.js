import logo from "../assets/footerLogo.svg"
import copyright from '../assets/Kasa_Copyright.svg'
import '../styles/body.css'

function Footer(){
    return <div className="footerContainer">
            <img src={logo} alt="logo représentant une maison" className="footerLogo"/>
            <br/>
            <img src={copyright} alt="Copyright" className="Copyright"/>
         </div>
    };

export default Footer