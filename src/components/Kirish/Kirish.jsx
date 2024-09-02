import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Kirish.css";

const Kirish = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username && password.length === 4) {
            navigate('/main');
        } else {
            alert("Iltimos 4 xonalik son kiriting.");
        }
    };

    return (
        <div className="kirish-container">
            <h1>Kirish</h1>
            <input
                type="text"
                placeholder="Foydalanuvchini nomi"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Paro'l"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Kirish</button>
        </div>
    );
}

export default Kirish;
