import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { formatToNumber } from 'brazilian-values';
import MyContext from "../../contexts/myContext";
import "./Detalhes.css";


const Detalhes = () => {
    const {currency, setCurrency} = useContext(MyContext);
    const {date, setDate} = useContext(MyContext);
    const {months, setMonths} = useContext(MyContext);
    const{price, setPrice} = useContext(MyContext);
    const{datetime, setDatetime} = useContext(MyContext);

    const[contratoReal, setContratoReal] = useState("");

    const HandleCalc = () => {
        setContratoReal(parseFloat(currency)  * parseFloat(price.bid) ) 
    }

    return (
        <div className="container-detalhes">
            <div className="container-detalhes-header">
                <h3>Detalhes do Contrato</h3>
                <hr/>            
            </div>
            <div className="container-detalhes-body">
                <div className="container-detalhes-left">
                    <p>Cotação: {price.bid}</p>
                    <p>Valor do contrato: {price.code} {currency}</p>
                    <p>Início: {date}</p>
                    <p>Prazo: {months}</p>
                    <p>Cotado em: {datetime}</p>
                    <button className="btn btn-dark btn-sm" onClick={()=>HandleCalc()}>Calcular</button>
                </div>
                <div className="container-detalhes-center">
                <p>Valor do contrato convertido em R$: {formatToNumber(contratoReal) }</p>
                <p>Salário mensal:</p>

                </div>
                <div className="container-detalhes-right">

                </div>
            </div>
          </div>
    )
}

export default Detalhes;