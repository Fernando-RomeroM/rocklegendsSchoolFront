import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAlumnosContext } from '../context/AlumnosContext';
import { Link } from 'react-router-dom';

const AlumnosGuitarra = () => {
  const { alumnos, setAlumnos } = useAlumnosContext();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [selectedAlumno, setSelectedAlumno] = useState(null);
  const [calificacion, setCalificacion] = useState('');

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const response = await axios.get('/api/alumnos');
        const alumnosGuitarra = response.data.filter(alumno => alumno.instrumento === 'guitarra');
        
        // Fetch calificaciones for each alumno
        const alumnosWithCalificaciones = await Promise.all(alumnosGuitarra.map(async (alumno) => {
          const calificacionResponse = await axios.get(`/api/calificaciones/${alumno.id}`);
          const calificacion = calificacionResponse.data ? calificacionResponse.data.estado : 'Sin calificación';
          return { ...alumno, estado: calificacion };
        }));

        setAlumnos(alumnosWithCalificaciones);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAlumnos();

    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser)); // Asegúrate de que storedUser sea un objeto
    }
  }, [setAlumnos]);

  const fetchCalificaciones = async (alumnoId) => {
    try {
      const response = await axios.get(`/api/calificaciones/${alumnoId}`);
      return response.data?.estado || 'Sin calificación';
    } catch (error) {
      console.error('Error fetching calificaciones:', error);
      return 'Sin calificación';
    }
  };

  const handleCalificacion = async (alumno) => {
    setSelectedAlumno(alumno);
    const estadoCalificacion = await fetchCalificaciones(alumno.id);
    setCalificacion(estadoCalificacion);
  };

  const handleSaveCalificacion = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const headers = {
        Authorization: `Bearer ${token}`
      };

      const calificacionData = {
        alumno_id: selectedAlumno.id,
        user_id: loggedInUser.id, // Asegúrate de que loggedInUser tenga el id del usuario
        estado: calificacion
      };
      
      console.log('Datos a enviar:', calificacionData);

      await axios.post('/api/calificaciones', calificacionData, { headers });

      // Update the state in the context
      const updatedAlumnos = alumnos.map((alumno) => 
        alumno.id === selectedAlumno.id ? { ...alumno, estado: calificacion } : alumno
      );
      setAlumnos(updatedAlumnos);

      setSelectedAlumno(null);
      setCalificacion('');
    } catch (error) {
      console.error('Error saving calificacion:', error);
    }
  };

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
              <div>Instrumento: {alumno.instrumento}</div>
              <div>{alumno.nombre} {alumno.apellidos}</div>
              <div>Email: {alumno.email}</div>
              <div>Teléfono: {alumno.telefono}</div>
              <div>
                {selectedAlumno && selectedAlumno.id === alumno.id ? (
                  <div>
                    <select 
                      value={calificacion} 
                      onChange={(e) => setCalificacion(e.target.value)}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Aprobado">Aprobado</option>
                      <option value="Suspendido">Suspendido</option>
                    </select>
                    <button className="btnsino" onClick={handleSaveCalificacion}>Guardar</button>
                    <button className="btnsino" onClick={() => setSelectedAlumno(null)}>Cancelar</button>
                  </div>
                ) : (
                  alumno.estado || 'Sin calificación'
                )}
              </div>
              {loggedInUser && (
                <button className="btnnota" onClick={() => handleCalificacion(alumno)}>Calificaciones</button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/Guitarra">
        <button className="btnatras">Volver atrás</button>
      </Link>
      <div></div>
    </div>
  );
};

export default AlumnosGuitarra;
