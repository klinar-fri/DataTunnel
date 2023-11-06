import { useAuth } from './AuthContext';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PopupMessage from './PopupMessage';

function Dashboard() {

    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const navigate = useNavigate();
    
    const { loggedInEmail, handleLogout } = useAuth();

    const handleLogoutClick = () => {
        handleLogout();
        setShowPopup(true);
        setPopupMessage('Logged out successfully!');
    
        setTimeout(() => {
          setShowPopup(false);
          navigate("/");
        }, 2000);
      };

    const handlePopupClose = () => {
        setShowPopup(false);
    };


    return(
        <>
            <div className="dashWrapper">
                <div className="headerDash">
                    <div className="wrapperLeftDash">
                        <div className="welcomeMsgDash">Welcome:&nbsp;</div>
                        <div className='displayEmail'>{loggedInEmail}</div>
                    </div>
                    <div className="wrapperRightDash">
                        <div className="logoutBtn" onClick={() => {
                            handleLogoutClick();
                        }}>Log out</div>
                    </div>
                </div>
                {showPopup && <PopupMessage message={popupMessage} onClose={handlePopupClose} />}
                <div className="dashContent"></div>
            </div>
        </>
    );
}

export default Dashboard;