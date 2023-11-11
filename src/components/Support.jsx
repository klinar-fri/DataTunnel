import './Support.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Support() {
  const navigate = useNavigate();

  const handleGoBackToHome = () => {
    navigate("/");
  }

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    if (event.target.value.length <= 550) {
      setInputValue(event.target.value);
    }
  };

  const handleSendData = () => {
    navigate('/login', { state: { fromSupport: true, message: inputValue } });
  };



  return (
    <>
      <div className="suppWrapper">
        <div className='titleSupp'>
          <div className='arrowBackTwoSupp' onClick={handleGoBackToHome}> ← </div>
          <div className="textTitleSupp">Support center</div>
          <div className="instruction">Write your message to support in the box below:</div>
        </div>
        <textarea name="inputArea" onChange={handleInputChange} value={inputValue} cols="50" rows="15" maxLength={550} className="inputArea"></textarea>
        <div className='charsRemaining'>Characters remaining: {550 - inputValue.length}</div>
        <div className="sendData" onClick={handleSendData}>Send</div>
      </div>
    </>
  );
}

export default Support;
