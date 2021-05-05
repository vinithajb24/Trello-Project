import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

type Props = {
  children: React.ReactChild;
  closeModal: () => void;
};

const Modal = React.memo(({ children, closeModal }: Props) => {
  const domEl = document.getElementById("modal-root");

  if (!domEl) return null;

  return ReactDOM.createPortal(
    <div>
      <div className="modal">
        <div className="modal_inner">
          <button className="modal_btn" onClick={closeModal}>
            X
          </button>
          {children}
        </div>
      </div>
    </div>,
    domEl
  );
});

export default Modal;
