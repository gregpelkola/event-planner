import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@material-ui/core';
import '../../styles/Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
    };

    return (
        <Container component="main" maxWidth="xs" className="auth-container">
            <div>
                <Typography component="h1" variant="h5">
                    Sign In
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
                    onClick={handleLogin}
                    >
                    Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default Login;