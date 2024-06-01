import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css'

const LoginForm = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5001/api/users/login', {
                email,
                password
            });
            
            // If authentication is successful, close the login form
            onClose();

            // You can handle further actions like updating the UI, setting authentication tokens, etc.
        } catch (error) {
            // Handle authentication errors
            setMessage('Invalid email or password.');
        }
    };

    return (
        <div className='LoginForm'>
            <form onSubmit={handleSubmit} className='form'>
                <h1>Login</h1>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className='button'>Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default LoginForm;