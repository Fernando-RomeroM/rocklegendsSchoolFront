import React from 'react';
import { Link } from 'react-router-dom';

const Bateria = () => {
    return (
        <div>
            <div className="texto1">
                <ul className="texto11">
                    <li className="texto12">Batería</li>
                    <li className="texto13">Sin ti no son nada</li>
                    <li className="texto14"> . Se trata de un curso de batería para principiantes, pensado para que cualquier persona, ya sea que no sepa nada o que tenga ya algunos conceptos básicos, pueda aprender a tocar el instrumento siguiendo nuestros vídeos y practicando a su ritmo. Estamos seguros de que siguiendo esta serie de tutoriales sobre como tocar la batería, con práctica, dedicación y constancia, serás capaz de ir de cero a 100 en unas cuantas semanas o meses, a medida que vayas avanzando a lo largo del curso. Te sorprenderá ver los avances cuando dentro de unos meses eches la vista atrás y recuerdes como empezabas a aprender con los primeros vídeos! La batería es un instrumento que requiere bastante paciencia al principio y bastante práctica, ya que muchas veces debemos hacer ejercicios de coordinación a los que no estamos acostumbrados. Puede que los primeros días que practiquemos nos parezca imposible, pero en un par de días de práctica puedes ver como empiezas a coordinar y a hacer de manera fácil ejercicios que en un primer momento parecían difíciles.</li>
                    <li className="texto15"> . Podrás ser uno de ellos, de los mejores de la historia. RANDY GEORGE, AMOS WILLIAMS, ADAM GETGOOD, DICK LOVGREN, MARIUSZ DUDA, DAVE LARUE, MIKE LEPOND, PETE TREWAVAS, CONNER GREEN, COLIN EDWIN, MARTIN MENDEZ, SEAN MALONE, NICK BEGGS, JUSTIN CHANCELLOR, JOHN MYUNG. Todos tremendos, todos unos cracks en este tremendo instrumento. </li>
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