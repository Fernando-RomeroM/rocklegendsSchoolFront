import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAlumnosContext } from '../context/AlumnosContext';
import { Link } from 'react-router-dom';

const AlumnosGuitarra = () => {
  const { alumnos, setAlumnos } = useAlumnosContext();
  const [loggedInUser, setLoggedInUser] = useState('');
  const [selectedAlumnoId, setSelectedAlumnoId] = useState(null);
  const [calificaciones, setCalificaciones] = useState({});

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

    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, [setAlumnos]);

  const fetchCalificaciones = async (alumnoId) => {
    try {
      const response = await axios.get(`/api/calificaciones/${alumnoId}`);
      return response.data.estado;
    } catch (error) {
      console.error('Error fetching calificaciones:', error);
      return 'Sin calificación';
    }
  };

  const handleCalificacion = async (alumno) => {
    setSelectedAlumnoId(alumno.id);
    const estadoCalificacion = await fetchCalificaciones(alumno.id);
    setCalificaciones(prevState => ({
      ...prevState,
      [alumno.id]: estadoCalificacion
    }));
  };

  const handleSaveCalificacion = async (alumnoId) => {
    try {
      const token = localStorage.getItem('authToken');
      const headers = {
        Authorization: `Bearer ${token}`
      };

      await axios.post('/api/calificaciones/add', {
        alumno_id: alumnoId,
        user_id: loggedInUser.id,
        estado: calificaciones[alumnoId]
      }, { headers });

      setSelectedAlumnoId(null);
    } catch (error) {
      console.error('Error saving calificacion:', error);
    }
  };

  const handleChangeCalificacion = (alumnoId, value) => {
    setCalificaciones(prevState => ({
      ...prevState,
      [alumnoId]: value
    }));
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
              <p>Instrumento: {alumno.instrumento}</p>
              <p>{alumno.nombre} {alumno.apellidos}</p>
              <p>Email: {alumno.email}</p>
              <p>Teléfono: {alumno.telefono}</p>
              <p>
                {selectedAlumnoId === alumno.id ? (
                  <div>
                    <select 
                      value={calificaciones[alumno.id] || ''} 
                      onChange={(e) => handleChangeCalificacion(alumno.id, e.target.value)}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Aprobado">Aprobado</option>
                      <option value="Suspendido">Suspendido</option>
                    </select>
                    <button className="btnsino" onClick={() => handleSaveCalificacion(alumno.id)}>Guardar</button>
                    <button className="btnsino" onClick={() => setSelectedAlumnoId(null)}>Cancelar</button>
                  </div>
                ) : (
                  calificaciones[alumno.id] || 'Sin calificación'
                )}
              </p>
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
    </div>
  );
};

export default AlumnosGuitarra;
