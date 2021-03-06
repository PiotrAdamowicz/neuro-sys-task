import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Snackbar.scss";

function Snackbar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="submitBtn mt-2 mb-4 font-weight-bold"
        size="lg"
        onClick={handleShow}
        variant="outline-danger"
        type="submit"
      >
        SUBMIT
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="text-secondary bg-primary" closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-center mx-auto"
          >
            Your message was successfully sent.
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
}
export default Snackbar;
