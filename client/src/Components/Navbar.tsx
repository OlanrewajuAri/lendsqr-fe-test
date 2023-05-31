import React, { useState, useRef, useEffect } from 'react';
import Logo from "../Images/LendSQRLogo.svg"
import Login from './Login';
import Signup from './Signup';
import "./Navbar.scss"
import { Link } from 'react-router-dom';



const Navbar: React.FC = () => {

    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowSignup(false);
    };

    const handleSignupClick = () => {
        setShowLogin(false);
        setShowSignup(true);
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid parent-nav">
                    <img src={Logo} alt="LendSQL" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse spaced-item" id="navbarNav">
                        <ul className="navbar-nav spaced-list">
                            <Link to="">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                            </Link>
                            <Link to="">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Dashboard</a>
                                </li>
                            </Link>

                        </ul>
                    </div>
                    < div className='navitem-button'>
                        <button onClick={handleLoginClick}>Login</button>
                        <button onClick={handleSignupClick}>Sign up</button>

                    </div>
                </div>
            </nav>

            {showLogin && <Login />}
            {showSignup && <Signup />}
        </div>
    );
};

export default Navbar;

