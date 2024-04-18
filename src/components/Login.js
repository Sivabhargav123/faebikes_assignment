
import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import swiggyLogo from './images/swiggy_logo.png';

const Login = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleLogin = () => {
    // Your login logic here
    // For demonstration purposes, assume OTP is sent immediately after clicking login
    // In real application, you would call an API to send OTP
    setShowPhoneNumberInput(true);
    setOtpSent(true);
  };

  const handleOtpSubmit = () => {
    // Your OTP verification logic here
    onLogin(); // Call the callback to inform the parent component about successful login
  };

  return (
    <div className='main-bg'>
      <h1 className='swiggy-heading'>Swiggy</h1>
      <div className="login-container">
        <div className="login-header">
          <img className="logo" src={swiggyLogo} alt="Swiggy Logo" />
        </div>
        <div className="login-form">
          {!showPhoneNumberInput ? (
            <button className="login-button" onClick={handleLogin}>Login</button>
          ) : (
            <div>
              <input
                className="input-field"
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {otpSent && (
                <input
                  className="input-field"
                  type="text"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              )}
              <button className="login-button" onClick={handleOtpSubmit}>{otpSent ? 'Submit OTP' : 'Send OTP'}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
