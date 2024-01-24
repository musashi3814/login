import React from 'react';
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    HELLO
                </Typography>
                <Button color="inherit" onClick={() => navigate("/signin")}>
                    SignIn
                </Button>
                <Button color="inherit" onClick={() => navigate("/signup")}>
                    SignUp
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
