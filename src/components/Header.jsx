import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleLogin = (e) => {
    e.stopPropagation(); // Para evitar que el evento se propague y cierre el dropdown
    setLoginVisible(!loginVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/user/login', { username, password });
      const { token } = response.data;
      localStorage.setItem('authToken', token); // Guarda el token en localStorage
      console.log('Eres un verdarero Trve Metalero:', response.data);
      setLoginVisible(false);
    } catch (err) {
      console.error('Login error:', err);
      setError('No se permiten posers.');
    }
  };

  return (
    <div className="menuInicio" onClick={() => setLoginVisible(false)}>
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
        <li className="lidrch" onClick={toggleLogin}>
          Usuario
          {loginVisible && (
            <div className="login-dropdown" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handleLogin}>
                <div>
                  <label htmlFor="username">Username:</label>
                  <input 
                    type="text" 
                    id="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
              </form>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
