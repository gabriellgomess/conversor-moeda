import React from "react";
import "./Header.css";
import Logo from "../../Img/internacional.png"

import Menu from '../../Components/Menu/Menu'


const Header = () => {
    return(
        <div className="container-header">
            <div className="lineUp-header">
                <div className="logo-header">
                    {/* <img className="Logo" src={Logo} alt="Logo Internacional" /> */}
                </div>
                <h3 className="title-header">
                    Conversor de Moeda
                </h3>
                <div className="moreinfo-header">
                    
                </div>
            </div>
            <div className="lineDown-header">
                <Menu />                
            </div>            
        </div>
    )
}

export default Header