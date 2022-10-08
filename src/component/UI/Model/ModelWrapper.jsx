import React, { useState } from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
// NOTICE
// Modal is brought in with it's own trigger, so import the component where you want the trigger to be.

const ModelWrapper = (props) => {
    const {
        buttonText,
        title,
        actionButtonText,
        cancelButtonText,
        children,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const alertshow = () => {
        alert("button clicked");
    };

    const closeBtn = (
        <button className="btn btn-primary" onClick={toggle}>
            &times;
        </button>
    );

    return (
        <div>
            <Button color="light" onClick={toggle}>{buttonText}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader className="border-0" toggle={toggle} close={closeBtn}>
                    {title}
                </ModalHeader>
                <div className="card border-0 shadow-lg">
                    <div className="card-body p-5">
                        {children}
                    </div>
                    {/* <div className="card-footer py-3 border-0">
              <div className="text-center">
                Don't have an account? <a href="register.html" className="text-dark">Create One</a>
              </div>
            </div> */}
                </div>
            </Modal>
        </div>
    );
};

export default ModelWrapper;