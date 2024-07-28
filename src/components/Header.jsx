import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <div className="menuInicio"> 
      <div><img className="logo" src="../public/img/logo.png"/> </div>
        <ul className="ulstyle">
          <li>
            <Link to="/components/Guitarra">Guitarra</Link>
          </li>
          <li className="lidrch">Quienes somos</li>
          <li className="lidrch">Usuario</li>       
        </ul>
    </div> 
  )
}

export default Header;