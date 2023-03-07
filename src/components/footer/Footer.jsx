import React from "react";
import "./Footer.css";
import NavItem from "./nav-item";


function Footer(){
    return(
        <footer>
            <NavItem name="בית">home</NavItem>
            <NavItem name="ימים שקבעתי">calendar</NavItem>
            <NavItem name="צור קשר">whatsapp</NavItem>
            <NavItem name="Beework">honeycomb</NavItem>
        </footer>
    );
};

export default Footer;