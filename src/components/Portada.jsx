import React from 'react';
import { Link } from 'react-router-dom';

const Portada = () => {
    return (
        <div>
            <div className="texto1">
                <ul className="texto11">
                    <li className="texto12">Estas a un paso</li>
                    <li className="texto13">de convertirte en Leyenda</li>
                    <li className="texto14"></li>
                    <li>
                        <Link to="/Guitarra">
                        <button className="btnreal">
                        Nuestros alumnos
                        </button>
                        </Link></li>
                </ul>
            </div>
            <img className="Wall1" src="../public/img/Wall1.jpg" alt="Fondo de clase" />  {/*// fondo de clase */}
        </div>
    );
}

export default Portada;


{/* 
    //*menu antiguo
    <div>
                <ul className="menuGlobal">
                    <li className="liUp">Este es el menú para nuestra página</li>
                    <li className="liMidle">
                        <h3>Usuario</h3>
                        <p><input type="text"></input></p>
                        <h3>Contraseña</h3>
                        <p><input type="password"></input></p>
                        <button>Enviar</button>
                    </li>
                    <li className="liDown"></li>
                </ul>
            </div> */}