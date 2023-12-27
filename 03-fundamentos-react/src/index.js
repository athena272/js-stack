import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx'
import GlobalStyle from "./styles/global.js";

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>
    ,
    document.getElementById("root")
)