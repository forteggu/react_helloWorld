import { useState } from "react";
import Modal from "./Modal";
import BackDrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  let deleteHandler = () => {
    setModalIsOpen(true);
  };

  let hideHandler = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal id={props.text} hide={hideHandler} />}
      {modalIsOpen && <BackDrop hide={hideHandler} />}
    </div>
  );
}

export default Todo;
