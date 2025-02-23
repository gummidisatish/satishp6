import React, { useState } from 'react';
import './Login.css';  // You'll want to create a CSS file for styling

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        // Logic for login
        console.log('Login attempted with', { email, password });
    };

    const handleForgotPassword = () => {
        // Logic for forgot password
        console.log('Forgot Password');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
                <p onClick={handleForgotPassword} className="forgot-password">
                    Forgot Password?
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
