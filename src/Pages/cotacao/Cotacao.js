import React, {useEffect, useState} from "react";
import api from "../../Services/api";
import "./Cotacao.css"

const Cotacao = () => {

    const[currency, setCurrency] = useState("")
    const[date, setDate] = useState("")
    const[price, setPrice] = useState([])
    const[showPrice, setShowPrice] = useState(false)    

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
    
    const HandleCurrency = () => {
       if(price.create_date !== undefined){
        var d = (price.create_date).split(" ")
        var d1 = d[0].split("-").reverse().join("/")
        var d2 = d[1]
        var datetime = d1 + " " + d2
        return datetime
       }
    }

    return(
        <div className="container-cotacao">            
            
            <div className="container-input">
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
            {currency === "" || date === "" ? <button className="btn btn-outline-dark" onClick={()=>HandlePrice()}>Buscar Cotação</button> : <button className="btn btn-dark" onClick={()=>HandlePrice()}>Buscar Cotação</button>}            
            <button className="btn btn-outline-dark" onClick={()=>setPrice([])}>Limpar</button>     
            </div>
                   
            <div className="container-response">
                <table>
                    <thead>
                        <tr>
                            <th>DESCRIÇÃO</th>
                            <th>RESULTADO</th>
                        </tr>
                    </thead>
                    <tbody>
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
                        <td className="legend-response">Atualizado em</td>
                        <td className="price-response">{HandleCurrency()}</td>
                    </tr>
                    </tbody>                      
                </table>
            </div>       
        </div>
    )
}

export default Cotacao;