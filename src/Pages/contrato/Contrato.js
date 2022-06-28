import React, { useEffect } from "react";
import "./Contrato.css"
import { useState } from "react";
import { formatToBRL} from 'brazilian-values';

const Contrato = () => {

    const [currency, setCurrency] = useState("");
    const [date, setDate] = useState("");
    const [months, setMonths] = useState("");

    const HandleCurrency = (e) => {
        setCurrency(formatToBRL(e.target.value));
    }

    const HandleDate = (e) => {
        setDate(e.target.value);
    }

    const HandleMonths = (e) => {
        setMonths(e.target.value);
    }

   const HandleformatDate = (input) => {
        var datePart = input.match(/\d+/g),
        year = datePart[0].substring(2), // get only two digits
        month = datePart[1], day = datePart[2];      
        return day+'/'+month+'/'+year;
      }

    return(
        <div className="container-contrato">
            <div className="form-group">
                <h3>Contrato</h3>
                <label>Valor do contrato
                    <input className="form-control" type="number" size="12" onChange={(e)=>HandleCurrency(e)}  />
                </label>
                <label>Data de início
                    <input className="form-control" type="date" onChange={(e)=>HandleDate(e)} />   
                </label>
                <label>Quantidade de meses
                    <input className="form-control" type="number" size="2" onChange={(e)=>HandleMonths(e)} placeholder="Quant meses"  />
                </label>

                <div className="response-contrato">
                    <h5 className="response-contrato-title">.:SCI Internacional:.</h5>
                    <p>{currency?`Valor do contrato: ${currency}`:""}</p>
                    <p>{date?`A data de início do contrato é ${HandleformatDate(date)}`:""}</p>
                    <p>{months?`O contrato terá duração de ${months} meses`:""}</p>
                </div>
                
                

            </div>
        </div>
    )
}


export default Contrato