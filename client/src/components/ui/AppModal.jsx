import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function AppModal({ title, children, buttonText }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modalCustomStyles = `
    .modal-90w {
      max-width: 60%;
      width: auto;
    }
  `;

  const moreDetailsButtonStyle = {
    backgroundColor: "#00336c", 
    borderColor: "#00336c", 
    color: "#FFFFFF"
  };

  return (
    <>
      <Button style={{ ...moreDetailsButtonStyle, marginTop: "10px" }} variant="primary" onClick={handleShow}>
        {buttonText}
      </Button>

      <style>{modalCustomStyles}</style>
      <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ lineHeight: "2", fontSize: "18px" }}>
          {children}
        </Modal.Body>
      </Modal>
    </>
  );
}
