import React from "react";
//@ts-expect-error
import Header from "./components/header/Header.tsx";
import "./App.css";

function App(){
    return(
        <>
            <Header />
            <h1>Go</h1>
        </>
    );
}

export default App;