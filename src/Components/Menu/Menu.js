import "./Menu.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faFileSignature, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

import {Link} from "react-router-dom";

const Menu = () => {
        
    return(
        
        <div className="container-menu">            
            <Link className="line-none" to="/Cotacao">
                <div className="list-items">
                    <h4>Cotação</h4>
                    <FontAwesomeIcon className="menu-icons" icon={faDollarSign} />
                </div>
            </Link>
            <Link className="line-none" to="/Contrato">
                <div className="list-items">
                        <h4>Contrato</h4>
                        <FontAwesomeIcon className="menu-icons" icon={faFileSignature} />
                </div>
            </Link>
            <Link className="line-none" to="/Detalhes">
                <div className="list-items">
                        <h4>Detalhes</h4>
                        <FontAwesomeIcon className="menu-icons" icon={faCircleInfo} />
                </div>
            </Link>
            <hr />                          
        </div>       
        
    )
}

export default Menu;