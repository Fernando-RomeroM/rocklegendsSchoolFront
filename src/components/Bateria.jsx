import React from 'react';
import { Link } from 'react-router-dom';

const Bateria = () => {
    return (
        <div>
            <div className="texto1">
                <ul className="texto11">
                    <li className="texto12">Batería</li>
                    <li className="texto13">Sin ti no son nada</li>
                    <li className="texto14"> . Se trata de un curso de batería para principiantes, pensado para que cualquier persona, ya sea que no sepa nada o que tenga ya algunos conceptos básicos, pueda aprender a tocar el instrumento siguiendo nuestros vídeos y practicando a su ritmo. Estamos seguros de que siguiendo esta serie de tutoriales sobre como tocar la batería, con práctica, dedicación y constancia, serás capaz de ir de cero a 100 en unas cuantas semanas o meses, a medida que vayas avanzando a lo largo del curso.</li>
                    <li className="texto15"> . Podrás ser uno de ellos, de los mejores de la historia.</li>
                    <li></li>
                    <li className="btndiv">
                        <div className="btnwht">
                            <li className="btnli">Yo soy Espartaco </li>
                            <li>
                            <Link to="/AlumnosBateria">
                                <button className="btnreal">
                                  Nuestros alumnos
                                </button>
                             </Link>
                            </li>                                                    
                        </div>
                    </li>
                </ul>
            </div>
                    <img className="Wall1" src="../public/img/Wall4.jpg"/> 
        </div>
    )
}
export default Bateria;