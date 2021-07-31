import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { AiFillShopping, AiOutlineShoppingCart, AiFillMessage } from 'react-icons/ai';
import firebase from "firebase/app";
import "firebase/auth";

const Sidebar = () => {

    const handleLogOut= () =>{
        firebase.auth().signOut().then(() => {
            alert('Logout Successful')
          }).catch((error) => {
            alert('An error happened In Logout.')
          });
    }
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            
            <ul className="list-unstyled">
                
                <li>
                    <Link to="/dash/booking" className="text-white">
                         <span><AiOutlineShoppingCart /> Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                         <span> <AiFillShopping />Book List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                         <span><AiFillMessage /> Review</span>
                    </Link>
                </li>
                {/* {isDoctor && <div>
                    <li>
                        <Link to="/allPatients" className="text-white">
                             <span>Appointments</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/patient" className="text-white">
                             <span>Patients</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/prescriptions" className="text-white">
                             <span>Prescriptions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addDoctor" className="text-white" >
                            <span>Add Doctor</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting" className="text-white" >
                             <span>Settings</span>
                        </Link>
                    </li>
                </div>} */}
            </ul>
            <div onClick={handleLogOut}>
                <Link to="/" className="text-white"> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;