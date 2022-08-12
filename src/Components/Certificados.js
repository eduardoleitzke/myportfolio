import React, { useEffect, useState, useRef } from "react";
import certificado1 from "../Assets/Images/certificado1.png"
import certificado2 from "../Assets/Images/certificado2.png"
import certificado3 from "../Assets/Images/certificado3.png"
import certificado4 from "../Assets/Images/certificado4.png"
function Certificados(props) {
    /*States */
    const [certificadoChosen, setCertificadoChosen] = useState(null)
    /*Refs */
    const firstC_ref = useRef(null)
    const secondC_ref = useRef(null)
    const thirdC_ref = useRef(null)
    const fourthC_ref = useRef(null)
    const first_half = useRef(null)
    function showCertificado(e) {
        console.log(e.target.id)
        if (e.target.id === "firstC") {
            setCertificadoChosen(certificado1)
            secondC_ref.current.style.background = "none"
            thirdC_ref.current.style.background = "none"
            fourthC_ref.current.style.background = "none"
            firstC_ref.current.style.background = "linear-gradient(120deg,#5b5b5830, #31303022)"
            firstC_ref.current.style.color = "#ffffff"
            
        } else {
            firstC_ref.current.style.color = "#b46030cc"
        }
        if (e.target.id === "secondC") {
            setCertificadoChosen(certificado2)
            firstC_ref.current.style.background = "none"
            thirdC_ref.current.style.background = "none"
            fourthC_ref.current.style.background = "none"
            secondC_ref.current.style.background = "linear-gradient(120deg,#5b5b5830, #31303022)"
            secondC_ref.current.style.color = "#ffffff"
           
        }
        else {
            secondC_ref.current.style.color = "#b46030cc"
        }
        if (e.target.id === "thirdC") {
            setCertificadoChosen(certificado3)
            secondC_ref.current.style.background = "none"
            firstC_ref.current.style.background = "none"
            fourthC_ref.current.style.background = "none"
            thirdC_ref.current.style.background = "linear-gradient(120deg, #5b5b5830, #31303022)"
            thirdC_ref.current.style.color = "#ffffff"
            
        }
        else {
            thirdC_ref.current.style.color = "#b46030cc"
        }
        if (e.target.id === "fourthC") {
            setCertificadoChosen(certificado4)
            secondC_ref.current.style.background = "none"
            thirdC_ref.current.style.background = "none"
            firstC_ref.current.style.background = "none"
            fourthC_ref.current.style.background = "linear-gradient(120deg, #5b5b5830, #31303022)"
            fourthC_ref.current.style.color = "#ffffff"
           
        }
        else {
            fourthC_ref.current.style.color = "#b46030cc"
        }
    }
    return (
        <div className="certificados_container">
            <div ref={first_half} className="certificados_half">
                <h2>CERTIFICADOS</h2>
                <ul>
                    <li ref={firstC_ref} id="firstC" onClick={(e) => showCertificado(e)}>HTML, CSS E JAVASCRIPT</li>
                    <li ref={secondC_ref} id="secondC" onClick={(e) => showCertificado(e)}>NODEJS E MONGODB</li>
                    <li ref={thirdC_ref} id="thirdC" onClick={(e) => showCertificado(e)}> ELECTRON</li>
                    <li ref={fourthC_ref} id="fourthC" onClick={(e) => showCertificado(e)}>REACTJS</li>

                </ul>


            </div>
            <div className={"certifcado_second_half"}>
                <img className={certificadoChosen === null ? "displaynone" : ""} width={800} src={certificadoChosen} alt="certificado" />
            </div>
        </div>
    )
}

export default Certificados