import React, { useEffect } from 'react';
import axios from 'axios';
import { useAlumnosContext } from '../context/AlumnosContext';
import { Link } from 'react-router-dom';

const AlumnosGuitarra = () => {
  const { alumnos, setAlumnos } = useAlumnosContext();

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const response = await axios.get('/api/alumnos');
        const alumnosGuitarra = response.data.filter(alumno => alumno.instrumento === 'guitarra');
        setAlumnos(alumnosGuitarra);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAlumnos();
  }, [setAlumnos]);

  return (
    <div className="Wall2">
      <h1 className="h1ficha">Lista de Alumnos de Guitarra</h1>
      <div className="divficha">
        <ul className="ulficha">
          {alumnos.map((alumno) => (
            <li className="lificha" key={alumno.id}>
              <img className="fotoficha"
                src={`../public/fotos/${alumno.foto}`} 
                alt={`Foto de ${alumno.nombre} ${alumno.apellidos}`} 
                width="50" 
              />
              <p>Instrumento: {alumno.instrumento}</p>
              <p>{alumno.nombre} {alumno.apellidos}</p>
              <p>Email: {alumno.email}</p>
              <p>Teléfono: {alumno.telefono}</p>
              <button className="btnnota">Calificaciones</button>
            </li>
          ))}
        </ul>
        
      </div>
      <Link to="/Guitarra">
      <button className="btnatras">Volver atrás</button>
      </Link>
      <div>
        
      </div>
    </div>
    
  );
};

export default AlumnosGuitarra;

