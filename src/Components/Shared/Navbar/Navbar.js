import React, { useContext } from 'react';
import logo from '../../../img/wifi-signal.png';
import './Navbar.css'
import "firebase/auth";
import firebase from 'firebase';
import { userContext } from './../../../App';
import Dashboard from './../../Dashboard/Dashboard/Dashboard';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            alert('Logout Successful')
          }).catch((error) => {
            // An error happened.
            alert('Error occur on Logout')
          });
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img className='logo' src={logo} alt="WiFi" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item px-3">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                     </li>
                    <li className="nav-item px-3">
                    <a className="nav-link" href="/portfolio">Our Portfolio</a>
                    </li>
                    <li className="nav-item px-3">
                    <a className="nav-link" href="/team">Our Team</a>
                    </li>
                    <li className="nav-item px-3">
                    <a className="nav-link" href="/contact">Contact us</a>
                    </li>
                    <li className="nav-item px-3">
                    {
                      loggedInUser ?  <a className="nav-link bg-danger rounded-3 text-light" href="/login">Login</a> : <a className="nav-link bg-danger rounded-3 text-light" href="/dashboard">Dashboard</a>
                    }
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;