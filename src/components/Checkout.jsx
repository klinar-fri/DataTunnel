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
          setNameCard(value);
          break;
        case "cardNum":
          setCardNum(value);
          break;
        case "expDate":
          setExpDate(value);
          break;
        case "cvv":
          setCvv(value);
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


    const handleShowStage2 = () => {
        if(stageGood == "filled"){
            setShowStage1(false);
            setShowStage2(true);
        }
    };
      

    //stage3
    
    const [stageThreeGood, setStageThreeGood] = useState(false)
    const [showStage3, setShowStage3] = useState(false);


    const handleShowStage3 = () => {
        if(stageTwoGood == 'filled'){
            setShowStage1(false);
            setShowStage2(false);
            setShowStage3(true);
            setStageThreeGood(true)
        }

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
                        <button className='loginBtnTwo' style={{ marginBottom: '20px' }}>Next</button>
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
                        <input className="emailBoxTwo" type="txt" name='nameCard' placeholder='your name' value={nameCard} onChange={handleInputChangeTwo} onBlur={handleInputBlurTwo}/>
                    </div>
                    <div className="emailClass">
                        <label id='emailBoxTwo'>Card number</label>
                        <input className="emailBoxTwo" type="number" placeholder='ex: 4012888888881881' name='cardNum' value={cardNum} onChange={handleInputChangeTwo} onBlur={handleInputBlurTwo}/>
                    </div>
                </div>
                <div className="fullName">
                    <div className="emailClass">
                        <label id='emailBoxTwo'>Expiry date</label>
                        <input className="emailBoxTwo" type="txt" placeholder='month / year' name='expDate' value={expDate} onChange={handleInputChangeTwo} onBlur={handleInputBlurTwo}/>
                    </div>
                    <div className="emailClass">
                        <label id='emailBoxTwo'>CVV</label>
                        <input className="emailBoxTwo" type="number" placeholder='3-digits on the back' name='cvv' value={cvv} onChange={handleInputChangeTwo} onBlur={handleInputBlurTwo}/>
                    </div>
                </div>
                <div className='log' onClick={handleShowStage3}>
                    <button className='loginBtnTwo' style={{ marginBottom: '20px' }}>Next</button>
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
                <div className="summaryWrapper">
                    <div className="summary">Summary</div>
                </div>
                <div className="twoColWrap">
                    <div className="selectedPlan">
                        <div className="planHeading">Selected plan:</div>
                        <div className="passedContent">
                            <div className="co">Type: {planType}</div>
                            <div className="co">Discount: {discountAmount}</div>
                            <div className="co">Price: {price}</div>
                        </div>
                    </div>
                    <div className="selectedPlan">
                        <div className="planHeading">Payment details:</div>
                        <div className="passedContent">
                            <div className="co">Name on the card: {nameCard}</div>
                            <div className="co">Card number: {cardNum}</div>
                            <div className="co">Expiry date: {expDate}</div>
                            <div className="co">CVV: {cvv}</div>
                        </div>
                    </div>  
                </div>
                <div className="twoColWrapTwo">
                <div className="selectedPlan">
                        <div className="planHeading">Billing details:</div>
                        <div className="passedContent">
                            <div className="co">First Name: {firstName}</div>
                            <div className="co">Last Name: {lastName}</div>
                            <div className="co">Address: {address}</div>
                            <div className="co">City: {city}</div>
                        </div>
                    </div>
                    <div className="selectedPlan">
                        <div className="planHeading"></div>
                        <div className="passedContent">
                            <div id='empty'>&nbsp;</div>
                            <div className="co">State/Province/Region: {state}</div>
                            <div className="co">Zip/Postal code: {postCode}</div>
                            <div className="co">Country: {country}</div>
                        </div>
                    </div>  
                </div>

                <div className='log'>
                    <button className='loginBtnTwo' style={{ marginBottom: '20px' }}>Confirm purchase</button>
                </div>
                
            </div>
            }
        </div>
        </>
    );
}

export default Checkout