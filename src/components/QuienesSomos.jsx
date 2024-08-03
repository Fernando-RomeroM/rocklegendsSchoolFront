import React from 'react';
// import { Link } from 'react-router-dom';

const QuienesSomos = () => {
    return (
        <div> 
            <div className="divQS">
                <img className="adas" src="../public/img/adas.jpg" alt="El pais de las Adas"/>
                    <ul className="divQS2">
                        <li className="divQS1">Conoce a tus profesores</li>
                        <li>. James LaBrie en la voz, John Petrucci a la guitarra, John Myung bajista, Mike Portnoy con la bateria y Jordan Rudess para las clases de combo. Todos ellos son profesores multipremiados de los que podrás aprender si te apuntas a  nuestras clases.</li>
                        <li>. Disponemos de las mejores instalaciones y los instrumentos necesarios para que los pruebes antes de decidirte por uno. Todo son facilidades para que solo te preocupes de aprender y divertirte.</li>
                        <li>. Nuestro local está en el Pais de las Adas en la calle Alcest 45. No dudes en visitarnos y pedir información.</li>
                        <li> Y por último ROCK & ROOOOOLL!!! SKOOOOOOOOL </li>
                    </ul>
            </div>

            <img className="Wall1" src="../public/img/profesores.jpg" alt="Fondo de clase" />  {/*// Fondo con los profesores */}
        </div>
    );
}

export default QuienesSomos;