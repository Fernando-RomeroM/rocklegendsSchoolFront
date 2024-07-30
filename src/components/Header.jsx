import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="menuInicio"> 
      <div><a href="/"><img className="logo" src="../public/img/logo.png" alt="Logo" /></a></div>
      <ul className="ulstyle">
        <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span className="dropdown-toggle">Nuestras clases</span>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li><Link className="dropdown-link" to="/guitarra">Guitarra</Link></li>
              <li><Link className="dropdown-link" to="/bajo">Bajo</Link></li>
              <li><Link className="dropdown-link" to="/bateria">Batería</Link></li>
              <li><Link className="dropdown-link" to="/voz">Voz</Link></li>
              <li><Link className="dropdown-link" to="/combo">Combo</Link></li>
            </ul>
          )}
        </li>
        <li className="lidrch">Quienes somos</li>
        <li className="lidrch">Usuario</li>       
      </ul>
    </div> 
  );
};

export default Header;
