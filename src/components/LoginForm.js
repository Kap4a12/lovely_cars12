import React, { useState } from 'react';
import './AuthForm.css';

const LoginForm = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        
        console.log('Logged in with:', { email, password });
        onClose();
    };

    return (
        <div className="auth-form">
            <div className="auth-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Вход</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
