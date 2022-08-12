import React from "react"


function Menu(props){
    console.log(props)
    return(
        <menu>
            
            <ul>
                <li className={props.sobre ? "li_relative_show" : "li_relative_hide"}>Home</li>   
                <li className={props.projetos ? "li_relative_show" : "li_relative_hide"}> Projetos</li>
                <li className={props.certificados ? "li_relative_show" : "li_relative_hide"}>Certificados</li>
                <li className={props.tecnologias ? "li_relative_show" : "li_relative_hide"}>Tecnologias</li>
                <li className="li_relative_hide">Contatos</li>
                {/* <img className={props.sobre ? "li_relative_show" : "li_relative_hide"} src={teste} alt="" />   */}
            </ul>
        </menu>
    )
}



export default Menu