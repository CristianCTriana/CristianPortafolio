import '../styles/AcercaDeMi.css';

function AcercaDeMi() {
  return (
    <div className='AcercaDeMi'>
      <div className='AcercaDeMiContainer'>
        <div className='NombreYDescripcion'>
          <div className='AcercaDeMiNombre'><h1>Critian Triana</h1></div>
          <div className='AcercaDeMiDescripcion'><span>Desarrollador web especializado en Back-End, énfasis en el uso de Sequelize y JavaScript, actualmente enfocado en reforzar y mantener todos mis conocimientos en cuanto a programación pero también con grandes aspiraciones de desarrollar proyectos mucho más grandes.</span></div>
        </div>
        <div className='FotoYRedes'>
          <div className='AcercaDeMiFoto'><img className='photo' alt='foto de perfil' src='https://avatars.githubusercontent.com/u/39069895?v=4'></img></div>
        </div>
      </div>
    </div>
  );
}

export default AcercaDeMi;
