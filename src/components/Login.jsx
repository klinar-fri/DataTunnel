import './Login.css';
import logo from "./icons.png";
import { useNavigate } from 'react-router-dom';



function Login() {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    const handleResetPass = () => {
        navigate('/password-reset');
    };

    const handleGotoRegister = () => {
        navigate('/register');
    };

   

    return (
        <>
        <div className="loginWrapper">
            <div className="imageTwo">
                <img className="logoTwo" src={logo} alt="logoTwo" onClick={handleBackClick}/>
                <label className="logoLabelTwo" htmlFor="logoTwo" onClick={handleBackClick}>Data Tunnel</label>
            </div>
            <div className="loginForm">
                <h3 className='welcome'>Welcome back</h3>
                <div className='email'>
                    <label htmlFor="emailBox">Email</label>
                    <input className="emailBox" type="email" />
                </div>
                <div className='password'>
                    <label htmlFor="passBox">Password</label>
                    <input className='passBox' type="password" />
                </div>
                <div className='passForgot'>
                    <div className='passForgotTxt' onClick={handleResetPass}>Forgot your password?</div>
                </div>
                <div className='log'>
                    <button className='loginBtnTwo'>Log in</button>
                </div>
                <div className='reg'>
                    <label htmlFor="gotoReg">Don't have an account?</label>
                    <div className='gotoReg' onClick={handleGotoRegister}>Register here</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;