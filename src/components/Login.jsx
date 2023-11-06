import './Login.css';
import logo from "./icons.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useAuth } from './AuthContext';
import Incorrect from "./Incorrect";


function Login() {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    const handleGoToDashboard = () => {
        navigate('/dashboard');
    };

    const handleResetPass = () => {
        navigate('/password-reset');
    };

    const handleGotoRegister = () => {
        navigate('/register');
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const { setLoggedInUser } = useAuth();

    const data = {
        email: email,
        password: password
    };

    const [showPopup, setShowPopup] = useState(false);
        
    const handleSubmit = () => {
        axios.post("http://localhost/login.php", JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.data.message === 'You are logged in!') {
                setLoggedInUser(email);
                handleGoToDashboard();
            } else {
                setShowPopup(true);
                setErrorMessage(response.data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            setErrorMessage("An error occurred. Please try again later.");
            
        });
      };
      
      const handlePopupClose = () => {
        setShowPopup(false);
    };
   

    return (
        <>
        <div className="loginWrapper">
            <div className='arrowBack' onClick={handleBackClick}> ← </div>
            <div className="imageTwo"  onClick={handleBackClick}>
                <img className="logoTwo" src={logo} alt="logoTwo"/>
                <label className="logoLabelTwo" htmlFor="logoTwo">Data Tunnel</label>
            </div>
            <div className="loginForm">
                <h3 className='welcome'>Welcome back</h3>
                <div className='emailClass'>
                    <label htmlFor="emailBox">Email</label>
                    <input className="emailBox" type="email" name='email' value={email} onChange={handleEmailChange}/>
                </div>
                <div className='passwordClass'>
                    <label htmlFor="passBox">Password</label>
                    <input className='passBox' type="password" name='password' value={password} onChange={handlePasswordChange}/>
                </div>
                <div className='passForgot'>
                    <div className='passForgotTxt' onClick={handleResetPass}>Forgot your password?</div>
                </div>
                <div className='log' onClick={handleSubmit}>
                    <button className='loginBtnTwo'>Log in</button>
                </div>
                <div className='reg'>
                    <label htmlFor="gotoReg">Don't have an account?</label>
                    <div className='gotoReg' onClick={handleGotoRegister}>Register here</div>
                </div>
                {showPopup && <Incorrect message={errorMessage} onClose={handlePopupClose} />}
            </div>
        </div>
        </>
    );
}

export default Login;