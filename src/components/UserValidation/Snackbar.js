import React from "react";
import Modal from "react-bootstrap/Modal";

function Snackbar(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your message was successfully sent.
        </Modal.Title>
      </Modal.Header>
    </Modal>
  );
}
export default Snackbar;
