import React, { useEffect, useState } from 'react';

const AlumnosGuitarra = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    fetch('/api/alumnos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const alumnosGuitarra = data.filter(alumno => alumno.instrumento === 'guitarra');
        setAlumnos(alumnosGuitarra);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Alumnos de Guitarra</h1>
      <ul>
        {alumnos.map((alumno) => (
          <li key={alumno.id}>
            <img 
              src={`/images/${alumno.foto}`} 
              alt={`Foto de ${alumno.nombre} ${alumno.apellidos}`} 
              width="50" 
            />
            <p>{alumno.nombre} {alumno.apellidos}Nombre del alumno</p>
            <p>Email: {alumno.email}</p>
            <p>Teléfono: {alumno.telefono}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlumnosGuitarra;
