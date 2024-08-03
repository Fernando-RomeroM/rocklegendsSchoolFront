import React from 'react';
import { Link } from 'react-router-dom';

const Voz = () => {
    return (
        <div>
            <div className="texto1">
                <ul className="texto11">
                    <li className="texto12">Voz</li>
                    <li className="texto13">Demuestra la voz que tienes</li>
                    <li className="texto14">. "¡Desata tu voz interior! Únete a nuestra escuela de canto de rock y metal y conviértete en una leyenda del escenario."

"Transforma tu pasión por el rock y el metal en pura energía vocal. ¡Inscríbete hoy y haz vibrar al mundo!"
</li>
                    <li className="texto15">."Si el rock y el metal son tu vida, ¡nuestra escuela de canto es tu destino! Aprende de los mejores y conquista los escenarios."

"¡Rompe las barreras y encuentra tu verdadero sonido! Inscríbete en nuestra escuela de canto y domina los géneros más intensos." </li>
                    <li></li>
                    <li className="btndiv">
                        <div className="btnwht">
                            <li className="btnli">Voz de los dioses</li>
                            <li>
                            <Link to="/AlumnosVoz">
                            <button className="btnreal">
                                Nuestros alumnos
                            </button>
                            </Link>
                            </li>                                                    
                        </div>
                    </li>
                </ul>
            </div>
            <img className="Wall1" src="../public/img/wall5.jpg"/> 
        </div>
    )
}

export default Voz;