import './AddressTaken.css';

function AddressTaken({ message }) {
  return (
    <div className="addressTakenWrapper">
      <div className="addressTaken">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default AddressTaken;
