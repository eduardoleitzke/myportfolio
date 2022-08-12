import React from "react";
import htmlIcon from "../Assets/Images/tecsIcons/html-5.png"
import cssIcon from "../Assets/Images/tecsIcons/css-3.png"
import jsIcon from "../Assets/Images/tecsIcons/script-java.png"
import reactIcon from "../Assets/Images/tecsIcons/atom.png"
import nodeIcon from "../Assets/Images/tecsIcons/node.png"
import mongoIcon from "../Assets/Images/tecsIcons/momgo.png"
function Tecnologias(props) {
    return (
        <div className="tecnologia_container">
            <h2>TECNOLOGIAS</h2>
            <div className="center_box">
                <div className="tec_box">
                    <img width={120} src={htmlIcon} alt="" />
                    <p>HTML</p>
                </div>
                <div className="tec_box">
                    <img width={120} src={cssIcon} alt="" />
                    <p>CSS</p>
                </div>
                <div className="tec_box">
                    <img width={120} src={jsIcon} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className="tec_box">
                    <img width={120} src={reactIcon} alt="" />
                    <p>React</p>
                </div>
                <div className="tec_box">
                    <img width={120} src={nodeIcon} alt="" />
                    <p>NodeJs</p>
                </div>
                <div className="tec_box">
                    <img width={120} src={mongoIcon} alt="" />
                    <p>MongoDB</p>
                </div>
            </div>

        </div>
    )
}


export default Tecnologias