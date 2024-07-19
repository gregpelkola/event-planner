import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
                Event Planning
            </Typography>
            <Button color="inherit" component={Link} to="/events">
            Events
            </Button>
            <Button color="inherit" component={Link} to="/add-event">
            Add Event
            </Button>
            <Button color="inherit" component={Link} to="/login">
            Login
            </Button>
        </Toolbar>
    </AppBar>
    );
};

export default Header;
