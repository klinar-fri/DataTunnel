import "./NavBar.css";
import logo from "./icons.png";
import { useState } from "react";

function NavBar() {

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
    


    return(
        <div className="wrapper">
            <div className="image">
                <img className="logo" src={logo} alt="logo" onClick={() => location.reload()}/>
                <label className="logoLabel" htmlFor="logo" onClick={() => location.reload()}>Data Tunnel</label>
            </div>
            <div className={`features ${isRotated ? 'rotated' : ''}`} onClick={handleRotateClick}>
                <div className={`featureMenu ${isRotated ? 'featuresTxt' : 'featuresTxTBack'}`}>Features</div>
                <div className={`tick ${isRotated ? 'rotate' : 'rotateBack'}`}>{'<'}</div>
            </div>
            <div className="pricing">
                <div className="pricingLink">Pricing</div>
            </div>
            <div className={`download ${isRotatedTwo ? 'rotated' : ''}`} onClick={handleRotateClickTwo}>
                <div className={`downloadMenu ${isRotatedTwo ? 'downTxt' : 'downTxTBack'}`}>Download</div>
                <div className={`tickTwo ${isRotatedTwo ? 'rotate' : 'rotateBack'}`}>{'<'}</div>
            </div>
        </div>
    )   
}

export default NavBar;      