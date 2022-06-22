import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Cotacao from './Pages/cotacao/Cotacao'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Cotacao />
        <Footer />
      </div>     
    </div>
  );
}

export default App;
