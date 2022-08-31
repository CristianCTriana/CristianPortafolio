import '../styles/Otros.css';
import {SiBlender, SiUnity} from 'react-icons/si';

function Otros() {

  const blenderIcon = {
    color: "#db730e",
    fontSize: "80px",
    margin: "5px"
  }

  const unityIcon = {
    color: "black",
    fontSize: "80px",
    margin: "5px"
  }

  return (
    <div className='Otros' id='Otros'>
      <div className='OtrosTittle'><strong>Otros conocimientos</strong></div>
      <div className='InfoContainer'>
        <div className='Info1'>
          <a href='https://www.blender.org' target="_black" rel="noopener noreferrer"><SiBlender style={blenderIcon}/></a>
          <div className='OtrosInfoTittle'>
            Blender
          </div>
          <div className='OtrosInfoText'>
            <p>Blender es un programa informático multiplataforma, dedicado especialmente al modelado, iluminación, renderizado, la animación y creación de gráficos tridimensionales.</p>
            <p>Actualmente es un estudio secundario y totalmente autónomo que tengo.</p>
          </div>
        </div>
        <div className='Info2'>
          <a href='https://unity.com/es' target="_black" rel="noopener noreferrer"><SiUnity style={unityIcon}/></a>
          <div className='OtrosInfoTittle'>
            Unity
          </div>
          <div className='OtrosInfoText'>
            <p>Unity es un motor de videojuego multiplataforma creado por Unity Technologies.</p>
            <p>Durante mi proceso en la universidad estuve en 2 semilleros donde aprendí a usar unity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otros;