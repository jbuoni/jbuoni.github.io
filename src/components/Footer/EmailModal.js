import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function EmailModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Contact Us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="your-email">
                <span className="email-message">Email Address:</span>
                <input type="email" id="defaultForm-email" className="form-control validate" />
            </div>
            <div className="text-area-container">
                <span className="email-message">Message:</span>
                <textarea className="form-control validate" rows="4" cols="50"/>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={props.onHide}>Send Email</Button>
            <Button variant="secondary"  onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }