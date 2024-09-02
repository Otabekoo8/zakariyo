import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainComponents from "../MainComponents/MainCompanents";
import Kirish from "../Kirish/Kirish";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Kirish />} />
                <Route path="/main" element={<MainComponents />} />
            </Routes>
        </Router>
    );
}

export default App;
