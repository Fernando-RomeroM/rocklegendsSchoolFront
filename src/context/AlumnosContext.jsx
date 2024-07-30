import { createContext, useState, useContext } from 'react';

const AlumnosContext = createContext();

export const AlumnosProvider = ({ children }) => {
  const [alumnos, setAlumnos] = useState([]);
  const [user, setUser] = useState({});

  return (
    <AlumnosContext.Provider value={{ alumnos, setAlumnos, user, setUser }}>
      {children}
    </AlumnosContext.Provider>
  );
};

export const useAlumnosContext = () => {
  return useContext(AlumnosContext);
};
