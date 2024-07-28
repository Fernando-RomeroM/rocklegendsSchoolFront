import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './App2.css';
import Header from './components/Header';
import Portada from './components/Portada';
import Guitarra from './components/Guitarra';
import Bajo from './components/Bajo';
import Bateria from './components/Bateria';
import Voz from './components/Voz';
import Combo from './components/Combo';
import AlumnosGuitarra from './components/AlumnosGuitarra';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/guitarra" element={<Guitarra />} />
        <Route path="/bajo" element={<Bajo />} />
        <Route path="/bateria" element={<Bateria />} />
        <Route path="/voz" element={<Voz />} />
        <Route path="/combo" element={<Combo />} />
        <Route path="/alumnosGuitarra" element={<AlumnosGuitarra />} />
      </Routes>
    </>
  );
}

export default App;
