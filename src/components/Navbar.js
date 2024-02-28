import React from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext } from 'react';
import { auth } from '../firebase-config';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const SignOut = async() => {
        try {
          await auth.signOut();
          navigate("/");
          console.log("signout success");
        } catch (error) {
          console.log("signout error");
        }
      }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    HELLO
                </Typography>
                {user ? (
                    <Button color="inherit" onClick={SignOut}>
                        SignOut
                    </Button>
                ):(
                <>
                  <Button color="inherit" onClick={() => navigate("/signin")}>
                    SignIn
                  </Button>
                  <Button color="inherit" onClick={() => navigate("/signup")}>
                    SignUp
                  </Button>
                </>
            )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
