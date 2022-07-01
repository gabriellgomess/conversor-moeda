import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { formatToNumber, formatToBRL, formatToDate } from 'brazilian-values';
import MyContext from "../../contexts/myContext";
import "./Detalhes.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faCalculator } from '@fortawesome/free-solid-svg-icons'


const Detalhes = () => {
    const {currency, setCurrency} = useContext(MyContext);
    const {date, setDate} = useContext(MyContext);
    const {months, setMonths} = useContext(MyContext);
    const {price, setPrice} = useContext(MyContext);
    const {datetime, setDatetime} = useContext(MyContext);

    const [contratoReal, setContratoReal] = useState("");
    const [salarioReal, setSalarioReal] = useState("");

    const {currencyNoFormat, setCurrencyNoFormat} = useContext(MyContext);

    const HandleCalc = () => {
        setContratoReal((parseFloat(currencyNoFormat)  * parseFloat(price.bid)).toFixed(2));
        setSalarioReal((parseFloat(contratoReal) / 12))     
        
    }

    const HandleformatDate = (input) => {
        var datePart = input.match(/\d+/g),
        year = datePart[0].substring(2),
        month = datePart[1], day = datePart[2];      
        return day+'/'+month+'/'+year;
    }
   
    return (
        <div className="container-detalhes">
            <div className="container-detalhes-header">
                <h3>Detalhes do Contrato</h3>
                <hr/>            
            </div>
            <div className="container-detalhes-body">
                <div className="container-detalhes-left">
                    <div>
                       <p>Cotação: {price.bid}</p>
                        <p>Valor do contrato: {price.code} {currency}</p>
                        <p>Início: {date?HandleformatDate(date):""}</p>
                        <p>Prazo: {months}</p>
                        <p>Cotado em: {datetime}</p> 
                    </div>                    
                    <button className="btn btn-dark" onClick={()=>HandleCalc()}><FontAwesomeIcon icon={faCalculator} /> Calcular</button>
                </div>
                <div className="container-detalhes-center">
                    <div>
                        <p>Valor do contrato convertido: <br/>{isNaN(contratoReal)?<i><small className="alert-1">Verifique se todos os dados foram preenchidos!</small></i>:formatToBRL(contratoReal) }</p>
                        <p>Salário mensal: <br/>{isNaN(salarioReal)?<i><small className="alert-1">Verifique se todos os dados foram preenchidos!</small></i>:formatToBRL(salarioReal)}</p>
                    </div>
                    <button className="btn btn-danger"><FontAwesomeIcon icon={faFilePdf} /> Gerar PDF</button>               

                </div>
                <div className="container-detalhes-right">

                </div>
            </div>
          </div>
    )
}

export default Detalhes;