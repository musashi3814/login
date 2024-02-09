import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './page/Home'
import Navbar from './components/Navbar';
import Signin from './page/Signin';
import Signup from './page/Signup';
import Mypage from './page/Mypage';
import { AuthContext } from './context/userContext';

function App() {
  return (
    <>
      <AuthContext>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Mypage" element={<Mypage />} />
        </Routes>
      </AuthContext>
    </>
  );
}

export default App;
