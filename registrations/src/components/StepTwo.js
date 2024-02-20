import React from 'react';
import '../styles/StepTwo.css';
import { FcGoogle } from 'react-icons/fc';
//import { GoogleLogin } from 'react-google-login'; 

const StepTwo = ({ nextStep }) => {
  // Handler for successful Google login
  // const responseGoogleSuccess = (response) => {
  //   console.log('Google login success:', response);
  //   // Extract the ID token from the Google response
  //   const token = response.tokenId;

  //   // Send the token to your backend for verification and further processing
  //   fetch('/api/auth/google', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ token }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Login success:', data);
  //       // Handle login success, e.g., by advancing to the next step or setting user state
  //       nextStep(); // Or other actions based on your app's flow
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // };

  // Handler for Google login failure
  // const responseGoogleFailure = (response) => {
  //   console.error('Google login failure:', response);
  // };

  return (
    <>
      <h1 className="step-title">Welcome to Shyn Coin Tech</h1>
      <p className="text">Feel free to choose a really cool name that other users can use to find you, e.g., cryptolord, cryptobaby, joy01, etc.</p>
      <input className="input" type="text" placeholder="Input username" />
      <button className="button" onClick={nextStep}>Proceed</button>
      <p className="text">OR CONTINUE WITH:</p>
      {/* Google sign-in button using react-google-login */}
      {/* <GoogleLogin
        clientId="CLIENT_ID_HERE" 
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="button google-sign-in">
            <FcGoogle className="google-icon" /> Continue with Google
          </button>
        )}
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailure}
        cookiePolicy={'single_host_origin'}
      /> */}
      {/* I've commented out the Google login components */}
      <button className="button google-sign-in">
        <FcGoogle className="google-icon" /> Continue with Google
      </button>
      <p className="text">Already have an account? <a href="https://shyntech-auth.netlify.app/" className="link">Sign in</a></p>
    </>
  );
};

export default StepTwo;
