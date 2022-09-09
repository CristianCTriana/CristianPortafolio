import { useEffect, useState } from 'react';
import { FaBootstrap, FaCss3, FaEye, FaHashtag, FaHtml5, FaReact } from "react-icons/fa";
import { SiAuth0, SiJavascript, SiPostgresql, SiRedux, SiSequelize } from "react-icons/si";
import ReactTooltip from 'react-tooltip';
import '../styles/Proyectos.css';
import HomePiVideogames from '../Imgs/HomePIvideogames.png';
import LandingPiVideogames from '../Imgs/landingPIvideogames.png';
import menuEcommercell from '../Imgs/menuEcommercell.png';
import panelAdminEcommercell from '../Imgs/panelAdminEcommercell.png';
import Modal from 'react-modal';

function Proyectos() {

  let slideIndex = 1;
  const slides = document.getElementsByClassName('Slide');

  let showSildes = (n)=>{
    let i;
    let dots = document.getElementsByClassName('Dot');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length !== 0) slides[slideIndex-1].style.display = "flex";  
    if (dots.length !== 0) dots[slideIndex-1].className += " active";
  }

  useEffect(()=>{
    showSildes(slideIndex);
  },[])

  let plusSlides = (n)=>{
    showSildes( slideIndex += n);
  }

  let currentSlide = (n) => {
    showSildes(slideIndex = n)
  }

  const [showImgModal, setShowImgModal] = useState(false);
  const [imgModal, setImgModal] = useState('');

  const eventModal = (event) => {
    // console.log(event.target.src);
    if(event)setImgModal(event.target.src);
    // setShowImgModal(true);
    if(showImgModal){
      setShowImgModal(false)
    }else{
      setShowImgModal(true)
    }
  }

  return (
    <div className='Proyectos' id='Proyectos'>

      <h2 className='ProyectosTittle'>Mis proyectos</h2>

      <div className='SlidesContainer'>

        <div className='Slide Fade'>
          <div className='ImagesContainer'>
            <img onClick={(event) => {eventModal(event)}} src={HomePiVideogames} className='SlideImg'></img>
            <img onClick={(event) => {eventModal(event)}} src={LandingPiVideogames} className='SlideImg'></img>
          </div>
          <div className='TextContainer'>
            <div className='Tittle'><span><strong>Proyecto Individual</strong></span></div>
            <div className='Text'>Proyecto que recrea una biblioteca de videojuegos obtenidos mediante una Api, se puede filtrar los videojuegos y crear algunos nuevos que se guardan en una base de datos local.</div>
            <div className='Tecnologies'>
              <FaReact data-tip="ReactJs" className='Icon'/>
              <SiRedux data-tip="Redux" className='Icon'/>
              <FaHtml5 data-tip="Html" className='Icon'/>
              <FaCss3 data-tip="CSS3" className='Icon'/>
              <SiJavascript data-tip="JavaScript" className='Icon'/>
              <SiPostgresql data-tip="PostgresQl" className='Icon'/>
              <SiSequelize data-tip="Sequelize" className='Icon'/>
              <ReactTooltip effect='solid' />
              <ReactTooltip effect='solid' />
            </div>
            <div className='Buttons'>
              <a className='ButtonCode' href='https://github.com/CristianaCTriana/PI-VIDEOGAMES' target="_blank" rel="noopener noreferrer"><FaHashtag style={{marginRight: '8px'}}/>Código</a>
              <a className='ButtonCode' href='https://pi-videogames-pink.vercel.app'><FaEye style={{marginRight: '8px'}}/>Ver</a>
            </div>
          </div>
        </div>

        <div className='Slide Fade'>
          <div className='ImagesContainer'>
            <img onClick={(event) => {eventModal(event)}} src={menuEcommercell} className='SlideImg'></img>
            <img onClick={(event) => {eventModal(event)}} src={panelAdminEcommercell} className='SlideImg'></img>
          </div>
          <div className='TextContainer'>
            <div className='Tittle'><span><strong>E-COMMERCEL</strong></span></div>
            <div className='Text'>Es una página creada para la venta de productos tecnológicos y sus diversos accesorios, es mi proyecto final para el Bootcamp realizado en Henry, con ayuda de 4 integrantes más.</div>
            <div className='Tecnologies'>
              <FaReact data-tip="ReactJs" className='Icon'/>
              <SiRedux data-tip="Redux" className='Icon'/>
              <FaHtml5 data-tip="Html" className='Icon'/>
              <FaCss3 data-tip="CSS3" className='Icon'/>
              <SiJavascript data-tip="JavaScript" className='Icon'/>
              <SiPostgresql data-tip="PostgresQl" className='Icon'/>
              <SiSequelize data-tip="Sequelize" className='Icon'/>
              <FaBootstrap data-tip="Bootstrap" className='Icon'/>
              <SiAuth0 data-tip="Auth0" className='Icon'/>
              <ReactTooltip effect='solid' />
              <ReactTooltip effect='solid' />
            </div>
            <div className='Buttons'>
              <a className='ButtonCode' href='https://github.com/CristianaCTriana/PI-VIDEOGAMES' target="_blank" rel="noopener noreferrer"><FaHashtag style={{marginRight: '8px'}}/>Código</a>
              <a className='ButtonCode' data-tip="No disponible"><FaEye style={{marginRight: '8px'}}/>Ver</a>
              <ReactTooltip effect='solid' />
            </div>
          </div>
        </div>

        <a className='Prev' onClick={()=>plusSlides(-1)}>❮</a>
        <a className='Next' onClick={()=>plusSlides(1)}>❯</a>

      </div>

      <div className='DotContainer'>
        <span className='Dot' onClick={() => currentSlide(1)}></span>
        <span className='Dot' onClick={() => currentSlide(2)}></span>
      </div>

      {/* <Modal isOpen={true} style={modalStyles}> */}
      <Modal
          onRequestClose={()=>{setShowImgModal(false)}}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          isOpen={showImgModal} style={{
          overlay: {
            
          }, 
          content: {
          width: "80%",
          height: "500px",
          margin: "80px 7%"
          }}}>
        <img id='prueba' style={{width: "100%",height: "98%",border: "7px solid #00a2cf", padding: ".5rem"}} src={imgModal}/>
      </Modal>
    </div>
  );
}

export default Proyectos;