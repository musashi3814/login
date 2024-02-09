import React, { useContext } from 'react';
import { Container, Typography } from '@mui/material';
import { UserContext } from "../context/userContext";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <Container maxWidth="sm" sx={{ pt: 5 }}>
      <Typography variant="h3" color="black" fontWeight="bold">
        Hi, Sign Up or Sign In
      </Typography>
    </Container>
  );
}