import './PasswordReset.css';
import logo from "./icons.png";
import { useNavigate } from 'react-router-dom';

function PasswordReset() {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    const handleGotoLogin = () => {
        navigate('/login');
    };

    return(
        <>
        <div className="loginWrapper">
            <div className='arrowBack' onClick={handleBackClick}> ← </div>
            <div className="imageTwo">
                <img className="logoTwo" src={logo} alt="logoTwo" onClick={handleBackClick}/>
                <label className="logoLabelTwo" htmlFor="logoTwo" onClick={handleBackClick}>Data Tunnel</label>
            </div>
            <div className="loginForm">
                <h3 className='welcome'>Reset password</h3>
                <div className='txtResetPass'>Enter your email address & we'll send you a link to reset your password.</div>
                <div className='email'>
                    <label htmlFor="emailBox">Email</label>
                    <input className="emailBox" type="email" />
                </div>
                <div className='log'>
                    <button className='loginBtnTwo'>Submit</button>
                </div>
                <div className='reg'>
                    <div className='gotoReg' onClick={handleGotoLogin}>Back to login</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default PasswordReset;