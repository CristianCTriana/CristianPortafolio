import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
      <span className='NameTittle'>Cristian Triana</span>
      <ul className='NavbarList'>
        <li className='NavbarListItem'><a className='MenuOption' href='#AcercaDeMi'><div className='MenuOptionContainer'>Acerca de mi</div></a></li>
        <li className='NavbarListItem'><a className='MenuOption' href='#Proyectos'><div className='MenuOptionContainer'>Proyectos</div></a></li>
        <li className='NavbarListItem'><a className='MenuOption' href='#Practicas'><div className='MenuOptionContainer'>Practicas</div></a></li>
        <li className='NavbarListItem'><a className='MenuOption' href='#Otros'><div className='MenuOptionContainer'>Mas</div></a></li>
      </ul>
    </div>
  );
}

export default Navbar;