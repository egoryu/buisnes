import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import "../../style/auth.css"
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ваша логика для обработки входа
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Вход</h2>
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <label>
                Пароль:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <button type="submit">Войти</button>
        </form>
    );
};

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        if(!validator.isEmail(email)) {
            alert("You did not enter email")
        } else if(password !== confirmPassword) {
            alert("Repeated password incorrectly")
        // } else if(!validator.isStrongPassword(password, {minSymbols: 8})) {
        //     alert("Password must consist of one lowercase, uppercase letter and number, at least 8 characters")
        } else {
            axios.post("/auth/registration/", {
                email: email,
                password: password,
            }).then(res => {
                if (res.data === true) {
                    window.location.href = "/"
                } else {
                    alert("There is already a user with this email")
                }
            }).catch(() => {
                alert("An error occurred on the server")
            })
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Регистрация</h2>
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <label>
                Пароль:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <label>
                Подтвердите пароль:
                <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            </label>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-form-container">
            <button onClick={handleToggleForm} className="toggle-button">
                {isLogin ? 'Регистрация' : 'Вход'}
            </button>
            {isLogin ? <LoginForm /> : <RegistrationForm />}
        </div>
    );
};

export default AuthForm;