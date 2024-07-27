import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Portada from './components/Portada'
import Guitarra from './components/Guitarra'
import Bajo from './components/Bajo'
import Bateria from './components/Bateria'
import Voz from './components/Voz'
import Combo from './components/Combo'

function App() {
 
  return (
    <>
      <Header/>
      <Portada/>
      <Guitarra/>
      <Bajo/>
      <Bateria/>
      <Voz/>
      <Combo/>
    </>
  )
}

export default App
