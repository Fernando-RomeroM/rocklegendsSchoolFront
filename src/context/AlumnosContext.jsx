import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AlumnosContext = createContext();

export const AlumnosProvider = ({ children }) => {
  const [alumnos, setAlumnos] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get('/api/user/me', { headers: { Authorization: `Bearer ${token}` } });
        setUser(response.data);
      }
    };
    fetchUser();
  }, []);

  return (
    <AlumnosContext.Provider value={{ alumnos, setAlumnos, user, setUser }}>
      {children}
    </AlumnosContext.Provider>
  );
};

export const useAlumnosContext = () => {
  return useContext(AlumnosContext);
};
