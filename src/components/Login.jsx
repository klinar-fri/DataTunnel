import './Login.css';
import logo from "./icons.png";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useAuth } from './AuthContext';
import Incorrect from "./Incorrect";


function Login() {

    const navigate = useNavigate();
    const location = useLocation();

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

                // Check if redirected from Support, then send data to the database
                if (location.state && location.state.fromSupport && location.state.message) {

                    const dataToSend = {
                        email: email,
                        message: location.state.message,
                    };

                    axios.post("http://localhost/support.php", JSON.stringify(dataToSend), {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    
                    .catch(error => {
                        console.error("Error:", error);
                    });

                    handleBackClick();

                }
                // Check if redirected from checkout, then send to db
                if(
                    location.state &&
                    location.state.fromCheckout &&
                    location.state.planType &&
                    location.state.discountAmount &&
                    location.state.price &&
                    location.state.firstName &&
                    location.state.lastName &&
                    location.state.addressName &&
                    location.state.city &&
                    location.state.stateName &&
                    location.state.postCode &&
                    location.state.country &&
                    location.state.nameCard &&
                    location.state.cardNum &&
                    location.state.expDate &&
                    location.state.cvv
                ){
                    const dataToSend = {
                        email: email,
                        planType: location.state.planType,
                        discountAmount: location.state.discountAmount,
                        price: location.state.price,
                        firstName: location.state.firstName,
                        lastName: location.state.lastName,
                        addressName: location.state.addressName,
                        city: location.state.city,
                        stateName: location.state.stateName,
                        postCode: location.state.postCode,
                        country: location.state.country,
                        nameCard: location.state.nameCard,
                        cardNum: location.state.cardNum,
                        expDate: location.state.expDate,
                        cvv: location.state.cvv
                    }

                    axios.post("http://localhost/checkout.php", JSON.stringify(dataToSend), {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        // .then(response => {
                        //     console.log("Response:", response.data);
                        // })
                        .catch(error => {
                            console.error("Error:", error);
                        });
                    

                    handleBackClick();
                }else{
                    handleGoToDashboard();
                }
                setShowPopup(false)
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
                <h3 className='welcome'>Log in</h3>
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