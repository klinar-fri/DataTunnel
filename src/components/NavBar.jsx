import "./NavBar.css";
import logo from "./icons.png";
import { useState } from "react";
import { useActionData, useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();

    const handlePricingClick = () => {
        navigate('/pricing');
    };

    const handelLoginClick = () => {
        navigate('/login');
    };

    const handleCreateAccClick = () =>{
        navigate('/register');
    }

    const [isRotated, setIsRotated] = useState(false);
    const [isRotatedTwo, setIsRotatedTwo] = useState(false);
  
    const handleRotateClick = () => {
      setIsRotated(!isRotated);
      setIsRotatedTwo(false); 
    };
  
    const handleRotateClickTwo = () => {
      setIsRotatedTwo(!isRotatedTwo);
      setIsRotated(false); 
    };

    const [isChanged, setIsChanged] = useState(false);

    const handleIconChange = () => {
        setIsChanged(!isChanged);
    };
    
    


    return(
        <div className="wrapper">
            <div className="wrapperLeft">
                <div className="image">
                    <img className="logo" src={logo} alt="logo" onClick={() => location.reload()}/>
                    <label className="logoLabel" htmlFor="logo" onClick={() => location.reload()}>Data Tunnel</label>
                </div>
                <div className={`features ${isRotated ? 'rotated' : ''}`} onClick={handleRotateClick}>
                    <div className={`featureMenu ${isRotated ? 'featuresTxt' : 'featuresTxTBack'}`}>Features</div>
                    <div className={`tick ${isRotated ? 'rotate' : 'rotateBack'}`}>{'<'}</div>
                </div>
                <div className="pricing" onClick={handlePricingClick}>
                    <div className="pricingLink">Pricing</div>
                </div>
                <div className={`download ${isRotatedTwo ? 'rotated' : ''}`} onClick={handleRotateClickTwo}>
                    <div className={`downloadMenu ${isRotatedTwo ? 'downTxt' : 'downTxTBack'}`}>Download</div>
                    <div className={`tickTwo ${isRotatedTwo ? 'rotate' : 'rotateBack'}`}>{'<'}</div>
                </div>
            </div>
            <div className="wrapperRight">
                <div className="login">
                    <div className="loginBtn" onClick={handelLoginClick}>Log in</div>
                </div>
                <div className="createAcc">
                    <button className="createAccBtn" onClick={handleCreateAccClick}>Create account</button>
                </div>
                <div className={`burgerMenu ${isChanged ? '': 'burgerMenu'}`} onClick={handleIconChange}>
                    <div className={`burger ${isChanged ? 'closeIconLine': 'burger'}`}>-</div>
                    <div className={`burger ${isChanged ? 'closeIconLineTwo': 'burger'}`}>-</div>
                    <div className={`burger ${isChanged ? 'none': 'burger'}`}>-</div>
                </div>
            </div>
        </div>
        
    );
}

export default NavBar;      