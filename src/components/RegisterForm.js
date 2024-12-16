import React, { useState } from 'react';
import './AuthForm.css';

const RegisterForm = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Здесь вы можете добавить логику регистрации
        console.log('Registered with:', { email, phone, password });
        onClose();
    };

    return (
        <div className="auth-form">
            <div className="auth-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Регистрация</h2>
                <form onSubmit={handleRegister}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Номер телефона"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
