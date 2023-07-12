import "../styles/ExperienciasLaborales.css";
import copywriteIcon from "../Imgs/icon.png";
import { useState } from "react";
import Modal from "react-modal";
import { useEffect } from "react";
import { FaCss3, FaEye, FaHtml5, FaReact } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

function ExperienciasLaborales() {
  let slideIndex = 1;
  const slides = document.getElementsByClassName("SlideExp");

  let showSildes = (n) => {
    let i;
    let dots = document.getElementsByClassName("DotExp");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length !== 0) slides[slideIndex - 1].style.display = "flex";
    if (dots.length !== 0) dots[slideIndex - 1].className += " active";
  };

  useEffect(() => {
    showSildes(slideIndex);
  }, []);

  let plusSlides = (n) => {
    showSildes((slideIndex += n));
  };

  let currentSlide = (n) => {
    showSildes((slideIndex = n));
  };

  const [imgModal, setImgModal] = useState("");
  const [showImgModal, setShowImgModal] = useState(false);

  const eventModal = (event) => {
    // console.log(event.target.src);
    if (event) setImgModal(event.target.src);
    // setShowImgModal(true);
    if (showImgModal) {
      setShowImgModal(false);
    } else {
      setShowImgModal(true);
    }
  };

  return (
    <div className="ExperienciasLaborales" id="ExperienciasLaborales">
      <h2 className="ExperienciasLaboralesTittle">Experiencia Laboral</h2>
      <div className="TextExp">
        <span></span>
      </div>
      <div className="SlidesContainerExp">
        <div className="SlideExp Fade">
          <div className="ImagesContainerExp">
            <img
              onClick={(event) => {
                eventModal(event);
              }}
              src={copywriteIcon}
              className="SlideImgExp"
            ></img>
          </div>
          <div className="TextContainerExp">
            <div className="TittleExp">
              <span>
                <strong>Copywrite</strong>
              </span>
            </div>
            <div className="TextExp">
              Desarrollador Full Stack en el desarrollo de la landing page y app
              web de Copywrite.
            </div>
            <div className="TecnologiesExp">
              <FaReact data-tip="ReactJs" className="IconP" />
              <FaHtml5 data-tip="Html" className="IconP" />
              <FaCss3 data-tip="CSS3" className="IconP" />
              {/* <SiRedux data-tip="Redux" className='IconP'/>
              {/* <SiJavascript data-tip="JavaScript" className='IconP'/>
              <ReactTooltip effect='solid' />*/}
              <ReactTooltip effect="solid" />
            </div>
            <div className="ButtonsExp">
              {/* <a className='ButtonCodeP' href='https://github.com/CristianaCTriana/Copywrite-Challenge' target="_blank" rel="noopener noreferrer"><FaHashtag style={{marginRight: '8px'}}/>Código</a>*/}
              <a
                className="ButtonCodeP"
                href="https://www.copywritecol.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEye style={{ marginRight: "8px" }} />
                Visitar
              </a>
              <ReactTooltip effect="solid" />
            </div>
          </div>
        </div>
        <a className="PrevP" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="NextP" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
      <div className="DotContainerP">
        <span className="DotP" onClick={() => currentSlide(1)}></span>
        {/* <span className='DotP' onClick={() => currentSlide(2)}></span> */}
      </div>
      <Modal
        onRequestClose={() => {
          setShowImgModal(false);
        }}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        isOpen={showImgModal}
        style={{
          overlay: {},
          content: {
            width: "80%",
            height: "500px",
            margin: "80px 7%",
          },
        }}
      >
        <img
          id="prueba"
          style={{
            width: "100%",
            height: "98%",
            border: "7px solid #00a2cf",
            padding: ".5rem",
          }}
          src={imgModal}
        />
      </Modal>
    </div>
  );
}

export default ExperienciasLaborales;
