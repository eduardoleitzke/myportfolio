import "./Styles/style.css"
import Menu from "./Components/Menu";
import Sobre from "./Components/Sobre"
import Projetos from "./Components/Projetos";
import Certificados from "./Components/Certificados";
import Tecnologias from "./Components/Tecnologias"
import Footer from './Components/Footer'
import React, { useState, useRef } from 'react'
function App() {
  const main_ref = useRef(null)
  const [sobre, setSobre] = useState(true)
  const [projetos, setProjetos] = useState(false)
  const [certificados, setCertificados] = useState(false)
  const [tecnologias, setTecnologias] = useState(false)
  const [contato, setContato] = useState(false)
  // const main_ref = useRef()
  window.addEventListener('scroll', () => {
    const scrollValue = document.documentElement.scrollTop
    const scrollMax = document.documentElement.scrollHeight
    console.log(main_ref.current.clientHeight)
    console.log('scrollvalue = ' + scrollValue)
    console.log('scrollmx/7 = ' + scrollMax)
    if (scrollValue > 0 && scrollValue < scrollMax / 7) {
      setSobre(true)
      setProjetos(false)
      setCertificados(false)
      setTecnologias(false)
      setContato(false)
    }
    if (scrollValue > scrollMax / 7 && scrollValue < scrollMax / 2.8) {
      setProjetos(true)
      setCertificados(false)
      setSobre(false)
      setTecnologias(false)
      setContato(false)
    }
    // else{
    //   setProjetos(false)
    //   setCertificados(false)
    //   setSobre(false)
    //   setTecnologias(false)
    //   setContato(false)
    // }
    if (scrollValue > scrollMax / 2.8 && scrollValue < scrollMax / 1.8) {
      setProjetos(false)
      setCertificados(true)
      setSobre(false)
      setTecnologias(false)
      setContato(false)
    }
    if (scrollValue > scrollMax / 1.8 &&  scrollValue < scrollMax / 1.2) {
      setProjetos(false)
      setCertificados(false)
      setSobre(false)
      setTecnologias(true)
      setContato(false)
    }
     if (scrollValue === scrollMax) {
       setProjetos(false)
       setCertificados(false)
       setSobre(false)
       setTecnologias(false)
       setContato(true)
     }
  })
  return (
    <main ref={main_ref} onScroll={(e) => console.log(e.value)}>
      <Menu projetos={projetos} certificados={certificados} sobre={sobre} tecnologias={tecnologias} contato={contato}></Menu>
      <Sobre></Sobre>
      <Projetos></Projetos>
      <Certificados></Certificados>
      <Tecnologias></Tecnologias>
      <Footer></Footer>
    </main>
  );
}

export default App;
