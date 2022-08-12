import React from "react";
import faceIcon from '../Assets/Images/redeicons/face.svg'
import instaIcon from '../Assets/Images/redeicons/insta.svg'
import linkedinIcon from '../Assets/Images/redeicons/linkedin.svg'
import whatsIcon from '../Assets/Images/redeicons/whatsapp.svg'
import emaiIcon from '../Assets/Images/redeicons/email.svg'

function Footer(props){
    return (
        <footer>
            <div className="footer_firshalf">
                <div className="footer_icons">
                    <h3>REDES SOCIAIS</h3>
                    <ul> 
                        <li><a href="https://www.facebook.com/eduardo.leitzke.9" target='blank'><img width={16} src={faceIcon} alt="insta" /></a></li>
                        <li><a href="https://www.instagram.com/leitzkeeduardo/" target='blank'><img width={24} src={instaIcon} alt="face" /></a></li>
                        <li><a href="https://www.instagram.com/leitzkeeduardo/" target='blank'><img width={24} src={linkedinIcon} alt="linkedin" /></a></li>
                    </ul>
                </div>
                <div>a</div>
                <div className="footer_contacts">
                    <h3>FALE COMIGO</h3>
                    <ul className="contacts">
                        <li><a href="https://api.whatsapp.com/send?phone=5553984048427" target='blank'><img width={32} src={whatsIcon} alt="whats" /></a><p>(53) 98404-8427</p></li>
                        <li><a href="mailto:eduardoleitzkep@gmail.com" target='blank'><img width={32} src={emaiIcon} alt="whats" /></a><p>eduardoleitzkep@gmail.com</p></li>     
                    </ul>
                </div>
            </div>
            
            <div className="footer_void"></div>
        </footer>
    )
}


export default Footer