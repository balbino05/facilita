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
      <form onSubmit={handleSubmit}>
      <Col xs={12} md={6}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
        </label>
      </Col>
      <Col xs={12} md={6}>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
      </Col>
      <Col xs={12} md={6}>
        <label>
          Telefone:
          <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)} />
        </label>
      </Col>
      <Col xs={12} md={6}>
        <label>
          Coordenada X:
          <input type="number" value={coordenadaX} onChange={e => setCoordenadaX(e.target.value)} />
        </label>
      </Col>
      <Col xs={12} md={6}>
        <label>
          Coordenada Y:
          <input type="number" value={coordenadaY} onChange={e => setCoordenadaY(e.target.value)} />
        </label>
      </Col>
        <button type="submit">Cadastrar Cliente</button>
      </form>
    </div>
  );
};

export default ClienteForm;
