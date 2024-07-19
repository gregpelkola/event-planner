import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import '../../styles/Auth.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleRegister = async (e) => {
        e.preventDefault();
        const userData = { email, password }; // Create userData object
        fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to register: ${response.statusText}`);
            }
            return response.json(); // Parse JSON response
        })
        .then(data => {
            console.log('Registration successful', data);
            navigate('/login'); // Navigate on success
        })
        .catch((error) => {
            console.error('Registration failed:', error);
        });

        registerUser({
            email: 'newuser',
            password: 'password123',
            
        });
    };

    return (
        <Container component="main" maxWidth="xs" className="auth-container">
            <div>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <form className="auth-form" noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="auth-button"
                        onClick={handleRegister}
                    >
                        Register
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default Register;