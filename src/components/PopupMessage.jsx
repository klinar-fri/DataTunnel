import './PopupMessage.css';

function PopupMessage({ message }) {
  return (
    <div className="popup-container">
      <div className="popup">
        <p>{message}</p>
        <div className="loading-bar"></div>
      </div>
    </div>
  );
}

export default PopupMessage;
