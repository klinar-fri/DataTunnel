import './Support.css';
import { useNavigate } from 'react-router-dom';

function Support () {

    const navigate = useNavigate();

    const handleGoBackToHome = () => {
        navigate("/")
    }


    return(
        <> 
        <div className="suppWrapper"> 
            <div className='titleSupp'>
                    <div className='arrowBackTwoSupp' onClick={handleGoBackToHome}> ← </div>
                    <div className="textTitleSupp">Support center</div>
                    <div className="instruction">Write your message to support in the box below:</div>
            </div>
            <textarea name="inputArea" cols="50" rows="15" className="inputArea"></textarea>
            <div className="sendData">Send</div>
        </div>
    </>
    );
}

export default Support;