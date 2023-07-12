import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import ReactTooltip from "react-tooltip";

function Footer() {
  const iconStyles = {
    fontSize: "20px",
    marginRight: "5px",
    marginTop: "5px",
  };

  const tagAStyles = {
    textDecoration: "none",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div className="Footer">
      <div className="Contact">
        <div className="Networks">
          <a
            href="https://www.linkedin.com/in/cristianc-trianar/"
            style={tagAStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={iconStyles} />
            <span className="info">Linkedin</span>
          </a>
          <a
            href="https://github.com/CristianCTriana"
            style={tagAStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={iconStyles} />
            <span className="info">GitHub</span>
          </a>
        </div>
        <div className="WriteMe">
          <a
            data-tip="Es posible que se abra la app de Whatsapp al hacer clic"
            href="https://wa.me/573058502605"
            style={tagAStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp style={iconStyles} />
            <span className="info">+57 3058502605</span>
          </a>
          <a style={tagAStyles} target="_blank" rel="noopener noreferrer">
            <GoMail style={iconStyles} />
            <span className="info">cristianctr97@gmail.com</span>
          </a>
          <ReactTooltip effect="solid" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
