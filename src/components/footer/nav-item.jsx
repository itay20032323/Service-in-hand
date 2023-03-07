import React from "react";
import "./Footer.css";

function NavItem(props){
    return(
        <button className="nav-item" onClick={()=>{}}>
            <img alt="nav-item-logo" src={`images/${props.children}.png`}></img>
            <h1>{props.name}</h1>
        </button>
    );
};

export default NavItem;