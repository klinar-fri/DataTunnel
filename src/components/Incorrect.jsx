import './Incorrect.css';

function Incorrect({ message, onClose}) {
  return (
    <div className="incorrectWrapper">
      <div className="incorrect">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Incorrect;
