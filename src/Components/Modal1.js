import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap';
function Modal1() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button type="button" class="btn btn-danger btn-sm mt-1 mx-1" onClick={handleShow}>Sign Up</button>
      <Modal show={show} id="myModal" onHide={handleClose} class="modal ">
        <div>
          <form action="https://192.168.1.8/PHP/signup.php" method="post">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content " >
                <Modal.Header>
                  <div class="modal-header w-100 mx-auto">
                    <h4 class="modal-title text-danger text-start">Create Accout</h4>
                    <button type="button" class="btn-close" onClick={handleClose}></button>
                  </div>
                </Modal.Header>
                <Modal.Body>
                  <div class="modal-body">
                    <div class="form-floating mt-3 mb-3">
                      <input type="text" class="form-control" id="name" placeholder="Enter your name" name="name" required />
                      <label for="name">Enter Your Name</label>
                    </div>
                    <div class="form-floating mb-3 mt-3">
                      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required />
                      <label for="email">Enter Your Email</label>
                    </div>
                    <div class="form-floating mt-3 mb-3">
                      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
                      <label for="pwd">Password</label>
                    </div>
                    <p class="float-start text-primary">Already have an Accout?</p>
                    <p class="float-end text-primary">login?</p>
                    <button class="btn btn-danger w-100" type="submit">Sign Up</button>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" onClick={handleClose}>Close</button>
                  </div>
                </Modal.Footer>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}
export default Modal1;
