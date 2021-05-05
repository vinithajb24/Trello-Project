import React from "react";
import "./Modal.css";
import { useModal } from "./useModal";

const ModalApp = React.memo(() => {
  const { show, RenderModal } = useModal();
  return (
    <div>
      <div>
        <p>some content...</p>
        <button onClick={show}>MODAL anzeigen!</button>
        <RenderModal>
          <p>
            This is stuff which will be rendered inside our 'modal-root' div.
          </p>
        </RenderModal>
      </div>
      <div id="modal-root" />
    </div>
  );
});

export default ModalApp;
