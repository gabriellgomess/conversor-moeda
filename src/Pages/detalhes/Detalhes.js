import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { formatToNumber, formatToBRL, formatToDate } from 'brazilian-values';
import MyContext from "../../contexts/myContext";
import "./Detalhes.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faCalculator, faList } from '@fortawesome/free-solid-svg-icons'


const Detalhes = () => {
    const {currency, setCurrency} = useContext(MyContext);
    const {date, setDate} = useContext(MyContext);
    const {months, setMonths} = useContext(MyContext);
    const {price, setPrice} = useContext(MyContext);
    const {datetime, setDatetime} = useContext(MyContext);

    const [contratoReal, setContratoReal] = useState("");
    const [salarioReal, setSalarioReal] = useState("");

    const {currencyNoFormat, setCurrencyNoFormat} = useContext(MyContext);

    const {parcelas, setParcelas} =useContext(MyContext);

  

    const HandleCalc = () => {
        setContratoReal((parseFloat(currencyNoFormat)  * parseFloat(price.bid)).toFixed(2));
        if(months < 12) {
            setSalarioReal((parseFloat(contratoReal) / months)) 
        }else{
            setSalarioReal((parseFloat(contratoReal) / 12))
        }             
        
    }

    const HandleformatDate = (input) => {
        var datePart = input.match(/\d+/g),
        year = datePart[0].substring(2),
        month = datePart[1], day = datePart[2];      
        return day+'/'+month+'/'+year;
    }
    
    const HandleOutPut = (d, m, s) => {
        
        setParcelas([]);
        const date = d;
        const installment = m;
        const payment = s;

        //converter date para number
        const dateArr = date.split('-');
        const[year,month,day] = dateArr.map(Number);

        //Objeto Date
        const dateInit = new Date(year,month-1,day);
        let dataView ='';
        let daySyngle='';
        let monthSingle='';
        let yeaSingle ='';
        let repeat=0;
        const newArray = [];

        for(let i =0;i<installment;i++){
            repeat++
            if(i === 0){
                dateInit.setMonth(dateInit.getMonth()+1);
            }else{
                dateInit.setMonth(dateInit.getMonth()+1)
            }
            daySyngle = dateInit.getDate();
            monthSingle =dateInit.getMonth()+1;
            yeaSingle =dateInit.getFullYear();

            //dataView = 'Dia '+daySyngle+'/'+monthSingle+'/'+yeaSingle+' parcela ' +repeat+'/'+installment//+' valor da parcela R$ '+payment
            
            dataView = {
                day: daySyngle,
                month: monthSingle,
                year: yeaSingle,
                parcel: repeat,
                total: installment,
                value: payment             
            }
            newArray.push(dataView)
            setParcelas(parcelas.concat(newArray) )
        }        
        
     } //Fim HandleOutPut
        
    
   
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
                        <p>Prazo: {months + " meses"}</p>
                        <p>Cotado em: {datetime}</p> 
                    </div>                    
                    <button className="btn btn-dark" onClick={()=>HandleCalc()}><FontAwesomeIcon icon={faCalculator} /> Calcular</button>
                </div>
                <div className="container-detalhes-center">
                    <div>
                        <p>Valor do contrato convertido: <br/>{isNaN(contratoReal)?<i><small className="alert-1">Verifique se todos os dados foram preenchidos!</small></i>:formatToBRL(contratoReal) }</p>
                        <p>Salário mensal: <br/>{isNaN(salarioReal)?<i><small className="alert-1">Verifique se todos os dados foram preenchidos!</small></i>:formatToBRL(salarioReal)}</p>
                    </div>
                    <button className="btn btn-danger" onClick={()=> HandleOutPut(date, months, formatToBRL(salarioReal))}><FontAwesomeIcon icon={faList} /> Gerar Relatorio</button>               

                </div>
                <div className="container-detalhes-right"> 
                            <table className="table-detalhes">
                                <thead>
                                    <tr>
                                        <th className="celulas-detalhes">Data</th>
                                        <th className="celulas-detalhes">Parcela</th>
                                        <th className="celulas-detalhes">Salário</th>                                        
                                    </tr>
                                </thead>   
                    {parcelas?.map(item=>{
                        return(                            
                            <tr key="">
                                <td>{item.day < 10?"0"+item.day:item.day}/{item.month < 10?"0"+item.month:item.month}/{item.year}</td>
                                <td>{item.parcel}/{item.total}</td>
                                <td>{item.value}</td>
                            </tr>                                                      
                            )
                        }
                    )}
                    </table> 
                </div>
            </div>
          </div>
    )
}


                

export default Detalhes;