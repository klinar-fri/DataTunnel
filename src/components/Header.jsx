import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    return(
        <>
        <div className='arrowBackTwo' onClick={handleBackClick}> ← </div>
        <div className="pricingWrapper">
            <div className='secondArrow' onClick={handleBackClick}> ← </div>
            <div className="optionOne"></div>
            <div className="optionTwo"></div>
            <div className="optionThree"></div>
        </div>
        </>
    );
}

export default Header;