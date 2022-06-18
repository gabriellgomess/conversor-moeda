import React, {useEffect, useState} from "react";
import api from "../../Services/api";
import "./Cotacao.css"

const Cotacao = () => {

    const[currency, setCurrency] = useState("")
    const[date, setDate] = useState("")
    const[price, setPrice] = useState([])
    const[showPrice, setShowPrice] = useState(false)
    const[dados, setDados] = useState([])
    

    useEffect(()=>{
        async function loadPrice(){
            try{
                const response = await api.get(`/${currency}/10?start_date=${date}&end_date=${date}`)             
                setPrice(response.data[0])
                
                
            }catch(error){
                console.log("ERRO DA API: ", error)
                
            }
        }
       loadPrice()
    },[showPrice])

    const HandlePrice = () => {
       showPrice === false ? setShowPrice(true) : setShowPrice(false)
    }
    console.log(price)

    return(
        <div className="container-cotacao">            
            <h3>Cotação</h3>
            <label>Selecione a Moeda
            <select className="select-currency form-control" onChange={(e)=>setCurrency(e.target.value)}>
                <option value="">Selecione</option>
                <option value="USD">Dolar</option>
                <option value="EUR">Euro</option>
            </select>
            </label>
            <label>Data da Cotação
                <input className="date-price form-control" type="date" onChange={(e)=>setDate((e.target.value).replace(/[^0-9]/g, ''))} />
            </label>
            {currency == "" || date == "" ? <button className="btn btn-outline-dark" onClick={()=>HandlePrice()}>Buscar Cotação</button> : <button className="btn btn-dark" onClick={()=>HandlePrice()}>Buscar Cotação</button>}            
            <button className="btn btn-outline-dark" onClick={()=>setPrice([])}>Limpar</button>            
            <div className="container-response">
                <table>
                    <tr>
                        <td className="legend-response">Moeda</td>
                        <td className="price-response">{price.code}</td>
                    </tr>
                    <tr>
                        <td className="legend-response">Compra</td>
                        <td className="price-response">{price.bid}</td>
                    </tr>
                    <tr>
                        <td className="legend-response">Venda</td>
                        <td className="price-response">{price.ask}</td>
                    </tr>
                    <tr>
                        <td className="legend-response">Variação</td>
                        <td className="price-response">{price.varBid}</td>
                    </tr>
                    <tr>
                        <td className="legend-response">% Variação</td>
                        <td className="price-response">{price.pctChange}</td>
                    </tr>
                    <tr>
                        <td className="legend-response">Máximo</td>
                        <td className="price-response">{price.high}</td>
                    </tr>
                    <tr>
                        <td className="legend-response">Mínimo</td>
                        <td className="price-response">{price.low}</td>
                    </tr>
                    <tr>
                        <td className="legend-response">Data</td>
                        <td className="price-response">{price.timestamp}</td>
                    </tr>                        
                </table>
            </div>       
        </div>
    )
}

export default Cotacao;