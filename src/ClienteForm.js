// ClienteForm.js
import React, { useState } from 'react';
import { Form} from 'react-bootstrap';
import { TextField, Container, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Col } from 'react-bootstrap';
// Define um tema personalizado do Material Design
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Cor principal para botões e elementos de destaque
    },
    secondary: {
      main: '#f50057', // Cor secundária para botões de ação secundária
    },
  },
});

const ClienteForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [coordenadaX, setCoordenadaX] = useState('');
  const [coordenadaY, setCoordenadaY] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário para a API
    fetch('http://localhost:3000/api/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        email,
        telefone,
        coordenada_x: coordenadaX,
        coordenada_y: coordenadaY,
      }),
    })
      .then(response => response.json())
      .then(data => console.log('Cliente cadastrado:', data))
      .catch(error => console.error('Erro ao cadastrar cliente:', error));
  };

  return (
    <div>
      <h1>Cadastro de Cliente</h1>
      <Form class="col-md-6 form">
        <Col xs={12} md={6}>
          <Form.Group controlId="formBasicNome" >
            <Form.Label>Nome</Form.Label>
            <TextField type="text" variant="outlined" />
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <TextField type="email" variant="outlined" />
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group controlId="formBasicTelefone">
            <Form.Label>Telefone</Form.Label>
            <TextField type="tel" variant="outlined" />
          </Form.Group>
        </Col>
        {/* Adicionar campos para coordenadas X e Y, se necessário */}
        
        <Button variant="primary" type="submit">
          Cadastrar Cliente
        </Button>
      </Form>
    </div>
  );
};

export default ClienteForm;
