import { useContext } from 'react';
import { Container, Typography } from '@mui/material';
import { UserContext } from "../context/userContext";
import { Navigate } from 'react-router-dom';


export default function Mypage() {
  const { user ,isLoading} = useContext(UserContext);
  
  return (
    <>
      {/* ↓ログインしていない場合はログインページにリダイレクトする設定 */}
      {isLoading ? (
        <Navigate to={'/signin/'} />
          ) : (
        <Container maxWidth="sm" sx={{ marginTop: 5, textAlign: 'center' }}>
          <Typography variant="h3" color="black" fontWeight="bold" marginBottom="2rem">
            My Page
          </Typography>
          <Typography variant="body1" color="black" marginBottom="1rem">
            Email: {user ? user.email : 'Loading...'}
          </Typography>
        </Container>
      )}
    </>
  );
}