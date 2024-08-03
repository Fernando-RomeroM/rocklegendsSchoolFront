import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    try {
      if (storedUser) {
        setLoggedInUser(JSON.parse(storedUser)); 
      }
    } catch (e) {
      console.error('Error parsing stored user:', e);
      localStorage.removeItem('loggedInUser'); // Limpia el valor corrupto en localStorage
    }
  }, []);

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
      console.log('Intentando iniciar sesión con:', { username, password });
      const response = await axios.post('/api/users/login', { username, password });
      const { token, userId } = response.data;
      localStorage.setItem('authToken', token); // Guarda el token en localStorage
      localStorage.setItem('loggedInUser', JSON.stringify({ id: userId, username })); // Guarda el nombre de usuario en JSON en localStorage
      setLoggedInUser({ id: userId, username }); // Actualiza el estado con el nombre de usuario
      console.log('Eres un verdadero Trve Metalero:', response.data);
      setLoginVisible(false);
      setError(''); // Limpiar el error al iniciar sesión correctamente
    } catch (err) {
      console.error('Login error:', err);
      if (err.response) {
        setError(err.response.data.error || 'No se permiten posers.');
      } else {
        setError('Error desconocido.');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    setUsername('');
    setPassword('');
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
        <Link className="dropdown-link" to="/QuienesSomos">
        <li className="lidrch">Quienes somos</li>
        </Link>
        <li className="lidrch" onClick={toggleLogin}>
          {loggedInUser ? (
            <>
              Bienvenido, {loggedInUser.username}
              <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            'Usuario'
          )}
          {loginVisible && !loggedInUser && (
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
