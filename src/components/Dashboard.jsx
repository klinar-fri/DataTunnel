import { useAuth } from './AuthContext';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PopupMessage from './PopupMessage';
import axios from 'axios';

function Dashboard() {

    const navigate = useNavigate();
    const { loggedInEmail, handleLogout } = useAuth();
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [userDataDisplay, setUserDataDisplay] = useState([]);
    const [supportDataDisplay, setSupportDataDisplay] = useState([]);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/fetchUsers.php');
        setUserDataDisplay(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchSupportData = async () => {
      try{
        const responseSupp = await axios.get('http://localhost/fetchSupportData.php');
        setSupportDataDisplay(responseSupp.data);
      }catch (error){
        console.error('Error fetching support data:', error);
      }
    }
  
    useEffect(() => {
      if (loggedInEmail === 'admin@datatunnel.com') {
        fetchData();
      } else {
        setUserDataDisplay([]);
      }
    }, [loggedInEmail]);

    useEffect(() => {
      if (loggedInEmail === 'support@datatunnel.com') {
        fetchSupportData();
      } else {
        setSupportDataDisplay([]);
      }
    }, [loggedInEmail]);
    
    const handleLogoutClick = () => {
      handleLogout();
      setShowPopup(true);
      setPopupMessage('Logged out successfully!');
  
      setTimeout(() => {
        setShowPopup(false);
        navigate('/');
      }, 2000);
    };
  
    const handlePopupClose = () => {
      setShowPopup(false);
    };

    const truncatePassword = (password) => {
      const maxLength = 15;
      if (password.length > maxLength) {
          return password.slice(0, maxLength) + ' ...';
      }
      return password;
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
        <div className="dashContentWrap">
            {loggedInEmail === 'admin@datatunnel.com' && (
              <div className="dashContent">
                {userDataDisplay.map(user => (
                  <div className='dashContentBox' key={user.id}>
                    <div>User id: <span id='blueTxt'>{user.id}</span></div>
                    <div>Email: {user.email}</div>
                    <div id='passBoxDash'>Password: {truncatePassword(user.password)}</div>
                    <div>Registration Date: {user.reg_date}</div>
                  </div>
                ))}
              </div>
              )}
            {loggedInEmail === 'support@datatunnel.com' && (
              <div className="dashContent">
                {supportDataDisplay.map(user =>(
                  <div className="dashContentBoxSupp" key={user.id}>
                    <div>User id: <span id='blueTxt'>{user.id}</span></div>
                    <div>Email: {user.email}</div>
                    <div id='suppMessageContainer'>Message: {user.message}</div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
      </>
    );
}

export default Dashboard;