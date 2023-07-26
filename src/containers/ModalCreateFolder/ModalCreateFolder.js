import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ModalCreateFolder = ({ open }) => {
  const [folderName, setFolderName] = useState(''); // State to hold the folder name

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log("Folder Name:", folderName); // Log the folder name entered by the user
    // You can perform further actions here, like creating and saving the folder.
  }

  return (
    <Modal
      open={open}
      title="Criar pasta"
      controls={
        [
          {
            label: "Criar e salvar",
            loadingLabel: "Criando",
            variant: "secondary",
            loading: false,
            type: 'submit',
            form: 'form-criar-pasta',
            onClick: handleSubmit // Use the handleSubmit function on button click
          }
        ]
      }
    >
      <Form onSubmit={handleSubmit} id="form-criar-pasta">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome da Pasta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: Matemática"
            value={folderName} // Bind the input field's value to the state
            onChange={(e) => setFolderName(e.target.value)} // Update the state when the input changes
          />
        </Form.Group>
      </Form>
    </Modal>
  );
}

export default ModalCreateFolder;
