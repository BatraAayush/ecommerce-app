import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./contexts/DataProvider";
import { LoginProvider } from "./contexts/LoginProvider";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <DataProvider>
                <LoginProvider>
                    <App />
                </LoginProvider>
            </DataProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
