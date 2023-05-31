import React from 'react';
import Logo from "../Images/LendSQRLogo.svg"

import "./Navbar.scss"
import { Link } from 'react-router-dom';



const Navbar: React.FC = () => {

    

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid parent-nav">
                    <Link to="/">
                        <img src={Logo} alt="LendSQL" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse spaced-item" id="navbarNav">
                        <ul className="navbar-nav spaced-list">
                            <Link to="/">
                               
                            </Link>


                        </ul>
                    </div>
                    < div className='navitem-button'>



                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Navbar;

