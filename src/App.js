import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Cotacao from './Pages/cotacao/Cotacao'
import Contrato from './Pages/contrato/Contrato'
import Detalhes from './Pages/detalhes/Detalhes'
import Footer from './Components/Footer/Footer'
import {Routes, Route, Link} from 'react-router-dom';
import Menu from './Components/Menu/Menu'


function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <div className='main'>
        
        <Routes>                
            <Route exact path="/Cotacao" element={<Cotacao/>} />
            <Route path="/Contrato" element={<Contrato />} />
            <Route path="/Detalhes" element={<Detalhes />} />                                 
        </Routes>        
        <Footer />
      </div>     
    </div>
  );
}

export default App;
