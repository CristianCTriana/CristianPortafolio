import '../styles/Navbar.css';
import {BiMenu} from "react-icons/bi";

function Navbar() {

  const showMenu = () => {
    const menu = document.getElementById('NavbarListMobile');
    if(menu.style.display !== "flex") {
      menu.style.display = "flex"
    }else{
      menu.style.display = "none"
    }
  }

  return (
    <div className='Navbar'>
      <span className='NameTittle'>Cristian Triana</span>
      <ul className='NavbarList NavbarListMobile' id='NavbarListMobile'>
        <li className='NavbarListItem'><a className='MenuOption' href='#AcercaDeMi'><div className='MenuOptionContainer'>Acerca de mi</div></a></li>
        <li className='NavbarListItem'><a className='MenuOption' href='#Proyectos'><div className='MenuOptionContainer'>Proyectos</div></a></li>
        <li className='NavbarListItem'><a className='MenuOption' href='#Practicas'><div className='MenuOptionContainer'>Prácticas</div></a></li>
        <li className='NavbarListItem'><a className='MenuOption' href='#Otros'><div className='MenuOptionContainer'>Más</div></a></li>
      </ul>
      <button className='ButtonNavbar' onClick={()=>{showMenu()}}><BiMenu style={{color: "white", fontSize: "35px"}}/></button>
    </div>
  );
}

export default Navbar;