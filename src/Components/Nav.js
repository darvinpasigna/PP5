import React from 'react';
import Logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '../App.css';


function NavBar({setShowLoginModal}) {
  const navClassNames = "navbar sticky-top navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body";

    return (
        <>
            <nav className={navClassNames} data-bs-theme="dark">
                <div className="container">
                    <Link to="/PPG"><img id='Logo1' src={Logo} alt="logo" width={250} height={50} /></Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/PPGgameshopP5">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div className="input-group input-group-sm mb-3 me-5 pt-3">
                                <button className="btn btn-outline-secondary" type="button">Search</button>
                                <input type="text" className="form-control" />
                            </div>
                            <button 
                                id='btnbutton'
                                className="btn btn-outline-none" 
                                style={{ backgroundColor: "dark" }} 
                                type='button' 
                                onClick={() => setShowLoginModal(true)}
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
