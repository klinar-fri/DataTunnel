import './Pricing.css';
import { useNavigate } from 'react-router-dom';

function Pricing() {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    const handleGoToCheckout = () => {
        navigate('/checkout')
    }

    return(
        <>
        
        <div className="wrapEverything">
            <div className='titlePricing'>
                    <div className='arrowBackTwo' onClick={handleBackClick}> ← </div>
                    <div className="textTitle"><span className='fpart'>Security. Privacy. Freedom.</span>&nbsp;For everyone.</div>
            </div>
            <div className="pricingWrapper">
                <div className='secondArrow' onClick={handleBackClick}> ← </div>
                <div className="optionOne" onClick={handleGoToCheckout}>
                    <div className="planType">
                        <div className='planTypeTxt'>1-Month plan</div>
                        <div className="discountAmountOne">save 0%</div>
                    </div>
                    <div className='price'><span className='spanPrice'>9.99&nbsp;€</span>/month</div>
                    <div className='getDeal'>Get plan</div>
                    <div className="moneyBack">
                        <div className="el1">$</div>
                        <div className="el2">&nbsp;30-day money-back guarantee</div>
                    </div>
                </div>
                <div className="optionTwo" onClick={handleGoToCheckout}>
                    <div className="planType">
                        <div className='planTypeTxt'>2-Year plan</div>
                        <div className="discountAmount">save 50%</div>
                    </div>
                    <div className='price'><span className='spanPrice'>4.99&nbsp;€</span>/month</div>
                    <div className='getDeal'>Get plan</div>
                    <div className="moneyBack">
                        <div className="el1">$</div>
                        <div className="el2">&nbsp;30-day money-back guarantee</div>
                    </div>
                </div>
                <div className="optionThree" onClick={handleGoToCheckout}>
                    <div className="planType">
                        <div className='planTypeTxt'>1-Year plan</div>
                        <div className="discountAmount">save 40%</div>
                    </div>
                    <div className='price'><span className='spanPrice'>5.99&nbsp;€</span>/month</div>
                    <div className='getDeal'>Get plan</div>
                    <div className="moneyBack">
                        <div className="el1">$</div>
                        <div className="el2">&nbsp;30-day money-back guarantee</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Pricing;