// eslint-disable-next-line
import React from "react";
import "./Header.css";

function Header(){
    return(
        <>
        <header>
            <img alt="logo" className="logo" src="images\Batzap Logo.png"></img>
            <h1>שירות בכף יד</h1>
            <img alt="phone" className="phone" src="images\smartphone.png"></img>
        </header>
        <div className="under-light"></div>
        </>
    );
};

export default Header;