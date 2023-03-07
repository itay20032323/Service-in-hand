import React from "react";
import "./Header.css";

export const  Header = () => {
    return(
        <header>
            <div className="top-header">
                <img alt="logo" className="logo" src="images\Batzap Logo.png"></img>
                <h1>שירות בכף יד</h1>
            </div>
            <div className="under-light">
                <img alt="phone" className="phone" src="images\smartphone.png"></img>
            </div>
        </header>
    );
};

//export default Header;