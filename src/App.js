import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Cotacao from './Pages/cotacao/Cotacao'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Cotacao />
      </div>      
    </div>
  );
}

export default App;
