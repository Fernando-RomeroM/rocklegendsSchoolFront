import React from 'react';
import { Link } from 'react-router-dom';

const Guitarra = () => {
  return (
    <div>
      <div className="texto1">
        <ul className="texto11">
          <li className="texto12">Guitarra</li>
          <li className="texto13">El protagonista eres tú</li>
          <li className="texto14"> . Domina este increíble instrumento. Tocar la guitarra es todo un reto y a la vez super divertido. No hay un solo método para aprender y aprenderemos todo tipo de estilos. Eso sí... en la escuela no están permitidos los posers.</li>
          <li className="texto15"> . Conviértete en un héroe de la guitarra como: Eddie Van Halen, Randy Rhoads, Kirk Hammett, Tony Iommi, Marty Friedman, Dimebag Darrell, Alexi Laiho, Dave Mustaine, Adrian Smith, Glenn Tipton, entre muchísimos otros.</li>
          <li></li>
          <li className="btndiv">
            <div className="btnwht">
              <li className="btnli">Entra al valhalla </li>
              <li>
                <Link to="/alumnosGuitarra">
                  <button className="btnreal">
                    Nuestros alumnos
                  </button>
                </Link>
              </li>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <img className="Wall1" src="../public/img/wall2.jpg" alt="Wall" />
      </div>
    </div>
  );
}

export default Guitarra;
