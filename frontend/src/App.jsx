import React from "react";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import "./styles.css";

function App() {
    return (
        <div className="app">
            <Header />
            <Home />
        </div>
    );
}

export default App;
