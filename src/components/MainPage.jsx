import "./MainPage.css";
import { useNavigate } from "react-router-dom";

function MainPage() {


    const navigate = useNavigate();

    const handleGetNowClick = () => {
        navigate('/pricing');
    };

    return(
        <div className="frame">
            <div className="firstPage">
                <div className="welcomeMsg"><span className="colorTxt">Browse privately&nbsp;</span>with a secure VPN</div>
                <div className="underWelcMsg">Protect yourself online with a<span className="colorTxt2">&nbsp;fast</span>&nbsp;and&nbsp;<span className="colorTxt2">reliable </span>VPN</div>
                <div className="getNow" onClick={handleGetNowClick}>
                    <div className="p1">Get VPN now</div>
                    <div className="p2">{'>'}</div>
                </div>
            </div>
            <div className="secondPage">
                <div className="secondPageTitle">Why use a VPN</div>
                <div className="contentWrapper">
                    <div className="security">
                        <div className="title12">Security</div>
                        <div className="txt12">Our secure VPN sends your internet traffic through an encrypted VPN tunnel to keep your browsing data safe, even over public or untrusted internet connections.</div>
                    </div>
                    <div className="privacy">
                        <div className="title12">Privacy</div>
                        <div className="txt12">As a VPN provider, we do not log user activity or share data with third parties. Our anonymous VPN service keeps your browsing history private and enables an internet without surveillance.</div>
                    </div>
                    <div className="freedom">
                        <div className="title12">Freedom</div>
                        <div className="txt12">We created Data Tunnel VPN to further protect the journalists, activists, and everyday citizens who use Data Tunnel mailing services. Our VPN breaks down the barriers of internet censorship, allowing you to access restricted online content.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;