import '../styles/Practicas.css';
import { useEffect } from 'react';
import { FaCss3, FaEye, FaHashtag, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript, SiRedux } from "react-icons/si";
import ReactTooltip from 'react-tooltip';
import copyWriteChallenge from '../Imgs/copyWriteChallenge.png';

function Practicas() {
let slideIndex = 1;
  const slides = document.getElementsByClassName('SlideP');

  let showSildes = (n)=>{
    let i;
    let dots = document.getElementsByClassName('DotP');
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

  return (
    <div className='Practicas' id='Practicas'>

      <h2 className='PracticasTittle'>Prácticas</h2>

      <div><span className='TextP'>Aquí hay pequeños proyectos que uso para practicar.</span></div>

      <div className='SlidesContainerP'>

        <div className='SlideP Fade'>
          <div className='ImagesContainerP'>
            <img src={copyWriteChallenge} className='SlideImgP'></img>
          </div>
          <div className='TextContainerP'>
            <div className='TittleP'><span><strong>Palabras Palíndromas</strong></span></div>
            <div className='TextP'>App que te muestra una palabra ingresa por el usuario escrita al revés y te muestra si es o no palíndroma.</div>
            <div className='TecnologiesP'>
              <FaReact data-tip="ReactJs" className='IconP'/>
              <SiRedux data-tip="Redux" className='IconP'/>
              <FaHtml5 data-tip="Html" className='IconP'/>
              <FaCss3 data-tip="CSS3" className='IconP'/>
              <SiJavascript data-tip="JavaScript" className='IconP'/>
              <ReactTooltip effect='solid' />
              <ReactTooltip effect='solid' />
            </div>
            <div className='ButtonsP'>
              <a className='ButtonCodeP' href='https://github.com/CristianaCTriana/Copywrite-Challenge' target="_blank" rel="noopener noreferrer"><FaHashtag style={{marginRight: '8px'}}/>Código</a>
              <a className='ButtonCodeP' href='https://challenge-copywrite-camilot.herokuapp.com' target="_blank" rel="noopener noreferrer"><FaEye style={{marginRight: '8px'}}/>Ver</a>
              <ReactTooltip effect='solid' />
            </div>
          </div>
        </div>

        <a className='PrevP' onClick={()=>plusSlides(-1)}>❮</a>
        <a className='NextP' onClick={()=>plusSlides(1)}>❯</a>

      </div>

      <div className='DotContainerP'>
        <span className='DotP' onClick={() => currentSlide(1)}></span>
        {/* <span className='DotP' onClick={() => currentSlide(2)}></span> */}
      </div>
    </div>
  );
}

export default Practicas;