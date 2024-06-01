import React, { useState } from 'react';
import axios from 'axios';
import './SignUpForm.css';

const SignUpForm = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5001/api/users/register', {
                name,
                email,
                password
            });
            setMessage('User created successfully!');
            onClose(); // Close the sign-up form after successful registration
        } catch (error) {
            if (error.response && error.response.data.message) {
                setMessage(`Error creating user: ${error.response.data.message}`);
            } else {
                setMessage('An error occurred while creating user.');
            }
        }
    };

    return (
        <div className='SignUpForm'>
            <form onSubmit={handleSubmit} className='form'>
                <h1>Sign Up</h1><br/>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div><br/>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div><br/>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div><br/>
                <button type="submit" className='button'>Create User</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SignUpForm;
