import './Register.css';
import logo from "./icons.png";
import eye from "./icons8-eye-20.png"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import AddressTaken from './AddressTaken';
import GoodMessage from './GoodMessage'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [isLenValid, setLenValid] = useState(false);
    const [hasCapitalLetter, setCapitalLetter] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    const handleGotoLogin = () => {
        navigate('/login');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setLenValid(newPassword.length >= 12);
        setCapitalLetter(/[A-Z]/.test(newPassword));
        setHasNumber(/\d/.test(newPassword));
    };

    const data = {
        email: email,
        password: password
    };

    const [errorMsg, setErrorMsg] = useState('');
    const [showErrPopup, setShowErrPopup] = useState(false);
    const [showGoodPupup, setShowGoodPopup] = useState(false);
        
    const handleSubmit = () => {
        axios.post("http://localhost/register.php", JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.data.message === "You are now registered!"){
                setShowErrPopup(false);
                setShowGoodPopup(true);
                setErrorMsg("Account created, you can now login!");
                setTimeout(() => {
                    navigate("/login");
                  }, 1000);
            }else{
                setShowErrPopup(true);
                setErrorMsg(response.data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            setErrorMsg(error.data.message);
        });
    };

    const isPasswordValid = () => {
        if(isLenValid && hasCapitalLetter && hasNumber){
            return true;
        }
    };


    const handleShowPassword = () => {
        const passwordInput = document.querySelector('.passBox'); 
        const eyeIcon = document.querySelector('.eye'); 
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.style.background = 'none';
        } else {
            passwordInput.type = 'password';
            eyeIcon.style.background = 'linear-gradient(to bottom right, transparent 46%, black 46%, black 54%, transparent 54%)';
        }
    };



    
    return (
        <>
        <div className="registerWrapper">
            <div className='arrowBack' onClick={handleBackClick}> ← </div>
            <div className="imageTwo" onClick={handleBackClick}>
                <img className="logoTwo" src={logo} alt="logoTwo"/>
                <label className="logoLabelTwo">Data Tunnel</label>
            </div>
            <div className="registerForm">
                <h3 className='welcome'>Create an account</h3>
                <div className='emailClass'>
                    <label>Email</label>
                    <input className="emailBox" type="email" name='email' value={email} onChange={handleEmailChange}/>
                </div>
                <div className='passwordClass'>
                    <div className='labelWrap'>
                        <div className='eyeLeft'>Password</div>
                        <img src={eye} className='eye' alt="showPwdLogo" onClick={handleShowPassword}/>
                    </div>
                    <input className='passBox' type="password" value={password} name='password' onChange={handlePasswordChange}/>
                    <div className='passChecker'>
                        <div className={`checkMarkOne ${isLenValid ? 'valid' : ''}`}>✓</div>
                        <div className={`chars ${isLenValid ? 'valid' : ''}`}>12 characters</div>
                        <div className={`checkMarkTwo ${hasCapitalLetter ? 'valid' : ''}`}>✓</div>
                        <div className={`capitalLetter ${hasCapitalLetter ? 'valid' : ''}`}>A/a</div>
                        <div className={`checkMarkThree ${hasNumber ? 'valid' : ''}`}>✓</div>
                        <div className={`num ${hasNumber ? 'valid' : ''}`}>1 2 3</div>
                    </div>
                </div>
                <div className='log' onClick={ () => {
                    if(isPasswordValid){
                        handleSubmit();
                    }
                }}>
                    <button className='loginBtnTwo'>Create account</button>
                </div>
                <div className='reg'>
                    <label>Already have an account?</label>
                    <div className='gotoReg' onClick={handleGotoLogin}>Login here</div>
                </div>
                {showErrPopup && <AddressTaken message={errorMsg} />}
                {showGoodPupup && <GoodMessage message={errorMsg}/>}
            </div>
        </div>
        </>
    );
}

export default Login;