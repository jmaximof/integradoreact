import React from "react";
import { useState } from "react";
import Location from "../components/Location"



export default function Login () {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    
    const handleSubmit= (e) => {
        e.preventDefault();
        <Location/>
    };

    return(
        
        <form onSubmit={handleSubmit} >
            <input type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            />
        <input type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
            <button>Login</button>

            </form>
        
            )
}