import React from "react";
import "./Container.css";

function Container(props){
    return(
        <div className="button-container">
            <h3>{props.name}</h3>
        </div>
    );
};

export default Container;