import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Home() {

  return (
    <Container maxWidth="sm" sx={{ pt: 5 }}>
      <Typography variant="h3" color="black" fontWeight="bold">
        Hi, Sign Up or Sign In
      </Typography>
    </Container>
  );
}