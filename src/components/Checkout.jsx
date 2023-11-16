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
    const [addressName, setAddressName] = useState("");
    const [city, setCity] = useState("");
    const [stateName, setStateName] = useState("");
    const [postCode, setPostCode] = useState("");
    const [country, setCountry] = useState("");
    const [stageGood, setStageGood] = useState("");
    const [stageOneChecker, setStageOneChecker] = useState(false);

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
          case "addressName":
            setAddressName(value);
            break;
          case "city":
            setCity(value);
            break;
          case "stateName":
            setStateName(value);
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
        const allFieldsFilled = firstName && lastName && addressName && city && stateName && postCode && country;
    
        setStageGood(allFieldsFilled ? 'filled' : '');
        if(allFieldsFilled){
            setStageOneChecker(true);
        }

    };

    // stage2

    const [showStage2, setShowStage2] = useState(false);

    const[nameCard, setNameCard] = useState("");
    const[cardNum, setCardNum] = useState("");
    const[expDate, setExpDate] = useState("");
    const[cvv, setCvv] = useState("");
    const [stageTwoGood, setStageTwoGood] = useState("");
    const [stageTwoChecker, setStageTwoChecker] = useState(false);

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
        if(allFieldsFilled){
            setStageTwoChecker(true);
        }
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
    const [stageThreeChecker, setStageThreeChecker] = useState(false);


    const handleShowStage3 = () => {
        setShowStage1(false);
        setShowStage2(false);
        setShowStage3(true);
        if(stageOneChecker === true && stageTwoChecker === true ){
            setStageThreeChecker(true);
            setStageThreeGood('filled');
        }
    }

    const handleGoToStage1 = () => {
        setShowStage1(true);
        setShowStage2(false);
        setShowStage3(false);
    }

    const handleGoToStage3 = () => {
        setShowStage1(false)
        setShowStage2(false);
        setShowStage3(true);
    }

    const handleGoToStage2 = () => {
        setShowStage1(false);
        setShowStage2(true);
        setShowStage3(false);
    }


    // sending & auth

    const handleSendData = () => {
        navigate('/login', {
            state: {
                fromCheckout: true,
                planType: planType,
                discountAmount: discountAmount,
                price: price,
                firstName: firstName,
                lastName: lastName,
                addressName: addressName,
                city: city,
                stateName: stateName,
                postCode: postCode,
                country: country,
                nameCard: nameCard,
                cardNum: cardNum,
                expDate: expDate,
                cvv: cvv
            }
        });
    };
    
    

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
                        <div className="stage2" onClick={handleGoToStage2}>2. Payment details</div>
                        <div className="stage3" onClick={handleGoToStage3}>3. Review order</div>
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
                            <input className="emailBoxTwo" type="txt" name='addressName' value={addressName} onChange={handleInputChange} onBlur={handleInputBlur}/>
                        </div>
                    </div>
                    <div className="fullName">
                        <div className="emailClass">
                            <label id='emailBoxTwo'>City</label>
                            <input className="emailBoxTwo" type="txt" name='city' value={city} onChange={handleInputChange} onBlur={handleInputBlur}/>
                        </div>
                        <div className="emailClass">
                            <label id='emailBoxTwo'>State/Province/Region</label>
                            <input className="emailBoxTwo" type="txt" name='stateName' value={stateName} onChange={handleInputChange} onBlur={handleInputBlur}/>
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
                    <div className={`stage1 ${stageGood ? 'filled' : ''}`} onClick={handleGoToStage1}>1. Billing info</div>
                    <div className={`stage2 ${stageTwoGood ? 'filled' : ''}`}>2. Payment details</div>
                    <div className="stage3" onClick={handleGoToStage3}>3. Review order</div>
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
                    <div className={`stage1 ${stageGood ? 'filled' : ''}`} onClick={handleGoToStage1}>1. Billing info</div>
                    <div className={`stage2 ${stageTwoGood ? 'filled' : ''}`} onClick={handleGoToStage2}>2. Payment details</div>
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
                            <div className="co">Address: {addressName}</div>
                            <div className="co">City: {city}</div>
                        </div>
                    </div>
                    <div className="selectedPlan">
                        <div className="planHeading"></div>
                        <div className="passedContent">
                            <div id='empty'>&nbsp;</div>
                            <div className="co">State/Province/Region: {stateName}</div>
                            <div className="co">Zip/Postal code: {postCode}</div>
                            <div className="co">Country: {country}</div>
                        </div>
                    </div>  
                </div>

                <div className='log'>
                    <button className='loginBtnTwo' style={{ marginBottom: '20px' }} onClick={handleSendData}>Confirm purchase</button>
                </div>
                
            </div>
            }
        </div>
        </>
    );
}

export default Checkout