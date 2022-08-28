import { useEffect } from 'react';
import { FaBootstrap, FaCss3, FaEye, FaHashtag, FaHtml5, FaReact } from "react-icons/fa";
import { SiAuth0, SiJavascript, SiPostgresql, SiRedux, SiSequelize } from "react-icons/si";
import ReactTooltip from 'react-tooltip';
import '../styles/Proyectos.css';
import HomePiVideogames from '../Imgs/HomePIvideogames.png';
import LandingPiVideogames from '../Imgs/landingPIvideogames.png';
import menuEcommercell from '../Imgs/menuEcommercell.png';
import panelAdminEcommercell from '../Imgs/panelAdminEcommercell.png';

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
    console.log("click")
  }

  let currentSlide = (n) => {
    showSildes(slideIndex = n)
  }

  return (
    <div className='Proyectos' id='Proyectos'>

      <h2 className='ProyectosTittle'>Mis proyectos</h2>

      <div className='SlidesContainer'>

        <div className='Slide Fade'>
          <div className='ImagesContainer'>
            <img src={HomePiVideogames} className='SlideImg'></img>
            <img src={LandingPiVideogames} className='SlideImg'></img>
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
              <a className='ButtonCode' data-tip="En proceso"><FaEye style={{marginRight: '8px'}}/>Ver</a>
              <ReactTooltip effect='solid' />
            </div>
          </div>
        </div>

        <div className='Slide Fade'>
          <div className='ImagesContainer'>
            <img src={menuEcommercell} className='SlideImg'></img>
            <img src={panelAdminEcommercell} className='SlideImg'></img>
          </div>
          <div className='TextContainer'>
            <div className='Tittle'><span><strong>E-COMMERCEL</strong></span></div>
            <div className='Text'>Es una pagina creada para la venta de productos tecnológicos y sus diversos accesorios, es mi proyecto final para el Bootcamp realizado en Henry, con ayuda de 4 integrantes más.</div>
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
    </div>
  );
}

export default Proyectos;