import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './App2.css';
import './Appfichas.css';
import Header from './components/Header';
import Portada from './components/Portada';
import Guitarra from './components/Guitarra';
import Bajo from './components/Bajo';
import Bateria from './components/Bateria';
import Voz from './components/Voz';
import Combo from './components/Combo';
import QuienesSomos from './components/QuienesSomos';
// Aquí van las páginas de los alumnos
import AlumnosGuitarra from './components/AlumnosGuitarra';
import AlumnosBajo from './components/AlumnosBajo';
import AlumnosBateria from './components/AlumnosBateria';
import AlumnosVoz from './components/AlumnosVoz';
import { AlumnosProvider } from './context/AlumnosContext';

function App() {
  return (
    <AlumnosProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/guitarra" element={<Guitarra />} />
        <Route path="/bajo" element={<Bajo />} />
        <Route path="/bateria" element={<Bateria />} />
        <Route path="/voz" element={<Voz />} />
        <Route path="/combo" element={<Combo />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/alumnosGuitarra" element={<AlumnosGuitarra />} />
        <Route path="/alumnosBajo" element={<AlumnosBajo />} />
        <Route path="/alumnosBateria" element={<AlumnosBateria />} />
        <Route path="/alumnosVoz" element={<AlumnosVoz />} />
      </Routes>
    </AlumnosProvider>
  );
}

export default App;
