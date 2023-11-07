import './GoodMessage.css';

function GoodMessage({ message }) {
  return (
    <div className="goodMsgWrap">
      <div className="goodMsg">
        <p>{message}</p>
        <div className="loading-barTwo"></div>
      </div>
    </div>
  );
}

export default GoodMessage;
