import React, {useState} from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Cotacao from './Pages/cotacao/Cotacao'
import Contrato from './Pages/contrato/Contrato'
import Detalhes from './Pages/detalhes/Detalhes'
import MyContext from './contexts/myContext';

function App() {
  const[price, setPrice] = useState([])
  const[datetime, setDatetime] = useState("")
  return (
    <div className="App">
      <MyContext.Provider value={{price, setPrice, datetime, setDatetime}}>
        <Header />
        <div className='main'>        
          <Routes /><Routes>                
              <Route exact path="/" element={<Cotacao/>} />
              <Route path="/Cotacao" element={<Cotacao/>} />
              <Route path="/Contrato" element={<Contrato />} />
              <Route path="/Detalhes" element={<Detalhes />} />                                 
          </Routes>
          <Footer />
        </div>
      </MyContext.Provider>
           
    </div>
  );
}

export default App;
