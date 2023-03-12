import React from "react";
import {Header} from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainAppContent from "./pages/app-content/MainAppContent";

import "./App.css";

function App(){
    return(
        <>
            <Header />
            <MainAppContent />
            <Footer />
        </>
    );
}

export default App;