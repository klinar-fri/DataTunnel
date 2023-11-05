import './PasswordReset.css';
import logo from "./icons.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function PasswordReset() {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    const handleGotoLogin = () => {
        navigate('/login');
    };


    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const data = {
        email: email
    };
        
    // const handleSubmit = () => {
    //     axios.post("http://localhost/reset.php", JSON.stringify(data), {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(response => {
    //         console.log(response.data)
    //     })
    //     .catch(error => {
    //         console.error("Error:", error);
    //     });
    // };


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
                <div className='emailClass'>
                    <label htmlFor="emailBox">Email</label>
                    <input className="emailBox" type="email" value={email} name='email' onChange={handleEmailChange} />
                </div>
                <div className='log' >
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