import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <>
            <div className="header">
                <FontAwesomeIcon icon={faStar} />
                <h1 className="title">Movie+</h1>
            </div>
            
        </>
        
    )
}

export default Header;