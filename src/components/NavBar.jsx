import "./NavBar.css";
import logo from "./icons.png";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();

    const handlePricingClick = () => {
        navigate('/pricing');
    };

    const handelLoginClick = () => {
        navigate('/login');
    };

    const handleCreateAccClick = () => {
        navigate('/register');
    }

    const handleGoToFeatures = () => {
        navigate('/features');
    }

    const [showFeatures, setShowFeatures] = useState(false);
    const [showDownload, setShowDownload] = useState(false);

    const handleShowFeatures = () => {
        setShowFeatures(!showFeatures);
        const featuresMenuWrapper = document.getElementsByClassName("featuresMenuWrapper")[0];
        if (featuresMenuWrapper) {
          featuresMenuWrapper.style.display = showOverlay ? "none" : "flex";
        }
        setShowDownload(false);
    };

    const handleShowDownload = () => {
        setShowDownload(!showFeatures);
        setShowFeatures(false);
    }

    const handleCloseFeatures = () => {
        setShowFeatures(!showFeatures);
    }

    const scrollTo2ndPage = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    };



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
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const [showOverlay, setShowOverlay] = useState(false);

    const handleShowOverlay = () => {
       setShowOverlay(!showOverlay);
       const overlayWrapper = document.getElementsByClassName("overlayWrapper")[0];
       if (overlayWrapper) {
         overlayWrapper.style.display = showOverlay ? "none" : "flex";
       }
    };

    return(
        <div className="wrapper">
            <div className="wrapperLeft">
                <div className="image" onClick={scrollToTop}>
                    <img className="logo" src={logo} alt="logo" />
                    <label className="logoLabel" htmlFor="logo">Data Tunnel</label>
                </div>
                <div className={`features ${isRotated ? 'rotated' : ''}`} onClick={() =>{
                    handleRotateClick();
                    handleShowFeatures();
                }}>
                    <div className={`featureMenu ${isRotated ? 'featuresTxt' : 'featuresTxTBack'}`}>Features</div>
                    <div className={`tick ${isRotated ? 'rotate' : 'rotateBack'}`}>{'<'}</div>
                </div>
                <div className="pricing" onClick={handlePricingClick}>
                    <div className="pricingLink">Pricing</div>
                </div>
                <div className={`download ${isRotatedTwo ? 'rotated' : ''}`} onClick={() => {
                    handleRotateClickTwo();
                    handleShowDownload();
                }}>
                    <div className={`downloadMenu ${isRotatedTwo ? 'downTxt' : 'downTxTBack'}`}>Download</div>
                    <div className={`tickTwo ${isRotatedTwo ? 'rotate' : 'rotateBack'}`}>{'<'}</div>
                </div>
            </div>
            <div className="wrapperRight">
                <div className="login"onClick={handelLoginClick}>
                    <div className="loginBtn">Log in</div>
                </div>
                <div className="createAcc">
                    <button className="createAccBtn" onClick={handleCreateAccClick}>Create account</button>
                </div>
                <div className={`burgerMenu ${isChanged ? '': 'burgerMenu'}`} onClick={() => {
                      handleIconChange();
                      handleShowOverlay();
                    }}>
                    <div className={`burger ${isChanged ? 'closeIconLine': 'burger'}`}>-</div>
                    <div className={`burger ${isChanged ? 'closeIconLineTwo': 'burger'}`}>-</div>
                    <div className={`burger ${isChanged ? 'none': 'burger'}`}>-</div>
                </div>
            </div>
            {showOverlay &&
            <div className="overlayWrapper">
                <div className="elementsTop">
                    <div className="featureBurgerWrap">
                        <div className="featureBurger">Features</div>
                        <span className="point">{'>'}</span>
                    </div>
                    <div className="pricingBurgerWrap" onClick={handlePricingClick}>
                        <div className="pricingBurger">Pricing</div>
                        <span className="point">{'>'}</span>
                    </div>
                    <div className="downloadBurgerWrap">
                        <div className="downloadBurger">Download</div>
                        <span className="point">{'>'}</span>
                    </div>
                </div>
                <div className="elementsBottom">
                    <div className="loginBurger">
                        <div className="loginBtnBurger" onClick={handelLoginClick}>Log in</div>
                    </div>
                    <div className="createAccBurger">
                        <button className="createAccBtnBurger" onClick={handleCreateAccClick}>Create account</button>
                    </div>
                </div>
            </div>}
            {showFeatures && 
            <div className="featuresMenuWrapper">
                <div className="allFeatures" onClick={handleGoToFeatures}>All Features&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'>'}</div>
                <div className="whyUseVpn" onClick={() => {
                    scrollTo2ndPage();
                    handleRotateClick();
                    handleCloseFeatures();
                }}>Why VPN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'>'}</div>
            </div>}
        </div>
        
    );
}

export default NavBar;      