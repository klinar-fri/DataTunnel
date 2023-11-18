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
    const [checkoutDataDisplay, setCheckoutDataDisplay] = useState([]);
    const [selectedPlansDisplay, setselectedPlansDisplay] = useState([]);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://datatunnel.great-site.net/fetchUsers.php');
        setUserDataDisplay(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchSupportData = async () => {
      try{
        const responseSupp = await axios.get('http://datatunnel.great-site.net/fetchSupportData.php');
        setSupportDataDisplay(responseSupp.data);
      }catch (error){
        console.error('Error fetching support data:', error);
      }
    }

    const fetchCheckoutData = async () => {
      try{
        const responseCheckout = await axios.get('http://datatunnel.great-site.net/fetchCheckoutData.php');
        setCheckoutDataDisplay(responseCheckout.data);
      }catch (error){
        console.error('Error fetching support data:', error);
      }
    }


    const fetchUserPlans = async () => {
      try {
        const responseUserPlan = await axios.get(
          `http://datatunnel.great-site.net/fetchUserPlans.php?email=${loggedInEmail}`
        );
        setselectedPlansDisplay(responseUserPlan.data);
      } catch (error) {
        console.error('Error fetching user plans data:', error);
      }
    };
    
    
    
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

    useEffect(() => {
      if (loggedInEmail === 'sales@datatunnel.com') {
        fetchCheckoutData();
      } else {
        setCheckoutDataDisplay([]);
      }
    }, [loggedInEmail]);

    useEffect(() => {
      if (loggedInEmail !== 'sales@datatunnel.com' && loggedInEmail !== 'admin@datatunnel.com' && loggedInEmail !== 'support@datatunnel.com') {
        fetchUserPlans();
      } else {
        setselectedPlansDisplay([]);
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

  const truncateCvv = (cvv) => {
    const maxLength = 15;
    if (cvv.length > maxLength) {
        return cvv.slice(0, maxLength) + '...';
    }
    return cvv;
  };

  const truncateCard = (cardNum) => {
    const maxLength = 15;
    if (cardNum.length > maxLength) {
        return cardNum.slice(0, maxLength) + '...';
    }
    return cardNum;
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
            {loggedInEmail === 'sales@datatunnel.com' && (
              <div className="dashContent">
                {checkoutDataDisplay.map(user =>(
                  <div className="dashContentBoxSales" key={user.id}>
                    <div className="firstHalf">
                      <div>Id: <span id='blueTxt'>{user.id}</span></div>
                      <div>Email: {user.email}</div>
                      <div>Payment plan: {user.planType}</div>
                      <div>Discount Amount: {user.discountAmount}</div>
                      <div>Price: {user.price}</div>
                      <div>First Name: {user.firstName}</div>
                      <div>Last Name: {user.lastName}</div>
                      <div>Address: {user.addressName}</div>
                    </div>
                    <div className="secondHalf">
                      <div>City: {user.city}</div>
                      <div>State: {user.stateName}</div>
                      <div>Post Code: {user.postCode}</div>
                      <div>Country: {user.country}</div>
                      <div>Name on the Card: {user.nameCard}</div>
                      <div>Card Number: {truncateCard(user.cardNum)}</div>
                      <div>Expiration Date: {user.expDate}</div>
                      <div>CVV: {truncateCvv(user.cvv)}</div>
                    </div>
                </div>
                ))}
              </div>
            )}
            {loggedInEmail !== 'sales@datatunnel.com' && loggedInEmail !== 'admin@datatunnel.com' && loggedInEmail !== 'support@datatunnel.com' && (
              <div className="dashContentUser">
                <div className="yourSelectedPlans">Your active plans:</div>
                {Array.isArray(selectedPlansDisplay) && selectedPlansDisplay.length > 0 ? (
                  selectedPlansDisplay.map((user, index) =>(
                    <div className="dashContentBoxUser" key={`${user.email}-${index}`}>
                        <div>Payment plan: <span id='blueTxt'>{user.planType}</span></div>
                        <div>First Name: {user.firstName}</div>
                        <div>Last Name: {user.lastName}</div>
                        <div>Discount: {user.discountAmount}</div>
                        <div>Price: {user.price}</div>
                        <div>Purchase Date: {user.purchaseDate}</div>
                    </div>
                  ))
                ):(
                  <></>
                )}

              </div>
            )}
        </div>
      </div>
      </>
    );
}

export default Dashboard;