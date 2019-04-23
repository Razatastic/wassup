import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";

export default function StatusModal({ className, buttonClicked, closeModal }) {
  const [modal, setModal] = useState(buttonClicked);
  useEffect(() => {
    setModal(buttonClicked);
  });
  return (
    <Modal
      isOpen={modal}
      toggle={closeModal}
      className={className}
      unmountOnClose={true}
      centered={true}
    >
      <ModalHeader toggle={closeModal}>What's on your mind?</ModalHeader>
      <ModalBody>
        <Input
          type="textarea"
          placeholder="Just bought tickets to the Bruno Mars concert. Hype!"
          rows={5}
        />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={closeModal}>
          Post
        </Button>
        <Button color="secondary" onClick={closeModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
