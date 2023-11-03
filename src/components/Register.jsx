import './Register.css';
import logo from "./icons.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



function Login() {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    const handleGotoLogin = () => {
        navigate('/login');
    };

    const [password, setPassword] = useState("");
    const [isLenValid, setLenValid] = useState(false);
    const [hasCapitalLetter, setCapitalLetter] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    let canContinue = false;

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setLenValid(newPassword.length >= 12);
        setCapitalLetter(/[A-Z]/.test(newPassword));
        setHasNumber(/\d/.test(newPassword));
      };

    const validPassword = () => {
        if(isLenValid && hasCapitalLetter && hasNumber){
            canContinue = true;
        }
    }
    


   

    return (
        <>
        <div className="registerWrapper">
            <div className='arrowBack' onClick={handleBackClick}> ← </div>
            <div className="imageTwo" onClick={handleBackClick}>
                <img className="logoTwo" src={logo} alt="logoTwo"/>
                <label className="logoLabelTwo" htmlFor="logoTwo">Data Tunnel</label>
            </div>
            <div className="registerForm">
                <h3 className='welcome'>Create an account</h3>
                <div className='email'>
                    <label htmlFor="emailBox">Email</label>
                    <input className="emailBox" type="email" />
                </div>
                <div className='password'>
                    <label htmlFor="passBox">Password</label>
                    <input className='passBox' type="password" value={password} onChange={handlePasswordChange}/>
                    <div className='passChecker'>
                        <div className={`checkMarkOne ${isLenValid ? 'valid' : ''}`}>✓</div>
                        <div className={`chars ${isLenValid ? 'valid' : ''}`}>12 characters</div>
                        <div className={`checkMarkTwo ${hasCapitalLetter ? 'valid' : ''}`}>✓</div>
                        <div className={`capitalLetter ${hasCapitalLetter ? 'valid' : ''}`}>A/a</div>
                        <div className={`checkMarkThree ${hasNumber ? 'valid' : ''}`}>✓</div>
                        <div className={`num ${hasNumber ? 'valid' : ''}`}>1 2 3</div>
                    </div>
                </div>
                <div className='log'>
                    <button className='loginBtnTwo'>Create account</button>
                </div>
                <div className='reg'>
                    <label htmlFor="gotoReg">Already have an account?</label>
                    <div className='gotoReg' onClick={handleGotoLogin}>Login here</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;