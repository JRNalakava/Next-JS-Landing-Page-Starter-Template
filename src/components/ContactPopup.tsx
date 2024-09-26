import React, { useState } from 'react';
import Modal from 'react-modal';
import ContactForm from './ContactForm';

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Contact Us</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <ContactForm />
      </Modal>
    </div>
  );
};

export default ContactPopup;