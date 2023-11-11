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

    const handleGoToSupport = () => {
        navigate('/support');
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
        setShowDownload(!showDownload);
        const resourcesMenuWrapper = document.getElementsByClassName("resourcesMenuWrapper")[0];
        if (resourcesMenuWrapper){
            resourcesMenuWrapper.style.display = showOverlay ? "none" : "flex";
        }
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



    const [showOverlayFeatures, setShowOverlayFeatures] = useState(false);
    const [showOverlayResources, setShowOverlayResources] = useState(false);

    const handleShowOverlayFeatures = () => {
        setShowOverlayFeatures(!showOverlayFeatures);
        const overlayFeatWrapper = document.getElementsByClassName("overlayFeatWrapper")[0];
        if(overlayFeatWrapper){
            overlayFeatWrapper.style.display = showOverlayFeatures ? "none" : "flex";
        }
    }

    const handleShowOverlayResources = () => {
        setShowOverlayResources(!showOverlayResources);
        const overlayResWrapper = document.getElementsByClassName("overlayResWrapper")[0];
        if(overlayResWrapper){
            overlayResWrapper.style.display = showOverlayResources ? "none" : "flex";
        }
    }

    const [showOverlay, setShowOverlay] = useState(false);

    const handleShowOverlay = () => {
       setShowOverlay(!showOverlay);
       const overlayWrapper = document.getElementsByClassName("overlayWrapper")[0];
       if (overlayWrapper) {
         overlayWrapper.style.display = showOverlay ? "none" : "flex";
       }
       if(showOverlayFeatures){
        setShowOverlayFeatures(false);
       }
       if(setShowOverlayResources){
        setShowOverlayResources(false);
       }
    };

    const handleGoBackToMainMenu = () => {
        setShowOverlayFeatures(false);
        setShowOverlay(true);
    }

    const handleGoBackToMainMenuFromSupp = () => {
        setShowOverlayResources(false);
        setShowOverlay(true);
    }

    const handleGoToWhyVpn = () => {
        setShowOverlayFeatures(false);
        setShowOverlay(false);
        handleIconChange(); 
        scrollTo2ndPage();
    }

    const handleExitMenu = () => {
        setShowOverlay(false);
        setShowOverlayFeatures(false);
    }

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
                    <div className={`downloadMenu ${isRotatedTwo ? 'downTxt' : 'downTxTBack'}`}>Resources</div>
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
                    <div className="featureBurgerWrap" onClick={handleShowOverlayFeatures}>
                        <div className="featureBurger">Features</div>
                        <span className="point">{'>'}</span>
                    </div>
                    <div className="pricingBurgerWrap" onClick={handlePricingClick}>
                        <div className="pricingBurger">Pricing</div>
                        <span className="point">{'>'}</span>
                    </div>
                    <div className="downloadBurgerWrap" onClick={handleShowOverlayResources}>
                        <div className="downloadBurger">Resources</div>
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

            {showDownload &&
            <div className="resourcesMenuWrapper">
                <div className="support" onClick={handleGoToSupport}>Help & support&nbsp;&nbsp;&nbsp;&nbsp;{'>'}</div>
            </div>}

            {showOverlayFeatures &&
                <div className="overlayWrapper">
                    <div className="elementsTop">
                        <div className="goToMainMenuWrap" onClick={handleGoBackToMainMenu}>
                            <div className="goToMainMenu"><span className="tickLeft">{'<'}</span>Main menu</div>
                        </div>
                        <div className="menuFeatTitleWrap">
                            <div className="menuFeatTitle">Features</div>
                        </div>
                        <div className="allFeatureBurgWrap" onClick={handleGoToFeatures}>
                            <div className="allFeatBurg">All Features</div>
                            <span className="point">{'>'}</span>
                        </div>
                        <div className="whyVpnBurgWrap" onClick={handleGoToWhyVpn}>
                            <div className="whyWpnBurg">Why VPN</div>
                            <span className="point">{'>'}</span>
                        </div>
                    </div>
                </div>
            }
            {showOverlayResources &&
                <div className="overlayWrapper">
                    <div className="elementsTop">
                        <div className="goToMainMenuWrap" onClick={handleGoBackToMainMenuFromSupp}>
                            <div className="goToMainMenu"><span className="tickLeft">{'<'}</span>Main menu</div>
                        </div>
                        <div className="menuFeatTitleWrap">
                            <div className="menuFeatTitle">Resources</div>
                        </div>
                        <div className="allFeatureBurgWrap" onClick={handleGoToSupport}>
                            <div className="allFeatBurg">Help & support</div>
                            <span className="point">{'>'}</span>
                        </div>
                    </div>
                </div>
            }

        </div>
        
    );
}

export default NavBar;      