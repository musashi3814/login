import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './page/Home'
import Navbar from './components/Navbar';
import Signin from './page/Signin';
import Signup from './page/Signup';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
