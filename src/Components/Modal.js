//import Backdrop from './Backdrop'

function Modal(props) {
  let fCloseAccept = () => {
    props.hide();
    alert("Accepted :" + props.id);
  };
  let fClose = () => {
    props.hide();
    alert("Closed: " + props.id);
  };
  return (
    <div className="modal">
      <h2>Are you sure?</h2>
      <button className="btn btn--alt" onClick={fClose}>
        Cancel
      </button>
      <button className="btn" onClick={fCloseAccept}>
        {" "}
        Confirm{" "}
      </button>
    </div>
  );
}

export default Modal;
