import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "react-bootstrap/Modal";

const CardModal = (props) => {
  const [show, setShow] = useState(false);

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Custom Modal Styling
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae</p>
      </Modal.Body>
    </Modal>
  );
};

CardModal.propTypes = {
  CardModal: PropTypes.object,
  setShow: PropTypes.func,
};
export default CardModal;
