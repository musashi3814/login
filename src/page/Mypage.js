import { useContext } from 'react';
import { Container, Typography } from '@mui/material';
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import { auth } from '../firebase-config';

export default function Mypage() {
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
    <Container maxWidth="sm" sx={{ marginTop: 5, textAlign: 'center' }}>
      <Typography variant="h3" color="black" fontWeight="bold" marginBottom="2rem">
        My Page
      </Typography>
      <Typography variant="body1" color="black" marginBottom="1rem">
        Email: {user ? user.email : 'Loading...'}
      </Typography>
      <Button variant="contained" color="primary" onClick={SignOut}>
        Sign Out
      </Button>
    </Container>
  );
}