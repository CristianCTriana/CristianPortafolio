import "./styles/App.css";
import Footer from "./components/Footer";
import AcercaDeMi from "./components/AcercaDeMi";
import Proyectos from "./components/Proyectos";
import Practicas from "./components/Practicas";
import Otros from "./components/Otros";
import Navbar from "./components/Navbar";
import ExperienciasLaborales from "./components/ExperienciasLaborales";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <div id="AcercaDeMi">
          <AcercaDeMi></AcercaDeMi>
        </div>
        <div id="ExperienciasLaborales">
          <ExperienciasLaborales></ExperienciasLaborales>
        </div>
        <div id="Proyectos">
          <Proyectos></Proyectos>
        </div>
        <div id="Practicas">
          <Practicas></Practicas>
        </div>
        <div id="Otros">
          <Otros></Otros>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
