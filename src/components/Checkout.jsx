import './Checkout.css';
import { useNavigate } from 'react-router-dom';

function Checkout () {

    const navigate = useNavigate();

    const handleBackClickToPricing = () => {
        navigate("/pricing")
    }

    return(
        <>  
            <div className="checkoutContainer">
                <div className="checkoutWrapper">
                    Checkout page coming soon.
                </div>
                <div className="goBack" onClick={handleBackClickToPricing}> ← </div>
            </div>
        </>
    );
}

export default Checkout