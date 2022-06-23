
import "./Menu.css";

import {Link} from "react-router-dom";

const Menu = () => {
        
    return(
        
        <div className="container-menu">            
            <Link className="line-none" to="/Cotacao">
                <div className="list-items">
                    <h4>Cotação</h4>
                </div>
            </Link>
            <Link className="line-none" to="/Contrato">
                <div className="list-items">
                        <h4>Contrato</h4>
                </div>
            </Link>
            <Link className="line-none" to="/Detalhes">
                <div className="list-items">
                        <h4>Detalhes do Contrato</h4>
                </div>
            </Link>                            
        </div>       
        
    )
}

export default Menu;