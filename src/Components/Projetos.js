import React, {useState} from "react";
import arrow from "../Assets/Images/whiteArrow.png"

function Projetos(props) {
    const [mern, setMern] = useState(false)
    const [js, setJs] = useState(false)

    return(
        <div className="projeto_container">
            <div className="projetos_circle"></div>
            <div  className="projeto_card">
                <h2>Projetos</h2>
                <ul >
                    <li><img  src={arrow} alt="arrow" /><button onClick={()=>setMern(true)}>MERN</button></li>
                    <li><img  src={arrow} alt="arrow" /> <button  onClick={()=>setJs(true)}>React</button></li> 
                </ul>
            </div>
        </div>
    )
}

export default Projetos