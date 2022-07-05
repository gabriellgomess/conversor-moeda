import React, { useEffect, useContext } from "react";
import "./Contrato.css"
import { useState } from "react";
import { formatToNumber } from 'brazilian-values';
import MyContext from "../../contexts/myContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser } from '@fortawesome/free-solid-svg-icons'



const Contrato = () => {

    const {currency, setCurrency} = useContext(MyContext);
    const {date, setDate} = useContext(MyContext);
    const {months, setMonths} = useContext(MyContext);

    const {price, setPrice} = useContext(MyContext);
    const {datetime, setDatetime} = useContext(MyContext);

    const {currencyNoFormat, setCurrencyNoFormat} = useContext(MyContext);

    const HandleCurrency = (e) => {
        setCurrency(formatToNumber(e.target.value));
        setCurrencyNoFormat(e.target.value);
    }

    const HandleDate = (e) => {
        setDate(e.target.value);
    }

    const HandleMonths = (e) => {
        setMonths(e.target.value);
    }

    const HandleformatDate = (input) => {
        var datePart = input.match(/\d+/g),
        year = datePart[0].substring(2),
        month = datePart[1], day = datePart[2];      
        return day+'/'+month+'/'+year;
    }

    const HandleClear = () => {
        setCurrency("");
        setDate("");
        setMonths("");
        setPrice("");
        setDatetime("");      
    }  

    return(
        <div className="container-contrato">
            <div className="form-group container-form">
                <h3>Contrato</h3>
                <label>Valor do contrato
                    <input className="form-control input-contrato aqui" type="number" size="12" onChange={(e)=>HandleCurrency(e)}  />
                </label>
                <label>Data de início
                    <input className="form-control input-contrato" type="date" onChange={(e)=>HandleDate(e)} />   
                </label>
                <label>Quantidade de meses
                    <input className="form-control input-contrato" type="number" size="2" onChange={(e)=>HandleMonths(e)} placeholder="Quant meses"  />
                </label>

                <div className="response-contrato">
                    <div className="header-response-contrato">
                        <h5 className="response-contrato-title">.:SCI Internacional:.</h5>
                        <div className="container-contrato-text">                            
                            <p className="response-contrato-text">Moeda: {price.code}</p>
                            <p className="response-contrato-text">Cotação: {price.bid}</p>
                            <p className="response-contrato-text">Em: {datetime}</p>                         
                        </div>
                    </div>
                    
                    <hr/>
                    <p className="response-text-contrato">{currency?price.code?`Valor do contrato: ${price.code} ${currency}`:"Selecione a moeda na página de cotação!":""}</p>
                    <p className="response-text-contrato">{date?`A data de início do contrato é ${HandleformatDate(date)}`:""}</p>
                    <p className="response-text-contrato">{months?`O contrato terá duração de ${months} meses`:""}</p>
                </div>
                <button className="btn btn-dark" onClick={()=>HandleClear()}><FontAwesomeIcon icon={faEraser} /> Limpar</button>
                
                

            </div>
        </div>
    )
}


export default Contrato