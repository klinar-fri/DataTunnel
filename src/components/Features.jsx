import './Features.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Features(){

    const [activeButton, setActiveButton] = useState(null);
    const [showfPrivacy, setShowfPrivacy] = useState(false);
    const [showfSecurity, setShowfSecurity] = useState(false);
    const [showfFreedom, setShowfFreedom] = useState(false);
    const [showfPerformance, setShowfPerformance] = useState(false);



    const handleShowfPrivacy = () => {
        if (!showfPrivacy) {
            setShowfPrivacy(true);
            const fPrivacy = document.getElementsByClassName('fPrivacy')[0];
            if (fPrivacy) {
                fPrivacy.style.display = "flex";
            }
            setShowfFreedom(false);
            setShowfPerformance(false);
            setShowfSecurity(false);
        } else {
            // nič
        }
    };
    
    


    const handleShowfSecurity = () => {
        if(!showfSecurity){
            setShowfSecurity(!showfSecurity);
            const fSecurity = document.getElementsByClassName('fSecurity')[0];
            if(fSecurity){
                fSecurity.style.display = "flex";
            }
            setShowfFreedom(false);
            setShowfPerformance(false);
            setShowfPrivacy(false);
        }else{
            // nič
        }
    };

    const handleShowfFreedom = () => {
        if(!showfFreedom){
            setShowfFreedom(!showfFreedom);
            const fFreedom = document.getElementsByClassName('fFreedom')[0];
            if(fFreedom){
                fFreedom.style.display = "flex";
            }
            setShowfPerformance(false);
            setShowfPrivacy(false);
            setShowfSecurity(false);
        }else{

        }
    };

    const handleShowfPerformance = () => {
        if(!showfPerformance){
            setShowfPerformance(!showfPerformance);
            const fPerformance = document.getElementsByClassName('fPerformance')[0];
            if(fPerformance){
                fPerformance.style.display = "flex";
            }
            setShowfFreedom(false);
            setShowfPrivacy(false);
            setShowfSecurity(false);
        }else{

        }
    };


    const handleBorderChange = (event) => {
        if (activeButton) {
            activeButton.classList.remove('activeButton');
        }
        event.target.classList.add('activeButton');

        setActiveButton(event.target);
    };

    useEffect(() => {
        const defaultButton = document.querySelector('.showPriFeat');
        if (defaultButton) {
            handleBorderChange({ target: defaultButton });
            handleShowfPrivacy();
        }
    }, []);


    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };


    return(
        <>
            <div className="featuresWrapper">
                <div className='arrowBackFeature' onClick={handleBackClick}> ← </div>
                <div className="featureTitleWrap">
                    <div className="featureTitle">VPN security features</div>
                    <div className="featureExplanation">Browse the web with peace of mind.
                    Data Tunnel VPN is a fast and reliable VPN service that protects your online privacy by hiding your real IP address,
                    so you can browse privately, avoid being tracked across the internet, and stop your browsing data from being sold to advertisers. 
                    With our VPN, you can also bypass censorship and access websites that might be blocked in your country.</div>
                </div>
                <div className="buttonsWrap">
                    <div className="firstBtns">
                        <div onClick={handleBorderChange}><div className="showPriFeat" onClick={handleShowfPrivacy}>Privacy</div></div>
                        <div onClick={handleBorderChange}><div className="showSecFeat" onClick={handleShowfSecurity}>Security</div></div>
                    </div>
                    <div className="secondBtns">
                        <div onClick={handleBorderChange}><div className="showFreeFeat" onClick={handleShowfFreedom}>Freedom</div></div>
                        <div onClick={handleBorderChange}><div className="showPerfFeat" onClick={handleShowfPerformance}>Performance</div></div>
                    </div>  
                </div>
                <div className="featureContentWrap">
                   {showfPrivacy &&
                   <div className="fPrivacy">
                        <div id='one' className="shape">
                            <div className="featTitle">Mask your IP</div>
                            <div className="featExpl">Proton VPN hides your real IP address, preventing the easiest and most accurate way for websites to track you online.</div>
                        </div>
                        <div id='two' className="shape">
                            <div className="featTitle">DNS leak protection</div>
                            <div className="featExpl">Ensures your browsing history is never leaked to your internet service provider. Website address lookups are always done by Data Tunnel.</div>
                        </div>
                        <div id='three' className="shape">
                            <div className="featTitle">Tor over VPN</div>
                            <div className="featExpl">Connect to the Tor anonymity network and visit .onion sites from the convenience of your regular browser.</div>
                        </div>
                    </div>}
                    {showfSecurity &&
                    <div className="fSecurity">
                        <div id='one' className="shape">
                            <div className="featTitle">Encryption</div>
                            <div className="featExpl">Our VPN protocols use proven open source encryption standards such as AES-256 and ChaCha20 at their strongest settings.</div>
                        </div>
                        <div id='two' className="shape">
                            <div className="featTitle">Strong Protocols</div>
                            <div className="featExpl">We use only the strongest and most cryptographically secure VPN protocols, such as WireGuard and OpenVPN.</div>
                        </div>
                        <div id='three' className="shape">
                            <div className="featTitle">Two-Factor authentication</div>
                            <div className="featExpl">Secure your Data Tunnel Account. Defeat hackers by proving your identity with two-factor authentication.</div>
                        </div>
                    </div>}
                    {showfFreedom &&
                    <div className="fFreedom">
                        <div id='one' className="shape">
                            <div className="featTitle">Alternative Routing</div>
                            <div className="featExpl">Helps defeat censorship by routing your connection through third-party networks such as AWS when access to our servers is blocked.</div>
                        </div>
                        <div id='two' className="shape">
                            <div className="featTitle">Unlimited Bandwidth</div>
                            <div className="featExpl">We place no restrictions on how much data you can use when connected to our service. Even if you’re on our Free plan.</div>
                        </div>
                        <div id='three' className="shape">
                            <div className="featTitle">Open-source</div>
                            <div className="featExpl">Our apps are all open source, so anyone can check our code. We also commission regular independent audits so you can know they are secure.</div>
                        </div>
                    </div>}
                    {showfPerformance &&
                    <div className="fPerformance">
                        <div id='one' className="shape">
                            <div className="featTitle">VPN Accelerator</div>
                            <div className="featExpl">Improves speed performance by up to 400% when connecting to a VPN server over a long distance.</div>
                        </div>
                        <div id='two' className="shape">
                            <div className="featTitle">High-speed</div>
                            <div className="featExpl">Our network of high-speed VPN servers offers connections up to 10 Gbps.</div>
                        </div>
                        <div id='three' className="shape">
                            <div className="featTitle">Port Forwarding</div>
                            <div className="featExpl">Improve P2P performance and access local resources through your VPN connection with port forwarding.</div>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    );
}


export default Features;