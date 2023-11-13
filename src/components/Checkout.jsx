import './Checkout.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from './icons.png';

function Checkout () {

    const navigate = useNavigate();

    const location = useLocation();
    const { planType, discountAmount, price } = location.state || {};
  

    const handleBackClickToPricing = () => {
        navigate("/pricing")
    }

    const [showStage1, setShowStage1] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postCode, setPostCode] = useState("");
    const [country, setCountry] = useState("");
    const [stageGood, setStageGood] = useState("");

    useEffect(() => {
        checkAllFields(); // Check on component mount
      }, []);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
          case "firstName":
            setFirstName(value);
            break;
          case "lastName":
            setLastName(value);
            break;
          case "address":
            setAddress(value);
            break;
          case "city":
            setCity(value);
            break;
          case "state":
            setState(value);
            break;
          case "postCode":
            setPostCode(value);
            break;
          case "country":
            setCountry(value);
            break;
          default:
            break;
        }
        checkAllFields();
      };

    
    const handleInputBlur = () => {
        checkAllFields();
    };

    
    const checkAllFields = () => {
        const allFieldsFilled = firstName && lastName && address && city && state && postCode && country;
    
        setStageGood(allFieldsFilled ? 'filled' : '');
    };

    // stage2

    const [showStage2, setShowStage2] = useState(false);

    const[nameCard, setNameCard] = useState("");
    const[cardNum, setCardNum] = useState("");
    const[expDate, setExpDate] = useState("");
    const[cvv, setCvv] = useState("");
    const [stageTwoGood, setStageTwoGood] = useState("");

    const handleInputChangeTwo = (e) => {
      const { name, value } = e.target;
      switch (name) {
        case "nameCard":
          set(value);
          break;
        case "cardNum":
          setLastName(value);
          break;
        case "expDate":
          setAddress(value);
          break;
        case "cvv":
          setCity(value);
          break;
        default:
          break;
      }
      checkAllFieldsTwo();
    };

    const handleInputBlurTwo = () => {
        checkAllFields();
        checkAllFieldsTwo();
    };

    const checkAllFieldsTwo = () => {
        const allFieldsFilled = nameCard && cardNum && expDate && cvv;
    
        setStageTwoGood(allFieldsFilled ? 'filled' : '');
    };

    //stage3
    const [stageThreeGood, setStageThreeGood] = useState("");
    const [showStage3, setShowStage3] = useState(false);

    const handleShowStage2 = () => {
        setShowStage1(false);
        setShowStage2(trueq);
      };
      
    const handleShowStage3 = () => {
        setShowStage1(false);
        setShowStage2(false);
        setShowStage3(true);
    }

    return(
        <>  
        <div className="loginWrapper">
            <div className='arrowBack' onClick={handleBackClickToPricing}> ← </div>
            <div className="imageTwo"  onClick={handleBackClickToPricing}>
                <img className="logoTwo" src={logo} alt="logoTwo"/>
                <label className="logoLabelTwo" htmlFor="logoTwo">Data Tunnel</label>
            </div>
           {showStage1 && 
            <div className="loginForm">
                    <h3 className='welcome'>Checkout</h3>
                    <div className="stages">
                        <div className={`stage1 ${stageGood ? 'filled' : ''}`}>1. Billing info</div>
                        <div className="stage2">2. Payment details</div>
                        <div className="stage3">3. Review order</div>
                    </div>
                    <div className="stageName"></div>
                    <div className="fullName">
                        <div className="emailClass">
                            <label id='emailBoxTwo'>First name</label>
                            <input className="emailBoxTwo" type="txt" name='firstName' value={firstName} onChange={handleInputChange} onBlur={handleInputBlur}/>
                        </div>
                        <div className="emailClass">
                            <label id='emailBoxTwo'>Last name</label>
                            <input className="emailBoxTwo" type="txt" name='lastName' value={lastName} onChange={handleInputChange} onBlur={handleInputBlur}/>
                        </div>
                    </div>
                    <div className="address">
                        <div className="emailClass">
                            <label id='emailBoxTwo'>Address</label>
                            <input className="emailBoxTwo" type="txt" name='address' value={address} onChange={handleInputChange} onBlur={handleInputBlur}/>
                        </div>
                    </div>
                    <div className="fullName">
                        <div className="emailClass">
                            <label id='emailBoxTwo'>City</label>
                            <input className="emailBoxTwo" type="txt" name='city' value={city} onChange={handleInputChange} onBlur={handleInputBlur}/>
                        </div>
                        <div className="emailClass">
                            <label id='emailBoxTwo'>State/Province/Region</label>
                            <input className="emailBoxTwo" type="txt" name='state' value={state} onChange={handleInputChange} onBlur={handleInputBlur}/>
                        </div>
                    </div>
                    <div className="fullName">
                        <div className="emailClass">
                            <label id='emailBoxTwo'>Zip/Postal code</label>
                            <input className="emailBoxTwo" type="txt" name='postCode' value={postCode} onChange={handleInputChange} onBlur={handleInputBlur}/>
                        </div>
                        <div className="emailClass">
                            <label id='emailBoxTwo'>Country</label>
                            <input className="emailBoxTwo" type="txt" name='country' value={country} onChange={handleInputChange} onBlur={handleInputBlur}/>
                        </div>
                    </div>
                    <div className='log' onClick={handleShowStage2}>
                        <button className='loginBtnTwo'>Next</button>
                    </div>
                </div>}
            {showStage2 &&
            <div className="loginForm">
                <h3 className='welcome'>Checkout</h3>
                <div className="stages">
                    <div className={`stage1 ${stageGood ? 'filled' : ''}`}>1. Billing info</div>
                    <div className={`stage2 ${stageTwoGood ? 'filled' : ''}`}>2. Payment details</div>
                    <div className="stage3">3. Review order</div>
                </div>
                <div className="fullName">
                    <div className="emailClass">
                        <label id='emailBoxTwo'>Name on the card</label>
                        <input className="emailBoxTwo" type="txt" name='nameCard' value={nameCard} onChange={handleInputChangeTwo} onBlur={handleInputBlurTwo}/>
                    </div>
                    <div className="emailClass">
                        <label id='emailBoxTwo'>Card number</label>
                        <input className="emailBoxTwo" type="txt" name='cardNum' value={cardNum} onChange={handleInputChangeTwo} onBlur={handleInputBlurTwo}/>
                    </div>
                </div>
                <div className="fullName">
                    <div className="emailClass">
                        <label id='emailBoxTwo'>Expiry date</label>
                        <input className="emailBoxTwo" type="txt" name='expDate' value={expDate} onChange={handleInputChangeTwo} onBlur={handleInputBlurTwo}/>
                    </div>
                    <div className="emailClass">
                        <label id='emailBoxTwo'>CVV</label>
                        <input className="emailBoxTwo" type="txt" name='cvv' value={cvv} onChange={handleInputChangeTwo} onBlur={handleInputBlurTwo}/>
                    </div>
                </div>
                <div className='log' onClick={handleShowStage3}>
                    <button className='loginBtnTwo'>Next</button>
                </div>
            </div>}
            {showStage3 &&
            <div className="loginForm">
                <h3 className='welcome'>Checkout</h3>
                <div className="stages">
                    <div className={`stage1 ${stageGood ? 'filled' : ''}`}>1. Billing info</div>
                    <div className={`stage2 ${stageTwoGood ? 'filled' : ''}`}>2. Payment details</div>
                    <div className={`stage3 ${stageThreeGood ? 'filled' : ''}`}>3. Review order</div>
                </div>
            </div>
            }
        </div>
        </>
    );
}

export default Checkout