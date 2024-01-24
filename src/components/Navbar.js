import React from 'react';
import {useNavigate} from "react-router-dom"


const Navbar = () => {

    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-light bg-secondary px-4 ">
            <p calssName="text-light">HELLO</p>
            <div>
                <button 
                  class="btn btn-info mx-2"
                  onClick={() => navigate("/signin")}>
                    SingIn
                </button>
                <button
                  class="btn btn-info mx-2"
                  onClick={() => navigate("/signup")}>
                    SingUp
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
