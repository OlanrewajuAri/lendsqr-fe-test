import React, { useState, useRef, useEffect } from 'react';
import Logo from "../Images/LendSQRLogo.svg"
import Login from './Login';
import Signup from './Signup';
import ReactDOM from 'react-dom';



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
                <div className="container-fluid">
                    <img src={Logo} alt="LendSQL" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <>
                        <button onClick={handleLoginClick}>Login</button>
                        <button onClick={handleSignupClick}>Sign up</button>

                    </>
                </div>
            </nav>

            {showLogin && <Login />}
            {showSignup && <Signup />}
        </div>
        // <div>
        //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //         <div className="container-fluid">
        //             <a className="navbar-brand" href="#">Navbar</a>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //                 <div className="navbar-nav">
        //                     <a className="nav-link active" aria-current="page" href="#">Home</a>
        //                     <a className="nav-link" href="#">Features</a>
        //                     <a className="nav-link" href="#">Pricing</a>
        //                     <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
        //                 </div>
        //             </div>
        //             <button onClick={handleLoginClick}>Login</button>
        //             <button onClick={handleSignupClick}>Sign up</button>
        //         </div>

        //     </nav>
        //     {showLogin && <Login />}
        //     {showSignup && <Signup />}
        // </div>

    );
};

export default Navbar;

