import { useState } from "react";
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

  return (
    <>
      <Button variant="primary" className="mb-2" onClick={handleShow}>
        {buttonText}
      </Button>

      <style>{modalCustomStyles}</style>
      <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}

