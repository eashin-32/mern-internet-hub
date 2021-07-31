import React, { useContext, useState } from 'react';
import loginCover from '../../img/login-cover.jpg';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FcGoogle } from 'react-icons/fc';
import { userContext } from './../../App';
import { useHistory, useLocation } from 'react-router-dom';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/"} };

    const [user, setUser] = useState({
        isLoggedIn: false,
        name: '',
        email: '',
        avatar: '',
    })


   const handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    var token = credential.accessToken;
    var user = result.user;
    
    const isSignedIn={
        isLoggedIn: true,
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL
    }
    
    setUser(isSignedIn)
    setLoggedInUser(isSignedIn)

    history.replace(from);

     
  }).catch((error) => {
    
    var errorCode = error.code;
    var errorMessage = error.message;
    
    var email = error.email;
    
    var credential = error.credential;
    
  });
 
};



    return (
        <section className='row login'>
           <div className="col-md-6 mt-5">
               <div className="p-5">
                   <h1 className='mb-5'>Log in</h1>
                   <input type="text" className='login-input' placeholder='Your Email'/>
                   <input type="password" className='login-input' placeholder='Your Password'/>
                   <button className='btn btn-outline-dark d-block  my-2 text-center'>Login</button>
                    <button onClick={handleSignIn} className='btn btn-outline-info text-center'><FcGoogle size='1.5em'/> Continue with Google</button>
               </div>
           </div>
           <div className="col-md-6">
               <div className="">
                   <img src={loginCover} alt="" className="img-fluid" />
               </div>
           </div>
        </section>
    );
};

export default Login;