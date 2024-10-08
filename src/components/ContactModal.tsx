import { Button, Modal, ModalContent, useDisclosure } from '@nextui-org/react';
import React from 'react';

import { ContactForm } from './form';

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Contact Us
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>{ContactForm}</ModalContent>
      </Modal>
    </>
  );
}
