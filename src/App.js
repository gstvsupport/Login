import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import CadastroWho from './page/CadastroWho';
import Espectador from './page/Espectador';
import Artista from './page/Artista';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/cadastro" element={<CadastroWho />}/>
        <Route exact path="/espectador" element={<Espectador />}/>
        <Route exact path="/artista" element={<Artista />}/>
      </Routes>
    </Router>
  );
}

export default App;